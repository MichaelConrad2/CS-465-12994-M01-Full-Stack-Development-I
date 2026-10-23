# CS 465 Full Stack Development — Travlr Getaways

## Project Overview

Travlr Getaways is a full stack web application developed throughout CS 465. The application provides a customer-facing travel website and an administrative single-page application (SPA) for managing travel packages. The project demonstrates how frontend and backend technologies work together to create a functional, secure, and maintainable web application.

The application was developed using the MEAN stack, which consists of MongoDB, Express.js, Angular, and Node.js. Throughout the course, I worked on connecting the frontend and backend, managing application data, developing reusable components, creating RESTful API endpoints, and implementing authentication to protect administrative functionality.

## Architecture

### Frontend Development and Application Structure

Throughout this project, I worked with different approaches to frontend development, including Express HTML, JavaScript, and an Angular single-page application (SPA). Each approach served a different purpose in the overall application.

The customer-facing website used Express.js to serve HTML pages. This approach allowed the application to display travel information using server-side routing and templates. JavaScript was used to support dynamic functionality and improve the interaction between the user and the application. Express HTML provided a straightforward way to organize and display content, but traditional page navigation could require loading new pages when users moved between sections.

The administrative side of the application used Angular to create a single-page application. Unlike traditional server-rendered pages, the SPA allows users to interact with different views without requiring a complete browser page reload for each action. Angular also supports reusable components, which makes the application easier to organize, maintain, and update.

The biggest difference between these approaches is how content is displayed and updated. Express primarily handles routing and rendering on the server, while Angular manages much of the user interface in the browser. Using both approaches helped me understand the advantages of different frontend architectures and how they can work with the same backend.

### Why MongoDB Was Used

The backend used MongoDB, a NoSQL database, to store and manage travel package information. MongoDB was appropriate for this project because it stores information in flexible, document-based structures rather than traditional relational tables.

Travel packages contain information such as destinations, descriptions, prices, and other details. MongoDB makes it possible to represent this information as documents with fields that align closely with the JSON data exchanged between the frontend and backend.

MongoDB also integrates well with Node.js and Express.js. Using Mongoose, the application can define data models, validate information, and perform database operations. This made it easier to retrieve, create, and update travel package records.

Overall, MongoDB provided a flexible and efficient database solution that supported the needs of the application while allowing the project to grow and change throughout development.

## Functionality

### JSON and Its Role in Full Stack Development

JSON, or JavaScript Object Notation, is a lightweight data format used to organize and exchange information between systems. Although JSON is based on JavaScript syntax, it is different from JavaScript itself. JavaScript is a programming language used to create application behavior, while JSON is a text-based format used to represent structured data.

JSON played an important role in connecting the frontend and backend of the Travlr Getaways application. When the Angular administrative application needed travel package information, it could send an HTTP request to an Express API endpoint. The backend would retrieve the requested information from MongoDB and return it in JSON format.

The Angular application could then interpret the JSON response and display the travel package information to the administrator. When an administrator created or edited a travel package, JSON could also be used to send the updated information back to the backend.

This process demonstrated how JSON acts as a common communication format between different parts of a full stack application.

### Code Refactoring and Reusable Components

Throughout the development process, refactoring was important for improving code organization, functionality, and efficiency. One example was organizing the application into separate routes, controllers, and models instead of placing all functionality in one location. This separation made the backend easier to understand and maintain.

Another example involved the Angular administrative interface. Instead of repeating similar HTML and application logic across multiple pages, reusable components could be used to display and manage travel package information. This reduced duplicate code and made it easier to maintain a consistent interface.

Refactoring also helped improve the organization of API requests and database operations. Keeping these responsibilities separate made the application easier to troubleshoot and modify when new features were added.

Reusable UI components provide several important benefits. They reduce the amount of duplicated code, improve consistency, simplify debugging, and make future updates easier. For example, if the appearance or behavior of a shared component needs to change, the developer can update that component instead of modifying several different pages.

These practices helped me understand why clean code and reusable components are important in professional software development.

## Testing

### API Methods, Endpoints, and Security

Testing was an important part of developing the full stack application because the frontend, backend, and database all needed to communicate correctly.

The application used RESTful API endpoints to handle requests for travel package information. Different HTTP methods were used depending on the operation being performed. GET requests retrieved information, POST requests created new records, and PUT requests updated existing records. These methods allowed the frontend to interact with backend resources in an organized way.

Testing these endpoints involved verifying that requests returned the expected responses and that the database reflected the intended changes. API testing tools such as Postman can be used to send requests directly to endpoints, inspect JSON responses, and review HTTP status codes.

Testing became more complex after security features were added to the administrative application. Authentication was necessary to prevent unauthorized users from accessing protected functionality. The login process required valid credentials, and protected API requests needed appropriate authentication tokens.

JSON Web Tokens (JWTs) provided a way for the backend to verify authenticated requests. After successful authentication, the application could use a token when requesting protected resources. The backend would validate the token before allowing the operation.

Security testing required checking both successful and unsuccessful requests. For example, a valid authenticated request should be allowed to access a protected endpoint, while a request without a valid token should be rejected.

This experience helped me understand that testing a full stack application involves more than verifying whether a feature works. It also requires confirming that the application handles invalid requests, protects sensitive operations, and communicates reliably between its components.

## Reflection

### Professional Growth and Career Development

CS 465 helped me develop a stronger understanding of how full stack web applications are designed, developed, tested, and maintained. Before working through this project, I had a more limited understanding of how frontend interfaces, backend services, and databases connect to form a complete application.

One of the most valuable skills I developed was working with the MEAN stack. Using MongoDB, Express.js, Angular, and Node.js gave me practical experience with technologies commonly used in web development. I also improved my understanding of RESTful APIs, JSON data exchange, database models, routing, and component-based frontend development.

Another important area of growth was application security. Implementing authentication for the administrative interface helped me understand why protecting routes and validating user access are essential responsibilities in software development.

I also strengthened my problem-solving and debugging skills. Building a full stack application required troubleshooting errors across different parts of the system, understanding how changes affected other components, and finding solutions through testing and research.

This course has helped prepare me for professional opportunities in software development by giving me experience with the complete development process. The finished Travlr Getaways application is a portfolio project that demonstrates my ability to work with both frontend and backend technologies.

Moving forward, I can apply these skills to future projects involving web applications, APIs, databases, and secure user authentication. I believe the experience gained in this course has made me a more capable and marketable candidate for software development positions.

## Conclusion

Developing the Travlr Getaways application provided valuable experience with the architecture, functionality, testing, and security of a full stack web application. The project demonstrated how multiple technologies can work together to deliver a complete solution for both customers and administrators.

The knowledge gained from this project will serve as a foundation for future software development work and continued professional growth.
