/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
export interface ITokenResponse {
    statusCode: number;
    payload: {
        token: string
    };
    success: boolean;
    message: string
}