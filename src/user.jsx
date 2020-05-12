import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const User = ({ name,userId }) => {
    return (
        <div>
            <h3 key={userId}>
                <Link to={`/users/${userId}`}>{name}</Link>
            </h3>
        </div>
    );
}

export default User;