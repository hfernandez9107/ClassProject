import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaApuestas } from './tabla-apuestas';

describe('TablaApuestas', () => {
  let component: TablaApuestas;
  let fixture: ComponentFixture<TablaApuestas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaApuestas],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaApuestas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
