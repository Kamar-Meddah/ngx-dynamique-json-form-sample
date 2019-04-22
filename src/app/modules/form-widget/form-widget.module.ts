import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DynamiqueFormComponent} from './components/dynamique-form/dynamique-form.component';

@NgModule({
  declarations: [DynamiqueFormComponent],
  imports: [
    SharedModule
  ],
  exports: [
    DynamiqueFormComponent
  ]
})
export class FormWidgetModule {
}
