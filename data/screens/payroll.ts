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
