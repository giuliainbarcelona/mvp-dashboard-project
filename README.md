### 1. Project Title

Dashboard Data Management System

### 2. Description

This project aims to provide a user-friendly interface for inputting and managing various types of data and generating insightful dashboards for analysis and decision-making.

### 3. Features

- User-friendly interface for inputting data.
- Database framework for organizing different categories of data.
- Dashboard generation for comparing and showcasing data.
- Customizable downloading options.

### 5. Installation

After cloning the repo into your computer, you will need to..
cd into the folder

- `npm start` in the mvp folder --> This will open the "backend terminal"
- Open another terminal, `cd client` and `npm run dev` --> This will open the "frontend terminal"
- For mySQL `mysql -u root -p`, it will ask for your password

### 6. Usage

Interface navigation

The dashboard presents three main buttons for the user.

- The "most important" one is the "Add Data" - This opens a dialog with empty fields that the user needs to fill out.
  The dialog can be quitted by pressing Esc or by clicking outside on the page.
- The "Download" allows the user to download the current view of the dashboard.
- The "Filter by Date" allows the user to visualise the data by personalized date ranges that are to be selected in the data range picked component.

Furthermore, inside the table there is a "Delete" button that allows to user to permanelty delete the data from the database.
Every cell in the table is editable and the databased gets updated once the value is changed.

### 7. Technologies Used

This project is built with React for its front end component, mySQL for its database, and Express and NodeJS for the beckend.

I have used a couple of libraries to help me with the styling:

- DateRangePickerComp: https://hypeserver.github.io/react-date-range/#calendar
  date-fns/format
  And coded along this tutorial: https://www.youtube.com/watch?v=5OEOLDBow_0
- PDF download component: https://react-pdf.org/
- Date formatting: date-fns/format

The main library I used is (https://mui.com/), which I have used to style:

- Table and all its components
- Button
- Dialog

### 8. Architecture

The architecture of the project is simple, here you will find a breakdown of how the front end communicates with the backend and database.
There are five main routes that connectes the two "ends" of the project.
The first one is a GET route that gets all the data from the database. This is the route that allows the user to see all the "salesRecord" in the dashboard at all times.
The second one is still a GET function that gets the data from the database "filtering" by date, this function connects to the frontend side of the DataPicker component.
The third one is a PUT function which gets on the stage when the user edits the "salesRecord", it makes sure that the data are saved into the database.
The fourth one is (maybe) the most important, which is the POST method, the function that allows the user's input to be saved into the db. This one gets triggered when the user presses the add data button.
And the last one is the DELETE function, which deletes sales records based on their ID, and gets triggered when the user presses the delete button.

### 9 . Roadmap

Future development plans:

- The weather section of the table will not be inputted manually but it will use an API to fetch the weather in the particular day. It will save this information.
- A new section for data visualization. The idea is to create different graphical ways to compare and visualize data. This will be a pie chart and a graph.
  Hint hint: https://react-chartjs-2.js.org/
- Improving the graphical layout of the PDF document.

### MySQL Database Framework

This section provides a clear overview of the "sales" table structure, inclusing: column names, data types and descriptions.
I have designed the MySQL database to efficiently manage and organize various categories of data. Below is the structure of the `Sales` table:

#### Sales Table

| Column   | Type          | Description                            |
| -------- | ------------- | -------------------------------------- |
| id       | INT UNSIGNED  | Unique identifier for each record      |
| day      | DATE          | Date of the record data entry \*       |
| income   | DECIMAL(8, 2) | Total income generated on the day      |
| men      | BIGINT        | Sales related to men shoewear \*\*     |
| women    | BIGINT        | Sales related to women shoewear \*\*   |
| kids     | BIGINT        | Sales related to kids shoewear \*\*    |
| clothing | BIGINT        | Sales related to clothing \*\*         |
| sport    | BIGINT        | Sales related to sports equipment \*\* |
| home     | BIGINT        | Sales related to home products \*\*    |
| weather  | VARCHAR(255)  | Weather condition on the day           |

\* The initial date is given in the american format: YYYY-MM-DD

\*\* Men, women, kids, clothing, sport, home are the categories.
Their value is expressed in numbers.
