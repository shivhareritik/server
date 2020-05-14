import { Injectable, NotFoundException } from '@nestjs/common';
// import { Task } from './task.model';
import { InjectRepository } from '@nestjs/typeorm';
import { taskRepository } from './task.repository';
import { promises } from 'dns';
import { Task } from "./task.entity";
import { createTaskDto } from './createTask.dto';

@Injectable()
export class TasksService {
    task : Task[] = [];

    constructor(@InjectRepository(taskRepository)
        private taskRepository:taskRepository) {}

    async gettingTaskById(id:number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if(!found) {
            throw new NotFoundException(`task ${id} not found`)
        }
        return found;
    }

    async creatingTask(createTaskDto: createTaskDto): Promise<Task> {
        const {title, description} = createTaskDto
        const task = new Task();
        task.title = title;
        task.description = description;
        await task.save();
        return task;
    }

    async deletingTask(id:number): Promise<any> {
        // const found = await this.gettingTaskById(id);
        const result = await this.taskRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`id ${id} not found`)
        }
     return result;
    }

    async updatingTask(id: number, data): Promise<Task> {
        const task = await this.gettingTaskById(id);
        // console.log(task);
        task.title = data.title;
        task.description = data.description;
        // console.log(task.save());
        return task;
    }

 






    // getAllTask(): Task[] {
    //     return this.task;
    // }

    // createTasks(title:string, description:string): Task {
    //     const task: Task = {
    //         id:Math.random().toFixed(1),
    //         title,
    //         description         
    //     };
    //     this.task.push(task);
    //     return task;
    // }

    // findById(id):Task {
    //     return this.task.find(tasks => tasks.id == id)
    // }

    // deleteById() {
        
    // }
}
