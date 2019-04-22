import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormlyFieldInput} from '@ngx-formly/material/input';
import {FormsService} from './services/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamique-form';
  public fieldsInput: FormlyFieldInput;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly formsService: FormsService) {
  }


  ngOnInit() {
    this.fieldsInput = this.formsService.findForm();
  }

  public submit(event: Event){
    let k = event;
    console.log(event.valid)
  }

}
