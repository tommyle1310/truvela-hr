import { Type_all_department_members } from "@/types/screens/departments/departments";

export const cards_all_department_members: Type_all_department_members = [
    {
        id: 1,
        departmentTitle: 'Therapist',
        href: '/departments/therapist',
        members: [
            {
                id: 1,
                avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
                designation: 'Senior Therapist',
                name: 'Olivia Carter'
            },
            {
                id: 2,
                avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
                designation: 'Junior Therapist',
                name: 'Lucas Hayes'
            },
            {
                id: 3,
                avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
                designation: 'Therapist',
                name: 'Sophia Liu'
            },
        ]
    },
    {
        id: 2,
        departmentTitle: 'Frontdesk',
        href: '/departments/frontdesk',
        members: [
            {
                id: 1,
                avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
                designation: 'Frontdesk Manager',
                name: 'Aiden Ross'
            },
            {
                id: 2,
                avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
                designation: 'Receptionist',
                name: 'Emily Stewart'
            },
            {
                id: 3,
                avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
                designation: 'Frontdesk Assistant',
                name: 'Mason Miller'
            },
        ]
    },
    {
        id: 3,
        departmentTitle: 'Marketing',
        href: '/departments/marketing',
        members: [
            {
                id: 1,
                avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
                designation: 'Marketing Lead',
                name: 'Liam Thompson'
            },
            {
                id: 2,
                avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
                designation: 'Content Strategist',
                name: 'Charlotte Moore'
            },
            {
                id: 3,
                avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
                designation: 'Social Media Specialist',
                name: 'Benjamin Clark'
            },
        ]
    },
    {
        id: 4,
        departmentTitle: 'Admin',
        href: '/departments/admin',
        members: [
            {
                id: 1,
                avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
                designation: 'Office Administrator',
                name: 'Ella King'
            },
            {
                id: 2,
                avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
                designation: 'Admin Assistant',
                name: 'James White'
            },
            {
                id: 3,
                avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
                designation: 'HR Administrator',
                name: 'Harper Harris'
            },
        ]
    }
]
