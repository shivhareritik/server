import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import * as bcrypt from 'bcrypt'
@Entity()
@Unique(['userName'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    salt: string;
 
}