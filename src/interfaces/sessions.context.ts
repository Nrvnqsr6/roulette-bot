import { Animelist } from 'src/enums/animelists';
import { Context as ContextTelegraf } from 'telegraf';

export interface Context extends ContextTelegraf {
    session: {
        animeSource: Animelist;
        animeSourceId: number;
    };
}
