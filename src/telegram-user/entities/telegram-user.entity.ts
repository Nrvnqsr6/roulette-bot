import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    DataType,
    Unique,
    HasOne,
    ForeignKey,
    BelongsTo,
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

    // @AllowNull(true)
    // @Unique(true)
    @ForeignKey(() => AnimeRecomendation)
    @Column(DataType.INTEGER)
    declare ReceivedAnimeID: number;

    @BelongsTo(() => AnimeRecomendation)
    declare ReceivedAnime: AnimeRecomendation;
    // @HasOne(() => AnimeRecomendation)
    // declare ReceivedAnime: AnimeRecomendation;

    // @AllowNull(true)
    // @Unique(true)
    @ForeignKey(() => AnimeRecomendation)
    @Column(DataType.INTEGER)
    declare GivenAnimeID: number;

    @BelongsTo(() => AnimeRecomendation)
    declare GivenAnime: AnimeRecomendation;

    // @HasOne(() => AnimeRecomendation)
    // declare GivenAnime: AnimeRecomendation;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    declare isWaitingForAnime: boolean;
}
