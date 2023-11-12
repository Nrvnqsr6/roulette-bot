import { Ctx, Message, On, Wizard, WizardStep } from 'nestjs-telegraf';
import { AnimeService } from 'src/anime-recomendation/anime.service';
import { CreateAnimeDto } from 'src/anime-recomendation/dto/create-anime.dto';
import { AnimeRecomendation } from 'src/anime-recomendation/entity/anime-recomendation.entity';
import { AnimeSuggestionService } from 'src/anime-suggestion/anime-suggestion.service';
import { UpdateTelegramUserDto } from 'src/telegram-user/dto/update-telegram-user.dto';
import { TelegramUser } from 'src/telegram-user/entities/telegram-user.entity';
import { TelegramUserService } from 'src/telegram-user/telegram-user.service';
import { Scenes } from 'telegraf';

@Wizard('recomendation-making')
export class RecommendationWizard {
    constructor(
        private readonly telegramUserService: TelegramUserService,
        private readonly animeSuggestionService: AnimeSuggestionService,
        private readonly animeService: AnimeService,
    ) {}
    @WizardStep(1)
    async onEnter(@Ctx() ctx: Scenes.WizardContext): Promise<string> {
        ctx.wizard.next();
        return 'Ссылка или название аниме на сервисе, которым вы пользуетесь';
    }

    @On('text')
    @WizardStep(2)
    async onAnime(
        @Ctx() ctx: Scenes.WizardContext,
        @Message() msg: { text: string },
    ): Promise<string> {
        if (!this.verifyExisting(msg.text)) {
            ctx.wizard.selectStep(2);
            return (
                'Не получилось найти ваше аниме. Попробуйте еще раз.' +
                ' Если вы отправили название, то используйте основное название из url'
            );
        }
        ctx.wizard.state['title'] = msg.text;
        ctx.wizard.next();
        return (
            'Оставьте ваш коментарий по поводу этого аниме для того, кто получит вашу рекомендацию.' +
            ' Если не хотите этого делать, то введите "пропустить".'
        );
    }

    @On('text')
    @WizardStep(3)
    async onDescription(
        @Ctx() ctx: Scenes.WizardContext,
        @Message() msg: { text: string },
    ): Promise<string> {
        if (!this.verifyExisting(msg.text)) {
            ctx.wizard.selectStep(2);
            return 'Не получилось найти ваше аниме. Попробуйте еще раз.';
        }
        ctx.wizard.state['description'] = msg.text;
        this.createAnime(
            ctx.wizard.state['title'],
            ctx.wizard.state['description'],
            ctx.from.id,
        );
        ctx.scene.leave();
        return 'Успешно установлено';
        // this.updateUser(ctx.from.id, ctx.session['anime'])
        //     .then((user) => {
        //         console.log(
        //             `anime changed for ${user.TelegramUserID} with ${user.GivenAnime}`,
        //         );
        //         //ctx.session['user'] = user;
        //         this.suggestAnime(user);
        //         ctx.scene.leave();
        //         return 'Успешно добавлено';
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         ctx.scene.leave();
        //         return 'Внутренняя ошибка, попробуйте позже';
        //     });
    }

    // private async suggestAnime(user: TelegramUser) {
    //     this.animeSuggestionService.SuggestOnUserRequest(user);
    // }

    private async createAnime(
        title: string,
        description: string,
        owner: number,
    ) {
        const animeDto = new CreateAnimeDto(title, description);
        const anime = await this.animeService.create(animeDto);
        this.updateUser(owner, anime);
    }

    private async updateUser(
        userID: number,
        anime: AnimeRecomendation,
    ) {
        const updateTelegramUserDto = new UpdateTelegramUserDto();
        updateTelegramUserDto.GivenAnimeID = anime.id;
        const user = await this.telegramUserService.update(
            userID,
            updateTelegramUserDto,
        );
        this.animeSuggestionService.SuggestOnUserRequest(user);
    }

    private verifyExisting(anime: string): boolean {
        if (anime) {
            return true;
        }
        return false;
    }
}
