import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailHeroesPage } from './detail-heroes.page';

describe('DetailHeroesPage', () => {
  let component: DetailHeroesPage;
  let fixture: ComponentFixture<DetailHeroesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailHeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
