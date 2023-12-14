import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  UseInterceptors,
} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserResponse} from "./responses";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseInterceptors(ClassSerializerInterceptor)
  // @Post()
  // @UsePipes(new ValidationPipe())
  // async createUser(@Body() dto: CreateUserDto) {
  //   const user = await this.userService.save(dto);
  //   return new UserResponse(user);
  // }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(":idOrEmail")
  async findOneUser(@Param("idOrEmail") idOrEmail: string) {
    const user = await this.userService.findOne(idOrEmail);
    return new UserResponse(user);
  }

  @Delete(":id")
  deleteUser(@Param("id", ParseUUIDPipe) id: string) {
    return this.userService.delete(id);
  }
}
