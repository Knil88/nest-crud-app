import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')

export class UsersController {
    constructor(private readonly service: UsersService) { }
    @Get()
    findAll() {
        const users = this.service.findAll();
        // Modifica la struttura della risposta JSON per mettere l'ID sopra il nome
        const formattedUsers = users.map(user => ({
            id: user.id,
            ...user
        }));
        return formattedUsers;
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() user) {
        return this.service.create(user);
    }

    @Put(":id")
    update(@Param('id') id: string, @Body() updateUser) {
        return this.service.update(id, updateUser);
    }

    @Delete(':id')

    delete(@Param('id') id: string) {
        return this.service.delete(id)
    }
}
