import React from "react";
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type='btn' className="btn btn-info">Все</button>
            <button type='btn' className="btn btn-outline-secondary">Понравилось</button>
            
        </div>
    )   
}

export default PostStatusFilter;