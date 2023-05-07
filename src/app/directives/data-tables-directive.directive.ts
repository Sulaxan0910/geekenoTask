import { Directive } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appDataTablesDirective]'
})
export class DataTablesDirectiveDirective {

  constructor() { }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('#todolistTable').DataTable();
    });
  }
}
