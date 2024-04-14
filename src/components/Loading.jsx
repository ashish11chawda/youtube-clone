import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
        <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
    </div>
);
 
export default Loading;