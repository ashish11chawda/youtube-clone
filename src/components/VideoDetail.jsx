import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack } from "@mui/material";
import { Videos, VideoInfo, CommentDetail } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data?.items[0]);
        });
        fetchFromAPI(
            `search?part=snippet&relatedToVideoId=${id}&type=video`
        ).then((data) => {
            setVideos(data.items);
        });
        
    }, [id]);

    if (videoDetail) {
        var {
            snippet: {
                title,
                description,
                publishedAt,
                channelId,
                channelTitle,
            },
            statistics: { viewCount, likeCount, commentCount },
        } = videoDetail;
    }

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", top: "86px" }}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <VideoInfo title={title} channelId={channelId} channelTitle={channelTitle} viewCount={viewCount} likeCount={likeCount} publishedAt={publishedAt} description={description} />
                        <CommentDetail id={id} commentCount={commentCount} />
                    </Box>
                </Box>
                <Box
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;
