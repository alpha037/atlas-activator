<h1 align="center">**Strictly for Educational Purposes**</h1>

<h1 align="center">atlas-activator</h1>

  <p align="center">
    An independent bare nodejs server used to send an embedded windows host script for Windows 10 activation.
    <br /><br />
    <a href="https://github.com/alpha037/atlas-activator#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://atlas-activator.herokuapp.com">View Demo</a>
    ·
    <a href="https://github.com/alpha037/atlas-activator/issues">Report Bug</a>
    ·
    <a href="https://github.com/alpha037/atlas-activator/issues">Request Feature</a>
  </p>
</p>

<h3 align="center">No More KMS crap!</h3>

<p align="center">

```sh
AUTH_TOKEN for the day: atlas-copyright [EXPIRED TOKEN]
```

</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Docker Instructions](#docker-instructions)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- BUILT WITH  -->

### Built With

- [Node.js](https://nodejs.org/en/) - Since it's a bare Node.js server so there are no additional dependencies, making the project more reliable and lightweight!

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

These are the prerequisites you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

- nodemon (dev-dependency)

```sh
npm install nodemon --save-dev
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/alpha037/atlas-activator.git
```

2. Navigate to the repo directory

```sh
cd atlas-activator
```

3. Install the required NPM packages (in our case, only one dev-dependency)

```sh
npm install
```

<!-- USAGE EXAMPLES -->

## Usage

You can only request the windows host script, that is being used for activation, using either [curl](https://curl.se/download.html) or [Postman](https://www.postman.com/downloads/). No other user agents are allowed for obvious reasons.

- For [curl](https://curl.se/download.html) users, a sample request would look like this:

```sh
curl -H "Authorization: Bearer <AUTH_TOKEN>" https://atlas-activator.herokuapp.com/
```

- For [Postman](https://www.postman.com/downloads/) users:
  - Open up the postman app.
  - Paste this [link](https://atlas-activator.herokuapp.com/) in the url tab.
  - Make sure the request type is <strong>GET</strong>.
  - In the <strong>Authorization</strong> tab, select <strong>Bearer token</strong> from the dropdown list and put your AUTH_TOKEN in the box.
  - After that, hit <strong>Send</strong> and you should see a response in the tab below.

## Docker Instructions

If you haven't installed [Docker](https://www.docker.com/products/docker-desktop) already, then you can get it from [here](https://www.docker.com/products/docker-desktop). After installing it, create an account in Docker and copy the username.

To run the app as a docker container, follow the given steps:

- Navigate to the project directory
  ```bash
  cd atlas-activator
  ```
- Replace <strong>USERNAME</strong> with your own username and build the docker image
  ```bash
  docker build -t <USERNAME>/atlas-activator:1.0 .
  ```
- Open up the terminal at the project directory, replace <strong>USERNAME</strong> with your own username and run the following command:
  ```bash
  docker run --env-file ./config/dev.env -p 3000:3000 <USERNAME>/atlas-activator:1.0
  ```
- You can also use <strong>docker compose</strong> to manage your containers:
  ```bash
  docker-compose up
  ```
  and
  ```bash
  docker-compose down
  ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/alpha037/atlas-activator/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request.

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/alpha037/atlas-activator/blob/main/LICENSE) for more information.

<!-- CONTACT -->

## Contact

Shubhranil Dutta - [@sdotdutta](https://twitter.com/salpha037) - subhronil.dutta@gmail.com

Project Link: [https://github.com/alpha037/atlas-activator](https://github.com/alpha037/atlas-activator)
