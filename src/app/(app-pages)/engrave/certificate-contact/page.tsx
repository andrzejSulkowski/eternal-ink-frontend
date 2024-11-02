"use client";
import React, { useCallback, useEffect, useState } from "react";
import { classNames } from "@/utils/className";
import Label from "@/components/1.atoms/Tag/Tag";
import Background from "@/components/Svgs/bg/1/Background";
import Input from "@/components/1.atoms/Input/Input";
import Button from "@/components/1.atoms/Button/Button";
import ThreeStars from "@/components/Svgs/Plus";
import Link from "next/link";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import { useRouter } from "next/navigation";
import { useEngraving } from "@/app/(app-pages)/engrave/(logic)/useContext";
import { TxStatus } from "@/models";
import { startEngraving } from "@/app/(app-pages)/engrave/(logic)/api";
import api from "@/libs/api/transaction";
import { PostConsent } from "@/libs/api/models";

function CertificateContactPage() {
  const [email, setEmail] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [allowContact, setAllowContact] = useState(false);
  const { engravingData, setEngravingData } = useEngraving();
  const router = useRouter();
  const banner = useBanner();

  useEffect(() => {
    if (!engravingData) {
      router.push("/engrave");
    } else if (
      engravingData.state === TxStatus.Finalized ||
      engravingData.state === TxStatus.Engraved
    ) {
      router.push("/engrave/success");
    }
  }, [engravingData, router]);

  const isEmailValid = useCallback(
    (email: string) => /^\S+@\S+\.\S+$/.test(email),
    []
  );

  const engrave = useCallback(async () => {
    if (!engravingData || !engravingData.temp) {
      banner.showBanner("No engraving data found");
      return null;
    }

    const { file, password, toggleKey } = engravingData.temp;

    const response = await startEngraving(
      engravingData.message,
      file,
      password,
      toggleKey,
      banner
    );

    if (response?.ok && response.data) {
      const updatedEngravingData = {
        ...engravingData,
        address: response.data.address,
        fees: response.data.fees,
      };
      setEngravingData(updatedEngravingData);
      return updatedEngravingData;
    } else {
      banner.showBanner("Error starting engraving", { danger: true });
      return null;
    }
  }, [banner, engravingData, setEngravingData]);

  const sendConsent = useCallback(
    async (
      id: string,
      email: string | undefined,
      termsAndConditions: true,
      consentToContact: boolean
    ) => {
      if (!id) {
        banner.showBanner("No transaction ID found");
        return;
      }
      if (consentToContact && !email) {
        banner.showBanner(
          "Please provide an email address to consent to contact"
        );
        return;
      }

      const consentData: PostConsent = email
        ? {
            id,
            email,
            terms_and_conditions: termsAndConditions,
            consent_to_contact: consentToContact,
          }
        : {
            id,
            email: undefined,
            terms_and_conditions: termsAndConditions,
            consent_to_contact: false,
          };

      try {
        await api.postConsent(consentData);
      } catch (error) {
        banner.showBanner("Failed to send consent data");
      }
    },
    [banner]
  );

  const acceptFlow = useCallback(async () => {
    if (!termsAndConditions) {
      banner.showBanner("Please agree to the Terms and Conditions");
      return;
    }

    if (!email || !isEmailValid(email)) {
      banner.showBanner("Please enter a valid email address");
      return;
    }

    const updatedEngravingData = await engrave();
    if (!updatedEngravingData || !updatedEngravingData.address) {
      banner.showBanner("No engraving data found");
      return;
    }

    await sendConsent(updatedEngravingData.address, email, true, allowContact);

    router.push(`/engrave/${updatedEngravingData.address}`);
  }, [
    termsAndConditions,
    email,
    isEmailValid,
    allowContact,
    engrave,
    sendConsent,
    banner,
    router,
  ]);

  const skipFlow = useCallback(async () => {
    if (!termsAndConditions) {
      banner.showBanner("Please agree to the Terms and Conditions");
      return;
    }

    const updatedEngravingData = await engrave();
    if (!updatedEngravingData || !updatedEngravingData.address) {
      banner.showBanner("No engraving data found");
      return;
    }

    await sendConsent(updatedEngravingData.address, undefined, true, false);

    router.push(`/engrave/${updatedEngravingData.address}`);
  }, [termsAndConditions, engrave, sendConsent, banner, router]);

  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative w-full">
            <h3 className="z-10">Receive your Certificate via Email</h3>
            <Label className="absolute -top-5 -right-24 w-auto h-8 text-sm -z-10">
              Contact
            </Label>
          </div>
          <span className="text-ei-primary-faded block mb-12">
            Where can we send you the certificate after a successful engraving?
          </span>
        </div>
        <div className="grid grid-rows-2 gap-14">
          <div className="flex flex-col gap-6">
            <Input
              className="md:!w-1/2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col gap-3 md:gap-1">
              <div className="md:text-nowrap flex">
                <Input
                  className="!w-auto !my-auto"
                  type="checkbox"
                  name="termsAndConditions"
                  value={termsAndConditions} // Use checked instead of value
                  onChange={(v) => setTermsAndConditions(v.target.checked)}
                />
                <label
                  htmlFor="termsAndConditions"
                  className="text-ei-primary-faded ml-4 cursor-pointer text-xl md:text-base"
                >
                  By providing your email, you agree to the{" "}
                  <Link
                    className="underline hover:text-ei-primary-dirty"
                    href="/terms-and-conditions"
                    target="_blank"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <div className="md:text-nowrap flex">
                <Input
                  className="!w-auto my-auto"
                  type="checkbox"
                  name="allowContact"
                  value={allowContact}
                  onChange={(v) => setAllowContact(v.target.checked)}
                />
                <label
                  htmlFor="allowContact"
                  className="text-ei-primary-faded ml-4 cursor-pointer text-xl md:text-base"
                >
                  You accept that we may contact you to ask about your
                  experience with the product.
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Button
              className="md:w-min h-18 md:h-10 border bg-white/80"
              onClick={skipFlow}
            >
              Skip
            </Button>
            <span className="text-ei-primary-faded text-xl md:text-base">
              or
            </span>
            <Button
              className="md:w-min h-18 md:h-10 border"
              onClick={acceptFlow}
            >
              Accept
              <ThreeStars className="max-w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateContactPage;
