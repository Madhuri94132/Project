import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics';
  fontColor ="blue";
  sayHelloId= 2;
  message="Hello World";
  canClick=false;
  canEdit=false;
  sayMessage(){
    alert(this.message);
  }

  condition=true;
  onEditClick(){
    this.canEdit= !this.canEdit;
    if(this.canEdit){
      this.message="I am from If"
    }
    else {
      this.message="I am from else!"
    }
  }
}
                                                                                                                    
