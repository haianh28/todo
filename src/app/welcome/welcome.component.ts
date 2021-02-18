import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name = '';
  constructor(private acRoute : ActivatedRoute) { }

  ngOnInit() {
  this.name =  this.acRoute.snapshot.params['name']
  }

}
