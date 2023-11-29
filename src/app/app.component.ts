import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  title = 'fe-class-scheduling';

  ngOnInit(): void {
    initFlowbite();
  }
}
