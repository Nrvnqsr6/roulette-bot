import { PartialType } from '@nestjs/mapped-types';
import { CreateTelegramUserDto } from './create-telegram-user.dto';
import { Animelist } from 'src/enums/animelists';

export class UpdateTelegramUserDto extends PartialType(CreateTelegramUserDto) {
    UserListSource?: Animelist;

    UserListID?: string;

    // @isExisitingAnime
    RecivedAnime?: string;

    GivenAnime?: string;
}
