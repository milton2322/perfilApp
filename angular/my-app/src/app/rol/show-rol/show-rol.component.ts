import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-rol',
  templateUrl: './show-rol.component.html',
  styleUrls: ['./show-rol.component.css']
})
export class ShowRolComponent implements OnInit {


  constructor(private service: SharedService) { }

  RolList:any=[];  

  ModalTitle:string;
  ActivateAddEditRolComp:boolean=false;
  rol:any;

  RolIdFilter:string="";
  RolNameFilter:string="";
  RolListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshRolList();
  }

  addClick(){
    this.rol={
      rolId:0,
      rolName:""
    }
    console.log(this.rol, 'addclick');
    
    this.ModalTitle="Add Rol";
    this.ActivateAddEditRolComp=true;

  }

  editClick(item){        
    this.rol=item;
    console.log("entro", this.rol);
    this.ModalTitle="Edit Rol";
    this.ActivateAddEditRolComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      console.log(item,"****");
      
      this.service.deleteRol(item.rolId).subscribe(data=>{
        alert(data.toString());
        this.refreshRolList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditRolComp=false;
    this.refreshRolList();
  }

  refreshRolList(){
    this.service.getRolList().subscribe(data=>{            
      this.RolList=data;
      
      this.RolListWithoutFilter=data;
      console.log(this.RolListWithoutFilter, "datos sin filtro" );
    });
  }

  filterFn(){
    var RolIdFilter = this.RolIdFilter;    
    var RolNameFilter = this.RolNameFilter;

    this.RolList = this.RolListWithoutFilter.filter(function (res){
      return res.rolId.toString().toLowerCase().includes(
        RolIdFilter.toString().trim().toLowerCase()
      )&&
      res.rolName.toString().toLowerCase().includes(
        RolNameFilter.toString().trim().toLowerCase()
      )
    });
  }

}
