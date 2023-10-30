import { IsInt } from 'sequelize-typescript';
import { Animelist } from 'src/enums/animelists';

export class CreateTelegramUserDto {
    @IsInt
    readonly TelegramUserID: number;

    readonly UserListSource: Animelist;

    readonly UserListID: string;

    readonly RecivedAnime?: string;

    readonly GivenAnime?: string;
}
