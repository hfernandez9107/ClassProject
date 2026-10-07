import { Component, OnInit } from '@angular/core';
import { TablaApuestasComponent } from '../../tabla-apuestas/tabla-apuestas';
import { ApiService } from '../../services/api';

@Component({
  imports: [TablaApuestasComponent],
  selector: 'app-futbol',
  styleUrl: './futbol.css',
  templateUrl: './futbol.html',
})
export class Futbol implements OnInit {
  apuestasFutbol = [
    { id: 1, evento: 'Real Madrid vs Barcelona', cuota1: 2.10, cuotaX: 3.50, cuota2: 3.10 },
    { id: 2, evento: 'Liverpool vs Man. City ', cuota1: 2.80, cuotaX: 3.20, cuota2: 2.40 },
    { id: 3, evento: 'Boca Juniors vs River Plate', cuota1: 2.50, cuotaX: 3.00, cuota2: 2.90 }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.obtenerDatos().subscribe(data => {
      console.log('Test API Fútbol:', data);
    });
  }
}