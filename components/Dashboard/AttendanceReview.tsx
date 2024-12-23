import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const attendanceReviewData: { id: number, name: string, avatar: string, clockIn: string, checkIn: string, designation: string, status: 'LATE' | 'EARLY' | 'ON_TIME' }[] = [
    {
        id: 1,
        name: "Tommy Teo",
        avatar: "https://github.com/shadcn.png",
        clockIn: '08:55 AM',
        designation: 'Therapist staff',
        checkIn: '09:00 AM',
        status: 'LATE'
    },
    {
        id: 2,
        name: "Alice Brown",
        avatar: "https://github.com/alicebrown.png",
        clockIn: '08:59 AM',
        designation: 'Frontdesk',
        checkIn: '09:00 AM',
        status: 'ON_TIME'
    },
    {
        id: 3,
        name: "John Doe",
        avatar: "https://github.com/johndoe.png",
        clockIn: '07:45 AM',
        designation: 'Marketer',
        checkIn: '08:00 AM',
        status: 'EARLY'
    },
    {
        id: 4,
        name: "Emma Lee",
        avatar: "https://github.com/emmalee.png",
        clockIn: '09:15 AM',
        designation: 'Frontdesk',
        checkIn: '09:20 AM',
        status: 'LATE'
    },
    {
        id: 5,
        name: "Jake Smith",
        avatar: "https://github.com/jakesmith.png",
        clockIn: '08:30 AM',
        designation: 'Therapist staff',
        checkIn: '09:00 AM',
        status: 'ON_TIME'
    },
    {
        id: 6,
        name: "Sara White",
        avatar: "https://github.com/sarawhite.png",
        clockIn: '08:05 AM',
        designation: 'Accountant',
        checkIn: '08:15 AM',
        status: 'ON_TIME'
    },
    {
        id: 7,
        name: "Michael Green",
        avatar: "https://github.com/michaelgreen.png",
        clockIn: '09:30 AM',
        designation: 'Marketer',
        checkIn: '09:40 AM',
        status: 'LATE'
    },
    {
        id: 8,
        name: "David Black",
        avatar: "https://github.com/davidblack.png",
        clockIn: '08:00 AM',
        designation: 'Accountant',
        checkIn: '08:05 AM',
        status: 'EARLY'
    },
    {
        id: 9,
        name: "Olivia Grey",
        avatar: "https://github.com/oliviagrey.png",
        clockIn: '09:00 AM',
        designation: 'Frontdesk',
        checkIn: '09:05 AM',
        status: 'LATE'
    },
    {
        id: 10,
        name: "Liam Turner",
        avatar: "https://github.com/liamturner.png",
        clockIn: '08:00 AM',
        designation: 'Therapist staff',
        checkIn: '08:00 AM',
        status: 'ON_TIME'
    }
];


export function DashboardAtendanceReviewTable() {
    return (
        <div className="flex flex-col">
            <h5 className="text-lg font-bold p-2">Attendance Overview</h5>
            <Table>
                <TableCaption>A list of recent staff attendance.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Employee Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Clock In</TableHead>
                        <TableHead>Check In Time</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {attendanceReviewData.map((item) => (
                        <TableRow key={item.id} className="">
                            <TableCell className="font-medium w-56 flex items-center gap-1">
                                <Avatar>
                                    <AvatarImage src={item.avatar} />
                                    <AvatarFallback>{item.name}</AvatarFallback>
                                </Avatar>
                                <strong>{item.name}</strong>
                            </TableCell>
                            <TableCell className="">{item.designation}</TableCell>
                            <TableCell className="">{item.clockIn}</TableCell>
                            <TableCell className="">{item.checkIn}</TableCell>
                            <TableCell className="flex">
                                <div className={`px-2 py-1 font-bold ${item.status === 'EARLY' || item.status === 'ON_TIME' ? 'bg-green-200 text-green-500' : 'bg-red-200 text-red-500'} flex rounded-sm `}>
                                    {item.status}</div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
