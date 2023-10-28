import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    DataType,
} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'telegram_users',
})
export class TelegramUser extends Model {
    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.STRING)
    TelegramUserID: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    UserList: string;

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
