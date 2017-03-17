import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Chanpin } from './chanpinliebiao';

@Injectable()
export class ChanpinliebiaoService {

  private headers = new Headers({'Content-Type': 'application/json'});

  /*private URL = 'http://192.168.1.113:9988/api/v1/products';*/
   private URL = 'api/CHANPINLIEBIAO';
   constructor(private http: Http) { }

   getChanpinliebiao(): Promise<Chanpin[]> {
    return this.http.get(this.URL)
               .toPromise()
               .then(response => response.json().data as Chanpin[])
               /*.then(response =>{
                let Result = response.json() as Chanpin[]
                console.log(Result)
                return Result;
               } )*/
               .catch(this.handleError);
    }
  /*getChanpinliebiaoSlowly(): Promise<Chanpinliebiao[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getChanpinliebiao()), 1000);
    });
    }  */
     getChanpin(id: number): Promise<Chanpin> {
    const url = `${this.URL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Chanpin)
      .catch(this.handleError);
    }
    /*getchanpin1(id: number): Promise<Chanpinliebiao> {
    return this.getChanpinliebiao()
               .then(CHANPINLIEBIAO => CHANPINLIEBIAO.find(Chanpinliebiao => Chanpinliebiao.id === id));
    }*/

   deleteChanpin(id: number): Promise<void> {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
    }

    updateChanpin(item: Chanpin): Promise<Chanpin> {
    const url = `${this.URL}/${item.id}`;
    return this.http
      .put(url, JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
    }

     addChanpin(name: string): Promise<Chanpin> {
    return this.http
      /*.post(this.URL, JSON.stringify({name: name}), {headers: this.headers})*/
      .post(this.URL, JSON.stringify(name), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
   }
}