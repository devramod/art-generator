# MERN Stack Image Generation Application
This is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that generates images using OpenAI's GPT-3 API.

## Table of Contents
- [Features](#features)
- [Front-end Technologies](#front-end-technologies)
- [Back-end Technologies](#back-end-technologies)
- [Installation](#installation)
- [Setup](#setup)
- [Run](#run)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)

## Features
- Users can input a text prompt
- The application sends the prompt to the OpenAI GPT-3 API
- The API generates an image based on the prompt
- The image is store in the database
- The image is displayed to the user
- Images can download
- Images can remove from the gallery

## Front-end Technologies
- React: front-end library
- Tailwind CSS: ui development
- Vite: fast and optimized development

## Back-end Technologies
- Node.js: javascript runtime
- Express: back-end framework
- MongoDB: database
- Cloudinary: manage images
- OpenAI API: generate images

## Installation
1. Clone the repository: `git clone https://github.com/devramod/art-generator.git`
2. Install dependencies: `npm install`

## Setup
1. Create a .env file in the client directory with the following variables
  ```
  VITE_SERVER_BASE_URL = http://localhost:8080
  ```
2. Create a .env file in the server directory with the following variables:
  ```
  MONGODB_URL = "mongodb+srv://ram5sasanga:UNOwafQGgktjSBJm@cluster0.ofprsoi.mongodb.net/?retryWrites=true&w=majority"
  OPEN_API_KEY = "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"
  CLOUDINARY_CLOUD_NAME = "dxktflojc"
  CLOUDINARY_API_KEY = "713374197398355"
  CLOUDINARY_API_SECRET = "z9IEYrBq_fRL6rz2DabiNFKhtNk"
  ```
## Run
1. Run the server: `npm start`
2. Run the client: `npm run dev`

## Usage
1. Click "Create" button in the header
2. Enter a name in the input field
3. Enter a text prompt or click "Suprise me" button in the input field
4. Click the "Generate Image" button
5. Wait for the image to be generated and displayed
6. Click "Sharing with the commiunity"
7. Wait for the navigation to homepage
8. Image display in the gallery

## Demo
- This application is deployed on Render.
- Please visit this link: https://client-kln8.onrender.com

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Push your branch to your fork
5. Create a pull request
