import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChildItemComponent } from './nested-drag-drop/components/child-item/child-item.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { NodeTreeComponent } from './nested-drag-drop/components/node-tree/node-tree.component';
import { AnotherDropCompartmentComponent } from './nested-drag-drop/components/another-drop-compartment/another-drop-compartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildItemComponent,
    NodeTreeComponent,
    AnotherDropCompartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTreeModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
