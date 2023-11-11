import { MaxLength, MinLength } from 'class-validator';

export class CreateAnimeDto {
    readonly Anime: string;

    // @MinLength(2)
    // @MaxLength(200)
    readonly UsersDescription?: string;

    readonly OwnerID: number;

    constructor(Anime: string, OwnerId: number, UsersDescription?: string) {
        this.Anime = Anime;
        this.OwnerID = OwnerId;
        this.UsersDescription = UsersDescription;
    }
}
