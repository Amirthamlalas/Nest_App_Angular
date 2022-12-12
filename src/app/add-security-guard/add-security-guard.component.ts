import { Component } from '@angular/core';

@Component({
  selector: 'app-add-security-guard',
  templateUrl: './add-security-guard.component.html',
  styleUrls: ['./add-security-guard.component.css']
})
export class AddSecurityGuardComponent {
  username=""
  password=""
  name=""
  readValue=()=>{
    let data:any={
      "username":this.username,"password":this.password,"name":this.name
    }
    console.log(data)
  
    if (this.username=="admin"&&this.password=="1234") {
      alert("successfull")
      
    } else {
      alert("failed")
    }
  }
}
