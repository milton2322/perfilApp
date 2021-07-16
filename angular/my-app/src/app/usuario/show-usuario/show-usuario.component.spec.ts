import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsuarioComponent } from './show-usuario.component';

describe('ShowUsuarioComponent', () => {
  let component: ShowUsuarioComponent;
  let fixture: ComponentFixture<ShowUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
