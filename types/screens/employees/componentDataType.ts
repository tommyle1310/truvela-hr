
export type Type_input_form_add_edit_employee = {
    id: number, label: string,
    placeholder: string,
    value?: any,
    isImage?: boolean,
    dropdownValue?: { label: string, value: string }[],
    isHidden?: boolean,
    imageGallery?: string[],
    multiSelectValue?: {
        mainTitle: string,
        id: string,
        subTitle?: string
    }[],
    datePicker?: {
        placeholder?: string
    }
}

export type TypeEmployeeContent = 'ALL_EMPLOYEE' | 'ADD' | 'EDIT'


export type Type_states_add_edit_employee = {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    dateOfBirth: number,
    gender: string,
    nationality: string,
    address: string,
    avatar: string,
    employeeId: string,
    username: string,
    employeeType: 'FULL_TIME' | 'PART_TIME',
    department: string,
    designation: string,
    joiningDate: number,
    level: string,
    officeLocation: string,
    facebookId: string,
    zaloId: string,
    truvelaId: string
}