import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "taskmanagement_new",
    "entities": [ __dirname + "/../**/*.entity{.ts,.js}"],
    "synchronize": true
}