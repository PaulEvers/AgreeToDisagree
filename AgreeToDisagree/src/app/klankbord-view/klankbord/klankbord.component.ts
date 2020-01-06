import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-klankbord',
  templateUrl: './klankbord.component.html',
  styleUrls: ['./klankbord.component.scss']
})
export class KlankbordComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getLatestProposition();
  }

}
