import {
    Model,
    Table,
    Column,
    AllowNull,
    DataType,
} from 'sequelize-typescript';

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

    @AllowNull(false)
    @Column(DataType.INTEGER)
    declare OwnerID: number;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    declare RecipientID: number;
}
