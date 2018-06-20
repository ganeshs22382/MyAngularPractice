import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableEntryComponent } from './mat-table-entry.component';

describe('MatTableEntryComponent', () => {
  let component: MatTableEntryComponent;
  let fixture: ComponentFixture<MatTableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
