import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty } from 'class-validator';
export class createTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    title:string;

    @ApiProperty()
    @IsNotEmpty()
    description:string;
}