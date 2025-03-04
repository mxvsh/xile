import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoginInput, RegisterInput } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterInput) {
    return this.authService.register(body).catch((error) => {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    });
  }

  @Post('login')
  async login(@Body() body: LoginInput) {
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async profile(@Request() req) {
    return req.user;
  }
}
