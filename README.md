Project explaination:

1. # Project Title

   Dashboard Data Management System - Sales

2. # Description

   This project aims to provide a user-friendly interface for inputting and managing various types of data and generating insightful dashboards for analysis and decision-making.

3. # Features

   - User-friendly interface for inputting data.
   - Database framework for organizing different categories of data.
   - Dashboard generation for comparing and showcasing data.
   - Customizable dashboard views based on user preferences.

4. # Demo

Will add screenshots of the application interface and generated dashboard.

5. # Installation

   Provide step-by-step instructions on how to clone the repository and set up the project locally.
   List any prerequisites or dependencies required (e.g., Node.js, npm, database software).

6. # Usage

Explain how to navigate the interface and input data into the system.
Describe how to generate and customize dashboards based on different data categories.
Provide examples or screenshots demonstrating the usage of various features.

7. # Technologies Used

   List the technologies, frameworks, and libraries used in your project. React for the front end and Node.js for the backend, and mySQL for the database.

8. # Architecture

   Provide an overview of the project's architecture, including how the front end communicates with the backend and database.

9. # Roadmap
   Outline the future development plans for your project, including upcoming features or improvements.

### MySQL Database Framework

This section provides a clear overview of the "sales" table structure, inclusinf: column names, data types and descriptions.
I have designed the MySQL database to efficiently manage and organize various categories of data. Below is the structure of the `Sales` table:

#### Sales Table

| Column   | Type          | Description                            |
| -------- | ------------- | -------------------------------------- |
| id       | INT UNSIGNED  | Unique identifier for each record      |
| day      | DATE          | Date of the record data entry. \*      |
| income   | DECIMAL(8, 2) | Total income generated on the day      |
| men      | BIGINT        | Sales related to men shoewear \*\*     |
| women    | BIGINT        | Sales related to women shoewear \*\*   |
| kids     | BIGINT        | Sales related to kids shoewear \*\*    |
| clothing | BIGINT        | Sales related to clothing \*\*         |
| sport    | BIGINT        | Sales related to sports equipment \*\* |
| home     | BIGINT        | Sales related to home products \*\*    |
| weather  | VARCHAR(255)  | Weather condition on the day           |

\* The initial date is given in the american format.

\*\* Men, women, kids, clothing, sport, home are the categories
