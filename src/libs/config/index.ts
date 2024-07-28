import { IConfiguration } from "@/models/config";

const CONFIG: IConfiguration = {
  MODE: "dev",
  MOCK_API: true,
  // BANNER_APPEAR_DURATION: 4500 //TODO: Not being used yet
  BACKEND_URL: "http://localhost:3001/api/",
  MOCK_BACKEND_URL: "http://localhost:3000/api/",
  PASSWORD_SALT: 10,
};

export default CONFIG;
