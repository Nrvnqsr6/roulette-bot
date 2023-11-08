export class CreateAnimeDto {
    readonly Anime: string;

    readonly UsersDescription: string;

    constructor(Anime: string, UsersDescription: string) {
        this.Anime = Anime;
        this.UsersDescription = UsersDescription;
    }
}
