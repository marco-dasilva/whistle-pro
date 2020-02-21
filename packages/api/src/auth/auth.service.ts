
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any | null> {
    const player = await this.userService.validateUser(email, password);
    return player || null;
  }

  async login() {
    const payload = {};
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
