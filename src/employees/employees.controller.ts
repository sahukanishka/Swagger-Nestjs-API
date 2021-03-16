/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Put, Query ,Body, Post} from '@nestjs/common';
import {EmployeesService} from "./employees.service";
import {EmployeeDto} from "./dto/employee.dto";
import {FilterDto} from "./dto/filter.dto"; 
import { query } from 'express';
@Controller('employees')
export class EmployeesController {
    constructor(private employeesService : EmployeesService) {}
    
    @Get()
    async getEmployees(@Query() query : FilterDto) {
        const limit_val = Number(query.limit);
        const skip_val = Number(query.skip)
        // eslint-disable-next-line prettier/prettier
        return this.employeesService.getEmployee(limit_val,skip_val); 
    }

    // @Get()
    // async getFilterEmployee() {
    //     // const limit_val = Number(query.limit)
    //     // const skip_val = Number(query.skip)
    //     // console.log(query)
    //     return  await this.employeesService.getFilterEmployee(limit_val,skip_val);
    // }

    @Post() 
    async postEmployeeById(@Body() employee :  EmployeeDto){
        return this.employeesService.postNewEmployee(employee);
    }

    @Get(':id') 
    public getEmployeeById(@Param('id')id:number){
        return this.employeesService.getEmployeeById(id); 
    }

    @Delete(':id')
    public deleteEmployeeByyId(@Param('id')id:number){
        return this.employeesService.deleteEmployeeById(id);
    }

    @Put(':id')
    public putEmployeeById(@Param('id')id: number,@Query() query){
        const propertyName = query.property_name ;
        const propertyValue = query.property_value ; 
        return this.employeesService.putEmployeeById(id,propertyName,propertyValue);
    }
}

