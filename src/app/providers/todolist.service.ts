import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const URLS = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) {
   }
  addTask(data:any){
    return this.http.post(URLS+"/tasks",data);
  }
  editTask(data:any,id:number){
    return this.http.put(URLS+"/tasks/"+id,data);
  }
  deleteTask(id:number){
    return this.http.delete(URLS+"/tasks/"+id);
  }
  markItemAsDone(id:number,status:boolean)
  {
    return this.http.patch(URLS+"/tasks/"+id, { "completed": status });
  }
  getTasks(){
    return this.http.get(URLS+"/tasks");
  }
  getTask(id:number){
    return this.http.get(URLS+"/tasks/"+id);
  }
}
