import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css']
})
export class TablePeopleComponent implements OnInit  {
  listUser: usuario[]=[];

  constructor(private userService:UsuarioService){

  }

  ngOnInit(): void {
      this.allUser();
  }
  allUser(): void{
    this.userService.getAllUsuario().subscribe(data=>{
      console.log(data);
      this.listUser=data.data;
      console.log('>>>>>>>', this.listUser);
      this.listUser.forEach(x=>{
        console.log('>>>>>>>><<<', x)
      })
    })
  }
}
