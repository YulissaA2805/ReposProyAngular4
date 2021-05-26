import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaBlogListComponent } from './entrada-blog-list.component';

describe('EntradaBlogListComponent', () => {
  let component: EntradaBlogListComponent;
  let fixture: ComponentFixture<EntradaBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
