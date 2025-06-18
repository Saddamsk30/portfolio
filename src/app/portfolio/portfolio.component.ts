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
      summary: "An enterprise-level admin dashboard designed for managing, developed using JSP and Jquery,Javascript,AJAX with full REST API integration.",
      description: "This Dashboard is a robust frontend solution built for merchant operations and users and data management. It features advanced modules such as Active, Pending, and Rejected Merchant management, real-time data filtering, BQR integration, non-card merchant support, and detailed search with export functionality. Developed with Jsp, Html, css, Ajax, Bootstrap, and javascript, it incorporates reusable components, form validation, JWT-based authentication, and clean UI design. The dashboard ensures responsive layout, seamless user experience, and optimized performance for large-scale data interactions.",
      tags: [Tag.JSP, Tag.JQUERY, Tag.BOOTSTRAP, Tag.JAVASCRIPT, Tag.RESTAPI, Tag.AJAX, Tag.HTML5, Tag.CSS3],
      pictures: [],
      projectLink: ''
    },
    
    {
      id: 2,
      name: 'Report Dashboard',
      summary: "A responsive dashboard for transaction monitoring, built with Angular, ApexCharts, and Bootstrap. Provides visual analytics on acquirer-wise counts and transaction amounts with dynamic filtering and user management.",
      description: "The Report Dashboard is a web-based analytics tool designed to track and manage data in a payment system. The dashboard includes interactive charts and graphs powered by ApexCharts to visualize transaction count and amount metrics. Users can apply filters (date range,file type ,etc.), view aggregated summaries, and export reports. Built with Angular, HTML5, CSS3, and Bootstrap 5, the UI is fully responsive across devices. Admin-level users can add, update, and manage data entries directly through the interface.",
      projectLink: '',
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.ANGULAR, Tag.APEXCHART, Tag.CHARTJS,Tag.RESTAPI],
      pictures: [""]
    },
    
  {
  id: 3,
  name: 'Playwright Automation Test Application',
  summary: "An advanced E2E automation project using Playwright with silent authentication, Allure reporting, and Excel-driven validation for complex web workflows.",
  description: "This project is a scalable end-to-end (E2E) automation suite built with Playwright and TypeScript for a production-grade web application. It implements silent login via authentication middleware by injecting session cookies or tokens directly into the browser context, enabling faster and cleaner test execution. The suite supports automated testing of file uploads/downloads, Excel read/write operations using library. Configured with Allure for detailed reporting, the framework provides real-time visibility into test runs with logs, screenshots, and step-level results. Additional features include environment-based configuration using `.env`, data-driven testing, test tagging, parallel execution.",
  projectLink: '',
  tags: [Tag.TYPESCRIPT,
    Tag.PLAYWRIGHT,
    Tag.E2ETESTING,
    Tag.AUTOMATION,
  ],
  pictures: [""]
},

    
    {
      id: 4,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by Saddam Shaikh.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP,],
      pictures: [""]
    },
   
    {
      id: 5,
      name: 'Car Rental Service',
      summary: 'A full-stack web application for managing car rentals, built with ReactJS, Node.js, Express, and MongoDB.',
      description: "Car Rental Service is a responsive web application allowing users to browse, reserve, and manage rental cars online. The frontend is developed using ReactJS with Bootstrap for styling and responsive design. The backend is powered by Node.js and Express.js, while MongoDB serves as the database to store user data, booking history, car inventory, and availability. The application communicates via RESTful APIs and supports CRUD operations. Features include user authentication, real-time car availability, booking management, and an admin dashboard for fleet control. This project demonstrates full-stack development with REST APIs and modern UI/UX practices.",
      projectLink: 'https://github.com/yourusername/car-rental-service',
      tags: [Tag.REACT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.NODEJS, Tag.EXPRESSJS, Tag.MONGODB,Tag.RESTAPI],
      pictures: [""]
    },  
    {
      id: 6,
      name: 'Heart Disease Prediction System',
      summary: "College final year project web application for predicting heart disease risk using ASP.NET, SQL Server, and C#, with a responsive HTML/CSS frontend.",
      description: "Heart Disease Prediction System is a responsive web application developed using ASP.NET, C#, and SQL Server, with HTML5 and CSS3 for the frontend. The system enables users to input various health parameters—such as age, cholesterol level, blood pressure, and heart rate—to assess the likelihood of heart disease. The backend uses logical conditions and clinical thresholds to generate predictions, and stores user data securely in a SQL Server database. Designed with a user-friendly and mobile-responsive UI, this project demonstrates practical implementation of full-stack development and healthcare informatics in a final year academic setting.",
      projectLink: '',
      tags: [Tag.HTML5, Tag.CSS3, Tag.ASPNET, Tag.SQLSERVER, Tag.CSHARP],
      pictures: [""]
    }    
  ]
  constructor(private titleService: Title) {
    this.titleService.setTitle('SS | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
