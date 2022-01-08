import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  public parts: any = []
  constructor() { }

  ngOnInit(): void {
  }

  isPartsEmpty() : Boolean {
    return this.parts.length == 0
  }

}
