/* eslint-disable prettier/prettier */


import {Document} from 'mongoose';

export interface IEmployee extends Document {
    readonly id: number ; 
    readonly name : string ;
    readonly age : number ; 
}