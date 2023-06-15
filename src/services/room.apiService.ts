/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { ITokenResponse } from '../types/room.interface';

export const RoomApiService = {
    getToken: async (roomName: string, participantName: string): Promise<ITokenResponse> => {

        const response = await fetch('https://wilt-livekit.onrender.com/get-token', {
            method: 'POST',
            body: JSON.stringify({ roomName, participantName }),
            headers: {
                'content-type': 'application/json'
            }
        });

        return await response.json();
    }
}