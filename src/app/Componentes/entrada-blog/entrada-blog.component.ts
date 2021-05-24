import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-entrada-blog',
  templateUrl: './entrada-blog.component.html',
  styleUrls: ['./entrada-blog.component.css']
})
export class EntradaBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){

      var elems = document.querySelectorAll('.chips');
      var instances = M.Chips.init(elems, {});

      var textNeedCount = document.querySelectorAll('#input_text, #textarea1');
      M.CharacterCounter.init(textNeedCount);
  }

}
