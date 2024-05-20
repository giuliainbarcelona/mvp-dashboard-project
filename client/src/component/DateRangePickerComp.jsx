import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import Button from "@mui/material/Button";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangePickerComp = ({ setSalesRecord }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  const hideOnEscape = (e) => {
    // console.log(e.key);
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

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

  return (
    <div className=".calendarWrap">
      <div className="filterdata-btn">
        <Button
          type="button"
          variant="contained"
          onClick={() =>
            fetchData({
              startDate: `${format(range[0].startDate, "yyyy-MM-dd")}`,
              endDate: `${format(range[0].endDate, "yyyy-MM-dd")}`,
            })
          }
        >
          Filter By Date
        </Button>
      </div>
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
