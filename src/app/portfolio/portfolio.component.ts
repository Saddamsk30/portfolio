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
      name: 'Admin Dashboard',
      summary: "An enterprise-level admin dashboard designed for managing Value Added Services, developed using JSP and Jquery,Javascript,AJAX with full REST API integration.",
      description: "The Admin Dashboard is a robust frontend solution built for merchant management. It features advanced modules such as Active, Pending, and Rejected Merchant management, real-time data filtering, BQR integration, non-card merchant support, and detailed search with export functionality. Developed with Jsp, Html, css, Ajax, Bootstrap, and javascript, it incorporates reusable components, form validation, JWT-based authentication, and clean UI design. The dashboard ensures responsive layout, seamless user experience, and optimized performance for large-scale data interactions.",
      tags: [Tag.JSP, Tag.JQUERY, Tag.BOOTSTRAP, Tag.JAVASCRIPT, Tag.RESTAPI, Tag.AJAX, Tag.HTML5, Tag.CSS3],
    },
    
    {
      id: 2,
      name: 'Report Dashboard',
      summary: "A responsive dashboard for transaction monitoring, built with Angular, ApexCharts, and Bootstrap. Provides visual analytics on counts and transaction amounts with dynamic filtering and user management.",
      description: "The Report Dashboard is a web-based analytics tool designed to track and manage dashboard data in a payment system. The dashboard includes interactive charts and graphs powered by ApexCharts to visualize transaction count and amount metrics. Users can apply filters (date range etc.), view aggregated summaries, and export reports. Built with Angular, HTML5, CSS3, and Bootstrap 5, the UI is fully responsive across devices. Admin-level users can add, update, and manage dashboard data entries directly through the interface.",
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.ANGULAR, Tag.APEXCHART, Tag.CHARTJS],
    },
    
    {
      id: 3,
      name: ' Dashboard',
      summary: 'A responsive merchant management dashboard with filtering, transaction analytics, and admin controls. Built using Angular, ApexCharts, and Bootstrap for clean UI and robust interaction.',
      description: 'The Report Dashboard is a comprehensive web application that displays and manages merchant transaction data. It provides real-time visualizations of transaction counts and amounts using ApexCharts, with filters for date range, merchant ID, and status. Admin users can add new merchants, edit details, and perform actions like blocking or unblocking accounts. The interface is responsive and built with Angular, HTML5, CSS3, and Bootstrap 5. The system supports REST API integration for CRUD operations and chart data feeds. Designed to simplify reporting and merchant activity monitoring with modern UI and interactive components.',
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.ANGULAR, Tag.APEXCHART, Tag.RESTAPI],
    },
    
    {
      id: 4,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by Saddam Shaikh.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio_saddam01.png", "../../assets/portfolio_saddam02.png", "../../assets/portfolio_saddam03.png", "../../assets/portfolio_saddam04.png", "../../assets/portfolio_saddam05.png"]
    },
   
    {
      id: 5,
      name: 'Car Rental Service',
      summary: 'A full-stack web application for managing car rentals, built with ReactJS, Node.js, Express, and MongoDB.',
      description: "Car Rental Service is a responsive web application allowing users to browse, reserve, and manage rental cars online. The frontend is developed using ReactJS with Bootstrap for styling and responsive design. The backend is powered by Node.js and Express.js, while MongoDB serves as the database to store user data, booking history, car inventory, and availability. The application communicates via RESTful APIs and supports CRUD operations. Features include user authentication, real-time car availability, booking management, and an admin dashboard for fleet control. This project demonstrates full-stack development with REST APIs and modern UI/UX practices.",
      tags: [Tag.REACT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.NODEJS, Tag.EXPRESSJS, Tag.MONGODB],
      
    },  
    {
      id: 6,
      name: 'Heart Disease Prediction System',
      summary: "College final year project web application for predicting heart disease risk using ASP.NET, SQL Server, and C#, with a responsive HTML/CSS frontend.",
      description: "Heart Disease Prediction System is a responsive web application developed using ASP.NET, C#, and SQL Server, with HTML5 and CSS3 for the frontend. The system enables users to input various health parameters—such as age, cholesterol level, blood pressure, and heart rate—to assess the likelihood of heart disease. The backend uses logical conditions and clinical thresholds to generate predictions, and stores user data securely in a SQL Server database. Designed with a user-friendly and mobile-responsive UI, this project demonstrates practical implementation of full-stack development and healthcare informatics in a final year academic setting.",
      
      tags: [Tag.HTML5, Tag.CSS3, Tag.ASPNET, Tag.SQLSERVER, Tag.CSHARP],
      
    }    
  ]
  constructor(private titleService: Title) {
    this.titleService.setTitle('SS | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
