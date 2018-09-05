import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //directives:[ArticleComponent],
  template:`
   <form class="ui large form segment">
        <h3 class="ui header">Login: </h3>
        <div class="field">
            <label for="username">User Name:</label> 
            <input name="username" #newtitle>
        </div>
        <div class="field">
            <label for="password">Password:</label>
            <input name="password" #newlink>
        </div>
        <button (click)="addArticle(newtitle, newlink)"
              class="ui positive right floated button">
        Submit link
        </button>
		  
        <div class="ui grid posts">
        
        </div>
    </form>

	<app-mycomp-1></app-mycomp-1>
	<app-messages></app-messages>
	
	
	<nav>
	  <a routerLink="/comp1">组件1</a>
	  <a routerLink="/">主页</a>
	</nav>
	
	<router-outlet></router-outlet>
	`
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
/*
@Component({
    selector: 'sel_1',
    host: {
        class: 'row'
    },
    template: `
    <div class="four wide column center aligned votes"> 
        <div class="ui statistic">
            <div class="value"> {{ votes }}
            </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ link }}"> {{ title }}
        </a>
        <ul class="ui big horizontal list voters">
            <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon"></i> upvote
                </a> 
            </li>
            <li class="item">
                <a href (click)="voteDown()">
                    <i class="arrow down icon"></i>
                        downvote
                </a> 
            </li>
        </ul> 
    </div>
    ` 
})
class ArticleComponent {
    votes: number;
    title: string;
    link: string;
    constructor() {
        this.title = 'Angular 2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }
    voteUp() {
        this.votes++;
    }
    voteDown() {
        this.votes--;
    }
}*/
export class AppComponent {
  title = 'app';
  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding user name: ${title.value} and password: ${link.value}`);
  }
}
