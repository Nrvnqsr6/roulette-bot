import { Injectable } from '@nestjs/common';
import { Animelist } from 'src/enums/animelists';
import { iAnimeAPI } from 'src/interfaces/animelist-api';
import { MalAPI } from './mal.api';
import { TelegramUser } from 'src/telegram-user/entities/telegram-user.entity';

@Injectable()
export class AnimelistApiService {
    private apiWrapper: iAnimeAPI;
    // constructor();
    GetUserAnimeList(user: TelegramUser) {
        this.setAnimeList(user.UserListSource);
        return this.apiWrapper.getUserAnimeList(user.UserListID);
    }

    private setAnimeList(userListSource) {
        switch (userListSource) {
            case Animelist.Mal:
                this.apiWrapper = new MalAPI();
                break;
        }
    }
}
