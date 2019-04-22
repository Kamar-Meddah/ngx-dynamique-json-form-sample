import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-dynamique-form',
  templateUrl: './dynamique-form.component.html',
  styleUrls: ['./dynamique-form.component.scss']
})
export class DynamiqueFormComponent implements OnInit {

  @Input() fields: FormlyFieldConfig;
  @Output() submit: EventEmitter = new EventEmitter<FormGroup>();

  public form: FormGroup;

  onSubmit() {
    this.submit.emit(this.form);
    this.submit.complete();
  }

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit() {
  }

}
