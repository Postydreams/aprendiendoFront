import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '26909be76a33771a085bad47458feb27';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo (ciudad: string, codigo: string) {
    const url=
  }

}
