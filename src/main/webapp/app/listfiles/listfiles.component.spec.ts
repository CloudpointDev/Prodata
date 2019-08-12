import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfilesComponent } from './listfiles.component';

describe('ListfilesComponent', () => {
  let component: ListfilesComponent;
  let fixture: ComponentFixture<ListfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
