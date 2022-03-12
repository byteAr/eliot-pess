import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctelesComponent } from './cocteles.component';

describe('CoctelesComponent', () => {
  let component: CoctelesComponent;
  let fixture: ComponentFixture<CoctelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
