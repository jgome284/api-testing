# API Requests

This project provides a simple test server to make API Requests. Some tools to test the API include curl if you prefer testing via your command line interface or POSTMAN which simplifies requests via a GUI.

## Testing

To learn more about testing, reference [this article](https://www.taniarascia.com/making-api-requests-postman-curl/), which explains API testing via POSTMAN or curl.

Another great place to try API testing is [JSONPlaceholder.com](https://jsonplaceholder.typicode.com/). It is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.

## Endpoints

This project's server is setup with 3 endpoints which are detailed below. To start the server run the following:
> node server.js

### localhost:4000/users

**GET** - get users
> curl localhost:4000/users

**Note:** You can use curl -i to get more information from the headers.

**POST** - add user
> curl -X POST -H "Content-Type: application/json" -d '{"user": {"username":"Joe Original", "password":"OriginalPassword1"}}' localhost:4000/users

### localhost:4000/users/:id

**GET** - get user from database by id
> curl localhost:4000/users/1
