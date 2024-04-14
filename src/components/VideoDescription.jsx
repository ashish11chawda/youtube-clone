import React from "react";
import { Typography, Box } from "@mui/material";

const VideoDescription = ({ publishedAt, description }) => {
        return (
            <Box bgcolor="#1d1d1d" borderRadius="10px">
                <Typography
                    color="#fff"
                    variant="body2"
                    pl={2}
                    pt={2}
                    sx={{
                        opacity: 0.7,
                    }}
                >
                    {publishedAt ? new Date(publishedAt).toDateString() : ""}
                </Typography>
                <Typography
                    color="#fff"
                    variant="body2"
                    p={2}
                    sx={{
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {description}
                </Typography>
            </Box>
        );
};

export default VideoDescription;
