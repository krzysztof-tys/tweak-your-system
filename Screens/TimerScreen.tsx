import { useEffect, useState } from "react";
import { Activity } from "./SetupScreen";

type TimerProps = {
    activities: Activity[];
};

const TimerScreen = ({ activities }: TimerProps) => {
    const [currentActivity, setCurrentActivity] = useState<Activity>();

    useEffect(() => {
        if (currentActivity !== null) {
            return;
        }

        startTimer();
    }, []);

    const startTimer = () => {
        setCurrentActivity(activities[0]);
        // start timer
    };

    const nextActivity = () => {
        // stop timer and save time of current acitivty
        // start timer for next activity
    }

    const finishTiming = () => {
        // stop timer and save time of current activity
        // navigate to summary page 
    }

    return <div></div>;
};

export default TimerScreen;
