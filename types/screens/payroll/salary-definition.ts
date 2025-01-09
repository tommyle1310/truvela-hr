export interface Props_SalaryDefinition {
    department_name: string,
    department_id: string,
    jobs_salary_definition: {
        id: string,
        base_salary: number,
        commission_percentage: number,
        level: string,
        title: string
    }[]
}