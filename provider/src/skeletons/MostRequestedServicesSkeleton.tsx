import React from "react";
import { Skeleton, Box, Typography } from "@mui/material";

const MostRequestedServicesSkeleton: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        الوصفات الأكثر طلبا
      </Typography>
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Skeleton variant="text" width={80} height={30} />
          <Skeleton variant="text" width={150} height={30} />
          <Skeleton variant="text" width={60} height={30} />
        </Box>
      ))}
    </Box>
  );
};

export default MostRequestedServicesSkeleton;
