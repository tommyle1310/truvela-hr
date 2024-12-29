import { Enum_ApprovalStatus, Enum_Department, Enum_Level, Enum_Shift, Type_Departments } from "@/types/enums";

export interface Type_employee_shift_request {
    avatar: string;          // URL or path to the employee's avatar image
    name: string;            // Employee's full name
    id: string;              // Employee's unique ID
    level: Enum_Level;        // Employee's position (e.g., Therapist, Admin, etc.)
    shift: Enum_Shift;           // Shift type (e.g., Morning, Afternoon, Evening)
    department: Enum_Department;           // Shift type (e.g., Morning, Afternoon, Evening)
    job: string,
    requestDate: number;     // Date the request was made (e.g., "28/12/2024")
    approvalStatus: Enum_ApprovalStatus;  // Status of the request (Approved, Pending, Rejected)
    notes: string;           // Additional notes regarding the request
    orderedByClient: boolean; // Whether the request was ordered by a client (true/false)
}

export interface Type_staff_schedule_daily {
    date: number,
    morning_employees: {
        id: number,
        name: string,
        avatar: string,
        department: Type_Departments
    }[],
    afternoon_employees: {
        id: number,
        name: string,
        avatar: string,
        department: Type_Departments
    }[],
    evening_employees: {
        id: number,
        name: string,
        avatar: string,
        department: Type_Departments
    }[],
}

export type Type_staff_schedule_employee_list = {
    id: string;            // Unique employee ID
    name: string;          // Employee's name
    department: Enum_Department;  // Department using Enum_Department
    level: Enum_Level;         // Level using Enum_Level
    job: string;           // Job role
    avatar: string;        // URL for employee's avatar image
}[]