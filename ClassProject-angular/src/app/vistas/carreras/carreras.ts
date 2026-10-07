import { Component, OnInit } from '@angular/core';
import { TablaApuestasComponent } from '../../tabla-apuestas/tabla-apuestas';
import { ApiService } from '../../services/api';

@Component({
  imports: [TablaApuestasComponent],
  selector: 'app-carreras',
  styleUrl: './carreras.css',
  templateUrl: './carreras.html',
})
export class Carreras implements OnInit {
  apuestasCarreras = [
    { id: 1, evento: 'GP de Mónaco', cuota1: 1.50, cuotaX: '-', cuota2: 4.20 },
    { id: 2, evento: 'GP de Monza', cuota1: 2.10, cuotaX: '-', cuota2: 3.50 },
    { id: 3, evento: 'Indy 500', cuota1: 3.00, cuotaX: '-', cuota2: 2.80 }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.obtenerDatos().subscribe(data => {
      console.log('Test API Carreras:', data);
    });
  }
}