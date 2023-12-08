import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { Weather } from './models/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'weather Widget';
  weather?: Weather[];
  
  constructor(private weatherApiService: WeatherApiService)
  {
    this.weather = [];
    this.loadWeatherAPIService
  }

  loadWeatherAPIService(city: string): void {
    this.weather = [];
    this.weatherApiService.getWeatherByCity(city)
      .subscribe(data => {
        this.loadForecast(data as any);
        console.log(this.weather);
      });
  }

  loadForecast(data: any): void {
    let index = 0
    
    for(let index = 0; index < data.list.length; index = index + 8){
      console.log(data);
      let day = data.list[index];

      const date = new Date(day.dt_txt);
      const dayOfWeek = this.weekdays(date.getDay());
  
      this.weather?.push({
        day: dayOfWeek,
        temp: day.main.temp,
        temp_min: day.main.temp_min,
        temp_max: day.main.temp_max,
        pressure: day.main.pressure,
        humidity: day.main.humidity,
        icon: day.weather[0].icon,
        description: day.weather[0].description
      });
    }
  }

  weekdays(dayNumber: number): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayNumber];
  }

}