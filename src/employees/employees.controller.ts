/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Put, Query ,Body, Post} from '@nestjs/common';
import {EmployeesService} from "./employees.service";
import {EmployeeDto} from "./dto/employee.dto";
import {FilterDto} from "./dto/filter.dto"; 
import { query } from 'express';
import { UpdateDto } from "./dto/update.dto"
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { EmployeeSchema } from './schemas/employee.schema';


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
    @ApiOperation({ summary: 'Create Employee' })
    async postEmployeeById(@Body() employee :  EmployeeDto){
        return this.employeesService.postNewEmployee(employee);
    }

    @Get(':id') 
    @ApiResponse({
        status: 200,
        description: 'The found record'
      })
    @ApiOperation({ summary: 'Get Employee details by ID' })
    public getEmployeeById(@Param('id')id:number){
        return this.employeesService.getEmployeeById(id); 
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Employee by ID' })
    public deleteEmployeeByyId(@Param('id')id:number){
        return this.employeesService.deleteEmployeeById(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update existing Employee details by ID' })
    public putEmployeeById(@Param('id')id: number,@Query() query :UpdateDto){
        const propertyName = query.property_name ;
        const propertyValue = query.property_value ; 
        return this.employeesService.putEmployeeById(id,propertyName,propertyValue);
    }
}

