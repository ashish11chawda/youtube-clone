import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Stack } from "@mui/material";
import { Loading, Comment } from "./";

const Comments = ({ id }) => {
    const [commentDetail, setCommentDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then(
            (data) => {
                setCommentDetail(data.items);
            }
        );
    }, [id]);
    if (!commentDetail?.length) return <Loading type="cylon" color="#ff1e0e" />;

    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
        >
            {commentDetail.map((item) => {
                var {
                    snippet: {
                        topLevelComment: {
                            snippet: {
                                textDisplay,
                                authorDisplayName,
                                authorProfileImageUrl,
                                publishedAt,
                            },
                        },
                    },
                } = item;
                return (
                    <Comment
                        authorProfileImageUrl={authorProfileImageUrl}
                        authorDisplayName={authorDisplayName}
                        publishedAt={publishedAt}
                        textDisplay={textDisplay}
                    />
                );
            })}
        </Stack>
    );
};

export default Comments;
