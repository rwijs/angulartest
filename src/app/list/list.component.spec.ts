import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {ListService} from "./list.service";
import createSpyObj = jasmine.createSpyObj;

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const listServiceSpy = createSpyObj('ListService', ['getListItems'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [{provide: ListService, useValue: listServiceSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call listService.getListItems', () => {
      component.ngOnInit();
      expect(listServiceSpy.getListItems).toHaveBeenCalled();
    });
  });
});
