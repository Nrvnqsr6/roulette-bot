import { PartialType } from '@nestjs/mapped-types';
import { CreateTelegramUserDto } from './create-telegram-user.dto';
import { IsInt } from 'sequelize-typescript';
import { Animelist } from 'src/enums/animelists';

export class UpdateTelegramUserDto extends PartialType(CreateTelegramUserDto) {
    readonly UserListSource?: Animelist;

    readonly UserListID?: string;

    //@isExisitingAnime
    readonly RecivedAnime?: string;

    readonly GivenAnime?: string;
}
