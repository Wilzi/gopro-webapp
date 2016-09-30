import angular from 'angular';
import 'angular-mocks';
import {hello} from './hello';

describe('hello component', () => {
  beforeEach(() => {
    angular
      .module('hello', ['app/hello.html'])
      .component('hello', hello);
    angular.mock.module('hello');
  });
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<hello>Loading...</hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
