import { BicycleDetail } from '../../shared/bicycle-detail.model';
import { BicycleDetailService } from '../../shared/bicycle-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bicycle-detail-list',
  templateUrl: './bicycle-detail-list.component.html',
  styles: []
})
export class BicycleDetailListComponent implements OnInit {
  
  constructor(private service: BicycleDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: BicycleDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteBicycleDetail(Id)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Bicycle Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }


  onSubmit(form: NgForm) {
    
      this.onRent(form);
  }
  
  onRent(form: NgForm) {
    if (confirm('Are you sure you want to rent this bike ?')) {
     
      form.controls['Status'].setValue("rented")
      this.service.rentBicycleDetail(form)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Rented successfully', 'Bicycle ');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }
}
