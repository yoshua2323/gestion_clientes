import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarCliente(cliente: { nombre: string; email: string; celular: string; cedula: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente); // Asegúrate de que el backend esté preparado para recibir todos los campos
  }

  // Otros métodos como editarCliente y eliminarCliente...
}


  