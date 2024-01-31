// // App.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSelectedIcon } from './Redux/actions';
// // import {
// //   Select,
// //   MenuItem,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// //   SvgIcon,
// // } from '@material-ui/core';

// import {
//   Select,
//   MenuItem,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   SvgIcon} from '@mui/material' ;

//  import * as Icons from './icon';

//  const iconOptions = [
//   { value: Icons.HomeIcon, label: 'Home' },
//   { value: Icons.PhoneIcon, label: 'Phone' },
//   { value: Icons.CheckIcon, label: 'CheckIcon' },
// ];

// const App = () => {
//   const dispatch = useDispatch();
//   const selectedIcon = useSelector((state) => state.selectedIcon);

//   const handleIconChange = (event) => {
//     dispatch(setSelectedIcon(event.target.value));
//   };

//   return (
//     <div>
//       <ListItem>
//         <ListItemIcon>
//           <Select value={selectedIcon} onChange={handleIconChange}>
//             {iconOptions.map((option) => (
//               <MenuItem key={option.label} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </ListItemIcon>
//         <ListItemText primary="Selected Icon" />
//       </ListItem>

//       <div>
//         {selectedIcon && (
//           <SvgIcon component={selectedIcon} style={{ fontSize: 50, color: 'green' }} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomIcons, setSelectedIcon } from './Redux/actions';
import {
  Select,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from '@mui/material';
import * as Icons from './icon';
import CustomIconUpload from './CustomIconUpload';
import CustomSvgIcon from './CustomSvgIcon';

const App = () => {
  const dispatch = useDispatch();
  const selectedIcon = useSelector((state) => state.selectedIcon);
  const customIcons = useSelector((state) => state.customIcons);
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleIconChange = (event) => {
    dispatch(setSelectedIcon(event.target.value));
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newIcons = Array.from(files).map((file) => URL.createObjectURL(file));
    dispatch(setCustomIcons([...newIcons, ...customIcons]));
    setFileInputKey(fileInputKey + 1);
  };

  const allIcons = [
    ...customIcons.map((customIcon, index) => ({
      value: customIcon,
      label: `Custom ${index + 1}`,
    })),
    { value: 'home', label: 'Home', component: <Icons.HomeIcon /> },
    { value: 'phone', label: 'Phone', component: <Icons.PhoneIcon /> },
    { value: 'arrowDown', label: 'Arrow Down', component: <Icons.CheckIcon /> },
  ];

  return (
    <div>
      <CustomIconUpload key={fileInputKey} onFileUpload={handleFileUpload} />

      <ListItem>
        <ListItemIcon>
          <Select value={selectedIcon} onChange={handleIconChange}>
            {allIcons.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </ListItemIcon>
        <ListItemText primary="Selected Icon" />
      </ListItem>

      <div>
        {selectedIcon && (
          selectedIcon.startsWith('blob:') ? (
            <CustomSvgIcon svgData={selectedIcon} />
          ) : (
            allIcons.find((icon) => icon.value === selectedIcon)?.component || null
          )
        )}
      </div>
    </div>
  );
};

export default App;

