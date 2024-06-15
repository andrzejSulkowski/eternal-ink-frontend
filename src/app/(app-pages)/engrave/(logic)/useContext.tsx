'use client';
import {
  EngravingState,
  TxStatus,
  EngravingContextType,
} from "@/models/transaction";
import { createContext, useContext, useState } from "react";

const defaultEngravingState: EngravingState = {
  address: "",
  fees: 0,
  message: "",
  isPublic: false,
  isEncrypted: false,
  state: TxStatus.WaitingForFunds,
};

const EngravingContext = createContext<EngravingContextType>({
  engravingData: defaultEngravingState,
  setEngravingData: () => {},
});

const useEngraving = () => useContext(EngravingContext);

export const EngravingProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [engravingData, setEngravingData] = useState<EngravingState | null>(null);

  return (
    <EngravingContext.Provider value={{ engravingData, setEngravingData }}>
      {children}
    </EngravingContext.Provider>
  );
};

export { EngravingContext, useEngraving };
export type { EngravingState };
