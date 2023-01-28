import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Users',
      schema: UserSchema
    }])
  ],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
