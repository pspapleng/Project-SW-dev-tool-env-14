import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FavoriteSerivce } from './favorite.service';

@Controller('/favorite')
export class FavoriteController {
  constructor(private favoriteSerivce: FavoriteSerivce) {}
@Get('/:id')
async getFavoriteByUserId(@Param('id') id: string) {
  return 'getFavoriteByUserId '+id    
  }
@Post()
async createFavorite() {
    return 'createFavorite'    
  }
@Delete('/:id')
async deleteFavoriteById(@Param('id') id: string) {
  return 'deleteFavoriteById '+id    
  }
}
