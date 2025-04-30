import React from "react";
import { Box, Typography } from "@mui/material";
import { ClaimActivity } from "../types"; // Adjust based on your types

interface ClaimActivitiesProps {
  activities: ClaimActivity[];
}

const ClaimActivities: React.FC<ClaimActivitiesProps> = ({ activities }) => {
  return (
    <Box className="bg-white p-5 rounded-lg shadow-md">
      <Typography variant="h6" className="font-bold text-dark mb-4">
        Activities
      </Typography>

      {activities.map((activity) => (
        <Box key={activity.timestamp} className="mb-5 flex items-center">
          <Box className="bg-warning rounded-full p-2 mr-3">
            <i className="fa fa-genderless text-white"></i>
          </Box>
          <Box>
            <Typography variant="body2" className="font-semibold text-gray-800">
              {new Date(activity.timestamp).toLocaleTimeString()} - {activity.description}
            </Typography>
            <Typography variant="body2" className="text-muted">
              {activity.detail}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ClaimActivities;
