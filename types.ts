
// todo create class
export type Activity = {
    id: number;
    name?: string;
};

// todo create class
export type Record = {
    activity: Activity,
    startDate?: number,
    endDate?: number,
};

export type RootStackParamList = {
    SetupScreen: undefined;
    TimerScreen: undefined;
    SummaryScreen: undefined;
};

