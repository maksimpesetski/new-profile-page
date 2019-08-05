## Test-First-Builders Overview

Test-First-Builders is a series of programming exercises designed to increase your problem solving skills and familiarity with JavaScript syntax. An understanding of basic concepts is expected, these concepts include:

- Data Types
- Functions
- Loops
- Variables
- Conditionals

Test-First-Builders will have you apply all the basic concepts and increase your understanding and confidence to problem solve. For each exercise, there will be a README.md that will provide an overview of the problem (and possibly a few additional hints on how to approach the problem).

## Assignment

To get a great overview of what TestFirst learning and development is watch the following video about [TestFirst](https://www.youtube.com/watch?v=8MRDJPHMpaQ).

For an introduction to Test-Driven Development, read the first three sections of [The Newbie's Guide to Test-Driven Development](http://code.tutsplus.com/tutorials/the-newbies-guide-to-test-driven-development--net-13835) ("What is Test-Driven Development?", "How does it work?", and "Great, but how is this better than regular testing?")

Let's warm up by learning to read tests and write code to match a test's expectations. Read more about the philosophy of Test-First Learning at [TestFirst.org](http://testfirst.org/about#whytestfirstteaching).

## Debugging Methods

The key skill here to practice is debugging JavaScript inside Chrome. You should become comfortable with these methods:

1.  Using the `console` via `console.log` and `debugger`
2.  Stepping through your JS in the Console and evaluating variables

This is a great blog post on the topic:

http://www.creativebloq.com/javascript/javascript-debugging-beginners-3122820
[Permalink](https://www.evernote.com/shard/s3/sh/3923d313-0199-4272-b589-8a8d397a94c5/b726f74c27265fc96bb8b185e13f9208)

### Before beginning your assignment, make sure you have completed these steps:

1. Forked & cloned the Builders-Test-First repository.
2. Installed Node and Testem.

### Getting Started:

1. Fork and then clone (from your account) the repository.

2. `cd` (change directories) so you are in the Builders-TestFirst directory in your terminal on your local machine.

3. Write your solution code in the `${problem-name}.js` file. Check and see if your code passes the test specs.

4. Run the test specs to test your code. Prior to starting the exercises, it was instructed that you are are responsible for your development environment. Follow the instructions below to run the test specs:

#### Option 1 - testem is globally installed

- If you have been running `testem` by running the `testem` command in your terminal, you are ready to go. Run `testem` to run the test specs. If you receive any errors or you don't have `testem` globally installed, refer to option 2.

```sh
  $ cd ${name-of-the-checkpoint-repository}
  $ testem
  TEST'EM 'SCRIPTS!
  Open the URL below in a browser to connect.
  http://localhost:7357/
```

<hr>

#### Option 2 - Install Testem Locally

If you don't have `testem` installed globally on your machine, complete the following steps:

1. Run the command:

```sh
$ npm install
```

Note: the command **needs to be executed inside of the checkpoint directory**.

2. After the installation is complete, when you want to run `testem` run the command:

```sh
npm run test
```

3. Here are all of the steps:

```sh
$ cd ${name-of-the-checkpoint-repository}
$ npm install
$ npm run test
TEST'EM 'SCRIPTS!
Open the URL below in a browser to connect.
http://localhost:7357/
```
