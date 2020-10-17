import { Component} from '@angular/core';
import {faFrown} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent{

  faFrown = faFrown;

  constructor() { }

}
