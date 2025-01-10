export let todayTimestamp = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);

export function convertDecimalToTime(decimalHours: number) {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}


export const calculateCtc = (base_salary: number) => {
    return base_salary * 8 * 4 * 5 * 12
}
export const calculateSalaryPerMonth = (base_salary: number) => {
    return base_salary * 8 * 5 * 4
}

