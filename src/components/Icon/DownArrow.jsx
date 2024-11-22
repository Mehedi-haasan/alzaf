import React, { useState } from "react";

const DownArrow = ({ className = '', size = '20',onClick }) => {
    return (
        <svg onClick={onClick}
            className={className} xmlns="http://www.w3.org/2000/svg"
            width={size} height={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
        </svg>
    )
}
export default DownArrow