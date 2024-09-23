import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HttpClientModule, ListarClientesComponent]  
})
export class AppComponent {
  title = 'mi-aplicacion-angular';
}
