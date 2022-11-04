import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  result = [];

  constructor(public http: HttpClient) { 
    this.Weather();
  }

  ngOnInit() {
  }

  Weather(){
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Santo+Domingo&appid=0980781b3e1f7e2c0cd8cd804c5c1120").subscribe(data => {
      this.result.push("País: " + data["name"]) 
      this.result.push("Humedad: " + data["main"]["humidity"]); 
      this.result.push("Presión: " + data["main"]["pressure"]);
      this.result.push("Temperatura: " + data["main"]["temp"]);
      this.result.push("Temperatura max: " + data["main"]["temp_max"]);
      this.result.push("Temperatura min: " + data["main"]["temp_min"]);
      this.result.push("Viento grado : " + data["wind"]["deg"]);
      this.result.push("Viento velocidad : " + data["wind"]["speed"]);
    })
  }

}
