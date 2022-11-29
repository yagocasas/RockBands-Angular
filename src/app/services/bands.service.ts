import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor(private http: HttpClient) { }

  public getAllBands(): Observable<any>{
    return this.http.get("https://rockbands-back.vercel.app/bands");
  }

  public getOneBand(id: string): Observable<any> {
    return this.http.get("https://rockbands-back.vercel.app/bands/" + id);
  }

  public postNewBand(newBand: any) {
    return this.http.post("https://rockbands-back.vercel.app/bands/create", newBand); //petición
  }

  public deleteBand(id: string) {
    return this.http.delete("https://rockbands-back.vercel.app/bands/delete/" +id);
  }

  public putBand(id: string, updatedBand: any) {
    return this.http.put("https://rockbands-back.vercel.app/bands/edit/" +id, updatedBand);
  }


}
