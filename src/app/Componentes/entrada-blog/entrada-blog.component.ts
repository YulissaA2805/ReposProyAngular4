import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-entrada-blog',
  templateUrl: './entrada-blog.component.html',
  styleUrls: ['./entrada-blog.component.css']
})
export class EntradaBlogComponent implements OnInit {
  
  @Input() data:any;
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
