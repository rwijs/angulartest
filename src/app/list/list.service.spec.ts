import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import createSpyObj = jasmine.createSpyObj;
import {HttpClient} from "@angular/common/http";

describe('ListService', () => {
  let service: ListService;
  const httpClientSpy = createSpyObj('HttpClient', ['get'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]});
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
