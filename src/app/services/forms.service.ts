import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public findForm(): Observable<{ options: FormlyFormOptions, fields: FormlyFieldConfig }> {
    return this.httpClient.get('/data/form1.json');
  }

}
