import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user';
import { UsersService } from 'src/users/users.service';
import { jwtSecret } from './constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async validate(email: string, password: string): Promise<User> | null {
    const user = await this.usersService.getUserByEmail(email);

    if (!user) {
      return null;
    }
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    return passwordIsValid ? user : null;
  }

  public login(user: User): { access_token: string } {
    const payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async verify(token: string): Promise<User> {
    const decoded = this.jwtService.verify(token, {
      secret: jwtSecret,
    });

    const user = await this.usersService.getUserByEmail(decoded.email);

    if (!user) {
      throw new Error();
    }

    return user;
  }
}
