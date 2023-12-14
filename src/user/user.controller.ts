import {Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.save(dto);
  }

  @Get(":idOrEmail")
  findOneUser(@Param("idOrEmail") idOrEmail: string) {
    return this.userService.findOne(idOrEmail);
  }

  @Delete(":id")
  deleteUser(@Param("id", ParseUUIDPipe) id: string) {
    return this.userService.delete(id);
  }
}
