import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHeader(): Observable<any> {
    return this.http.get(`${this.apiUrl}/header`);
  }

  getBanner(): Observable<any> {
    return this.http.get(`${this.apiUrl}/banner`);
  }

  getAboutMe(): Observable<any> {
    return this.http.get(`${this.apiUrl}/aboutMe`);
  }

  getExperience(): Observable<any> {
    return this.http.get(`${this.apiUrl}/experience`);
  }

  getFeatureProjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/featureProjects`);
  }

  getContact(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contact`);
  }
}