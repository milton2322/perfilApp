import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-rol',
  templateUrl: './add-edit-rol.component.html',
  styleUrls: ['./add-edit-rol.component.css']
})
export class AddEditRolComponent implements OnInit {
  

  constructor(private service: SharedService) { }

  @Input() rol:any;
  rolId: string;
  rolName: string;

  ngOnInit(): void {
    this.rolId= this.rol.rolId;
    this.rolName= this.rol.rolName;
  }

  addRol(){
    var val = {
      rolId: this.rolId,
      rolName: this.rolName
    };
    console.log(val, "addRol");
    
    this.service.addRol(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateRol(){
    var val = {
      rolId: this.rolId,
      rolName: this.rolName
    };
    console.log(val, "udateRol");
    
    this.service.updateRol(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
