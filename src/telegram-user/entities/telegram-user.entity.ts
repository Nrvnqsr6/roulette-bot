import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    DataType,
    Unique,
} from 'sequelize-typescript';
import { Animelist } from 'src/enums/animelists';

@Table({
    timestamps: false,
    tableName: 'telegram_users',
})
export class TelegramUser extends Model<TelegramUser> {
    @PrimaryKey
    @Column(DataType.STRING)
    TelegramUserID: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    UserListSource: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    UserListID: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    ReceivedAnime: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    GivenAnime: string;
}
