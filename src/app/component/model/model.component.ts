import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  @Input() fromValue: any;
  @Output() modelClose= new EventEmitter();
  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  public modelClosefunc() {
    this.modelClose.emit(false);
  }

  public navigateToThanku() {
    this.route.navigate(['thanks']);
  }

}
