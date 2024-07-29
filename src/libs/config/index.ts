// config.ts

import { IConfiguration } from "@/models/config";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Function to get and parse the PASSWORD_SALT environment variable
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
  const mode = process.env.MODE;
  if (mode === "dev" || mode === "prod") {
    return mode;
  }
  if (!mode) console.error("No mode provided");
  else console.error("Invalid mode provided");
  return undefined;
};

// Configuration object
const CONFIG: IConfiguration = {
  MODE: getMode() ?? "dev", // Replace with process.env.MODE if this should be configurable
  MOCK_API: process.env.MOCK_API === "true", // Assuming MOCK_API is a boolean
  BACKEND_URL: process.env.BACKEND_URL ?? "http://localhost:3001/api/",
  MOCK_BACKEND_URL:
    process.env.MOCK_BACKEND_URL ?? "http://localhost:3000/api/",
  PASSWORD_SALT: getPasswordSalt() ?? 10,
};

export default CONFIG;
