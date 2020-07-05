import { BicycleDetailService } from '../../shared/bicycle-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BicycleDetail } from '../../shared/bicycle-detail.model';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-bicycle-rented-list',
  templateUrl: './bicycle-rented-list.component.html',
  styles: []
})

export class BicycleRentedComponent implements OnInit {

  constructor(public service: BicycleDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
    this.fullName();
  }

  populateForm(pd: BicycleDetail) {
    this.service.formData = Object.assign({}, pd);
  }

fullName(){
  

    let sum = 0;
    for(let i = 0; i < this.service.list.length; i++) {
      sum += this.service.list[i].Price;
    }
    return sum;
  

}


  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteBicycleDetail(Id)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Bicycle ');
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
     
      form.controls['Status'].setValue("Rented")
      this.service.rentBicycleDetail()
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.success('Rented successfully', 'Bicycle ');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
   
    
  }
  
}
