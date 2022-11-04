import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {

  name: string = "";
  age: string = "";
  imagen: string = "";

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

  Age() {
    if (this.name != "") {
      this.http.get("https://api.agify.io/?name=" + this.name).subscribe(data => {

        if (data["age"] >= 1 && data["age"] < 18) {
          console.log("Eres joven y esta es tu edad " + data["age"]);
          this.age = data["age"];
          this.imagen = "assets/img/joven.jpg";

        } else if (data["age"] >= 18 && data["age"] < 70) {
          console.log("Eres adulto y esta es tu edad " + data["age"]);
          this.age = data["age"];
          this.imagen = "assets/img/adulto.jpg";

        } else if (data["age"] > 70) {
          console.log("Eres anciano y esta es tu edad " + data["age"]);
          this.age = data["age"];
          this.imagen = "assets/img/viejo.png";
        }

      })
    }else{
      this.presentToast("Debes de llenar el campo de nombre")
    }
  }

}
