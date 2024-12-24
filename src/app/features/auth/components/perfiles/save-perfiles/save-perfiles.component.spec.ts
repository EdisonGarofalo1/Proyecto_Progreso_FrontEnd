import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePerfilesComponent } from './save-perfiles.component';

describe('SavePerfilesComponent', () => {
  let component: SavePerfilesComponent;
  let fixture: ComponentFixture<SavePerfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavePerfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
