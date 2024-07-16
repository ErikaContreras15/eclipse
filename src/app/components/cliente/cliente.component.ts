import { Component } from '@angular/core';
import { Cliente } from '../../domain/cliente';
import { ClienteService } from '../../services/cliente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  selectedCliente: Cliente = new Cliente();
  isEditMode = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  selectCliente(cliente: Cliente) {
    this.selectedCliente = { ...cliente };
    this.isEditMode = true;
  }

  saveCliente() {
    if (this.isEditMode) {
      this.clienteService.updateCliente(this.selectedCliente).subscribe(() => {
        this.loadClientes();
        this.resetForm();
      });
    } else {
      this.clienteService.createCliente(this.selectedCliente).subscribe(() => {
        this.loadClientes();
        this.resetForm();
      });
    }
  }

  deleteCliente(cedula: string) {
    this.clienteService.deleteCliente(cedula).subscribe(() => {
      this.loadClientes();
    });
  }

  resetForm() {
    this.selectedCliente = new Cliente();
    this.isEditMode = false;
  }
}
