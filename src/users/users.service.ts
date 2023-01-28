import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './schema/users.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<Users>,
  ) {}

  async create(createUsersInput: CreateUserInput) {
    const users = new this.userModel(createUsersInput);
    return users.save();
  }

  async findAll(): Promise<Users[]> {
    return await this.userModel.find();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findByIdAndUpdate(updateUserInput.id, updateUserInput);
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
