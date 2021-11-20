import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commet',
  templateUrl: './commet.component.html',
  styles: [
  ]
})
export class CommetComponent implements OnInit {


  @Input() comments:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.comments)
  }

}
