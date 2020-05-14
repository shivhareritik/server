import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from "./task.entity";
// import { Task } from './task.model';
import { createTaskDto } from './createTask.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService) {}

@Get('/:id') 
gettingTaskById(@Param('id', ParseIntPipe) id:any): Promise<Task> {
    return this.taskService.gettingTaskById(id);
}

@Post()
@UsePipes(ValidationPipe)
creatingTask(@Body() createTaskDto: createTaskDto): Promise<Task> {
    return this.taskService.creatingTask(createTaskDto);
}

@Delete('/:id')
deletingTasks(@Param('id', ParseIntPipe) id:any) {
    // console.log(id)
    return this.taskService.deletingTask(id);
}

@Patch('/:id')
updatingTasks(@Param('id', ParseIntPipe) id: number, @Body() data): Promise<Task> {
    return this.taskService.updatingTask(id, data);
}








    // @Get()
    // getAllTasks(): Task[] {
    //     return this.taskService.getAllTask();
    // }


    // @Post()
    // createTasks(@Body() body) {
    //     console.log('body',body)
    //     // return this.taskService.createTasks(title:'',description:'');
    // }
    // @Post()
    // createTasks(@Body('id') id:string,@Body('title') title:string, @Body('description') des:string): Task {
    //     console.log(id,des,title)
    //     return this.taskService.createTasks(title,des);
    // }


    // @Post()
    // @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
    // createTasks(@Body() createTaskDto: createTaskDto ): Task {
    //     console.log(createTaskDto)
    //     return this.taskService.createTasks(createTaskDto.title,createTaskDto.description);
    // }

    // @Get('/:id')
    // getTaskById(@Param('id') id:any): Task {
    //     return this.taskService.findById(id)
    // }
}
