export type Type_departments_enum = 'ADMIN' | 'FRONTDESK' | 'THERAPIST' | 'MARKETING'

export const table_staff_schedule_monthly: {
    date: number,
    morning_employees: {
        id: number,
        name: string,
        avatar: string,
        department: Type_departments_enum
    }[],
    afternoon_employees: {
        id: number,
        name: string,
        avatar: string,
        department: Type_departments_enum
    }[],
    evening_employees: {
        id: number,
        name: string,
        avatar: string,
        department: Type_departments_enum
    }[],
}[] = [
        {
            date: 1735267200, // 01/12/2024 00:00:00
            morning_employees: [
                { id: 1, name: "Alice", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 2, name: "Bob", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 3, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 4, name: "Nana", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 5, name: "Chou", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 6, name: "Warwick", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 7, name: "Violet", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 8, name: "Farlie", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 9, name: "Canker", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 10, name: "David", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            afternoon_employees: [
                { id: 5, name: "Eva", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 6, name: "Frank", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 7, name: "Grace", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 8, name: "Helen", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            evening_employees: [
                { id: 9, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 10, name: "Jack", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 11, name: "Karen", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 12, name: "Leo", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ]
        },
        {
            date: 1735353600, // 02/12/2024 00:00:00
            morning_employees: [
                { id: 13, name: "Mona", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 14, name: "Nancy", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 15, name: "Oscar", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 16, name: "Paul", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            afternoon_employees: [
                { id: 17, name: "Quinn", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 18, name: "Rachel", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 19, name: "Sam", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 20, name: "Tina", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            evening_employees: [
                { id: 21, name: "Ursula", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 22, name: "Victor", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 23, name: "Wendy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 24, name: "Xander", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ]
        },
        {
            date: 1735440000, // 03/12/2024 00:00:00
            morning_employees: [
                { id: 25, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 26, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 27, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 28, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            afternoon_employees: [
                { id: 29, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 30, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 31, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 32, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            evening_employees: [
                { id: 33, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 34, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 35, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 36, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ]
        },
        {
            date: 1735526400, // 04/12/2024 00:00:00
            morning_employees: [
                { id: 37, name: "Karen", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 38, name: "Leo", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 39, name: "Mona", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 40, name: "Nancy", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            afternoon_employees: [
                { id: 41, name: "Oscar", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 42, name: "Paul", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 43, name: "Quinn", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 44, name: "Rachel", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ],
            evening_employees: [
                { id: 45, name: "Sam", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
                { id: 46, name: "Tina", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
                { id: 47, name: "Ursula", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
                { id: 48, name: "Victor", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
            ]
        },
        // Repeat the above structure for the rest of the days in December...
    ];

