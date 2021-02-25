import React, { useEffect } from "react";
import MySelect from "./Select";
import Clock from "./Clock";

let moment = require("moment-timezone");

const ClockRight = ({ anotherTimeZone, handleChangeAnother }) => {
    let hh = moment().tz(anotherTimeZone).format("h");
    let mm = moment().tz(anotherTimeZone).format("mm");
    let ss = moment().tz(anotherTimeZone).format("ss");

    useEffect(() => {
        let second = 6 * ss;
        let minute = mm * 6;
        let hour = hh * 30;

        let hourHand = document.getElementById("hourRight");
        let minuteHand = document.getElementById("minuteRight");
        let secondHand = document.getElementById("secondRight");
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
                <Clock
                    idHour="hourRight"
                    idMinutes="minuteRight"
                    idSeconds="secondRight"
                />
            </>
            <MySelect
                handleChange={handleChangeAnother}
                defaultValue={"Europe/Moscow"}
            />
        </div>
    );
};

export default ClockRight;
