import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sobremim } from './sobremim';

describe('Sobremim', () => {
  let component: Sobremim;
  let fixture: ComponentFixture<Sobremim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sobremim],
    }).compileComponents();

    fixture = TestBed.createComponent(Sobremim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
