import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'localization';
  userName: string;
  playerNum: number;
  luckyAlert: boolean;
  luckyNumber: number;
  unluckyAlert: boolean;

  constructor(private translate : TranslateService){
    translate.addLangs(['en','hi','kn','ml','ta','te'])
    translate.setDefaultLang('en')
  }

  ngOnInit(){
  }

  switchLang(lang){
    let language =  lang.target.value
    this.translate.use(language);
  }

  getLuckyNumber(userName, playerNum) {
    if (!playerNum.errors) {
      this.luckyNumber = Math.floor(Math.random() * 10 + 1);
      this.userName = userName.value;
      this.playerNum = playerNum.value;
      if (this.playerNum == this.luckyNumber) {
        this.luckyAlert = true;
        this.unluckyAlert = false;
      } else {
        this.luckyAlert = false;
        this.unluckyAlert = true;
      }
    } else {
      return;
    }
  }
}
