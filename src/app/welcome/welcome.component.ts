import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:any
  name = ''

  // Activated Route
  constructor(private route:ActivatedRoute, private service:WelcomeDataService) { }

  ngOnInit() {
      this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldService());

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(responce => this.handleSuccessfulResponce(responce),error => this.handleErrorResponce(error));
    
    // console.log('last line of getWelcomeMessage');
    
    //console.log("get welcome message");
  }

  handleSuccessfulResponce(responce: any) {
  this.welcomeMessageFromService = responce.message
    // console.log(responce);
    // console.log(responce.message);
  }

  handleErrorResponce(error: any) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }

}
