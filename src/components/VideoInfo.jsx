import React from "react";
import { Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {VideoDescription} from "./";

const VideoInfo = ({ title, channelId, channelTitle, viewCount, likeCount, publishedAt, description }) => {
    return (
        <>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
            </Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                    color: "#fff",
                }}
                py={1}
                px={2}
            >
                <Link to={`/channel/${channelId}`}>
                    <Typography variant="subtitle1" color="#fff">
                        {channelTitle}
                        <CheckCircle
                            sx={{
                                fontSize: "12px",
                                color: "gray",
                                ml: "5px",
                            }}
                        />
                    </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                    <Typography
                        variant="body1"
                        sx={{
                            opacity: 0.7,
                        }}
                    >
                        {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            opacity: 0.7,
                        }}
                    >
                        {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                </Stack>
            </Stack>
            <VideoDescription publishedAt={publishedAt} description={description}  />
        </>
    );
};

export default VideoInfo;
