import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-usuario',
  templateUrl: './show-usuario.component.html',
  styleUrls: ['./show-usuario.component.css']
})
export class ShowUsuarioComponent implements OnInit {

  constructor(private service: SharedService) { }

  UsuarioList:any=[];  

  ModalTitle:string;
  ActivateAddEditUserComp:boolean=false;
  user:any;

  UserIdFilter:string="";
  UserNameFilter:string="";
  UserListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){
    this.user={
      userId:0,
      userName:"",
      rol:"",
      photoFileName:"usuario.jpg",//aca es donde queda la imagen por defecto
      //cuando se va a subir una nueva 
      activo: false
    }
    
    this.ModalTitle="Add Usuario";
    this.ActivateAddEditUserComp=true;

  }

  editClick(item){       
    this.user=item;
    this.ModalTitle="Edit Usuario";
    this.ActivateAddEditUserComp=true;
  }

  deleteClick(item){   
    
    if(confirm('Are you sure??')){
      this.service.deleteUser(item.userId).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

  closeClick(){
    console.log("ingreso");    
    this.ActivateAddEditUserComp=false;
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UsuarioList=data;
      console.log(this.UsuarioList, "lista usuarios");
      
      this.UserListWithoutFilter=data; //esta linea no se agrego
    });
  }

  filterFn(){
    var UserIdFilter = this.UserIdFilter;
    var UserNameFilter = this.UserNameFilter;

    this.UsuarioList = this.UserListWithoutFilter.filter( function(res){
      return res.userId.toString().toLowerCase().includes(
        UserIdFilter.toString().trim().toLowerCase()
      )&&
      res.userName.toString().toLowerCase().includes(
        UserNameFilter.toString().trim().toLowerCase()
      )
    })
  }

}
