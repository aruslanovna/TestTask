import { BicycleDetailService } from '../../shared/bicycle-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-bicycle-detail',
  templateUrl: './bicycle-detail.component.html',
  styles: []
})

export class BicycleDetailComponent implements OnInit {

  constructor(public service: BicycleDetailService,
    private toastr: ToastrService) { }
    selectedGroup: any;
    groups = [ 
       "Hybrid/commuter",
       "Mountain",
     "Cyclocross"   
  ];
  
  ngOnInit() {
    this.resetForm();
  }
  

  
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Name: '',
      Price: 0,
      Type: '',
      Status: 'Free'
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postBicycleDetail().subscribe(
      res => {
        
        debugger;
        
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Bicycle Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
 updateRecord (form: NgForm) {
    this.service.putBicycleDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Bicycle Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
