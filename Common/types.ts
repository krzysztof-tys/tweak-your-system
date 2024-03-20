// todo create class
export type Activity = {
    id: number;
    name?: string;
};

// todo create class
export type Record = {
    activity: Activity;
    startDate?: number;
    endDate?: number;
};

export const SCREEN = {
    SetupScreen: 'SetupScreen',
    TimerScreen: 'TimerScreen',
    SummaryScreen: 'SummaryScreen',
} as const;

export type RootStackParamList = {
    [SCREEN.SetupScreen]: undefined;
    [SCREEN.TimerScreen]: undefined;
    [SCREEN.SummaryScreen]: undefined;
};

export const RealmType = {
    Action: 'Action',
    Record: 'Record',
};
