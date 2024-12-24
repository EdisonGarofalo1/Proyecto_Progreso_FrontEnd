import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUsuariosComponent } from './save-usuarios.component';

describe('SaveUsuariosComponent', () => {
  let component: SaveUsuariosComponent;
  let fixture: ComponentFixture<SaveUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
