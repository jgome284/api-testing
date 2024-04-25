# API Requests

This project provides a simple server to test and learn about API requests. Some tools to test the API include curl if you prefer testing via your command line interface or POSTMAN which simplifies requests via a GUI. Otherwise, if you like development on VS Code, thunderclient is a viable alternative which can be downloaded as an extension.

For reference, sample curl requests are provided in the Endpoints section below.

## Testing

To learn more about testing, reference [this article](https://www.taniarascia.com/making-api-requests-postman-curl/), which explains API testing via POSTMAN or curl.

Another great place to try API testing is [JSONPlaceholder.com](https://jsonplaceholder.typicode.com/). It is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.

## Endpoints

This project's server is setup with 3 endpoints which are detailed below. To start the server run the following:
> node app.js

If successful, you should see a static site deployed at the root on `localhost:4000`.

**Note:** You can use curl -i to get more information from the headers.

### **/expressions**

#### localhost:4000/expressions

**GET** - get expressions
> curl localhost:4000/expressions

**POST** - add expression
> curl -X POST localhost:4000/expressions?name=pineapple&emoji=%F0%9F%8D%8D

#### localhost:4000/expressions/:id

**GET** - get expression from database by id
> curl localhost:4000/expressions/1

**PUT** - update expression from database by id
> curl -X PUT localhost:4000/expressions/1?name=cat&emoji=%F0%9F%98%BA

**DELETE** - delete expression from database by id
> curl -X DELETE localhost:4000/expressions/1

### **/hello**

#### localhost:4000/hello

**GET** - get static hello page
> curl localhost:4000/hello

### **/users**

#### localhost:4000/users

**GET** - get users
> curl localhost:4000/users

**POST** - add user
> curl -X POST -H "Content-Type: application/json" -d '{"user": {"username":"Joe Original", "password":"OriginalPassword1"}}' localhost:4000/users

#### localhost:4000/users/:id

**GET** - get user from database by id
> curl localhost:4000/users/1
