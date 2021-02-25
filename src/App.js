import React, { useRef, useEffect, useState } from "react";
var moment = require("moment-timezone");

const App = () => {
    const deg = 6;

    const [date, setState] = useState({ date: new Date() });
    // let time = moment().format("hh:mm:ss");
    // let time = moment().format("hh");

    // let time22 = moment().tz("Asia/Vladivostok").format("h:mm:ss");
    // let time133 = moment().tz("Europe/Kaliningrad").format("h:mm:ss");
    // let time144 = moment().tz("Asia/Krasnoyarsk").format("h:mm:ss");
    // let time3 = moment().tz("Europe/Moscow").format("hh:mm:ss");
    // console.log(time1);
    // let day = new Date();
    let a = moment().format("h");
    let b = moment().format("mm");
    let c = moment().format("ss");

    let a1 = moment().tz("Asia/Vladivostok").format("h");
    let a2 = moment().tz("Asia/Vladivostok").format("mm");
    let a3 = moment().tz("Asia/Vladivostok").format("h:mm:ss");

    let b1 = moment().tz("Europe/Kaliningrad").format("h");
    let b2 = moment().tz("Europe/Kaliningrad").format("mm");
    let b3 = moment().tz("Europe/Kaliningrad").format("ss");

    let c1 = moment().tz("Asia/Krasnoyarsk").format("h");
    let c2 = moment().tz("Asia/Krasnoyarsk").format("mm");
    let c3 = moment().tz("Asia/Krasnoyarsk").format("ss");

    // console.log(c1);

    let d1 = moment().tz("Europe/Moscow").format("h");
    let d2 = moment().tz("Europe/Moscow").format("mm");
    let d3 = moment().tz("Europe/Moscow").format("ss");

    let hh = a[0] === "0" ? a[1] : a * 30;
    let mm = b[0] === "0" ? b[1] : b * deg;
    let ss = c[0] === "0" ? c[1] : c * deg;

    let hh1 = a1[0] === "0" ? a1[1] : a1 * 30;
    let mm1 = a2[0] === "0" ? a2[1] : a2 * deg;
    let ss1 = a3[0] === "0" ? a3[1] : a3 * deg;

    let hh2 = b1[0] === "0" ? b1[1] : b1 * 30;
    let mm2 = b2[0] === "0" ? b2[1] : b2 * deg;
    let ss2 = b3[0] === "0" ? b3[1] : b3 * deg;

    let hh3 = c1[0] === "0" ? c1[1] : c1 * 30;
    let mm3 = c2[0] === "0" ? c2[1] : c2 * deg;
    let ss3 = c3[0] === "0" ? c3[1] : c3 * deg;

    let hh4 = d1[0] === "0" ? d1[1] : d1 * 30;
    let mm4 = d2[0] === "0" ? d2[1] : d2 * deg;
    let ss4 = d3[0] === "0" ? d3[1] : d3 * deg;

    // console.log(moment(new Date()).format("h"));
    // console.log(new Date().getTimezoneOffset() / 60);

    // console.log(`Красноярск ${new Date().getUTCHours() + 7} `);

    // console.log(`Москва ${new Date().getUTCHours() + 3}`);

    // console.log(`Каллининград ${new Date().getUTCHours() + 2}`);

    // console.log(`Владивосток ${new Date().getUTCHours() + 10}`);

    // console.log(`Красноярск ${(new Date().getTimezoneOffset() / 60) * -1} `);
    // console.log(`Калининград ${(new Date().getTimezoneOffset() / 60) * -1}  `);

    // var time = new Date();
    // var timeZoneOffset = time.getTimezoneOffset();
    // console.log(moment.tz.zone("America/Chicago").abbr(timeZoneOffset));
    // console.log(moment().hour());
    // console.log(new Date().getTime());

    // const date1 = new Date();
    // const dateAsString = date1.toString();
    // const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

    // console.log(timezone);
    let timeZone = new Date().getTimezoneOffset();
    console.log(parseInt(timeZone));

    function getTime1() {
        let newTime = {};

        let time = new Date(new Date().getTime() + 60 * 60 * 1000);
        let hours = time.getUTCHours();
        let mins = time.getUTCMinutes();
        let secs = time.getUTCSeconds();

        return `${hours}:${mins}:${secs} ${timeZone}`;
    }

    const arr = getTime1();
    const arr1 = getTime1(0);

    // console.log(`local${new Date()}`);
    // console.log(`лондон${arr}`);
    // console.log(`Красноярск ${getTime1()}`);
    // console.log(`Калининград ${getTime1()}`);

    useEffect(() => {
        setInterval(() => setState({ date: new Date() }), 2000);
    }, []);

    return (
        <>
            <div>
                Местное
                <div class="clock">
                    <div class="hour">
                        <div
                            class="hr"
                            id="hr"
                            style={{ transform: `rotateZ(${hh + mm / 12}deg)` }}
                        ></div>
                    </div>
                    <div class="min">
                        <div
                            class="mn"
                            id="mn"
                            style={{ transform: `rotateZ(${mm}deg)` }}
                        ></div>
                    </div>
                    <div class="sec">
                        <div
                            class="sc"
                            id="sc"
                            style={{ transform: `rotateZ(${ss}deg)` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div>
                Vladivostok
                <div class="clock">
                    <div class="hour">
                        <div
                            class="hr"
                            id="hr"
                            style={{
                                transform: `rotateZ(${hh1 + mm1 / 12}deg)`,
                            }}
                        ></div>
                    </div>
                    <div class="min">
                        <div
                            class="mn"
                            id="mn"
                            style={{ transform: `rotateZ(${mm1}deg)` }}
                        ></div>
                    </div>
                    <div class="sec">
                        <div
                            class="sc"
                            id="sc"
                            style={{ transform: `rotateZ(${ss1}deg)` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div>
                Kaliningrad
                <div class="clock">
                    <div class="hour">
                        <div
                            class="hr"
                            id="hr"
                            style={{
                                transform: `rotateZ(${hh2 + mm2 / 12}deg)`,
                            }}
                        ></div>
                    </div>
                    <div class="min">
                        <div
                            class="mn"
                            id="mn"
                            style={{ transform: `rotateZ(${mm2}deg)` }}
                        ></div>
                    </div>
                    <div class="sec">
                        <div
                            class="sc"
                            id="sc"
                            style={{ transform: `rotateZ(${ss2}deg)` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div>
                Krasnoyarsk
                <div class="clock">
                    <div class="hour">
                        <div
                            class="hr"
                            id="hr"
                            style={{
                                transform: `rotateZ(${hh3 + mm3 / 12}deg)`,
                            }}
                        ></div>
                    </div>
                    <div class="min">
                        <div
                            class="mn"
                            id="mn"
                            style={{ transform: `rotateZ(${mm3}deg)` }}
                        ></div>
                    </div>
                    <div class="sec">
                        <div
                            class="sc"
                            id="sc"
                            style={{ transform: `rotateZ(${ss3}deg)` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div>
                Moscow
                <div class="clock">
                    <div class="hour">
                        <div
                            class="hr"
                            id="hr"
                            style={{
                                transform: `rotateZ(${hh4 + mm4 / 12}deg)`,
                            }}
                        ></div>
                    </div>
                    <div class="min">
                        <div
                            class="mn"
                            id="mn"
                            style={{ transform: `rotateZ(${mm4}deg)` }}
                        ></div>
                    </div>
                    <div class="sec">
                        <div
                            class="sc"
                            id="sc"
                            style={{ transform: `rotateZ(${ss4}deg)` }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
