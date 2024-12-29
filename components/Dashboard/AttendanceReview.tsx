import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { table_attendance } from "@/data/screens/attendance/attendance"




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
                    {table_attendance.map((item) => (
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
                                <div className={`px-2 py-1 font-bold ${item.status === 'EARLY' || item.status === 'ON_TIME' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'} flex rounded-sm `}>
                                    {item.status === 'EARLY' ? 'Early' : (item.status === 'LATE' ? 'Late' : 'On time')}</div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
