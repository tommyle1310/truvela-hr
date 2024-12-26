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
    INTERMEDIATE = "Intermediate",
    SENIOR = "Senior",
    LEAD = "Lead",
    ELITE = "Elite",
    DIRECTOR = "Director",
    VP = "Vice President",
    C_LEVEL = "C-Level"
}


export const payrollTableThisMonthLogData: {
    id: number,
    departmentName: string,
    tableSalaryDefinition: {
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
            tableSalaryDefinition: [
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
                    level: Level.INTERMEDIATE,  // Using Level Enum
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
            tableSalaryDefinition: [
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
                    level: Level.INTERMEDIATE,  // Using Level Enum
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
                    level: Level.INTERMEDIATE,  // Using Level Enum
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
            tableSalaryDefinition: [
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
                    level: Level.INTERMEDIATE,  // Using Level Enum
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
            tableSalaryDefinition: [
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
                    level: Level.INTERMEDIATE,  // Using Level Enum
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
                    level: Level.INTERMEDIATE,  // Using Level Enum
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
export const payrollTableSalaryDefinitionData: {
    id: number,
    departmentName: string,
    tableSalaryDefinition: {
        id: number,
        job: string,  // Removed 'jobTitle' and using 'job' instead
        level: Level,  // Using the Level Enum to identify employee's level
        baseSalary: number,
        ctc: number,
        deductions: number,
        bonus: number,
        totalCTC: number
    }[]
}[] = [
        {
            id: 1,
            departmentName: 'Marketing',
            tableSalaryDefinition: [
                {
                    id: 1,
                    job: 'Marketing Specialist',
                    level: Level.SENIOR,
                    baseSalary: 8000,
                    ctc: 9200,
                    deductions: 10,
                    bonus: 500,
                    totalCTC: 9700
                },
                {
                    id: 2,
                    job: 'Marketing Executive',
                    level: Level.INTERMEDIATE,
                    baseSalary: 9000,
                    ctc: 10500,
                    deductions: 12,
                    bonus: 600,
                    totalCTC: 11100
                },
                {
                    id: 3,
                    job: 'Marketing Manager',
                    level: Level.SENIOR,
                    baseSalary: 10500,
                    ctc: 12000,
                    deductions: 15,
                    bonus: 700,
                    totalCTC: 12700
                },
                {
                    id: 4,
                    job: 'Marketing Assistant',
                    level: Level.JUNIOR,
                    baseSalary: 7500,
                    ctc: 9500,
                    deductions: 8,
                    bonus: 400,
                    totalCTC: 9900
                },
                {
                    id: 5,
                    job: 'Marketing Strategist',
                    level: Level.LEAD,
                    baseSalary: 10000,
                    ctc: 11000,
                    deductions: 14,
                    bonus: 800,
                    totalCTC: 11800
                }
            ]
        },
        {
            id: 2,
            departmentName: 'Admin',
            tableSalaryDefinition: [
                {
                    id: 1,
                    job: 'Admin Officer',
                    level: Level.JUNIOR,
                    baseSalary: 7500,
                    ctc: 8500,
                    deductions: 10,
                    bonus: 400,
                    totalCTC: 8900
                },
                {
                    id: 2,
                    job: 'Admin Manager',
                    level: Level.INTERMEDIATE,
                    baseSalary: 9000,
                    ctc: 9500,
                    deductions: 13,
                    bonus: 500,
                    totalCTC: 10000
                },
                {
                    id: 3,
                    job: 'Admin Executive',
                    level: Level.SENIOR,
                    baseSalary: 9500,
                    ctc: 10200,
                    deductions: 9,
                    bonus: 600,
                    totalCTC: 10800
                },
                {
                    id: 4,
                    job: 'Office Administrator',
                    level: Level.JUNIOR,
                    baseSalary: 8500,
                    ctc: 9700,
                    deductions: 11,
                    bonus: 400,
                    totalCTC: 10100
                },
                {
                    id: 5,
                    job: 'Admin Specialist',
                    level: Level.INTERMEDIATE,
                    baseSalary: 9500,
                    ctc: 10500,
                    deductions: 8,
                    bonus: 500,
                    totalCTC: 11000
                }
            ]
        },
        {
            id: 3,
            departmentName: 'Frontdesk',
            tableSalaryDefinition: [
                {
                    id: 1,
                    job: 'Frontdesk',
                    level: Level.INTERN,
                    baseSalary: 6000,
                    ctc: 7600,
                    deductions: 6,
                    bonus: 200,
                    totalCTC: 7800
                },
                {
                    id: 2,
                    job: 'Frontdesk',
                    level: Level.JUNIOR,
                    baseSalary: 7200,
                    ctc: 8400,
                    deductions: 7,
                    bonus: 300,
                    totalCTC: 8700
                },
                {
                    id: 3,
                    job: 'Frontdesk Manager',
                    level: Level.SENIOR,
                    baseSalary: 8000,
                    ctc: 8800,
                    deductions: 9,
                    bonus: 500,
                    totalCTC: 9300
                },
                {
                    id: 4,
                    job: 'Frontdesk Assistant',
                    level: Level.INTERMEDIATE,
                    baseSalary: 8200,
                    ctc: 9100,
                    deductions: 5,
                    bonus: 400,
                    totalCTC: 9500
                },
                {
                    id: 5,
                    job: 'Junior Frontdesk Associate',
                    level: Level.JUNIOR,
                    baseSalary: 7600,
                    ctc: 9200,
                    deductions: 8,
                    bonus: 300,
                    totalCTC: 9500
                }
            ]
        },
        {
            id: 4,
            departmentName: 'Therapist',
            tableSalaryDefinition: [
                {
                    id: 1,
                    job: 'Therapist',
                    level: Level.SENIOR,
                    baseSalary: 9500,
                    ctc: 10800,
                    deductions: 12,
                    bonus: 500,
                    totalCTC: 11300
                },
                {
                    id: 2,
                    job: 'Therapist',
                    level: Level.INTERMEDIATE,
                    baseSalary: 10000,
                    ctc: 11500,
                    deductions: 14,
                    bonus: 600,
                    totalCTC: 12100
                },
                {
                    id: 3,
                    job: 'Lead Therapist',
                    level: Level.LEAD,
                    baseSalary: 11000,
                    ctc: 12000,
                    deductions: 11,
                    bonus: 700,
                    totalCTC: 12700
                },
                {
                    id: 4,
                    job: 'Therapist Assistant',
                    level: Level.INTERMEDIATE,
                    baseSalary: 8500,
                    ctc: 9500,
                    deductions: 9,
                    bonus: 400,
                    totalCTC: 9900
                },
                {
                    id: 5,
                    job: 'Junior Therapist',
                    level: Level.JUNIOR,
                    baseSalary: 9000,
                    ctc: 10500,
                    deductions: 10,
                    bonus: 300,
                    totalCTC: 10800
                }
            ]
        }
    ];
export const payrollTableTaxDeductionsData: {
    id: number,
    taxType: string,
    taxAmount: number,
    totalDeduction: number,
    effectivePeriod: number,
}[] = [
        {
            id: 1,
            taxType: 'VAT',  // Value Added Tax
            taxAmount: 1200,
            totalDeduction: 1200,  // Total VAT deduction
            effectivePeriod: 1712112000,  // Indicates the month or period when VAT is applied
        },
        {
            id: 2,
            taxType: 'WHT',  // Withholding Tax
            taxAmount: 500,
            totalDeduction: 500,
            effectivePeriod: 1712112000,
        },
        {
            id: 3,
            taxType: 'NHIS',  // National Health Insurance Scheme
            taxAmount: 300,
            totalDeduction: 300,
            effectivePeriod: 1712112000,
        },
        {
            id: 4,
            taxType: 'VAT',
            taxAmount: 1500,
            totalDeduction: 1500,
            effectivePeriod: 1712112000,
        },
        {
            id: 5,
            taxType: 'WHT',
            taxAmount: 750,
            totalDeduction: 750,
            effectivePeriod: 1712112000,
        }
    ];
export const payrollTableEmployeePayrollLogsData: {
    id: number,
    employeeName: string,
    changeType: string,  // Changed to string (e.g., 'Salary Increase', 'Deduction Update')
    oldSalary: number,
    newSalary: number,
    reasonForChange: string, // Changed to string (e.g., 'Performance review', 'Error correction')
    effectiveDate: number,
}[] = [
        {
            id: 1,
            employeeName: 'John Doe',
            changeType: 'Salary Increase',
            oldSalary: 8500,
            newSalary: 9000,
            reasonForChange: 'Performance review',
            effectiveDate: 1712112000,  // timestamp for Dec 1, 2024
        },
        {
            id: 2,
            employeeName: 'Jane Smith',
            changeType: 'Deduction Update',
            oldSalary: 7500,
            newSalary: 7300,
            reasonForChange: 'Overpayment correction',
            effectiveDate: 1712112000,  // timestamp for Dec 1, 2024
        },
        {
            id: 3,
            employeeName: 'Michael Brown',
            changeType: 'Bonus Update',
            oldSalary: 9500,
            newSalary: 10000,
            reasonForChange: 'KPI bonus',
            effectiveDate: 1712112000,  // timestamp for Dec 1, 2024
        },
        {
            id: 4,
            employeeName: 'Samantha Green',
            changeType: 'Salary Decrease',
            oldSalary: 8000,
            newSalary: 7800,
            reasonForChange: 'Budget cut',
            effectiveDate: 1712112000,  // timestamp for Dec 1, 2024
        },
        {
            id: 5,
            employeeName: 'David White',
            changeType: 'Salary Increase',
            oldSalary: 9500,
            newSalary: 10500,
            reasonForChange: 'Promotion',
            effectiveDate: 1712112000,  // timestamp for Dec 1, 2024
        }
    ];

