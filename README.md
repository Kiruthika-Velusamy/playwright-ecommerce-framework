# Playwright E-Commerce Test Automation Framework

End-to-end test automation framework for e-commerce applications built with Playwright and TypeScript.

## Tech Stack
| Category | Technology |
|----------|-----------|
| Test Framework | Playwright |
| Language | TypeScript |
| BDD | Cucumber |
| Design Pattern | Page Object Model |
| Test Data | JSON files |
| Reporting | HTML + JSON |
| Version Control | Git + GitHub |


## CI/CD Pipeline

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
