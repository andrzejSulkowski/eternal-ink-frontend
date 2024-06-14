import { IConfiguration } from "@/models/config"

const CONFIG: IConfiguration = {
    MODE: 'dev',
    MOCK_API: true,
    // BANNER_APPEAR_DURATION: 4500 //TODO: Not being used yet
    BACKEND_URL: 'http://localhost:3001/api/v1/'
}

export default CONFIG;