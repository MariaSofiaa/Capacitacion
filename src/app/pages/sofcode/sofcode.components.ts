import { Component, OnInit } from "@angular/core";

//Decorador- se puede adjuntar a una clase, método, descriptor
// de acceso, propiedad o parámetro.

@Component({
    selector:'app-sofcode',
    templateUrl: './sofcode.component.html',
    styleUrls: ['./sofcode.component.scss']
})
export class sofcodeComponent implements OnInit{
    constructor(){ }
    ngOnInit(): void { }
}