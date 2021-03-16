/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import {from} from "rxjs" ;
import {Model} from "mongoose";
import {InjectModel} from '@nestjs/mongoose';
import {IEmployee} from './interfaces/employee.interfaces'
import {EmployeeDto} from './dto/employee.dto';

@Injectable()
export class EmployeesService {
    constructor(@InjectModel('Employee') private readonly employeeModel: Model<IEmployee>) {}
    
    public async getEmployee(limit : number , skip : number) : Promise<EmployeeDto []>{
        const employees = this.employeeModel.find().limit(limit).skip(skip).exec();
        if(!employees) {
            throw new HttpException('Not found',404);
        }
        return employees ; 
    }
    public async postNewEmployee(newEmployee : EmployeeDto) : Promise <EmployeeDto> {
        if (!newEmployee ) {
            throw new HttpException("Body data not found" , 404) ;
        }
        else {
            const employee = await new this.employeeModel(newEmployee);
            return employee.save(); 
        }
        
    }

    public async getFilterEmployee(limit_val : number , skip_val : number) :Promise <EmployeeDto []> {
        const employees = this.employeeModel.find().limit(limit_val).skip(skip_val).exec(); 
        if(!employees) {
            throw new HttpException('Not found',404);
        }
        return employees ; 

    }

    public async getEmployeeById(id : number): Promise <EmployeeDto> {
        const employee = await this.employeeModel.findOne({id}).exec();
        if (!employee) {
            throw new HttpException("not found" , 404) ; 
        }
        return employee
    }

    public async deleteEmployeeById(id : number) : Promise<any>{
        const employee = await this.employeeModel.findOneAndDelete({id}).exec();
        if (!employee) {
            throw new HttpException("Employee id not found" , 404);

        }
        else {
            throw new HttpException("employee deleted" , 200 ); 
        }
    }

    public async putEmployeeById(id : number , propertyName : string ,propertyValue : string ) : Promise<any> {
        const employee = await this.employeeModel.findOneAndUpdate({id},{
            [propertyName]:propertyValue,
        }).exec();
        if (!employee ) { 
            throw new HttpException("not found" , 404);
        }
        else {
            throw new HttpException("Employee updated" , 200 ); 
        } 
    }
}
