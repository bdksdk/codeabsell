import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KateqoriyaComponent } from './kateqoriya.component';

describe('KateqoriyaComponent', () => {
  let component: KateqoriyaComponent;
  let fixture: ComponentFixture<KateqoriyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KateqoriyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KateqoriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
