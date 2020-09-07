import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiCipherComponent } from './ascii-cipher.component';

describe('AsciiCipherComponent', () => {
  let component: AsciiCipherComponent;
  let fixture: ComponentFixture<AsciiCipherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiCipherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
