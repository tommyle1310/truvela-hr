export type Type_Departments = 'ADMIN' | 'FRONTDESK' | 'THERAPIST' | 'MARKETING'
export enum Enum_Department {
    ADMIN = "ADMIN",
    FRONTDESK = "FRONTDESK",
    THERAPIST = "THERAPIST",
    MARKETING = "MARKETING",
}

export enum Enum_Level {
    INTERN = "Intern",
    JUNIOR = "Junior",
    INTERMEDIATE = "Intermediate",
    SENIOR = "Senior",
    LEAD = "Lead",
    ELITE = "Elite",
    DIRECTOR = "Director",
    VP = "Vice President",
    C_LEVEL = "C-Level"
}
export enum Enum_ApprovalStatus {
    APPROVED = "Approved",
    PENDING = "Pending",
    REJECTED = "Rejected"
}
export enum Enum_Shift {
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    EVENING = "Evening"
}