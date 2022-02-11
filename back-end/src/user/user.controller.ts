import { UserSerivce } from './user.service';
@Controller('/user')
export class UserController {
  constructor(private userSerivce: UserSerivce) {}
}
