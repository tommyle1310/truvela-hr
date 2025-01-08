export interface Props_Attendance {
    date: number,
    staff_id: string,
    staff: {
        first_name: string,
        last_name: string,
        email: string,
        avatar: { url: string, key: string },
        phone: string,
        department: {
            name: string
        },
        id: string
    },
    clock_in: string,
    check_in: string,
    check_out: string,
    clock_out: string,
    status_clock_out: string,
    status_clock_in: string,
    created_at: number,
    updated_at: number,
}