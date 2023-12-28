import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { selectSideNavItem } from 'src/app/state/selectors/sidenav.selector';
import { Observable, take } from 'rxjs';
import { AppState } from 'src/app/state/reducers/index.reducers';
import { loadedSideNav } from 'src/app/state/actions/sidenav.action';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarComponent implements OnInit{

  constructor(private store: Store<AppState>)
  {

  }
  ngOnInit(): void 
  {
    
  }

  showSideNav()
  { 
    let state:Boolean = false;

    this.store.select(selectSideNavItem).pipe(take(1)).subscribe(
        s => state = s
    );

    this.store.dispatch(loadedSideNav({ open: !state }))
  }
}

