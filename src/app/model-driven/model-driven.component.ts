import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
