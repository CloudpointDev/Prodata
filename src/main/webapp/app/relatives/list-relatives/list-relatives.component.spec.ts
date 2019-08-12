import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { ListRElativesComponent } from './list-relatives.component';

describe('ListRElativesComponent', () => {
  let component: ListRElativesComponent;
  let fixture: ComponentFixture<ListRElativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRElativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRElativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
