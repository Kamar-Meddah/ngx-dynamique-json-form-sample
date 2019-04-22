import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamique-form';

  constructor(private readonly formBuilder: FormBuilder) {
  }


  ngOnInit() {
    console.log('hello');
  }


}
