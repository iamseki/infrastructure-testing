# Testing Infrastructure with Javascript 

The main purpose of this project is to test auto scaling in ***kubernetes*** using k6 js to make load tests on two distinct API, one writes with `GO` and another one with `Nodejs`

> They do the exactly same thing, expose one main route named fibo wich calculates de nth sequence of a fibonacci number

- e.g call `curl localhost:8080/fibo/100`

    response: `{ "fibo":1298777728820984005 }`
    
## Run k6js tests

- *`k6 run -e API_BASE=GOLANG|NODEJS k6-test.js`*