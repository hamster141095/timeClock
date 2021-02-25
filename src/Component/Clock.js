import React from "react";

const Clock = ({ idHour, idMinutes, idSeconds }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220px"
                height="220px"
                viewBox="0 0 220 220"
            >
                <g transform="translate(110,110)">
                    <g>
                        <circle
                            r="100"
                            fill="#ced2d4"
                            strokeWidth="2"
                            stroke="gray"
                        />
                        <circle
                            r="93"
                            fill="none"
                            strokeWidth="11"
                            stroke="#6d6e6e"
                            strokeDasharray="2,46.789082"
                            transform="rotate(-1)"
                        />
                    </g>
                    <g id="hands" transform="rotate(180)">
                        <g id={idHour}>
                            <line
                                strokeWidth="3"
                                y2="40"
                                strokeLinecap="round"
                                stroke="#282929"
                                opacity=".7"
                            />
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                repeatCount="indefinite"
                                dur="12h"
                                by="360"
                            />
                            <circle r="7" fill="#282929" opacity=".5" />
                        </g>
                        <g id={idMinutes}>
                            <line
                                strokeWidth="3"
                                y2="80"
                                strokeLinecap="round"
                                stroke="#282929"
                                opacity=".6"
                            />
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                repeatCount="indefinite"
                                dur="60min"
                                by="360"
                            />
                            <circle r="6" fill="#282929" opacity=".5" />
                        </g>
                        <g id={idSeconds}>
                            <line
                                strokeWidth="2"
                                y1="-20"
                                y2="90"
                                strokeLinecap="round"
                                stroke="#282929"
                                opacity=".5"
                            />
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                repeatCount="indefinite"
                                dur="60s"
                                by="360"
                            />
                            <circle r="4" fill="#282929" opacity=".5" />
                        </g>
                    </g>
                </g>
            </svg>
        </>
    );
};

export default Clock;
