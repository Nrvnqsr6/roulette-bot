import { Animelist } from 'src/enums/animelists';

export class CreateTelegramUserDto {
    readonly TelegramUserID: number;

    readonly UserListSource: Animelist;

    readonly UserListID: string;
}
