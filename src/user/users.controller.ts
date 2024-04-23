// import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { ParseIntPipe } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';


// @Controller('users')

// export class UsersController {
//     constructor(private readonly service: UsersService) { }
//     @Get()
//     findAll() {
//         const users = this.service.findAll();
//         // Modifica la struttura della risposta JSON per mettere l'ID sopra il nome
//         const formattedUsers = users.map(user => ({
//             id: user.id,
//             ...user
//         }));
//         return formattedUsers;
//     }

//     @Get(":id")
//     findOne(@Param('id', ParseIntPipe) id: number) {
//         return this.service.findOne(id);
//     }

//     @Post()
//     create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
//         return this.service.create(createUserDto);
//     }

//     @Put(":id")
//     update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
//         return this.service.update(id, updateUserDto);
//     }

//     @Delete(':id')

//     delete(@Param('id', ParseIntPipe) id: number) {
//         return this.service.delete(id)
//     }
// }
