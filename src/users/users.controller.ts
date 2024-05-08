import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
        GET request /Users/:id,
        GET request /Users/:id,
        POST /Users
        PATH /Users/:id
        DELETE /Users/:id
    */
   // we will start with our get Users where want to return all of the users and we will do that first with get decorator
   @Get() // Get for /Users or /users?role=value
   findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
    return []
   }

   @Get(':id') // Get for /Users
   findOne(@Param('id') id: string){
        return { id }
   }

   @Post() // POST /Users
   create(@Body() user: {}){
    return user
   }

   @Patch(':id') // Path for /Users/:id
   Update(@Param('id') id: string, @Body() userUpdate: {}){
        // we need the id also to spread in  whatever data we get for that user
        return { id, ...userUpdate }
   }

   @Delete(':id') // Delete for /Users/:id
   delete(@Param('id') id: string){
        return { id }
   }

}
