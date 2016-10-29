import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

    person: {
        photoUrl: 'google.com',
        emailAddress: 'mail@mail.com',
        birthday: 'ayer'
    }

  constructor() { }

  ngOnInit() {
  }

}
