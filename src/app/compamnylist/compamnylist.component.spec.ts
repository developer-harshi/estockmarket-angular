import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompamnylistComponent } from './compamnylist.component';

describe('CompamnylistComponent', () => {
  let component: CompamnylistComponent;
  let fixture: ComponentFixture<CompamnylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompamnylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompamnylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
