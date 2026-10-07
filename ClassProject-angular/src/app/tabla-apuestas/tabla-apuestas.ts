import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla-apuestas',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla-apuestas.html', 
  styleUrl: './tabla-apuestas.css'
})
export class TablaApuestasComponent {
  @Input() 
  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'evento', 'cuota1', 'cuotaX', 'cuota2'];
}