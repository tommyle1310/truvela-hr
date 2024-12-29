import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export type Type_tab_header = {
    id: number | string,
    title: string,
    icon?: IconDefinition,
    onClick?: (() => void) | ((callback: () => void) => void)
}


export type Type_dropdown = {
    label: string,
    value: string
}[]