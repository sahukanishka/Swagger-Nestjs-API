/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class EmployeeDto { 
    @ApiProperty({
        description : "The unique ID of the employee" ,
    })
    readonly id: number ;
    @ApiProperty({
        description : "The name of the Employee" 
    })
    readonly name : string ;
    @ApiProperty({
        description : "The age of the employee" 
    })
    readonly age : number ; 
    // address
    // phone
    // photo
}