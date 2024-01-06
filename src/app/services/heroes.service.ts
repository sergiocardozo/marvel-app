import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private publicKEY = '4ddb59387550a9d8c1cdda4075ba565e';
  private privateKEY = '6b72f13ed8c07d16a15af954a62295b31b134665'
  private apiURL = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor(private http: HttpClient) { }

  getHeroes() : Observable<any> {
    const timestamp = new Date().getTime().toString();
    const hash = this.generateHash(timestamp);
    const url = `${this.apiURL}?limit=20&offset=5&apikey=${this.publicKEY}&ts=${timestamp}&hash=${hash}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    const params = {
      apikey: this.publicKEY,
      ts: timestamp,
      hash: hash
    }
    return this.http.get(url);
  }

  private generateHash(timestamp: string) : string {
    return Md5.hashStr( timestamp + this.privateKEY + this.publicKEY );
  }
}
