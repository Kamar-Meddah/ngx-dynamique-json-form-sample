import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormlyFieldInput} from '@ngx-formly/material/input';
import {FormsService} from './services/forms.service';
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamique-form';
  public fieldsInput: {fields: FormlyFieldConfig };

  constructor(private readonly formBuilder: FormBuilder,
              private readonly formsService: FormsService) {
  }


  ngOnInit() {
    this.inputData = this.formsService.findForm();
  }

  public submit(event: FormGroup){
    console.log(event);
  }

}
