import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdAngComponent } from './curd-ang.component';

describe('CurdAngComponent', () => {
  let component: CurdAngComponent;
  let fixture: ComponentFixture<CurdAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdAngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
