// src/auth/auth.service.ts
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../users/users.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(userData: any): Promise<{ message: string }> {
    const { email, password, ...rest } = userData;
    
    const exists = await this.userModel.findOne({ email });
    if (exists) throw new ConflictException('Email already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ ...rest, email, password: hashedPassword });
    
    await newUser.save();
    return { message: 'User registered successfully' };
  }

  async login(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userModel.findOne({ email });
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user._id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}