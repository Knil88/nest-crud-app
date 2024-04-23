import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly dataBaseService: DatabaseService) { }
  async create(createUserDto: Prisma.UserCreateInput) {
    return this.dataBaseService.user.create({
      data: createUserDto
    })
  }

  async findAll() {
    return this.dataBaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.dataBaseService.user.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.dataBaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto
    });
  }

  async remove(id: number) {
    return this.dataBaseService.user.delete({
      where: {
        id,
      }
    });
  }
}
