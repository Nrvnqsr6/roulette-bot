import { PartialType } from '@nestjs/mapped-types';
import { CreateTelegramUserDto } from './create-telegram-user.dto';
import { Animelist } from 'src/enums/animelists';
import { AnimeRecomendation } from 'src/anime-recomendation/entity/anime-recomendation.entity';

export class UpdateTelegramUserDto extends PartialType(CreateTelegramUserDto) {
    UserListSource?: Animelist;

    UserListID?: string;

    // @isExisitingAnime
    RecivedAnime?: AnimeRecomendation;

    GivenAnime?: AnimeRecomendation;

    isWaitingForAnime?: boolean;
}
