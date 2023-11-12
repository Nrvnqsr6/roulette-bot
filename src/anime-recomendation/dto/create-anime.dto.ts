import { MaxLength, MinLength } from 'class-validator';

export class CreateAnimeDto {
    readonly Anime: string;

    // @MinLength(2)
    // @MaxLength(200)
    readonly UsersDescription?: string;

    readonly Pending: boolean;

    constructor(Anime: string, UsersDescription?: string) {
        this.Anime = Anime;
        this.UsersDescription = UsersDescription;
        this.Pending = true;
    }
}
