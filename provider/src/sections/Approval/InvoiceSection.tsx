// import React from "react";
// import { Button, Badge, Box, Typography } from "@mui/material";
// import { Claim } from "../types"; // Adjust based on your types

// interface InvoiceProps {
//   claim: Claim;
//   onSubmit: () => void;
// }

// const InvoiceSection: React.FC<InvoiceProps> = ({ claim, onSubmit }) => {
//   return (
//     <Box className="bg-white p-5 rounded-lg shadow-md">
//       <div className="flex justify-between mb-5">
//         <Typography variant="h5" className="font-bold text-gray-800">
//           Invoice #{claim.name}
//         </Typography>
//         {claim.workflow_state === "DRAFT" && (
//           <Button variant="contained" color="success" onClick={onSubmit}>
//             Submit Now
//           </Button>
//         )}
//       </div>

//       <Badge
//         color={claim.workflow_state === "DRAFT" ? "warning" : "success"}
//         className="mb-4"
//         badgeContent={claim.workflow_state}
//       />

//       {claim.is_rejected && claim.workflow_state === "REJECTED" && claim.rejection_reason && (
//         <Box className="bg-red-100 p-4 rounded-lg mb-4">
//           <Typography variant="h6" color="error">
//             Rejection Reason
//           </Typography>
//           <Typography>{claim.rejection_reason}</Typography>
//         </Box>
//       )}

//       <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Box>
//           <Typography variant="body2" className="font-semibold text-gray-600">
//             National ID:
//           </Typography>
//           <Typography variant="body2" className="text-gray-800">
//             {claim.employee_doc?.national_id}
//           </Typography>
//         </Box>

//         <Box>
//           <Typography variant="body2" className="font-semibold text-gray-600">
//             Issue Date:
//           </Typography>
//           <Typography variant="body2" className="text-gray-800">
//             {new Date(claim.issue_date).toLocaleDateString()}
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default InvoiceSection;
