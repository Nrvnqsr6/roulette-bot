import { Injectable } from '@nestjs/common';
import { Animelist } from 'src/enums/animelists';
import { iAnimeAPI } from 'src/interfaces/animelist-api';
import { MalAPI } from './mal.api';

@Injectable()
export class AnimelistApiService {
    private apiWrapper: iAnimeAPI;
    //constructor();
    GetUserAnimeList(userListID: number, userListSource: Animelist) {
        this.setAnimeList(userListSource);
        return this.apiWrapper.getUserAnimeList(userListID);
    }

    private setAnimeList(userListSource) {
        switch (userListSource) {
            case Animelist.Mal:
                this.apiWrapper = new MalAPI();
                break;
        }
    }
}
