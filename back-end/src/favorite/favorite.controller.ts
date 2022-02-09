import { Controller } from '@nestjs/common';
import { FavoriteSerivce } from './favorite.service';

@Controller('/favorite')
export class FavoriteController {
  constructor(private favoriteSerivce: FavoriteSerivce) {}
}
