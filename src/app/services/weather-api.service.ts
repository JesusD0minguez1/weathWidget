import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  appid = "d379a9e6626141ddb6f370eed4ad1962"
  constructor(private http: HttpClient){}


  getWeatherByCity(city?: string){
    
    if(city == null){
      city = "Salt%20Lake%20City"
    }
    const City = encodeURIComponent(city);
    console.log(City);
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${City}&appid=${this.appid}`);
  }

}