import RootLayout from "@/app/layout";

interface Props {
  children: React.ReactNode;
  pathname: string;
}

export default function Home({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RootLayout>{children}</RootLayout>
    </main>
  );
}
