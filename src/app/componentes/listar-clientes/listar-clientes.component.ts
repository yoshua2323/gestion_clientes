import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Agrega FormsModule aquí
})
export class ListarClientesComponent implements OnInit {
  clientes: any[] = [];
  nuevoCliente = {
    nombre: '',
    email: '',
    celular: '',
    cedula: ''
  };

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clientesService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }

  agregarCliente() {
    this.clientesService.agregarCliente(this.nuevoCliente).subscribe(
      (response) => {
        console.log('Cliente agregado:', response);
        this.obtenerClientes(); // Refrescar la lista de clientes
        this.nuevoCliente = { nombre: '', email: '', celular: '', cedula: '' }; // Limpiar el formulario
      },
      (error) => {
        console.error('Error al agregar cliente:', error);
      }
    );
  }

  editarCliente(id: number) {
    console.log('Editando cliente con ID:', id);
  }

  eliminarCliente(id: number) {
    console.log('Eliminando cliente con ID:', id);
  }
}
