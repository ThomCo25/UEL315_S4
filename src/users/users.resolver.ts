import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserDto } from './dto/create-user.input';

@Resolver(() => CreateUserDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateUserDto)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [CreateUserDto], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => CreateUserDto, { name: 'user' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => CreateUserDto)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => CreateUserDto)
  removeUser(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.remove(id);
  }
}
