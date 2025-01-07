export type Type_all_department_members = {
    id: number,
    departmentTitle: string,
    href: string,
    members: {
        id: number,
        avatar: string,
        name: string,
        designation: string,
    }[]

}[]

export interface Props_Department {
    id: string,
    name: string,
    total_staffs: number,
    description?: string,
    staff_list: {
        first_name: string,
        last_name: string,
        id: string,
        department: { name: string } | null,
        avatar: { key: string, url: string }
    }[]
}

export interface Props_Detail_Department {
    description: string,
    created_at: number,
    current_page: number,
    items_per_page: number,
    name: string,
    total_pages: number,
    total_staffs: number,
    list_staffs: {
        id: string,
        avatar: { url: string, key: string },
        first_name: string,
        last_name: string,
        email: string,
        address: string,
        active_points: number,
        work_office: { name: string },
        is_fulltime: boolean,
        department: { name: string },
    }[]
}