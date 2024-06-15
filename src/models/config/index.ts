export interface IConfiguration {
    MODE: 'dev' | 'prod';
    MOCK_API: boolean;
    BANNER_APPEAR_DURATION?: number;
    BACKEND_URL: string;
    PASSWORD_SALT: number;
}