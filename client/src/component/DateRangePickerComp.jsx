import { useEffect, useRef, useState } from "react"; // Imports React hooks: useEffect, useRef, and useState.
import { DateRangePicker } from "react-date-range"; // Imports DateRangePicker component from react-date-range library.
import format from "date-fns/format"; // Imports the format function from date-fns library.
import { addDays } from "date-fns"; // Imports the addDays function from date-fns library.
import Button from "@mui/material/Button"; // Imports the Button component from Material-UI library.
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// Defines a functional component DateRangePickerComp that accepts setSalesRecord as a prop.
const DateRangePickerComp = ({ setSalesRecord }) => {
  const [range, setRange] = useState([
    {
      // Initializes the range state with an array containing an object with startDate set to today and endDate set to 7 days from today.
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  //  Initializes the open state to control whether the date picker is shown.
  const [open, setOpen] = useState(false);

  // Creates a ref to attach to the date picker element.
  const refOne = useRef(null);

  useEffect(() => {
    // Adds event listeners for 'keydown' and 'click' events.
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
    // Removes event listeners when the component unmounts.
    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  // Defines a function to close the date picker when the Esc key is pressed.
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Defines a function to close the date picker when clicking outside of it.
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // // Defines a function to fetch data based on selected date range and updates the sales record.
  function fetchData(dates) {
    const { startDate, endDate } = dates;
    console.log(startDate);
    console.log(endDate);
    fetch(`/api/dates?startDate=${startDate}&endDate=${endDate}`)
      .then((response) => response.json())
      .then((salesRecord) => {
        // console.log(salesRecord);
        setSalesRecord(salesRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // // Renders the date range picker component with input field and filter button.
  return (
    <div className=".calendarWrap">
      <Button
        type="button"
        variant="contained"
        className="filterdata-btn"
        onClick={() =>
          fetchData({
            startDate: `${format(range[0].startDate, "yyyy-MM-dd")}`,
            endDate: `${format(range[0].endDate, "yyyy-MM-dd")}`,
          })
        }
      >
        Filter By Date
      </Button>
      <div className="inputBox">
        <input
          value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
            range[0].endDate,
            "dd/MM/yyyy"
          )}`}
          readOnly
          onClick={() => setOpen((open) => !open)}
        />
      </div>
      <div ref={refOne}>
        {open && (
          <DateRangePicker
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePickerComp;
