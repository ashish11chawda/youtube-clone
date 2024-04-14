import React from "react";
import {
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import {Comments} from "./";

const CommentDetail = ({ id, commentCount }) => {
    
    // } else {
    //     return <Loading type="cylon" color="#ff1e0e" />;
    // }
    return (
        <Accordion style={{margin: '20px 10px', borderRadius: '20px', color: '#fff'}}>
            <AccordionSummary id="panel-header" aria-controls="panel-content"  expandIcon={<ArrowDropDown sx={{ fontSize: 25, color: "#fff"}} />} style={{background: '#1d1d1d'}}>
                <Typography variant="h6">
                    {parseInt(commentCount).toLocaleString()} Comments
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{background: "#1b1b1b"}}>
                <Comments id={id} />
            </AccordionDetails>
        </Accordion>
    );
};

export default CommentDetail;
