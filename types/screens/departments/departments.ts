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