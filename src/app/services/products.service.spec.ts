import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpCMock: jasmine.SpyObj<any>;

  beforeEach(() => {
    httpCMock = {
      get: jasmine.createSpy(),
      post: jasmine.createSpy(),
    }
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpCMock}
      ]
    });
    service = TestBed.inject(ProductsService);
    service.url = 'url';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return categories', () => {
    expect(service.getCategories()).toEqual(['vegetables', 'fruits', 'greens', 'beans', 'nuts', 'seasonal']);
  });


  it('should return getAvailabilityOpts', () => {
    expect(service.getAvailabilityOpts()).toEqual([
      {label: 'all products', value: 'all'},
      {label: 'in stock', value: 'in stock'},
      {label: 'out of stock', value: 'out of stock'}
    ]);
  })

  it('should return currencies', () => {
    expect(service.getCurrencies()).toEqual([
      {label: 'RON', value: 'ron'},
      {label: 'EURO', value: 'eur'},
      {label: 'USD', value: 'usd'},
    ]);
  });

  it('should return currency symbol', () => {
    expect(service.getCurrencySymbol('eur')).toEqual('€');
  });

  it('should call farmer get all api', () => {
    service.getFarmersProducts(1);
    expect(httpCMock.get).toHaveBeenCalledWith(`url/product/farmer/1/all`);
  });

  it('should call farmer add api', () => {
    service.addProduct(1, {} as Product);
    expect(httpCMock.post).toHaveBeenCalledWith(`url/product/farmer/1/add`, {});
  });

  it('should call product edit api', () => {
    service.editProduct({id: 1} as Product);
    expect(httpCMock.post).toHaveBeenCalledWith(`url/product/update/1`, {id: 1});
  });

});
