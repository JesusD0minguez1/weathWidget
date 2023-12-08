import { Component, Input } from '@angular/core';
import { Weather } from '../models/Weather';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  @Input() weatherData?: Weather[];
}
