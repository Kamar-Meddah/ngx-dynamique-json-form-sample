import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'app-dynamique-form',
  templateUrl: './dynamique-form.component.html',
  styleUrls: ['./dynamique-form.component.scss']
})
export class DynamiqueFormComponent implements OnInit {
  @Input() fields: FormlyFieldConfig;
  @Output() send: EventEmitter<FormGroup> = new EventEmitter();

  public form: FormGroup;

  onSubmit() {
    this.send.emit(this.form);
  }

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit() {
  }

}
