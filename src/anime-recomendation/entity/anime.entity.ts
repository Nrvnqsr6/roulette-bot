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
    @AllowNull(false)
    @Column(DataType.STRING)
    Anime: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    UsersDescription: string;
}
