import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {

  country = "";
  result = [];
  result2 = [];
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

  Country(){
    if(this.country != ""){
      this.result.splice(0, this.result.length);
      this.http.get("http://universities.hipolabs.com/search?country="+this.country).subscribe(data => {

          this.result2.push(data);
          this.result2.forEach(element => {
            for(let i = 0; i < element.length; i++){
              this.result.push(data[i]);
            }
          });
      })
    }else{
      this.presentToast("Debes de llenar el campo de país");
    }
  }

}
