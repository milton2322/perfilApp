import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-editar-usuario',
  templateUrl: './add-editar-usuario.component.html',
  styleUrls: ['./add-editar-usuario.component.css']
})
export class AddEditarUsuarioComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() user:any;
  UserId: string;
  UserName: string;
  Rol: string;
  PhotoFilePath: string;
  PhotoFileName: string;

  RolList:any=[];
  
  ngOnInit(): void {
    this.loadRolList();
    console.log(this.user, "user");
           
  }

  loadRolList(){
    this.service.getAllRolNames().subscribe((data:any)=>{
      this.RolList = data;
      
      this.UserId= this.user.userId;
      this.UserName = this.user.userName;
      this.Rol = this.user.rol;
      this.PhotoFileName = this.user.photoFileName;
      this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
    })
  }

  addUser(){
    var val = {
      userId: this.UserId,
      userName: this.UserName,
      rol: this.Rol,
      photoFileName: this.PhotoFileName
    };
    console.log(val, "val");
    
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUser(){
    var val = {
      userId: this.UserId,
      userName: this.UserName,
      rol: this.Rol,
      photoFileName: this.PhotoFileName,
      PhotoFilePath: this.PhotoFileName
    };
    console.log(val, "udateuser"); 
    this.service.updateUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file = event.target.files[0];
    const formData: FormData= new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}
