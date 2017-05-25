import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.css']
})
export class TechStackComponent implements OnInit {
  techStackItem = 'JavaScript';
  techStack = ['Java', 'Angular', 'HTML', 'CSS'];
  techStackItemCreated = false;
  techStackItemCreationStatus = 'No tech stack item was added';

  constructor() { 
  }

  ngOnInit() {
  }

  onCreateTechStackItem() {
    this.techStackItemCreated = true;
    this.techStack.push(this.techStackItem);
    this.techStackItemCreationStatus = 'Tech stack item was created! Name is ' + this.techStackItem;
  }

//   onUpdateServerName(event: Event) {
//     //console.log(event);
//     this.serverName = (<HTMLInputElement>event.target).value;
//   }

}
