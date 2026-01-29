# Car Rental Portal

A modern, professional Car Rental Portal application built with Node.js, Express, and EJS. This project features a responsive design and is fully dockerized for easy deployment.

## Features

- **Car Catalog**: View a curated selection of premium vehicles (Ferrari, Bugatti, Mercedes SUV).
- **Modern UI**: Clean, responsive layout with hover effects and glassmorphism elements.
- **Dockerized**: Easy setup and deployment using Docker and Docker Compose.
- **No Frameworks**: Pure HTML/CSS for frontend to ensure lightweight and fast performance.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript, EJS Templating
- **Containerization**: Docker, Docker Compose

## Project Structure

```
car-rental-portal/
│
├── src/
│   ├── app.js               # Application entry point
│   ├── routes/
│   │   └── index.js         # Route handlers
│   ├── views/
│   │   └── index.ejs        # Frontend template
│   └── public/
│       └── css/
│           └── style.css    # Styling
│
├── Dockerfile               # Docker build instructions
├── docker-compose.yml       # Docker Compose configuration
├── package.json             # Project dependencies
└── README.md                # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Docker Desktop (for containerized execution)

### Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the application:**
   ```bash
   npm start
   ```
   Or for development mode:
   ```bash
   npm run dev
   ```

3. **Access the app:**
   Open your browser and navigate to `http://localhost:6000`.

### Running with Docker

1. **Build the image:**
   ```bash
   docker build -t car-rental-app .
   ```

2. **Run the container:**
   ```bash
   docker run -p 6000:6000 car-rental-app
   ```

### Running with Docker Compose

1. **Start the service:**
   ```bash
   docker compose up -d
   ```

2. **Stop the service:**
   ```bash
   docker compose down
   ```

## Application URL

Once running, the application is accessible at: [http://localhost:6000](http://localhost:6000)

## Screenshots

*(Placeholder for screenshots)*
