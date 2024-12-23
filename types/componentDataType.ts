
export type Type_input_form_personal_information_add_employee = {
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
