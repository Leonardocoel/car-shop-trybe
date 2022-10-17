# Project Car Shop (Trybe) 

[![Contributors][contributors-shield]][contributors-url]
[![Pull Requests][pull-requests-shield]][pull-requests-url]
[![Issues][issues-shield]][issues-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
![Repo Size][repo-size-shield]
![Languages][language-count-shield]

<details>
  <summary>Table of Contents</summary>
 <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
     <ul>
        <li><a href="#routes">Routes</a></li>
        <li><a href="#tests">Tests</a></li>
      </ul>
  </ol>
</details>  

## About The Project


#### Technologies

![Typescript][Typescript]
![NodeJS][NodeJS]
![ExpressJS][ExpressJS]
![MongoDB][MongoDB]
![Mocha][Mocha]
![Chai][Chai]

</details>  

## Getting Started

### Prerequisites

* Node.js
* MongoDB
* Docker & docker-compose (Optional)
  

### Setup

* Clone the repository and switch to it
   ```
   git clone https://github.com/Leonardocoel/car-shop-trybe && cd car-shop-trybe
   ```
* Install NPM packages
   ```
   npm install
   ```
* Mongo with Docker
   ```
   docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0
   ```
* Run the app
   ```
   npm run dev
   ```
## Usage

### Routes

* Post car
  ```
  localhost:3001/cars
  ```
  Example:
  ```
  {
  "model": "Fusca",
  "year": 1975,
  "color": "Blue",
  "buyValue": 12500,
  "doorsQty": 2,
  "seatsQty": 4,
  }
  ```
  
* Get all cars
  ```
  localhost:3001/cars
  ```
  
* Get by id
  ```
  localhost:3001/cars/:id
  ```
  
* Update by id
  ```
  localhost:3001/cars/:id
  ```
* Delete by id
  ```
  localhost:3001/cars/:id
  ```
  
### Tests
 
* Run tests
  ```
  npm run test:dev
  ```
* Run test coverage
  ```
  npm run test:coverage
  ```
---
[⬆ Back to top](#project-car-shop-trybe)<br>


<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Leonardocoel/car-shop-trybe?style=for-the-badge
[contributors-url]: https://github.com/Leonardocoel/car-shop-trybe/graphs/contributors

[pull-requests-shield]: https://img.shields.io/github/issues-pr/Leonardocoel/car-shop-trybe?style=for-the-badge
[pull-requests-url]: https://github.com/Leonardocoel/car-shop-trybe/pulls

[forks-shield]: https://img.shields.io/github/forks/Leonardocoel/car-shop-trybe?style=for-the-badge
[forks-url]: https://github.com/Leonardocoel/

[stars-shield]: https://img.shields.io/github/stars/Leonardocoel/car-shop-trybe?style=for-the-badge
[stars-url]: https://github.com/Leonardocoel/

[issues-shield]: https://img.shields.io/github/issues/Leonardocoel/car-shop-trybe?style=for-the-badge
[issues-url]: https://github.com/Leonardocoel/

[repo-size-shield]: https://img.shields.io/github/repo-size/Leonardocoel/car-shop-trybe?style=for-the-badge
[language-count-shield]: https://img.shields.io/github/languages/count/Leonardocoel/car-shop-trybe?style=for-the-badge

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/leonardocoel

[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[NodeJS]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[ExpressJS]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mocha]: https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white
[Chai]: https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white
