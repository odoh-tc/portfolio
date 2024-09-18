// import TodoImage from "../../assets/project_images/todo.png";
import EcommerceImage from "../../assets/project_images/comm.jpeg";
import InveImage from "../../assets/project_images/inventer.png";
import FileImage from "../../assets/project_images/file.jpeg";
// import ChatImage from "../../assets/project_images/chat.jpeg";
import WeatherImage from "../../assets/project_images/weather.jpeg";
import MovieImage from "../../assets/project_images/movie.jpeg";
import MessagingImage from "../../assets/project_images/rabbit.jpeg";

export const projectsData = [
  {
    title: "Movie Listing API",
    description:
      "A FastAPI-based API where users can browse, rate, and comment on movies. It features JWT authentication, email verification, rating and commenting functionalities, along with advanced filtering, sorting, and search capabilities. Rate limiting ensures fair usage across endpoints.",
    imgUrl: MovieImage,
    githubUrl: "https://github.com/odoh-tc/movie_listing_api",
    liveUrl: "https://github.com/odoh-tc/movie_listing_api",
    techStack: ["FastAPI", "PostgreSQL", "Docker", "JWT"],
    livePreview: true,
  },
  {
    title: "Messaging System with RabbitMQ/Celery",
    description:
      "This project implements a messaging system using RabbitMQ for queuing, Celery for asynchronous task processing, and a FastAPI-based Python application behind Nginx. Ngrok is used to expose the local application for external testing. The system supports sending emails via RabbitMQ queues, logging server activities, and routing traffic through Nginx.",
    imgUrl: MessagingImage,
    githubUrl: "https://github.com/odoh-tc/messaging_system",
    liveUrl: "https://github.com/odoh-tc/messaging_system",
    techStack: ["FastAPI", "RabbitMQ", "Celery", "Nginx", "Ngrok"],
    livePreview: true,
  },
  {
    title: "E-commerce API",
    description:
      "A robust e-commerce backend application. This app features role-based access control, allowing business owners to create and manage multiple businesses, each with its own products, while customers can place and manage orders. Additionally, an admin role is included to perform various administrative operations.",
    imgUrl: EcommerceImage,
    githubUrl: "https://github.com/odoh-tc/e-commerce",
    liveUrl: "https://github.com/odoh-tc/e-commerce",
    techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
    livePreview: true,
  },
  {
    title: "File Manager API",
    description:
      "This application provides a backend solution for uploading, managing, and sharing files, as well as managing users. It offers endpoints for user registration, authentication, user profile management, file upload, listing user files, listing all files (admin only), file analytics, file sharing, updating files, and deleting files.",
    imgUrl: FileImage,
    githubUrl: "https://github.com/odoh-tc/file_uploader",
    liveUrl: "https://github.com/odoh-tc/file_uploader",
    techStack: ["FastAPI", "MySQL", "SQLAlchemy", "JWT"],
    livePreview: true,
  },
  {
    title: "Weather API",
    description:
      "This application provides comprehensive weather data services, including current weather conditions, forecasts, air pollution metrics, historical weather data, UV index information, and geographical mapping. it employs caching mechanisms to enhance performance, and implements rate limiting to manage API request rates effectively.",
    imgUrl: WeatherImage,
    githubUrl: "https://github.com/odoh-tc/weather_api",
    liveUrl: "https://github.com/odoh-tc/weather_api",
    techStack: ["FastAPI", "Redis", "SQLAlchemy", "SQLite"],
    livePreview: true,
  },
  {
    title: "Invent Management App",
    description:
      "This is an inventory management application. This app allows users to manage their inventory efficiently, enabling them to add, update, delete, and search for products easily.",
    imgUrl: InveImage,
    githubUrl: "https://github.com/odoh-tc/Inventory_app",
    liveUrl: "https://invent-api.onrender.com/docs",
    techStack: ["FastAPI", "Tortoise ORM", "React", "SQLite"],
    livePreview: true,
  },
];
