import TodoImage from "../../assets/project_images/todo.png";
import EcommerceImage from "../../assets/project_images/comm.jpeg";
import InveImage from "../../assets/project_images/inventer.png";
import FileImage from "../../assets/project_images/file.jpeg";
import ChatImage from "../../assets/project_images/chat.jpeg";
import WeatherImage from "../../assets/project_images/weather.jpeg";
export const projectsData = [
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
    title: "Chat Application",
    description:
      "This is a simple chat application built with FastAPI. It allows users to connect to a chat room via WebSocket, send messages, and receive messages instantly. The application provides a seamless user experience with features like WebSocket connection management, message broadcasting, and graceful disconnection handling.",
    imgUrl: ChatImage,
    githubUrl: "https://github.com/odoh-tc/chat_app",
    liveUrl: "https://chat-app-98z7.onrender.com",
    techStack: ["FastAPI", "WebSocket", "Jinja2 Templates", "JSON"],
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
  {
    title: "Task Manager",
    description:
      "A simple Todo List application built with FastAPI. This app allows users to create, edit, delete, and view todo items. The backend is developed with FastAPI, while the frontend uses Jinja2 templates for rendering.",
    imgUrl: TodoImage,
    githubUrl: "https://github.com/odoh-tc/fastapi_Todo_list",
    liveUrl: "https://fastapi-todo-list.onrender.com/auth/",
    techStack: ["FastAPI", "SQLite", "Jinja2 templates", "JWT"],
    livePreview: true,
  },
];
