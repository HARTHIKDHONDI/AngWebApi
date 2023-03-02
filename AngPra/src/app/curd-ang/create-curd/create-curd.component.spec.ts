import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCurdComponent } from './create-curd.component';

describe('CreateCurdComponent', () => {
  let component: CreateCurdComponent;
  let fixture: ComponentFixture<CreateCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
