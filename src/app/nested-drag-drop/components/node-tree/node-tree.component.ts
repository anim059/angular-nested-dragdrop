import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DragdropListService } from '../../service/dragdrop-list.service';


const TREE_DATA: any[] = [
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

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent {
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  connectedToLists: string[] = [];

  public get connectedTo(): string[] {
    return this.dragdropListService.getIds().reverse();
  }

  constructor(private dragdropListService : DragdropListService) {
    this.dataSource.data = TREE_DATA;
    this.connectedToLists = [...this.connectedTo,'another_drop_zone'];
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
}
