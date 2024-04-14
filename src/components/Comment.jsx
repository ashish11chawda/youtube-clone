import React from "react";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import { formatDate } from "../utils/dateUtil";

const Comment = ({
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textDisplay
}) => {
    return (
        <Box
            justifyContent="flex-start"
            alignItems="center"
            sx={{ padding: "10px" }}
        >
            <Stack
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Avatar alt="Remy Sharp" src={authorProfileImageUrl} />
                <Typography sx={{ ml: "10px" }} variant="subtitle1">
                    {authorDisplayName}
                </Typography>
                <Typography
                    sx={{ ml: "10px", color: "gray" }}
                    variant="subtitle2"
                >
                    {formatDate(publishedAt)}
                </Typography>
            </Stack>
            <Typography variant="body" m={6.5}>
                {textDisplay}
            </Typography>
        </Box>
    );
};

export default Comment;
