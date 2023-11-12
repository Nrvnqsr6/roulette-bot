import {
    Model,
    Table,
    Column,
    AllowNull,
    DataType,
    HasOne,
} from 'sequelize-typescript';
import { TelegramUser } from 'src/telegram-user/entities/telegram-user.entity';

@Table({
    timestamps: false,
    tableName: 'anime_recomendation',
})
export class AnimeRecomendation extends Model<AnimeRecomendation> {
    @AllowNull(false)
    @Column(DataType.STRING)
    declare Anime: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare UsersDescription: string;

    @HasOne(() => TelegramUser, {
        foreignKey: 'ReceivedAnimeID',
        as: 'received',
    })
    declare Recipient: TelegramUser;

    @HasOne(() => TelegramUser, {
        foreignKey: 'GivenAnimeID',
        //as: 'given',
    })
    declare Owner: TelegramUser;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    declare Pending: boolean;

    // @AllowNull(false)
    // @Column(DataType.INTEGER)
    // declare OwnerID: number;

    // @AllowNull(true)
    // @Column(DataType.INTEGER)
    // declare RecipientID: number;
}
