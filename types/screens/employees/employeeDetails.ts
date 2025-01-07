export type Type_employee_details_data = {
    id: number,
    label: string, placeholder?: string,
    value?: string, avatar?: string,
    uploadFile?: { filename: string[] }
}

export type Props_Staff = {
    account_access: string,
    address: string,
    active_points: number,
    avatar: { url: string, key: string },
    created_at: number,
    updated_at: number,
    date_of_birth: number,
    department: {
        name: string,
        description: string
    } | null,
    work_office: {
        name: string
    },
    first_name: string,
    last_name: string,
    joining_date: number,
    email: string,
    phone: string,
    gender: string,
    job: null | { title: string, id: string, department: string },
    level: string,
    status: string,
    total_days_worked: string,
    is_fulltime: boolean,
    id: string
}