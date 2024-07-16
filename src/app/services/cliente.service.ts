import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8080/demoJakarta/rs/cliente';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  getCliente(cedula: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${cedula}`);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente, this.httpOptions);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseUrl, cliente, this.httpOptions);
  }

  deleteCliente(cedula: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${cedula}`, this.httpOptions);
  }
}
