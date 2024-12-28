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
import { attendanceTableData } from "@/data/attendance"
import { table_requested_availability } from "@/data/screens/staff-schedule"
import { Enum_ApprovalStatus, Enum_Shift } from "@/types/enums"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { format } from "date-fns"

const DecoratedShiftChosen = ({ shift }: { shift: Enum_Shift }) => {
    switch (shift) {
        case Enum_Shift.MORNING:
            return <div className="text-[#2F4F6C] center p-1 rounded-lg bg-[#A3D9FF] capitalize">{shift}</div>
        case Enum_Shift.AFTERNOON:
            return <div className="text-[#4E2A2A] center p-1 rounded-lg bg-[#FFD700] capitalize">{shift}</div>
        case Enum_Shift.EVENING:
            return <div className="text-[#D8B2D1] center p-1 rounded-lg bg-[#4B0082] capitalize">{shift}</div>
    }
}
const DecoratedAprrovalStatus = ({ status }: { status: Enum_ApprovalStatus }) => {
    switch (status) {
        case Enum_ApprovalStatus.APPROVED:
            return <div className="text-[#388E3C] center p-1 rounded-lg bg-[#C8E6C9] capitalize">{status}</div>
        case Enum_ApprovalStatus.PENDING:
            return <div className="text-[#F57F17] center p-1 rounded-lg bg-[#FFF9C4] capitalize">{status}</div>
        case Enum_ApprovalStatus.REJECTED:
            return <div className="text-[#D32F2F] center p-1 rounded-lg bg-[#FFCCCC] capitalize">{status}</div>
    }
}


export function RequestedAvailabilityTable() {
    return (
        <div className="flex flex-col">
            <h5 className="text-lg font-bold p-2">Request Availability Table</h5>
            <Table>
                <TableCaption>A list of recent staff attendance.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Employee Name</TableHead>
                        <TableHead>Job</TableHead>
                        <TableHead>Requested Shift</TableHead>
                        <TableHead className="text-center">Client Ordered?</TableHead>
                        <TableHead>Notes</TableHead>
                        <TableHead>Approval Status</TableHead>
                        <TableHead>Date of Request</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {table_requested_availability.map((item) => (
                        <TableRow key={item.id} className="">
                            <TableCell className="font-medium w-44 flex items-center gap-1">
                                <Avatar>
                                    <AvatarImage src={item.avatar} />
                                    <AvatarFallback>{item.name}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <strong className="text-violet-900">{item.name}</strong>
                                    <p className="text-xs ">{item.level}</p>
                                </div>
                            </TableCell>
                            <TableCell className="">{item.job}</TableCell>
                            <TableCell className="">
                                <DecoratedShiftChosen shift={item.shift} />
                            </TableCell>
                            <TableCell className="text-center">{item.orderedByClient && <FontAwesomeIcon icon={faXmark} />}</TableCell>
                            <TableCell className="">{item.notes}</TableCell>
                            <TableCell className="">
                                <DecoratedAprrovalStatus status={item.approvalStatus} />
                            </TableCell>
                            <TableCell className="">{format(new Date(item.requestDate * 1000), "PPP")}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
