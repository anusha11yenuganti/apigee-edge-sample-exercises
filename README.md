# APIGW PROXY TEMPLATE

This repository is used as a template for APIGW proxy repositories

Folder structure options and naming conventions for APIGW proxies as follows

### A typical top-level directory layout

    .
    ├── docs                   # Apigee Learning Guide
    ├── apiproxy                # Source files
    ├── tests                  # Automated tests - Postman scripts
    └── README.md

This proxy template repositories will be used by apigee-edge-sample-proxy

### Test execusion Guide: The tests have been created; simply replace the variable and execute them in your local environment after deployment.

In the tests, {env} has to be replaced with the deployment environment details

current url : https://{env}/employee-management/v1

Ex. https://org_name-test.apigee.net/employee-management/v1

Where:

org_name is the organization name that Apigee assigned to you when you created your Apigee account.
-test is the environment. You deployed your new proxy to the "test" environment in Step 1: Create an API proxy.
/getstarted is the Proxy Base Path.
For example:

curl https://ahamilton-eval-test.apigee.net/getstarted
