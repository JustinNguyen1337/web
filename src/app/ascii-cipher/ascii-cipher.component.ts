import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-ascii-cipher',
  templateUrl: './ascii-cipher.component.html',
  styleUrls: ['./ascii-cipher.component.css']
})
export class AsciiCipherComponent implements OnInit {
inputText: string;
key: string;
outputText: string;
inputText2: string;
key2: string;
outputText2: string;
  
constructor(private titleService: Title, appComponent: AppComponent) {
  this.titleService.setTitle("Ascii Encoder");
  appComponent.title = "Ascii Encoder";
}

  encode(){
    var plaintext = this.inputText
    var code = this.key;
    var state:number[] = [0];
    var final: string = "";
    var charText:number[] = [];
    for (var k = 1; k < 256; k++){
      state.push(k);
    }

    
    var bitKeyString = parseInt(code, 10).toString(2);
    var bitKey = bitKeyString.split("");
    bitKey.reverse();
    for (var k = bitKeyString.length; k < 64; k++){
      bitKey.push("0");
    }
    var length = plaintext.length;
    
    for (var k = 0; k < length; k++){
      charText.push(plaintext.charCodeAt(k));
      
    }


    if (length%4 != 0){
      for (var k = 4; k < (4 - length%4);  k++){
        charText.push(0);
        length++;
      }
    }
    
    var j = 0;
    var i = 0;
    for (var n = 0; n < 256; ++n){
      var k = i % 64;
      j = (j + state[i] + +bitKey[k])%256;
      var temp = state[j];
      state[j] = state[i];
      state[i] = temp;
      i = (i+1)%256;
    }
    
    for (var n = 0; n < length; n++){
      i = (i+1)%256;
      j = (j + state[i])%256;
      var temp = state[j];
      state[j] = state[i];
      state[i] = temp;
      var r = (state[i] + state[j])%256;
      var R = state[r];
      charText[n] = charText[n] ^ R;
    }
    
   
    var mask = 1;
    var askiDECIMAL: number[] = [];
    for (var k = 0; k < length/4; k++){
      var binAski: number[] = [];
      for (var n = 0; n < 4; ++n){
        
        for (var p = 7; p > -1; --p){
          if ((charText[n + 4*k] & (mask << p)) >> p){
            binAski[n*8 + 7-p] = 1;
          } else {
            binAski[n*8 + 7-p] = 0;
          }
        }
        
      }
      
      var b = 0;
      for (var a = 0; a < 32; a++){
        if (binAski[a] == 1) {
          b += Math.pow(2, 31-a);
        }
      }
      askiDECIMAL.push(b);
    }
    
    
    
    for (var k = 0; k < length/4; k++){
      for (var c = 0; c < 5; c++){
        var d = Math.pow(85,4-c);
        final = final + String.fromCharCode((askiDECIMAL[k] - askiDECIMAL[k]%d)/d + 33);
        askiDECIMAL[k] -= d * ((askiDECIMAL[k] - askiDECIMAL[k]%d)/d);
      }
    }
    this.outputText = final;
  }
  
  decode(){
    var plaintext = this.inputText2
    var code = this.key2;
    var bit32: number[] = [];
    var finalVal: number[] = [];
    var length = plaintext.length;
   
    for (var k = 0; k < length/5; k++){
      var binary: number[] = [];
      var p = 0;
      for (var c = 0; c < 5; ++c){
        p += ((plaintext.charCodeAt(k*5+c)-33) * Math.pow(85, 4-c));
      }
      bit32.push(p);
      
      for (var h = 0; h < 32; ++h){
        var l = (bit32[k] - bit32[k]%Math.pow(2,31-h))/Math.pow(2,31-h);
        if (l != 0){
          bit32[k] -= Math.pow(2, 31-h);
        }
        binary.push(l);
        
      }
      for (var d = 0; d < 4; d++){
        var u = 0;
        for (var f = 0; f < 8; ++f){
          u += binary[d*8 + f] * Math.pow(2, 7-f);
        }
        finalVal[d + k*4] = u;
        
      }
    }
    
    
    var state:number[] = [0];
    for (var k = 1; k < 256; k++){
      state.push(k);
    }

    var bitKeyString = parseInt(code, 10).toString(2);
    var bitKey = bitKeyString.split("");
    bitKey.reverse();
    for (var k = bitKeyString.length; k < 64; k++){
      bitKey.push("0");
    }

    var j = 0;
    var i = 0;
    for (var n = 0; n < 256; ++n){
      var k = i % 64;
      j = (j + state[i] + +bitKey[k])%256;
      var temp = state[j];
      state[j] = state[i];
      state[i] = temp;
      i = (i+1)%256;
    }
    var finalText: string = "";
    for (var n = 0; n < length/5*4; n++){
      i = (i+1)%256;
      j = (j + state[i])%256;
      var temp = state[j];
      state[j] = state[i];
      state[i] = temp;
      var r = (state[i] + state[j])%256;
      var R = state[r];
      finalText = finalText + String.fromCharCode(finalVal[n] ^ R);
    }
    
    this.outputText2 = finalText;
  }

  updateInput(event: any) { 
    this.inputText = event.target.value;
  }
  updateKey(event: any){
    this.key = event.target.value;
  }
  updateKey2(event: any){
    this.key2 = event.target.value;
  }
  updateInput2(event: any){
    this.inputText2 = event.target.value;
  }


  ngOnInit() {
  }

}
