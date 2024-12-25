import { faChartLine, faDollarSign, faFileInvoiceDollar, faGift, faMinusCircle, faUsers, IconDefinition } from "@fortawesome/free-solid-svg-icons"

export const payroll_dashboard_cards: {
    id: number;
    title: number | string;
    subtitle: string;
    icon: IconDefinition;
    trendDetails: string;
    isPositiveTrend: boolean;
    trendMetric: number;
}[] = [
        {
            id: 1,
            title: "$1,200,000",
            subtitle: "Total Payroll Cost (This period)",
            icon: faDollarSign,  // Replace with the actual icon from your icons library
            trendDetails: "10% less than last month",
            isPositiveTrend: true, // If payroll cost is within budget or expected
            trendMetric: 1200000  // Metric representing the total cost
        },
        {
            id: 2,
            title: "200",
            subtitle: "Employees Paid",
            icon: faUsers,  // Replace with the actual icon for "users"
            trendDetails: "3% more than last month",
            isPositiveTrend: true, // Assuming paying employees is a positive trend
            trendMetric: 200  // Number of employees
        },
        {
            id: 3,
            title: "$50,000",
            subtitle: "Bonuses Paid",
            icon: faGift,  // Replace with the actual icon for "bonuses"
            trendDetails: "3.4% less than last month",
            isPositiveTrend: true, // Bonuses are typically positive
            trendMetric: 50000  // Amount of bonuses paid
        },
        {
            id: 4,
            title: "$150,000",
            subtitle: "Total Deductions",
            icon: faMinusCircle,  // Replace with the actual icon for "deductions"
            trendDetails: "2.1% less than last month",
            isPositiveTrend: false, // Deductions are typically negative
            trendMetric: 150000  // Amount of deductions
        },
    ];

enum Level {
    INTERN = "Intern",
    JUNIOR = "Junior",
    MID = "Mid-Level",
    SENIOR = "Senior",
    LEAD = "Lead",
    ELITE = "Elite",
    DIRECTOR = "Director",
    VP = "Vice President",
    C_LEVEL = "C-Level"
}


export const payrollTableData: {
    id: number,
    departmentName: string,
    tableEmployeePayroll: {
        id: number,
        name: string,
        level: Level,  // Using the Level enum here
        avatar: string,
        ctc: number,
        salaryPerMonth: number,
        deduction: number,
        status: 'COMPLETED' | 'PENDING' // Status stays the same
    }[]
}[] = [
        {
            id: 1,
            departmentName: 'Marketing',
            tableEmployeePayroll: [
                {
                    id: 1,
                    name: 'Teo Nguyen',
                    level: Level.SENIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/4636247?v=4',
                    ctc: 9200,
                    salaryPerMonth: 870,
                    deduction: 10,
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    name: 'Alice Zhang',
                    level: Level.MID,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/4660142?v=4',
                    ctc: 10500,
                    salaryPerMonth: 1000,
                    deduction: 12,
                    status: 'PENDING'
                },
                {
                    id: 3,
                    name: 'John Smith',
                    level: Level.SENIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/3536760?v=4',
                    ctc: 12000,
                    salaryPerMonth: 1150,
                    deduction: 15,
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    name: 'Sarah Lee',
                    level: Level.JUNIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/4879316?v=4',
                    ctc: 9500,
                    salaryPerMonth: 900,
                    deduction: 8,
                    status: 'PENDING'
                },
                {
                    id: 5,
                    name: 'Michael Clark',
                    level: Level.LEAD,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/13251780?v=4',
                    ctc: 11000,
                    salaryPerMonth: 1050,
                    deduction: 14,
                    status: 'COMPLETED'
                }
            ]
        },
        {
            id: 2,
            departmentName: 'Admin',
            tableEmployeePayroll: [
                {
                    id: 1,
                    name: 'Emily Davis',
                    level: Level.JUNIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/6946499?v=4',
                    ctc: 8500,
                    salaryPerMonth: 800,
                    deduction: 10,
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    name: 'David Wang',
                    level: Level.MID,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/6699730?v=4',
                    ctc: 9500,
                    salaryPerMonth: 900,
                    deduction: 13,
                    status: 'PENDING'
                },
                {
                    id: 3,
                    name: 'Sophia Brown',
                    level: Level.SENIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/7794540?v=4',
                    ctc: 10200,
                    salaryPerMonth: 950,
                    deduction: 9,
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    name: 'James Wilson',
                    level: Level.JUNIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/6527071?v=4',
                    ctc: 9700,
                    salaryPerMonth: 920,
                    deduction: 11,
                    status: 'PENDING'
                },
                {
                    id: 5,
                    name: 'Olivia Harris',
                    level: Level.MID,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/2994829?v=4',
                    ctc: 10500,
                    salaryPerMonth: 1000,
                    deduction: 8,
                    status: 'COMPLETED'
                }
            ]
        },
        {
            id: 3,
            departmentName: 'Frontdesk',
            tableEmployeePayroll: [
                {
                    id: 1,
                    name: 'Rachel Green',
                    level: Level.INTERN,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/5321847?v=4',
                    ctc: 7600,
                    salaryPerMonth: 700,
                    deduction: 6,
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    name: 'Monica Geller',
                    level: Level.JUNIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/15601735?v=4',
                    ctc: 8400,
                    salaryPerMonth: 750,
                    deduction: 7,
                    status: 'PENDING'
                },
                {
                    id: 3,
                    name: 'Phoebe Buffay',
                    level: Level.SENIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/5669399?v=4',
                    ctc: 8800,
                    salaryPerMonth: 800,
                    deduction: 9,
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    name: 'Chandler Bing',
                    level: Level.MID,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/10449062?v=4',
                    ctc: 9100,
                    salaryPerMonth: 850,
                    deduction: 5,
                    status: 'PENDING'
                },
                {
                    id: 5,
                    name: 'Ross Geller',
                    level: Level.JUNIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/7443882?v=4',
                    ctc: 9200,
                    salaryPerMonth: 880,
                    deduction: 8,
                    status: 'COMPLETED'
                }
            ]
        },
        {
            id: 4,
            departmentName: 'Therapist',
            tableEmployeePayroll: [
                {
                    id: 1,
                    name: 'Claire Richards',
                    level: Level.SENIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/20435235?v=4',
                    ctc: 10800,
                    salaryPerMonth: 1000,
                    deduction: 12,
                    status: 'COMPLETED'
                },
                {
                    id: 2,
                    name: 'Oliver Stone',
                    level: Level.MID,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/2248709?v=4',
                    ctc: 11500,
                    salaryPerMonth: 1100,
                    deduction: 14,
                    status: 'PENDING'
                },
                {
                    id: 3,
                    name: 'Mia Roberts',
                    level: Level.LEAD,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/9876543?v=4',
                    ctc: 12000,
                    salaryPerMonth: 1150,
                    deduction: 11,
                    status: 'COMPLETED'
                },
                {
                    id: 4,
                    name: 'James Maxwell',
                    level: Level.MID,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/8765432?v=4',
                    ctc: 9500,
                    salaryPerMonth: 900,
                    deduction: 9,
                    status: 'PENDING'
                },
                {
                    id: 5,
                    name: 'Emily Johnson',
                    level: Level.JUNIOR,  // Using Level Enum
                    avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
                    ctc: 10500,
                    salaryPerMonth: 1000,
                    deduction: 10,
                    status: 'COMPLETED'
                }
            ]
        }
    ];
