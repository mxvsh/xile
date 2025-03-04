import { UsersService } from '@api/modules/users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { LoginInput, RegisterInput } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerInput: RegisterInput) {
    const exist = await this.usersService.findOneByEmail(registerInput.email);

    if (exist) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(registerInput.password, 10);

    await this.usersService.create({
      name: registerInput.name,
      email: registerInput.email,
      password: hashedPassword,
    });

    return {
      message: 'User created successfully',
    };
  }

  async login(loginInput: LoginInput) {
    const user = await this.usersService.findOneByEmail(loginInput.email);

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await compare(loginInput.password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
