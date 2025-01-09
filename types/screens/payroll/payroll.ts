import { Enum_PayrollStatus } from "@/types/enums"

export interface Props_SalaryDefinition {
    department_name: string,
    department_id: string,
    staffs_payroll: {
        "id": string,
        "staff_id": string,
        "pay_period_start": string,
        "pay_period_end": string
        "payment_date": string,
        "gross_salary": number,
        "hourly_wage": number,
        "allowances": number,
        "hours_worked": number,
        "overtime_hours": number,
        "overtime_pay": number,
        "bonus_amount": number,
        "reimbursement_amount": number,
        "benefit_amount": number,
        "operation_deduction_amount": number,
        "other_deduction_amount": number,
        "tax": number,
        "extra_pay": number,
        "notes": string,
        "net_pay": number,
        "leave_balance": number,
        "status": Enum_PayrollStatus,
        "created_at": number,
        "base_salary": number,
        "updated_at": number,
        "staff": {
            "phone": string,
            "gender": string,
            "date_of_birth": number,
            "avatar": {
                "key": string,
                "url": string
            },
            "is_fulltime": boolean,
            "joining_date": number,
            "total_days_worked": number,
            "level": string,
            "last_name": string,
            "first_name": string,
            "email": string,
            "job": {
                title: string, id: string
            },
            "work_office": string,
            "address": string,
            "department": {
                "id": string,
                "name": string,
                "description": string
            },
            "updated_at": number,
            "id": string
        }
    }[]
}