# Unit Testing with Angular 14 (Jasmine and Karma)

### Concept of a test suite in Angular
- Test suite - describe;
  ```
  The describe function in Angular tests is used to group related test cases into a suite for better organization and readability.
  ```
- Specifications of these - it;
  ```
  The it function in Angular tests is used to define an individual test case with a specific expectation.
  ```
- Before each test - beforeEach;
 ```
 The beforeEach function in Angular tests is used to set up a common state or configuration that should be applied to each individual test case in a describe block.
 ```
- After each test - afterEach;
  ```
  The afterEach function in Angular tests is used to perform cleanup or reset tasks after each individual test case in a describe block.
  ```
- Before all - beforeAll;
  ```
  The beforeAll function in Angular tests is used to set up a common state or configuration that should be applied once before all the test cases in a describe block are run.
  ```
- Configuring the test modules - TestBeb.
  ```
  The TestBed in Angular tests is a utility that provides a test environment to configure and create instances of components and services to be tested.
  ```
### Solving common problems in an application
- Error when working with requests - No provider for HttpClient;
  
  ```
  When writing tests for a service that uses the Angular HttpClient to make HTTP requests, it is recommended to import the HttpClientTestingModule instead of the HttpClientModule.
  The main reason for this is that the HttpClientTestingModule provides a complete test implementation of the HttpClient, which can be easily configured and used in unit tests. This test implementation is designed to simulate the network and can be configured to return simulated responses for specific HTTP requests.
  On the other hand, the HttpClientModule provides a real implementation of the HttpClient, which connects to the real network and makes real HTTP requests. This makes tests harder to write and more prone to failure due to network issues or lack of connectivity.
  Therefore, by importing the HttpClientTestingModule, we can easily simulate the HTTP requests and ensure that our unit tests are more reliable and predictable, without relying on the network or other external resources.

- Material Angular modal error - No provider for MatDialog;
- Error when working with forms - No provider for FormBuilder;
- Error working with ngModel - No provider for NgControl found in NodeInjector.

Debugging the tests
- Focusing on a single test 
  ```
  Use fdescribe instead of describe to focus on just one test;
- Focusing on a single specification;
  ```
  Use fit instead of it to focus on just one it block;
- Running tests from a single file 
  ```
  Use the command:
  ng test --include **/component-name.component.spec.ts
- Adding breakpoints;
- Using debugger;
- Jasmine's Debugger Context.


### Testing expectations - Jasmine Matchers
- Checking if the values are equal - toEqual;
- Verificando se os valores são iguais e do mesmo objeto - toBe;
- Testando se um valor é truthy - toBeTruthy;
- Testando se um valor é falsy - toBeFalsy;
- Verificando se um valor é true - toBeTrue;
- Verificando se um valor é falso -  toBeFalse;
- Testando se um valor não é true - not;
- Checking if a value is contained in an array or string - toContain;
- Checking if a value has been defined - toBeDefined;
- Checking if a value has not been defined - toBeUndefined;
- Testing if a value is null - toBeNull;
- Testing if a value is NaN - toBeNaN;
- Checking if a value is greater than another - toBeGreatherThan;
- Testing if one value is less than another - toBeLessThan;
- Checking if a number is next to another - toBeCloseTo;
- Testing if a value is equal based on a regular expression - toMatch;
- Checking if a function threw an error - toThrow.

### Mocking component and service methods
```
In Angular, mocking service methods with Mocks allows developers to isolate the components being tested from their dependencies. This makes it easier to test the components in isolation and to identify and fix issues. Mocks can be created using testing frameworks such as Jasmine or Jest, and they can be used to simulate the behavior of the actual service methods.
```
- Mocking service methods with Mocks;
  ```
  In software testing, a mock object is a test double that is used to simulate the behavior of real objects in the system being tested. It is a simplified version of a real object that allows developers to test their code in isolation from the rest of the system.

  Mock objects are particularly useful in unit testing, where they can be used to replace complex or external dependencies, such as databases or web services, with simple objects that behave in a predictable way. This allows developers to test their code without having to worry about the behavior of the external dependencies.

  Mock objects are also used in behavior-driven development (BDD) and test-driven development (TDD), where they can be used to define the behavior of objects before they are implemented. This can help to ensure that the objects are implemented correctly and that they behave as expected.
  ```
