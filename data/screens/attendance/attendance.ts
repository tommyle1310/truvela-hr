export const table_attendance: { id: number, email: string, name: string, isFulltime: boolean, activePoint: number, workLocation: string, avatar: string, clockIn: string, checkIn: string, designation: string, status: 'LATE' | 'EARLY' | 'ON_TIME' }[] = [
    {
        id: 1,
        name: "Tommy Teo",
        avatar: "https://github.com/shadcn.png",
        clockIn: '08:55 AM',
        designation: 'Staff',
        checkIn: '09:00 AM',
        status: 'LATE',
        email: 'tommyle1310@gmail.com',
        isFulltime: true,
        activePoint: 20,
        workLocation: 'Truvela'
    },
    {
        id: 2,
        name: "Alice Brown",
        avatar: "https://github.com/alicebrown.png",
        clockIn: '08:59 AM',
        designation: 'Staff',
        checkIn: '09:00 AM',
        status: 'ON_TIME',
        email: 'alice0@gmail.com',
        isFulltime: false,
        activePoint: 90,
        workLocation: 'Bremare'
    },
];