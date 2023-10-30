import { iAnimeAPI } from "src/interfaces/animelist-api";

class MalAPIWrapper implements iAnimeAPI{
    private readonly url = "http://api.myanimelist.net/v2"
    private readonly baseQueryParams: {'limit': 500, 'nsfw': true, 'status': 'completed'}
    private readonly baseHeaders: 

}
