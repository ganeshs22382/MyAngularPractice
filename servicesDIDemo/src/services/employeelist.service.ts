import { Injectable } from '@angular/core';
import { employeeList } from '../model/employeeList.model';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class employeeListService{

    public dataUrl:string = "http://localhost:3000/employeeList";

    constructor(private http:Http, private httpClient:HttpClient){}

    getEmployeelistObservable():Observable<employeeList[]>{
        return this.httpClient.get<employeeList[]>(this.dataUrl)
    }
    
}
