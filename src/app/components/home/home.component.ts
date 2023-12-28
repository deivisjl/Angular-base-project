import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { User } from 'src/app/models/user.model'; 
import { Store } from '@ngrx/store';
import { loadedUsers } from 'src/app/state/actions/user.actions';
import { loadedPosts } from 'src/app/state/actions/post.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports:[
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
      ],
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private homeService: HomeService
              , private router: Router
              , private store : Store<any>){}

  ngOnInit(): void 
  {
    this.getListOfUsers();
    //this.getListOfPosts();
  }

  getListOfUsers() 
  {
    this.homeService.getAllUsers()
    .subscribe(data => {
      this.store.dispatch(loadedUsers(
          { users: data }
      ));
      //this.users = data;
    });
  }

  getListOfPosts()
  {
    this.homeService.getAllPosts()
    .subscribe(data => {
      this.store.dispatch(loadedPosts(
        { posts: data }
      ));
    });
  }

  showDetailRecord(id:number)
  {
    this.router.navigate(['detail',id]);
  }
}
