import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl:  './navbar.component.css',
})
export class NavbarComponent {

}
