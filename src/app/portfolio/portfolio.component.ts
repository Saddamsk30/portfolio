import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Dashboard',
      summary: "An enterprise-level admin dashboard developed using JSP, jQuery, JavaScript, and AJAX with full REST API integration for efficient management and monitoring.",
      description: "This robust dashboard is designed for enterprise-grade merchant and user data management. It features modules for handling active, pending, and rejected merchants, real-time filtering, BQR integration, and non-card merchant support. The system supports advanced search and export functionality. Built using JSP, HTML, CSS, Bootstrap, AJAX, and JavaScript, it includes reusable components, JWT-based authentication, responsive design, and a seamless UI/UX optimized for large datasets.",
      tags: [Tag.JSP, Tag.JQUERY, Tag.BOOTSTRAP, Tag.JAVASCRIPT, Tag.RESTAPI, Tag.AJAX, Tag.HTML5, Tag.CSS3],
      pictures: [],
      projectLink: ''
    },
    {
      id: 2,
      name: 'Dashboard',
      summary: "A responsive analytics dashboard built with Angular, ApexCharts, and Bootstrap, providing interactive transaction insights with dynamic filtering and user management.",
      description: 'This Dashboard is a modern web-based analytics tool that visualizes acquirer-wise transaction counts and amounts. Users can apply filters such as date range and file type, view summarized data, and export reports. Built with Angular, HTML5, CSS3, and Bootstrap 5, it ensures a responsive layout across devices. Admin features include data entry, update, and management via a secure and intuitive interface.',
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.ANGULAR, Tag.APEXCHART, Tag.CHARTJS, Tag.RESTAPI],
      pictures: [],
      projectLink: ''
    },
    {
      id: 3,
      name: 'Playwright Automation Testing Full Application with AI Agents, MCP Server',
      summary: "An advanced end-to-end automation suite using Playwright and create AI-agents Excel validation, featuring silent authentication, Allure reporting, and environment-based configuration.",
      description: 'This scalable automation testing framework is built with Playwright and TypeScript for enterprise web applications. It enables silent authentication by injecting tokens directly into browser sessions, significantly improving test performance. The suite automates complex workflows including file uploads, downloads, and Excel read/write operations using AI agents and MCP servers. With Allure integration for detailed reporting, it includes environment-specific configs, test tagging, parallel execution, and real-time debugging tools like screenshots and step-level logs.',
      tags: [Tag.TYPESCRIPT, Tag.PLAYWRIGHT, Tag.E2ETESTING, Tag.AUTOMATION],
      pictures: [],
      projectLink: ''
    },
    {
      id: 4,
      name: 'Angular Portfolio App',
      summary: 'A responsive and interactive portfolio website designed and developed by Saddam Shaikh using Angular 19 and modern UI practices.',
      description: 'This portfolio is a fully responsive Angular web application that highlights my professional background, skills, and project work. The design emphasizes clean, modern aesthetics with smooth navigation across sections including Home, About, Education, Projects, and Contact. Built using Angular, TypeScript, Bootstrap, and CSS3, it demonstrates dynamic content rendering, modular structure, and cross-device compatibility.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: [],
      projectLink: ''
    },
    {
      id: 5,
      name: 'Car Rental Service',
      summary: 'A full-stack car rental web app built with React, Node.js, Express, and MongoDB, offering real-time booking and fleet management.',
      description: 'Car Rental Service is a responsive web application for browsing and managing rental vehicles. The frontend is developed in React with Bootstrap styling, while the backend uses Node.js, Express, and MongoDB for database operations. It features user authentication, real-time car availability, CRUD functionality for bookings, and an admin dashboard for fleet control. Communication is handled via secure RESTful APIs, demonstrating complete full-stack development capabilities.',
      tags: [Tag.REACT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.NODEJS, Tag.EXPRESSJS, Tag.MONGODB, Tag.RESTAPI],
      pictures: [],
      projectLink: 'https://github.com/yourusername/car-rental-service'
    },
    {
      id: 6,
      name: 'Heart Disease Prediction System',
      summary: "A final-year academic project built using ASP.NET and SQL Server to predict heart disease risk based on user health data inputs.",
      description: 'The Heart Disease Prediction System is a healthcare-focused web application developed with ASP.NET, C#, and SQL Server. Users input medical parameters such as age, cholesterol, blood pressure, and heart rate to assess heart disease risk. The backend processes this data using predefined logic and stores results securely in SQL Server. The frontend, built with HTML5 and CSS3, is responsive and user-friendly. This project showcases practical implementation of full-stack web development and healthcare informatics.',
      tags: [Tag.HTML5, Tag.CSS3, Tag.ASPNET, Tag.SQLSERVER, Tag.CSHARP],
      pictures: [],
      projectLink: ''
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('SS | Portfolio');
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
