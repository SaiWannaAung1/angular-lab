import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPostComponent } from './insert-post.component';

describe('InsertPostComponent', () => {
  let component: InsertPostComponent;
  let fixture: ComponentFixture<InsertPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
