import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import {MongooseModule} from "@nestjs/mongoose";
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://iwebcode2021:iwebcode2021@cluster0.tmuhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useFindAndModify: false }) , 
    EmployeesModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
