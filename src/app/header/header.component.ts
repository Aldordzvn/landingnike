import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nikeLogo = 'img/nike.svg';
  userImg = 'img/user.svg';
  hamburguerImg = 'img/hamburguer.svg';
  linkedinImg = 'img/linkedin.svg';
  githubImg = 'img/github.svg';
  leftArrowImg = 'img/leftArrow.svg';
  toggleMenu : boolean = false;
  

  toggleHamburguer(){
    this.toggleMenu = !this.toggleMenu;
  }
}
