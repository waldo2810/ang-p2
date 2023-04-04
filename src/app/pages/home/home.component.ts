import { Component } from '@angular/core';
import { StartService } from 'src/app/shared/start/start.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public starwars: any;

  constructor(private _startService: StartService) {}

  getAll(): void {
    this._startService.getAll().subscribe((item) => {
      this.starwars = item;
    });
  }
}
