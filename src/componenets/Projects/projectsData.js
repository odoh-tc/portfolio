import TodoImage from "../../assets/project_images/todo.png";
import EcommerceImage from "../../assets/project_images/comm.jpeg";

export const projectsData = [
  {
    title: "E-commerce App",
    description:
      "A robust e-commerce backend application. This app features role-based access control, allowing business owners to create and manage multiple businesses, each with its own products, while customers can place and manage orders. Additionally, an admin role is included to perform various administrative operations.",
    imgUrl: EcommerceImage,
    githubUrl: "https://github.com/odoh-tc/e-commerce",
    liveUrl: "https://e-commerce-jzjf.onrender.com/docs",
    techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
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
