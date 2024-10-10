export interface IConfiguration {
    MODE: 'dev' | 'prod';
    MOCK_API: boolean;
    BANNER_APPEAR_DURATION?: number;
    BACKEND_URL: string;
    MOCK_BACKEND_URL: string; // Our Next.js MOCK API's URL
    PASSWORD_SALT: number;
    VERSION: string
}