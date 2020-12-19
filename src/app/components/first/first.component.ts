import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  numIsTrue: boolean = false;
  totalvalue:number = 0;
  selectedType:string = "prime";

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('input') oninput() { this.inputNumber(); }
  inputNumber(){
    var ans:boolean;
    if (this.selectedType === 'prime'){
      ans = this.isPrime(this.totalvalue)
    }else{
      ans = this.isFibo(this.totalvalue)
    }
    this.numIsTrue = ans
  }
  calNumber(event:any,id:number){
    if (id=== 1){
      this.totalvalue = event.target.value;
    }else{
      this.selectedType = event.target.value;
    }
    var ans:boolean;
    if (this.selectedType === 'prime'){
      ans = this.isPrime(this.totalvalue)
    }else{
      ans = this.isFibo(this.totalvalue)
    }
    this.numIsTrue = ans
  }

  isPrime(num:number) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
  }
  isFibo(num:number){
    var a = 0, b = 1, f = 1;
    while(f < num){
        f = a + b;
        a = b;
        b = f;
    }
    if(num==0){
      return true;
    }else{
      return f == num;
    }
  }

}
