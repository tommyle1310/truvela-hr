export let todayTimestamp = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);

export const calculateCtc = (base_salary: number) => {
    return base_salary * 8 * 4 * 5 * 12
}
export const calculateSalaryPerMonth = (base_salary: number) => {
    return base_salary * 8 * 5 * 4
}