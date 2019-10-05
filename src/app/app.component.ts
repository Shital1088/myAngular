import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  no1:number=0
no2:number=0
result:number=0;
name="Shital";
person='Mohan'
add(no1,no2)
{
  this.no1=+no1
  this.no2=+no2
  this.result=this.no1+this.no2
  console.log(this.result)
}

changeText(val)
{
  this.name=val;
}

}

export class StructrualComponent {
  person='Mohan'
  changeText="hi"   
  value=false
  friuits=['<mango ','banana','pinaple','orange']
  employees=[{id:'1',name:'raj',salary:'2345'},{id:'1',name:'kamal',salary:'2345'},]

  urls=['html','css','js','jquery']
  constructor() { }

  // ngOnInit() {
  // }
  toggle()
  {
    this.changeText="bye"

  }
  changeMe()
  {
   this.changeText="bye bye"

  }

}