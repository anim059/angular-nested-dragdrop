import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data, Item } from './nested-drag-drop/models/drag-drop-item.model';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DragdropListService } from './nested-drag-drop/service/dragdrop-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  public rootNode: Item;
  public get connectedTo(): string[] {
    return this.dragdropListService.getIds().reverse();
  }

  constructor(private dragdropListService : DragdropListService) {
    this.rootNode = { uId: '-1', name: 'rootNode', children: Data } as Item;
  }

  onDragDrop = (event: CdkDragDrop<Item[]>) => {
    console.log(event);
    console.log('parent');
   
  };

}
