import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  name:string = "";
  result:string = "";
  presentacion={
    "color":this.result
  }
  constructor(public http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(result) {
    const toast = await this.toastController.create({
      message: result,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  Gender(){
    if(this.name != ""){
      this.http.get("https://api.genderize.io/?name="+this.name).subscribe(data => {
      console.log(data["gender"]);
      if(data["gender"] == "male"){
        this.result = "blue";
        this.presentacion["color"]=this.result;  
      }else{
        this.result = "pink";
        this.presentacion["color"]=this.result;  
      }

    })
    }else{
      this.presentToast("Debes de llenar el campo de nombre")
    }
  }

}
