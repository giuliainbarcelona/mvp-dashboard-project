// import * as React from "react";
// import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Dialog from "@mui/material/Dialog";
// import PersonIcon from "@mui/icons-material/Person";
// import AddIcon from "@mui/icons-material/Add";
// import Typography from "@mui/material/Typography";
// import { blue } from "@mui/material/colors";

// export default function DataDialog({ open, handleCloseDialog }) {
//   const handleClose = () => {
//     handleCloseDialog();
//   };

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setInput((state) => ({ ...state, [name]: value }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     addInputs();
//   }

//   return (
//     <Dialog onClose={handleClose} open={open}>
//       <DialogTitle>Set backup account</DialogTitle>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <label>
//           <input
//             type="date"
//             name="day"
//             placeholder="Day"
//             value={input.day}
//             onChange={handleInputChange}
//           ></input>
//           <input
//             type="number"
//             name="income"
//             placeholder="Income"
//             value={input.income}
//             onChange={handleInputChange}
//           ></input>
//           <input
//             type="number"
//             name="men"
//             placeholder="Men"
//             value={input.men}
//             onChange={handleInputChange}
//           ></input>
//           <input
//             type="number"
//             name="women"
//             placeholder="Women"
//             value={input.women}
//             onChange={handleInputChange}
//           ></input>
//           <br />
//           <input
//             type="number"
//             name="kids"
//             placeholder="Kids"
//             value={input.kids}
//             onChange={handleInputChange}
//           ></input>
//           <input
//             type="number"
//             name="clothing"
//             placeholder="Clothing"
//             value={input.clothing}
//             onChange={handleInputChange}
//           ></input>
//           <input
//             type="number"
//             name="sport"
//             placeholder="Sport"
//             value={input.sport}
//             onChange={handleInputChange}
//           ></input>
//           <input
//             type="number"
//             name="home"
//             placeholder="Home"
//             value={input.home}
//             onChange={handleInputChange}
//           ></input>
//           <input
//             type="text"
//             name="weather"
//             placeholder="Weather"
//             value={input.weather}
//             onChange={handleInputChange}
//           ></input>
//         </label>
//         <br />
//         <br />
//         <Button type="submit" variant="contained">
//           Submit Data
//         </Button>
//       </form>
//     </Dialog>
//   );
// }
