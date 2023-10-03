import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTreeComponent } from './node-tree.component';

describe('NodeTreeComponent', () => {
  let component: NodeTreeComponent;
  let fixture: ComponentFixture<NodeTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeTreeComponent]
    });
    fixture = TestBed.createComponent(NodeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
