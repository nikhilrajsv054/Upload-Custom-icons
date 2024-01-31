// // IconUpload.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { uploadIcon } from "./Redux/actions";
// import SvgIcon from "@mui/material/SvgIcon";

// const IconUpload = () => {
//   const [selectedIcon, setSelectedIcon] = useState(null);
//   const dispatch = useDispatch();

//   const handleIconUpload = (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     if (file && file.name.toLowerCase().endsWith(".svg")) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const svgContent = reader.result;
//         dispatch(uploadIcon(svgContent));
//         setSelectedIcon(new Date().getTime()); // Use timestamp as a unique key
//       };
//       reader.readAsText(file);
//     } else {
//       alert("Please upload a valid .svg file.");
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleIconUpload} accept=".svg" />
//       {selectedIcon!==null && (
//         <div>
//           <h2>Uploaded Icon</h2>
//           <SvgIcon
//             component={() => (
//               <span dangerouslySetInnerHTML={{ __html: selectedIcon }} />
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default IconUpload;
