import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Relatives } from '../../relatives';
import { RelativesService } from '../../sharedService/relatives.service';




@Component({
  selector: 'app-add-relatives',
  templateUrl: './add-relatives.component.html',
  styleUrls: ['./add-relatives.component.css']
})
export class AddRElativesComponent implements OnInit {
  relative: Relatives
  setRollValue: any
  private AddForm: FormGroup
  private rollNo: any
  statusError: boolean = false;
  private subscription: Subscription
  private roll_no: any
  relations: any[] = [
    { name: 'Mother' },
    { name: 'Father' },
    { name: 'Sister' },
    { name: 'Brother' },
    { name: 'Spouse' }
  ];

  constructor(private relativeService: RelativesService, private route: ActivatedRoute, private _router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.validateError();
  }







  private validateError() {

    this.AddForm = this.formbuilder.group({
      'rollNo': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'mob': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      'relation': new FormControl('', Validators.required),
    });


  }

  onSubmit() {
    // console.log(this.AddForm.get("roll").value)
    this.rollNo = this.route.snapshot.paramMap.get("rollNo");
    let name = this.AddForm.get("name").value;
    console.log(this.AddForm.get("name").value)
    let mob = this.AddForm.get("mob").value;
    console.log(this.AddForm.get("mob").value)
    let relation = this.AddForm.get("relation").value;
    console.log(this.AddForm.get("relation").value)
    let relative = new Relatives(0, this.rollNo, name, relation, mob);
    if (this.AddForm.valid) {
      this.relativeService.createRelative(relative).subscribe((relative) => {

        this.AddForm.reset()
        this.onHomePage();
      }, (error) => {
        console.log(error);
      });
    }
    else {
      alert("Please fill all the fields")
    }

    // this.relativeService.updateRelative(this.relative).subscribe((student) => {
    //   this._router.navigate(['listRelative/' + this.rollNo])
    // }, (error) => {
    //   console.log(error);
    // });


  }

  onHomePage() {
    this.rollNo = this.route.snapshot.paramMap.get("rollNo");
    this._router.navigate(['listRelative/' + this.rollNo])
  }

}
