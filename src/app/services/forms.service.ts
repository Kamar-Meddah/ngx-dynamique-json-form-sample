import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public findForm(): Observable<FormlyFieldConfig> {
    return this.httpClient.get('/data/form1.json')
      .pipe(
        map((result) => result.fields)
      );
  }

}
