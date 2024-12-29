import { faCalendarCheck, faListCheck, faSuitcase, faUsersLine } from "@fortawesome/free-solid-svg-icons";

export const cards_dashboard = [
    {
        id: 1,
        title: 'Total Employee',
        mainMetric: 560,
        isPositiveTrend: true,
        trendMetric: '12%',
        lastUpdated: 'December 20, 2024',
        icon: faUsersLine
    },
    {
        id: 2,
        title: 'Total Applicant',
        mainMetric: 1020,
        isPositiveTrend: true,
        trendMetric: '21%',
        lastUpdated: 'December 16, 2024',
        icon: faSuitcase
    },
    {
        id: 3,
        title: 'Today Attendance',
        mainMetric: 223,
        isPositiveTrend: false,
        trendMetric: '38%',
        lastUpdated: 'December 23, 2024',
        icon: faCalendarCheck
    },
    {
        id: 4,
        title: 'Total Projects',
        mainMetric: 884,
        isPositiveTrend: true,
        trendMetric: '12%',
        lastUpdated: 'December 22, 2024',
        icon: faListCheck
    },
]
