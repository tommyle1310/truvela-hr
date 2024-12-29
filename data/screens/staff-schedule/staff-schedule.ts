import { Enum_ApprovalStatus, Enum_Department, Enum_Level, Enum_Shift } from "@/types/enums";
import { Type_employee_shift_request, Type_staff_schedule_daily, Type_staff_schedule_employee_list } from "@/types/screens/staff-schedule/staff-schedule";

export const table_staff_schedule_monthly: Type_staff_schedule_daily[] = [
    {
        date: 1733011200, // 01/12/2024 00:00:00
        morning_employees: [
            { id: 1, name: "Alice", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 2, name: "Bob", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 3, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 4, name: "David", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
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
        date: 1733097600, // 02/12/2024 00:00:00
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
        date: 1733184000, // 03/12/2024 00:00:00
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
        date: 1733270400, // 04/12/2024 00:00:00
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
    {
        date: 1733356800, // 05/12/2024 00:00:00
        morning_employees: [
            { id: 49, name: "Alice", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 50, name: "Bob", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 51, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 52, name: "David", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 53, name: "Eva", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 54, name: "Frank", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 55, name: "Grace", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 56, name: "Helen", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 57, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 58, name: "Jack", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 59, name: "Karen", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 60, name: "Leo", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1733443200, // 06/12/2024 00:00:00
        morning_employees: [
            { id: 61, name: "Mona", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 62, name: "Nancy", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 63, name: "Oscar", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 64, name: "Paul", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 65, name: "Quinn", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 66, name: "Rachel", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 67, name: "Sam", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 68, name: "Tina", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 69, name: "Ursula", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 70, name: "Victor", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 71, name: "Wendy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 72, name: "Xander", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1733529600, // 07/12/2024 00:00:00
        morning_employees: [
            { id: 73, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 74, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 75, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 76, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 77, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 78, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 79, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 80, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 81, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 82, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 83, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 84, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1733616000, // 08/12/2024 00:00:00
        morning_employees: [
            { id: 85, name: "Karen", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 86, name: "Leo", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 87, name: "Mona", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 88, name: "Nancy", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 89, name: "Oscar", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 90, name: "Paul", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 91, name: "Quinn", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 92, name: "Rachel", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 93, name: "Sam", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 94, name: "Tina", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 95, name: "Ursula", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 96, name: "Victor", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1733702400, // 09/12/2024 00:00:00
        morning_employees: [
            { id: 97, name: "Alice", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 98, name: "Bob", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 99, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 100, name: "David", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 101, name: "Eva", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 102, name: "Frank", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 103, name: "Grace", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 104, name: "Helen", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 105, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 106, name: "Jack", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 107, name: "Karen", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 108, name: "Leo", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1733788800, // 10/12/2024 00:00:00
        morning_employees: [
            { id: 109, name: "Mona", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 110, name: "Nancy", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 111, name: "Oscar", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 112, name: "Paul", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 113, name: "Quinn", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 114, name: "Rachel", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 115, name: "Sam", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 116, name: "Tina", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 117, name: "Ursula", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 118, name: "Victor", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 119, name: "Wendy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 120, name: "Xander", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1733875200, // 11/12/2024 00:00:00
        morning_employees: [
            { id: 121, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 122, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 123, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 124, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 125, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 126, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 127, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 128, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 129, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 130, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 131, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 132, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1733961600, // 12/12/2024 00:00:00
        morning_employees: [
            { id: 133, name: "Karen", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 134, name: "Leo", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 135, name: "Mona", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 136, name: "Nancy", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 137, name: "Oscar", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 138, name: "Paul", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 139, name: "Quinn", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 140, name: "Rachel", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 141, name: "Sam", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 142, name: "Tina", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 143, name: "Ursula", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 144, name: "Victor", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734048000, // 13/12/2024 00:00:00
        morning_employees: [
            { id: 145, name: "Alice", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 146, name: "Bob", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 147, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 148, name: "David", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 149, name: "Eva", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 150, name: "Frank", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 151, name: "Grace", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 152, name: "Helen", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 153, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 154, name: "Jack", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 155, name: "Karen", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 156, name: "Leo", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734134400, // 14/12/2024 00:00:00
        morning_employees: [
            { id: 157, name: "Mona", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 158, name: "Nancy", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 159, name: "Oscar", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 160, name: "Paul", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 161, name: "Quinn", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 162, name: "Rachel", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 163, name: "Sam", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 164, name: "Tina", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 165, name: "Ursula", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 166, name: "Victor", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 167, name: "Wendy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 168, name: "Xander", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734220800, // 15/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734307200, // 16/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734393600, // 17/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734480000, // 18/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734566400, // 19/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734652800, // 20/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734739200, // 21/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734825600, // 22/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734912000, // 23/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1734998400, // 24/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1735084800, // 25/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1735171200, // 26/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1735257600, // 27/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1735344000, // 28/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1735430400, // 29/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1735516800, // 30/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },
    {
        date: 1735603200, // 31/12/2024 00:00:00
        morning_employees: [
            { id: 169, name: "Yvonne", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 170, name: "Zane", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 171, name: "Alice", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 172, name: "Bob", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        afternoon_employees: [
            { id: 173, name: "Charlie", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 174, name: "David", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 175, name: "Eva", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 176, name: "Frank", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ],
        evening_employees: [
            { id: 177, name: "Grace", avatar: "https://github.com/shadcn.png", department: "ADMIN" },
            { id: 178, name: "Helen", avatar: "https://github.com/shadcn.png", department: "FRONTDESK" },
            { id: 179, name: "Ivy", avatar: "https://github.com/shadcn.png", department: "THERAPIST" },
            { id: 180, name: "Jack", avatar: "https://github.com/shadcn.png", department: "MARKETING" },
        ]
    },

];
export const arr_staff_schedule_employee_list: Type_staff_schedule_employee_list = [
    {
        id: '001',
        name: 'John Doe',
        department: Enum_Department.THERAPIST,
        level: Enum_Level.SENIOR,
        job: 'Therapist',
        avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
        id: '002',
        name: 'Jane Smith',
        department: Enum_Department.THERAPIST,
        level: Enum_Level.JUNIOR,
        job: 'Therapist',
        avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
        id: '003',
        name: 'Emily Johnson',
        department: Enum_Department.THERAPIST,
        level: Enum_Level.ELITE,
        job: 'Therapist',
        avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
        id: '004',
        name: 'Michael Williams',
        department: Enum_Department.THERAPIST,
        level: Enum_Level.LEAD,
        job: 'Therapist',
        avatar: 'https://i.pravatar.cc/150?img=4'
    },
    {
        id: '005',
        name: 'David Brown',
        department: Enum_Department.THERAPIST,
        level: Enum_Level.ELITE,
        job: 'Therapist',
        avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
        id: '006',
        name: 'Sarah Davis',
        department: Enum_Department.FRONTDESK,
        level: Enum_Level.JUNIOR,
        job: 'Front Desk',
        avatar: 'https://i.pravatar.cc/150?img=6'
    },
    {
        id: '007',
        name: 'James Miller',
        department: Enum_Department.FRONTDESK,
        level: Enum_Level.ELITE,
        job: 'Front Desk',
        avatar: 'https://i.pravatar.cc/150?img=7'
    },
    {
        id: '008',
        name: 'Sophia Wilson',
        department: Enum_Department.MARKETING,
        level: Enum_Level.LEAD,
        job: 'Marketer',
        avatar: 'https://i.pravatar.cc/150?img=8'
    },
    {
        id: '009',
        name: 'William Moore',
        department: Enum_Department.MARKETING,
        level: Enum_Level.SENIOR,
        job: 'Marketer',
        avatar: 'https://i.pravatar.cc/150?img=9'
    },
    {
        id: '010',
        name: 'Olivia Taylor',
        department: Enum_Department.ADMIN,
        level: Enum_Level.ELITE,
        job: 'Admin',
        avatar: 'https://i.pravatar.cc/150?img=10'
    }
];

export const table_requested_availability: Type_employee_shift_request[] = [{
    avatar: 'https://i.pravatar.cc/150?img=1',
    name: 'John Doe',
    id: '12345',
    level: Enum_Level.SENIOR,
    shift: Enum_Shift.MORNING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'No issues',
    orderedByClient: true,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=2',
    name: 'Jane Smith',
    id: '67890',
    level: Enum_Level.JUNIOR,
    shift: Enum_Shift.AFTERNOON,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.PENDING,
    notes: 'Needs confirmation',
    orderedByClient: false,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Bob Brown',
    id: '11223',
    level: Enum_Level.LEAD,
    shift: Enum_Shift.EVENING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.REJECTED,
    notes: 'Unavailable',
    orderedByClient: true,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=4',
    name: 'Alice Green',
    id: '33445',
    level: Enum_Level.ELITE,
    shift: Enum_Shift.MORNING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'Confirmed by manager',
    orderedByClient: false,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=5',
    name: 'Michael Lee',
    id: '44556',
    level: Enum_Level.INTERMEDIATE,
    shift: Enum_Shift.AFTERNOON,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.PENDING,
    notes: 'Needs confirmation',
    orderedByClient: true,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=6',
    name: 'Emily Davis',
    id: '56789',
    level: Enum_Level.SENIOR,
    shift: Enum_Shift.MORNING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'Available for the shift',
    orderedByClient: false,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=7',
    name: 'Chris Williams',
    id: '67823',
    level: Enum_Level.JUNIOR,
    shift: Enum_Shift.EVENING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.REJECTED,
    notes: 'Shift not needed',
    orderedByClient: false,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=8',
    name: 'Sophia Miller',
    id: '78901',
    level: Enum_Level.LEAD,
    shift: Enum_Shift.MORNING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'Shift confirmed',
    orderedByClient: true,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=9',
    name: 'Liam Martinez',
    id: '89012',
    level: Enum_Level.ELITE,
    shift: Enum_Shift.AFTERNOON,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.PENDING,
    notes: 'Awaiting final approval',
    orderedByClient: false,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},
{
    avatar: 'https://i.pravatar.cc/150?img=10',
    name: 'Olivia Johnson',
    id: '90123',
    level: Enum_Level.INTERMEDIATE,
    shift: Enum_Shift.EVENING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'Confirmed by manager',
    orderedByClient: true,
    job: 'Therapist',
    department: Enum_Department.THERAPIST,
},

// 2 Front Desk
{
    avatar: 'https://i.pravatar.cc/150?img=11',
    name: 'David Wilson',
    id: '123456',
    level: Enum_Level.JUNIOR,
    shift: Enum_Shift.MORNING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.PENDING,
    notes: 'Awaiting confirmation',
    orderedByClient: false,
    job: 'Front Desk',
    department: Enum_Department.FRONTDESK,
},
{
    avatar: 'https://i.pravatar.cc/150?img=12',
    name: 'Sarah Taylor',
    id: '789101',
    level: Enum_Level.SENIOR,
    shift: Enum_Shift.AFTERNOON,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'Shift confirmed',
    orderedByClient: true,
    job: 'Front Desk',
    department: Enum_Department.FRONTDESK,
},

// 3 Marketers
{
    avatar: 'https://i.pravatar.cc/150?img=13',
    name: 'James Anderson',
    id: '334455',
    level: Enum_Level.SENIOR,
    shift: Enum_Shift.MORNING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'Shift confirmed',
    orderedByClient: true,
    job: 'Marketer',
    department: Enum_Department.MARKETING,
},
{
    avatar: 'https://i.pravatar.cc/150?img=14',
    name: 'Emma Thomas',
    id: '556677',
    level: Enum_Level.SENIOR,
    shift: Enum_Shift.AFTERNOON,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.PENDING,
    notes: 'Awaiting confirmation',
    orderedByClient: false,
    job: 'Marketer',
    department: Enum_Department.MARKETING,
},
{
    avatar: 'https://i.pravatar.cc/150?img=15',
    name: 'Oliver Lee',
    id: '778899',
    level: Enum_Level.JUNIOR,
    shift: Enum_Shift.EVENING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.REJECTED,
    notes: 'Not available for shift',
    orderedByClient: true,
    job: 'Marketer',
    department: Enum_Department.MARKETING,
},

// 1 Admin
{
    avatar: 'https://i.pravatar.cc/150?img=16',
    name: 'Sophia Harris',
    id: '998877',
    level: Enum_Level.ELITE,
    shift: Enum_Shift.MORNING,
    requestDate: 1735344000,
    approvalStatus: Enum_ApprovalStatus.APPROVED,
    notes: 'Confirmed by manager',
    orderedByClient: true,
    job: 'Admin',
    department: Enum_Department.ADMIN,
},
];





