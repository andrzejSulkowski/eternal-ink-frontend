import { TxStatus } from "./state";

interface EngravingState {
  address: string;
  fees: number;
  message: string;
  isPublic: boolean;
  isEncrypted: boolean;
  state: TxStatus;
  txId: string | undefined;
}

interface EngravingContextType {
  engravingData: EngravingState | null;
  setEngravingData: (data: EngravingState | null) => void;
}

export type { EngravingState, EngravingContextType };
export { TxStatus };
