# End-to-End Testing with WebdriverIO, Mocha and JS language.

This is a sample project that demonstrates how to write end-to-end tests using WebdriverIO, Mocha and JS language.

In order to study the tool, the site was used:
http://the-internet.herokuapp.com/

## Installation
To install the dependencies, run:

```
npm install
```

## Running the Tests
To run all tests, run:

```
npm test
```
To run specific test, run:
```
npm test -- --spec test/specs/dynamic_controls.js
```

This will start the tests in the Chrome browser by default. You can change the browser by modifying the capabilities object in wdio.conf.js.

## Writing Tests
The tests are located in the `test` directory. Each test file should export a `describe` block that contains one or more `it` blocks. The `describe` block should contain a description of the test suite, and the `it` blocks should contain descriptions of individual test cases.

To interact with the web page, you can use the [WebdriverIO API](https://webdriver.io/docs/api) to find and manipulate elements on the page. It is recommended to use the Page Object pattern to organize your tests and keep them maintainable.


## Running Tests in Parallel
You can run the tests in parallel by setting the `maxInstances` property in `wdio.conf.js.`Here is an example that sets the maximum number of instances to 2:

```
maxInstances: 2
```

## Generating an Allure Report
To generate an Allure report, run the following command after running the tests:

```
allure generate allure-results/ --clean && allure open
```

This will generate a report in ./allure-report directory, and open it in your browser.

## Conclusion
This is just a basic introduction to end-to-end testing with WebdriverIO, Mocha, and JS. There are many more features and options available, so be sure to check the documentation :)