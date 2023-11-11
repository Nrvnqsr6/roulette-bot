import { Animelist } from 'src/enums/animelists';

export class CreateTelegramUserDto {
    readonly TelegramUserID: number;

    readonly UserListSource: Animelist;

    readonly UserListID: string;

    // readonly RecivedAnime?: number;

    // readonly GivenAnime?: number;

    readonly isWaitingForAnime: boolean;

    constructor(
        telegramUserId: number,
        userListSource: Animelist,
        userListID: string,
    ) {
        this.TelegramUserID = telegramUserId;
        this.UserListSource = userListSource;
        this.UserListID = userListID;
        this.isWaitingForAnime = false;
    }
}
