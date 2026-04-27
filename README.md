# Playwright E-Commerce Test Automation Framework

![Tests](https://github.com/Kiruthika-Velusamy/playwright-ecommerce-framework/actions/workflows/playwright.yml/badge.svg)


# About

End-to-end test automation framework for an e-commerce 
application built with Playwright and TypeScript. 
Covers UI automation, BDD, data-driven testing, 
security testing, CI/CD and Docker containerisation.

##Tech Stack
| Category | Technology |
|----------|-----------|
| Test Framework | Playwright |
| Language | TypeScript |
| BDD | Cucumber |
| Design Pattern | Page Object Model |
| Test Data | JSON files |
| Reporting | HTML + JSON |
| Version Control | Git + GitHub |


# How to Run

## Locally
### Install dependencies
npm install
npx playwright install

### Run all tests
npx playwright test

### Run with browser visible
npx playwright test --headed

### View HTML report
npx playwright show-report reports/html

## BDD Cucumber Tests
npm run test:login
npm run test:inventory
npm run test:cart
npm run test:checkout

## In Docker
### Build and run all tests in container
docker compose up --build


# CI/CD Pipeline

Tests run automatically on every push and pull request to main.

Pipeline steps:
1.Checkout code
2.Setup Node.js 20
3.Install dependencies
4.Install Playwright browsers
5.Run all tests
6.Upload HTML report as artifact
7.Upload test results as artifact

Branch protection enabled — tests must pass before 
any merge to main is allowed.


## Author

Kiruthika Velusamy | QA Automation Engineer
[GitHub](https://github.com/Kiruthika-Velusamy)