import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitularesPage } from './titulares.page';

describe('TitularesPage', () => {
  let component: TitularesPage;
  let fixture: ComponentFixture<TitularesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
