import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserInput } from './dto/new-user.input';

import { User } from './entities/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.find({});

    if (!users) throw new NotFoundException();

    return users;
  }

  public async addUser(newUserData: NewUserInput): Promise<User> {
    const newTodo = this.userRepository.create(newUserData);
    await this.userRepository.save(newTodo).catch((err) => {
      new InternalServerErrorException();
    });
    return newTodo;
  }
}
