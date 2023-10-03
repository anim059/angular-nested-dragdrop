import { Injectable } from '@angular/core';
import { Data, Item } from '../models/drag-drop-item.model';

@Injectable({
  providedIn: 'root'
})
export class DragdropListService {
  private rootNode: Item;
  private ids:any[] = []
  constructor() {
    this.rootNode = { uId: '-1', name: 'rootNode', children: Data } as Item;
   }

  setRootNode(rNode:any): void{
    this.rootNode = rNode
  }
  
  getIds(){
    return this.getIdsRecursive(this.rootNode);
  }

  getIdsRecursive(item: Item): string[] {
    let ids = [item.uId];
    item.children.forEach(childItem => {
      ids = ids.concat(this.getIdsRecursive(childItem));
    });
    return ids;
  }

}
