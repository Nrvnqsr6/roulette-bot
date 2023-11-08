import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AllowNull,
    DataType,
    Unique,
} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'telegram_users',
})
export class AnimeRecomendation extends Model<AnimeRecomendation> {
    @AllowNull(true)
    @Column(DataType.STRING)
    Anime: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    UsersDescription: string;
}
