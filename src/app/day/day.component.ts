import { Component, Input } from '@angular/core';
import { Weather } from '../models/Weather';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent {
  @Input() day?: Weather;
}