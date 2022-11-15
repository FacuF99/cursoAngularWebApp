import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = 'WebApp Productos Angular Curso';
  }

  ngOnInit(): void {
    console.log('Se cargó la pantalla principal');
  }
}
