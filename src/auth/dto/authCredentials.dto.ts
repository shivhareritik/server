import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class authCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @ApiProperty()
    @IsNotEmpty()
    userName:string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @ApiProperty()
    @IsNotEmpty()
    password:string;
}