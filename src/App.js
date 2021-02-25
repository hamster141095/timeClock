import Reactб, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setTimeZone, setAnotherTimeZone } from "./redux/actions";
import ClockLeft from "./Component/ClockLeft";
import ClockRight from "./Component/ClockRight";

const App = () => {
    const dispatch = useDispatch();
    const timeZone = useSelector((state) => state.clockReducer.timeZone);
    const anotherTimeZone = useSelector(
        (state) => state.clockReducer.anotherTimeZone
    );

    function handleChange(value) {
        dispatch(setTimeZone(value));
    }

    function handleChangeAnother(value) {
        dispatch(setAnotherTimeZone(value));
    }

    useEffect(() => {
        document.title = "Часовые пояса";
    }, []);

    return (
        <div className="wrapper">
            <div className="container">
                <div className="section-clock">
                    <ClockLeft
                        timeZone={timeZone}
                        defaultValue={"Asia/Vladivostok"}
                        handleChange={handleChange}
                    />
                    <ClockRight
                        anotherTimeZone={anotherTimeZone}
                        defaultValue={"Europe/Moscow"}
                        handleChangeAnother={handleChangeAnother}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
