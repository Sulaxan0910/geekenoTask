import { TodolistService } from './../../providers/todolist.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {
  tasks:any;
  allTasks:any;
  constructor(private router:Router,private todolistService:TodolistService) {
    }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.todolistService.getTasks().subscribe((data) => {
      this.allTasks = data;
      this.tasks = data;
    });
  }
  editTask(id:number){
    //routes to editTask 
    this.router.navigate(['/task/'+id]);
  }
  deleteTask(id:number){
    if (confirm("Are you sure you want to delete this Task?") == true) {
      this.todolistService.deleteTask(id).subscribe((data) => {
        this.getTasks();
        $.toast({
            heading: "Message!!",
            text: "Task deleted Successfully!",
            icon: "success",
            bgColor: "green",
            showHideTransition: 'slide',
            allowToastClose: true,
            position: 'top-right',
            textColor: 'white',
            hideAfter: 2500 
        });
      });
    }
  }
  completeTask(id:number,status:boolean){
    this.todolistService.markItemAsDone(id,status).subscribe((data)=>{
      this.getTasks();
      $.toast({
          heading: "Message!!",
          text: "Task completed Successfully!",
          icon: "success",
          bgColor: "green",
          showHideTransition: 'slide',
          allowToastClose: true,
          position: 'top-right',
          textColor: 'white',
          hideAfter: 2500 
      });
    });
  }
  
  applyFilter(filterValue: string) {
    console.log(filterValue);
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
      this.tasks=this.allTasks;
    } 
    else {
      this.tasks = this.allTasks.filter((task:any) => task.title.includes(filterValueLower));
    }
  }
  // ngAfterViewInit() {
  //   $(document).on("click",".btn-success",function(this:any) {
  //     let id = $(this).data('id');
  //     location.replace(location.origin+"/task/"+id);
  //   });
  //   $(document).on("click",".btn-danger",function(this:any) {
  //     console.log(this);
  //     let id = $(this).data('id');
  //     location.replace(location.origin+"/task/"+id);
  //   });
  //   $(document).on("click",".btn-primary",function(this:any) {
  //     console.log(this);
  //   });
  // }

}
