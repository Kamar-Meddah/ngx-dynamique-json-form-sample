import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamique-form';

  form = new FormGroup({});
  model = {email: 'email@gmail.com'};
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    },
    validators: {
      email: (value) => new RegExp('[a-zA-Z0-9]+@[a-z,A-Z]{2,}\.[a-zA-Z]{2,3}').test(value.value)
    }
  }];

  constructor(private readonly formBuilder: FormBuilder) {
  }

  submit(model) {
    console.log(model);
  }

  ngOnInit() {
    console.log('hello');

  }


}
