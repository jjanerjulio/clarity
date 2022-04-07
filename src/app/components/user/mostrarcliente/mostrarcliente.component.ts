import { Component, OnInit } from '@angular/core';
import { userI } from 'src/app/models/user';

@Component({
  selector: 'app-mostrarcliente',
  templateUrl: './mostrarcliente.component.html',
  styleUrls: ['./mostrarcliente.component.css']
})
export class MostrarclienteComponent implements OnInit {

  public users: userI[] = []

  constructor() {
    this.users = [
      {
        id: 1,
        nombres: "Janer de Jesus",
        apellidos: "Julio martinez",
        direccion: "Cll 44",
        telefono: "7337363773"
      },
      {
        id: 2,
        nombres: "Elys Maria",
        apellidos: "Tovar Cabarcas",
        direccion: "Cll 44",
        telefono: "63663637820"
      },
      {
        id: 3,
        nombres: "Rosa Maria",
        apellidos: "Martinez Muñoz",
        direccion: "Cll 44",
        telefono: "55536893822"
      }
    ]
  }

  ngOnInit(): void {
  }

}
