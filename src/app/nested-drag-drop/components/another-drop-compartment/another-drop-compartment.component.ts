import { CdkDragDrop, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-another-drop-compartment',
  templateUrl: './another-drop-compartment.component.html',
  styleUrls: ['./another-drop-compartment.component.css']
})
export class AnotherDropCompartmentComponent {

  ngOnInit(): void {
  }

  dropzoneEntered(event: CdkDragEnter<any[]>): void {
    const element = event.container.element.nativeElement;
    element.style.backgroundColor = '#b6dcb6';
  }

  dropzoneExited(event: CdkDragExit<any[]>): void {
    const element = event.container.element.nativeElement;
    element.style.backgroundColor = '#ffffff';
  }

  Drop(event: CdkDragDrop<any[]>): void {
    const element = event.container.element.nativeElement;
    element.style.backgroundColor = '#ffffff';
    const TBLITEM = event.item.data;
    console.log('another');
    console.log(event);
    
    
  }

}
