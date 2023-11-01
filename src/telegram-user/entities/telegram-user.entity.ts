import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    DataType,
} from 'sequelize-typescript';
import { Animelist } from 'src/enums/animelists';

@Table({
    timestamps: false,
    tableName: 'telegram_users',
})
export class TelegramUser extends Model {

    @PrimaryKey
    @Column(DataType.INTEGER)
    TelegramUserID: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    UserListSource: Animelist;

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
