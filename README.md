# Library Monitoring Application
Experimental AngularJS and Microservice project - this is for development environment only

# Getting started 
 This setup is for DEV environment only. This application is deployed with [Docker](https://www.docker.com/) in production.
 
## Micro Services
- [Authentication Module](https://github.com/great-design-and-systems/authentication-module)  - Consists of security related services.
- [School Module](https://github.com/great-design-and-systems/school-module) - Module that contains school related services (Students, Faculty, School config)
- [GDS File](https://github.com/great-design-and-systems/file-service) - File management service.
- [GDS Logger](https://github.com/great-design-and-systems/gds-logger) - A simple logger service.
- [GDS Import](https://github.com/great-design-and-systems/import-service) - Import service.
- [GDS Export](https://github.com/great-design-and-systems/export-service) - Export service.
- [GDS Time](https://github.com/great-design-and-systems/time-service) - For managing time entry.
- [GDS Api](https://github.com/great-design-and-systems/gds-ms-api) - The gateway of all the services.

## Web Client Applicatons
- [Terminal](https://github.com/great-design-and-systems/gds-terminal) - User interface for the badge terminal.
- [LRTS](https://github.com/great-design-and-systems/gds-lrts) - Main application for monitoring the time ins and time outs and also for managing student and faculty data.

## Prerequisites 
  You must have the following installed first:
 - [NodeJS](https://nodejs.org/en/)
 - [Mongo DB](https://www.mongodb.com/)
 
### (Windows only installer)
- Run the windows-installer.bat
```
  ./windows-install.bat
  
```
- ...wait for it

### Start the application

```
./windows-start.bat

```

### Deployment hosts
- [GDS Api gateway](http://localhost:10080) -  http://localhost:10080
- [Terminal](http://localhost:10085) - http://localhost:10085
- [LRTS](http://localhost:10086) - http://localhost:10086
