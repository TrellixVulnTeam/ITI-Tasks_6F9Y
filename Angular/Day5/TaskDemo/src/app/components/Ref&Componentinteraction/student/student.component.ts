import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [],
})
export class StudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // @Input() studList: { fname: string; lname: string }[] = [];
  @Input() ourStudent: any;
}
