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
- Checking if the values are equal and from the same object - toBe;
- Testing if a value is truthy - toBeTruthy;
- Testing if a value is false - toBeFalsy;
- Checking if a value is true - toBeTrue;
- Checking if a value is false - toBeFalse;
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
- Mocking service methods with Stubs;
  ```
  In mock testing, a stub is a type of test double that replaces a real object with a simplified version that only provides the minimum necessary functionality required by the test. Stubs are used to isolate the code being tested from its dependencies and to control the behavior of those dependencies in a controlled way.

  Unlike mocks, which are used to verify the behavior of the code being tested, stubs are used to provide predetermined responses to specific method calls made during the test. This allows developers to simulate specific scenarios and test edge cases without having to create complex setups or rely on external resources.

  ```
 - Spying component methods with spyOn;
   
  ```
  In Jasmine, a "spy" is a test double or a mock object that can track the invocation of functions and their arguments. In a Jasmine mock test, you can use a spy to create a test double for a function or object, and then assert that the function was called with the expected arguments or that it returned the expected value.
  ```

  - Spying service methods with spyOn;
  ```
  spyOn in Jasmine is used to create spies that monitor and verify the behavior of functions or methods during unit testing.
  ```

  - Spying service methods with spyOnProperty;
  ```
  SpyOnProperty in Jasmine is used to create a spy on a property of an object, which allows you to monitor and control the behavior of the property during unit testing.
  ```
  - Create a spy function with jasmine.createSpy

  ```
  The jasmine.createSpy method in Jasmine is used to create a spy function that can track its invocations, arguments, and return values during unit testing.
  ```
  - Create a spy object with jasmine.createSpyObj
  ```
  The jasmine.createSpyObj method in Jasmine is used to create a spy object with multiple spy functions that can track their invocations, arguments, and return values during unit testing.
  ```