import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { AddRElativesComponent } from './add-relatives.component';

describe('AddRElativesComponent', () => {
  let component: AddRElativesComponent;
  let fixture: ComponentFixture<AddRElativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRElativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRElativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
