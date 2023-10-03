import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../../models/drag-drop-item.model';
import { DragdropListService } from '../../service/dragdrop-list.service';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildItemComponent {
  @Input() item!: Item;
  public get connectedTo(): string[] {
    return this.dragdropListService.getIds().reverse();
  }

  constructor(private dragdropListService : DragdropListService) {
  }

  public onDragDrop(event: CdkDragDrop<Item[]>): void {
    console.log(this.connectedTo);
    
    console.log('child');
    console.log(this.item.uId);
    console.log(event);
  
  }
}
