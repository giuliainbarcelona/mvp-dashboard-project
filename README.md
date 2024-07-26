<p style="text-align: center; height: 50px;">
  <img src="./client/public/vite.svg" alt="icon" style="height: 40px;" />
</p>

<h1 style="text-align: center;">Dashboard Data Management System</h1>

<p style="text-align: center;">By Giulia Cellerino</p>

## Table of Contents

- [Introduction](#introduction)
- [Motivation](#motivation)
- [Features & Pages](#features--pages)
- [Tools Used](#tools-used)
- [Getting Started](#getting-started)
- [Demo Video](#demo-video)
- [Database Schema](#database-schema)
- [Routes](#routes)
- [Future Features](#future-features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Introduction

My app is designed to provide a comprehensive overview of sales data, enabling efficient data management and insightful analysis.

## Motivation

The inception of this project began with a personal challenge: assisting my family's business, [Figini Varese](https://www.figinicalzature.com/la-storia/). As a small business, we faced significant difficulties in managing and analyzing our sales data effectively. In today's data-driven world, many small businesses encounter similar struggles, finding it overwhelming to keep track of and interpret their data.

Recognizing this widespread issue, I was motivated to develop a tool that not only addresses our family's needs but also provides a valuable resource for other small businesses. The goal of this project is to empower small business owners by simplifying the process of data management and analysis, thereby enabling them to make informed, data-driven decisions that can drive their business success.

## Features & Pages

Below are the key features and functionalities of the application:

**Data Input and Management**

- **Add Data**: Users can input daily sales data through a form displayed in a dialog popup. The form includes fields for day, income, demographic breakdown (men, women, kids), and category-specific sales (clothing, sport, home). Upon submission, the data is sent to the backend for storage and updates the displayed sales records.
- **Edit Data**: Existing sales records can be edited directly from the displayed table.
- **Delete Data**: Users can delete specific sales records from the database. This action updates the displayed records after confirmation.

**Data Visualization and Export**

- **Sales Table**: A comprehensive table displays all sales records, including daily data and segmented sales figures. It provides an overview of performance metrics essential for business analysis.
- **Download as PDF**: Users can generate and download the entire sales table as a PDF document. This feature is facilitated by the PDFDownloadLink component, ensuring easy access to summarized sales data for offline use.

**Date Range Selection**

- **Date Range Picker**: Integration with the DateRangePickerComp component allows users to filter sales data based on selected date ranges. This feature enhances data exploration and trend analysis by focusing on specific time periods.

**Error Handling and User Feedback**

- **Error Handling**: The application includes error handling mechanisms for incomplete form submissions. Users receive feedback prompts to fill out all required fields before data submission.

## Tools Used

- **VS Code** - Source code editor
- **GitHub** - Version control platform
- **Git** - Version control system
- **Postman** - API development and testing tool
- **MySQL** - Relational database management system
- **HTML** - Markup language for creating web pages
- **CSS** - Stylesheet language for styling web pages
- **JavaScript (ES6+)** - Programming language for web development
- **React** - JavaScript library for building user interfaces
- **Material-UI** - React component library implementing Google's Material Design
- **Mui Grid** - Part of Material-UI for creating responsive layout grids
- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework for Node.js
- **DrawSQL** - Tool for creating database diagrams
- **Date Range Picker** - Component for selecting date ranges in the application
- **PDFDownloadLink** - Component for generating and downloading PDFs
- **react-pdf/renderer** - Library for generating PDF documents in React applications
- **react-date-range** - Component for picking dates and date ranges

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Package managers for Node.js
- [MySQL](https://www.mysql.com/) - Relational database management system

### Installation

0. Clone the repository on your local machine and open it.

```bash
git clone "githublink"
```

1. Create a .env file in the root project folder and add the following configuration:

```
DB_HOST=localhost
DB_USER=root
DB_NAME=sales
DB_PASS=yourpassword
```

2. Open a terminal and run MySQL to start the database:

```bash
mysql -u root -p
```

3. Create database:

```sql
CREATE DATABASE sales;
```

4. Install NPM packages for both the server and client:

```bash
npm install
cd client
npm install
```

5. Run migrations to populate the database with initial information:

```bash
npm run migrate
```

6. Start the backend server:

```bash
npm start
```

7. Navigate to the client directory and start the frontend development server:

```bash
cd client
npm run dev
```

Frontend runs on http://localhost:5173/, and backend runs on http://localhost:4000.

## Demo Video

[![Demo](https://img.youtube.com/vi/i5yc8sU_sls/0.jpg)](https://www.youtube.com/watch?v=i5yc8sU_sls)

## Database Schema

The sales table contains detailed records of daily sales data, categorized into various segments. Below is a breakdown of its structure:

### Columns and Descriptions

| Column   | Type          | Description                                    |
| -------- | ------------- | ---------------------------------------------- |
| id       | INT UNSIGNED  | Unique identifier for each sales record.       |
| day      | DATE          | Date of the sales record in YYYY-MM-DD format. |
| income   | DECIMAL(8, 2) | Total income generated on the day.             |
| men      | BIGINT        | Sales related to men's shoewear.               |
| women    | BIGINT        | Sales related to women's shoewear.             |
| kids     | BIGINT        | Sales related to kids' shoewear.               |
| clothing | BIGINT        | Sales related to clothing items.               |
| sport    | BIGINT        | Sales related to sports equipment.             |
| home     | BIGINT        | Sales related to home products.                |
| weather  | VARCHAR(255)  | Weather condition on the day of sales.         |

### Notes

- **day**: The date is stored in the American format (YYYY-MM-DD).
- **men, women, kids, clothing, sport, home**: These columns represent sales figures in respective categories, recorded as numerical values.

### Example Queries

Here are sample SQL queries to interact with the sales table:

1. Retrieve all sales records for a specific date range:

```sql
SELECT * FROM sales WHERE day BETWEEN 'start_date' AND 'end_date';
```

2. Get sales breakdown by category for a particular day:

```sql
SELECT day, men, women, kids, clothing, sport, home FROM sales WHERE day = 'specific_date';
```

The sales table serves as a crucial repository for tracking daily sales performance across various product categories, enabling informed business decisions based on historical data.

## Routes

- **GET /api/**

  - Retrieves all sales records from the database.

- **GET /api/dates**

  - Retrieves sales records filtered by date range.

- **PUT /api/:id**

  - Updates a specific sales record identified by ID.

- **POST /api/**

  - Adds a new sales record to the database.

- **DELETE /api/:id**
  - Deletes a specific sales record identified by ID.

## Future Features

There are plenty of ideas to make this app bigger and better, here below a snippet:

- **Enhanced Data Visualization:** Integrate graph and pie chart options for sales trends.
- **Weather Integration:** Fetch weather data from an API based on store location.
- **User Authentication:** Secure user access with authentication mechanisms.
- **Advanced Analytics:** Implement tools for deeper sales performance insights.
- **Responsive Design:** Optimize the dashboard for seamless mobile and desktop use.

## Contact

- Giulia Cellerino - giulia.cellerino@icloud.com

## Acknowledgements

- Teacher [Germinal Camps](https://es.linkedin.com/in/germinal-camps)
- TA [Zoe Laventhol](https://www.linkedin.com/in/zoe-laventhol)
- TA [Pia Prozesky](https://www.linkedin.com/in/pia-prozesky)
