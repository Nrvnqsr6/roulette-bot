import { Injectable } from '@nestjs/common';
import { Ctx } from 'nestjs-telegraf';
import { AnimeRecomendation } from 'src/anime-recomendation/entity/anime-recomendation.entity';
import { AnimelistApiService } from 'src/animelist-api/animelist-api.service';
import { iAnimeAPI } from 'src/interfaces/animelist-api';
import { TelegramUser } from 'src/telegram-user/entities/telegram-user.entity';
import { Context } from 'telegraf';

@Injectable()
export class AnimeSuggestionService {
    constructor(private readonly animelist: AnimelistApiService) {}

    async SuggestOnUserRequest(user: TelegramUser) {
        const userList = await this.animelist.GetUserAnimeList(user);
        if (userList.status != 200)
            return 'Ошибка доступа к api вашего сервиса, попробуйте позже';
        const anime = this.extractAnime(userList);
        const pendingAnime = this.getAllPendingAnime();
        const found = pendingAnime.some((val) => anime.includes(val));
    }



    SuggestAnimeOnUserRecommendation(anime: AnimeRecomendation){

    }

    RandomAnimeInPremadeGroup(
        anime: AnimeRecomendation[],
        users: TelegramUser[],
    ){

    }

    RandomInPremadeWithIgnoringWatched(anime: AnimeRecomendation[]){

    }

    private getAllPendingAnime() {
        return ['qwe', 'qwe'];
    }

    private extractAnime(userList): string[] {
        const data = userList.data.data;
        return data.map(({ node }) => node.title);
    }
}
