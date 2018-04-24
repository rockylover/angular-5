import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAsClassComponent } from './import-as-class.component';

describe('ImportAsClassComponent', () => {
  let component: ImportAsClassComponent;
  let fixture: ComponentFixture<ImportAsClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAsClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAsClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
