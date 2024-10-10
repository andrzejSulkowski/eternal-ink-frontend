import { IConfiguration } from "@/models/config";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const getPasswordSalt = (): number | undefined => {
  const salt = process.env.PASSWORD_SALT;
  if (!salt) {
    return undefined;
  }
  const parsedSalt = parseInt(salt, 10);
  if (isNaN(parsedSalt)) {
    console.error("Invalid password salt provided");
    return undefined;
  }
  return parsedSalt;
};

const getMode = (): "dev" | "prod" | undefined => {
  const mode = process.env.NEXT_PUBLIC_MODE;
  if (mode === "dev" || mode === "prod") {
    return mode;
  }
  if (!mode) console.error("No mode provided");
  else console.error("Invalid mode provided");
  return undefined;
};

const CONFIG: IConfiguration = {
  MODE: getMode() ?? "dev",
  MOCK_API: process.env.NEXT_PUBLIC_MOCK_API === "true",
  BACKEND_URL:
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3001/api/",
  MOCK_BACKEND_URL:
    process.env.NEXT_PUBLIC_MOCK_BACKEND_URL ?? "http://localhost:3000/api/",
  PASSWORD_SALT: getPasswordSalt() ?? 10,
  VERSION: process.env.NEXT_PUBLIC_VERSION ?? "0.0.0",
};

export default CONFIG;
