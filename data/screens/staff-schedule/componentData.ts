import { Type_tab_header } from "@/types/componentType";

export const vertical_util_tab_update_staff_schedule: Type_tab_header[] = [
    {
        id: 1,
        title: 'Requested Availability List',
        onClick: (callback: () => void) => callback(), // onClick executes the provided callback
    },
    {
        id: 2,
        title: 'Previous Dates',
    },
    {
        id: 3,
        title: 'Replicate an existing date',
    },
    {
        id: 4,
        title: 'Clear All',
    },
]