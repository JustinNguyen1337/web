import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-caesar-cipher',
  templateUrl: './caesar-cipher.component.html',
  styleUrls: ['./caesar-cipher.component.css']
})
export class CaesarCipherComponent implements OnInit {
  inputText: string;
  code: number;
  outputText: string;
  outputText2: string;
  inputText2: string;
  code2: number;


  constructor(private titleService: Title, appComponent: AppComponent) {
    this.titleService.setTitle("Caesar Cipher");
    appComponent.title = "Caesar Cipher";
  }
  


  scramble(shift: number, text: string){
    var finalString = "";
    shift %= 26;
    for (var k = 0; k < text.length; k++){
      var temp = text.charCodeAt(k);
      if (((temp > 64) && (temp < 91)) || ((temp > 96) && (temp < 123))){
        temp += Number(shift);
        if (((temp > 90) && (text.charCodeAt(k) < 91)) || ((temp > 122) && (text.charCodeAt(k) > 96))){
          temp -= 26;
        } else if (((temp < 65) && (text.charCodeAt(k) < 91)) || ((temp < 97) && (text.charCodeAt(k) > 96))) {
          temp += 26;
        }
        finalString = finalString + String.fromCharCode(temp);
      } else {
        finalString = finalString + text.charAt(k);
      }
      
    }
    return finalString;
  }
 
  updateInput(event: any) { 
    this.inputText = event.target.value;
  }
  updateCode(event: any){
    this.code = event.target.value;
  }
  updateCode2(event: any){
    this.code2 = (-1)*Number(event.target.value)
  }
  updateInput2(event: any){
    this.inputText2 = event.target.value;
  }
   
  cipher(){
    this.outputText = this.scramble(this.code, this.inputText);
  }
  decipher(){
    this.outputText2 = this.scramble(this.code2, this.inputText2);
  }
  
  ngOnInit() {
  }

}
