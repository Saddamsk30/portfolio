
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly JDBC = new Tag('JDBC', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
    static readonly PLAYWWRIGHT = new Tag('Playwright', '#4a6a77');
    static readonly SELENIUM = new Tag('Selenium Driver', '#4a6a77');
    static readonly PANDAS = new Tag('Pandas', '#4a6a77');
    static readonly DASH = new Tag('Dash', '#4a6a77');
    static readonly PLOTLY = new Tag('Plotly', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly INSOMNIA = new Tag('Insomnia', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly PYTEST = new Tag('Pytest', '#4a6a77');
    static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly MOCKITO = new Tag('Mockito', '#5a7581');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly VUEJS = new Tag('Vue.JS', '#192129');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly PYDANTIC = new Tag('Pydantic', '##4a6a77');
    static readonly GOLANG = new Tag('Golang', '#457189');
    static readonly RABBITMQ = new Tag('RabbitMQ', '#457189');
    static readonly JQUERY = new Tag('jQuery', '#0769ad');
    static readonly JSP = new Tag('JSP', '#f44336');
    static readonly AJAX = new Tag('AJAX', '#0050b2');
    static readonly REACT = new Tag('React', '#61dafb');
    static readonly GIT = new Tag('Git', '#f34f29');
    static readonly GITLAB = new Tag('GitLab', '#fc6d26');
    static readonly GITHUB = new Tag('GitHub', '#181717');
    static readonly GRAPHQL = new Tag('GraphQL', '#e10098');
    static readonly MYSQL = new Tag('MySQL', '#00758f');
    static readonly MONGODB = new Tag('MongoDB', '#47a248');
    static readonly APEXCHART = new Tag('ApexCharts', '#FF4560');
    static readonly CHARTJS = new Tag('Chart.js', '#ff6384');
    static readonly NODEJS = new Tag('Node.js', '#43853d');      
    static readonly EXPRESSJS = new Tag('Express.js', '#000000');
    static readonly ASPNET = new Tag('ASP.NET', '#512bd4');      
    static readonly SQLSERVER = new Tag('SQL Server', '#cc2927'); 
    static readonly CSHARP = new Tag('C#', '#239120');           
    static readonly PLAYWRIGHT = new Tag('playwright', '#239120'); 
    static readonly E2ETESTING = new Tag('E2E Testing', '#FF4560');
    static readonly AUTOMATION = new Tag('Automation', '#fc6d26');










    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}