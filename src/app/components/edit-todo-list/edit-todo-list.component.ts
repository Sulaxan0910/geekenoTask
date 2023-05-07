import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TodolistService } from './../../providers/todolist.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.sass']
})
export class EditTodoListComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute, private todolistService:TodolistService) { }

  task:any;
  model: any={
    title:"",
    description:"",
    completed:false,
  }
  id:number=0;
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if(!(params.taskid==undefined || params.taskid=="")){
        this.id = params.taskid;
        this.todolistService.getTask(this.id).subscribe((data) => {
          this.task = data;
          this.model = data;
        });
      }
    });
  }
  onSubmit() {
    if(this.model.title==""){
      $.toast({
          heading: "Validation!!",
          text: "Title is required!",
          icon: "error",
          bgColor: "red",
          showHideTransition: 'slide',
          allowToastClose: true,
          position: 'top-right',
          textColor: 'white',
          hideAfter: 2500 
      });
    }
    else if(this.model.description==""){
      $.toast({
          heading: "Validation!!",
          text: "Description is required!",
          icon: "error",
          bgColor: "red",
          showHideTransition: 'slide',
          allowToastClose: true,
          position: 'top-right',
          textColor: 'white',
          hideAfter: 2500 
      });
    }
    else{
      if(this.id==0){
        // call add task api
        this.todolistService.addTask(this.model).subscribe((data)=>{
          $.toast({
              heading: "Message!!",
              text: "Task added Successfully!",
              icon: "success",
              bgColor: "green",
              showHideTransition: 'slide',
              allowToastClose: true,
              position: 'top-right',
              textColor: 'white',
              hideAfter: 2500 
          });
          this.router.navigate(['/']);
        });
      }
      else{
        // call add task api
        this.todolistService.editTask(this.model,this.id).subscribe((data)=>{
          $.toast({
              heading: "Message!!",
              text: "Task updated Successfully!",
              icon: "success",
              bgColor: "green",
              showHideTransition: 'slide',
              allowToastClose: true,
              position: 'top-right',
              textColor: 'white',
              hideAfter: 2500 
          });
          this.router.navigate(['/']);
        });
      }
    }
  }
  handleFormSubmit(form: NgForm): void {
    // value will print the JavaScript Object of the Form Values.
    console.log(form.value);
     }
}
