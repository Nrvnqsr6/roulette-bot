import { Animelist } from 'src/enums/animelists';

export class CreateTelegramUserDto {
    TelegramUserID: number;

    UserListSource: Animelist;

    UserListID: string;
}
