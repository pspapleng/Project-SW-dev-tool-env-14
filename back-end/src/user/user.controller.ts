import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserSerivce } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userSerivce: UserSerivce) {}
@Get('/:id')
  async getUserById(@Param('id') id: string) {
  return 'getUserById '+id    
  }
}
