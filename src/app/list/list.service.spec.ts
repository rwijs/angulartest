import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import {HttpClient} from "@angular/common/http";
import createSpyObj = jasmine.createSpyObj;
import {of} from "rxjs";

describe('ListService', () => {
  let service: ListService;
  const httpClientSpy = createSpyObj('HttpClient', ['get'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: httpClientSpy}]
    });
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getListItems', () => {
    it('should return an array of ListItems', (done) => {
      httpClientSpy.get.and.returnValue(of([]))
      service.getListItems().subscribe((result) => {
        expect(result).toEqual([]);
        expect(httpClientSpy.get).toHaveBeenCalledOnceWith('/assets/list.content.json');
        done();
      })
    });
  });
});
