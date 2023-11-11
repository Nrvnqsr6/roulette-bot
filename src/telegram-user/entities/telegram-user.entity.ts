import { NonAttribute } from '@sequelize/core';
import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    DataType,
    Unique,
    HasOne,
} from 'sequelize-typescript';
import { AnimeRecomendation } from 'src/anime-recomendation/entity/anime-recomendation.entity';

@Table({
    timestamps: false,
    tableName: 'telegram_users',
})
export class TelegramUser extends Model<TelegramUser, AnimeRecomendation> {
    @PrimaryKey
    @Column(DataType.INTEGER)
    declare TelegramUserID: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare UserListSource: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare UserListID: string;

    @AllowNull(true)
    @HasOne(() => AnimeRecomendation, {
        foreignKey: 'RecipientID',
        as: 'received',
    })
    @Column(DataType.INTEGER)
    declare ReceivedAnime: AnimeRecomendation;

    @AllowNull(true)
    @HasOne(() => AnimeRecomendation, {
        foreignKey: 'OwnerID',
        as: 'given',
    })
    @Column(DataType.INTEGER)
    declare GivenAnime: AnimeRecomendation;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    declare isWaitingForAnime: boolean;
}
