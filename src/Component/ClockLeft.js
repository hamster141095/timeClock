import React, { useEffect } from "react";
import MySelect from "./Select";
import Clock from "./Clock";

let moment = require("moment-timezone");

const ClockLeft = ({ timeZone, handleChange }) => {
    let hh = moment().tz(timeZone).format("h");
    let mm = moment().tz(timeZone).format("mm");
    let ss = moment().tz(timeZone).format("ss");

    useEffect(() => {
        let second = 6 * ss;
        let minute = mm * 6;
        let hour = hh * 30;

        let hourHand = document.getElementById("hour");
        let minuteHand = document.getElementById("minute");
        let secondHand = document.getElementById("second");
        hourHand.setAttribute("transform", "rotate(" + hour.toString() + ")");
        minuteHand.setAttribute(
            "transform",
            "rotate(" + minute.toString() + ")"
        );
        secondHand.setAttribute(
            "transform",
            "rotate(" + second.toString() + ")"
        );
    }, [hh, mm, ss]);

    return (
        <div className="section-clock__inner ">
            <>
                <Clock idHour="hour" idMinutes="minute" idSeconds="second" />
            </>

            <MySelect
                handleChange={handleChange}
                defaultValue={"Asia/Vladivostok"}
            />
        </div>
    );
};

export default ClockLeft;
