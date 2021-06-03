import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaBlogUnicoComponent } from './entrada-blog-unico.component';

describe('EntradaBlogUnicoComponent', () => {
  let component: EntradaBlogUnicoComponent;
  let fixture: ComponentFixture<EntradaBlogUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaBlogUnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaBlogUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
