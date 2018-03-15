import { Component, OnInit } from '@angular/core';
import { Exform } from './exform';
import { isNull } from 'util';


@Component({
  selector: 'app-exform',
  templateUrl: './exform.component.html',
  styleUrls: ['./exform.component.css']
})
export class ExformComponent implements OnInit {

  ex = new Exform();

  exforms:Exform[] = [
    { firstName: 'Irvan', lastName: 'Novianto', userName:'Irvan' },
    { firstName: 'Ryan', lastName: 'Prasetya', userName:'Kiting' }
  ];

  constructor() { }

  ngOnInit() {
    this.exforms;
  }

  add(ob:Exform){
    console.log(ob);
    if (this.isEmpty(ob)){
      window.alert("Data tidak boleh kosong, silahkan data diisi");
      return;
    }else{
      this.exforms.push(ob);
      this.ex = new Exform();
    }
    
  }

  delete(i:number){
    this.exforms.splice(i, 1);
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
}
