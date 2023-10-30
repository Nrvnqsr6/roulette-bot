import axios from 'axios';
import { iAnimeAPI } from 'src/interfaces/animelist-api';

export class MalAPI implements iAnimeAPI {
    private readonly url = 'http://api.myanimelist.net/v2';
    private readonly queryParams = {
        limit: 500,
        nsfw: true,
        status: 'completed',
    };
    private readonly headers = { 'X-MAL-CLIENT-ID': process.env.MAL_TOKEN };

    async getUserAnimeList(username: string) {
        return axios.get(`${this.url}/users/${username}/animelist`, {
            params: this.queryParams,
            headers: this.headers,
        });
    }
}
