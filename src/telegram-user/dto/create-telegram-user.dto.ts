import { Animelist } from 'src/enums/animelists';

export class CreateTelegramUserDto {
    readonly TelegramUserID: number;

    readonly UserListSource: Animelist;

    readonly UserListID: string;

    readonly RecivedAnime?: string;

    readonly GivenAnime?: string;

    constructor(
        telegramUserId: number,
        userListSource: Animelist,
        userListID: string,
    ) {
        this.TelegramUserID = telegramUserId;
        this.UserListSource = userListSource;
        this.UserListID = userListID;
    }
}
