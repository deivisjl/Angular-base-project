import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadedSideNav } from 'src/app/state/actions/sidenav.action';
import { Observable } from 'rxjs';
import { selectSideNavItem } from 'src/app/state/selectors/sidenav.selector';
import { Actions } from '@ngrx/effects';
import { AppState } from 'src/app/state/reducers/index.reducers';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
  imports: [RouterModule, MatSidenavModule, NgIf, MatButtonModule, MatTreeModule, MatIconModule],
})
export class SidenavComponent  implements OnInit, AfterViewInit {
  showFiller = true;
  @ViewChild('drawer') sideNavMenu!: MatSidenavContainer;
  sideNavState$: Observable<Boolean> = new Observable();

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  loadItems$: Observable<Boolean> = new Observable();
  state: Boolean = false;

  constructor(private store : Store<AppState> ) {
    this.dataSource.data = TREE_DATA;

    this.loadItems$ = this.store.select(selectSideNavItem);
  }
  
  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.sideNavMenu.open();
      this.store.dispatch(loadedSideNav({ open: true }))

      this.loadItems$.subscribe(
        (statusSideNav) => {
          statusSideNav ? this.sideNavMenu.open() : this.sideNavMenu.close()
        }
      );

    }, 2); 
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
