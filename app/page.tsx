'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faBell, faCalendar, faCalendarCheck, faChevronDown, faListCheck, faSearch, faSortDown, faSortUp, faSuitcase, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { DashboardAtendanceReviewTable } from "@/components/Dashboard/AttendanceReview";


export const dataDashboardCards = [
  {
    id: 1,
    title: 'Total Employee',
    mainMetric: 560,
    isPositiveTrend: true,
    trendMetric: '12%',
    lastUpdated: 'December 20, 2024',
    icon: faUsersLine
  },
  {
    id: 2,
    title: 'Total Applicant',
    mainMetric: 1020,
    isPositiveTrend: true,
    trendMetric: '21%',
    lastUpdated: 'December 16, 2024',
    icon: faSuitcase
  },
  {
    id: 3,
    title: 'Today Attendance',
    mainMetric: 223,
    isPositiveTrend: false,
    trendMetric: '38%',
    lastUpdated: 'December 23, 2024',
    icon: faCalendarCheck
  },
  {
    id: 4,
    title: 'Total Projects',
    mainMetric: 884,
    isPositiveTrend: true,
    trendMetric: '12%',
    lastUpdated: 'December 22, 2024',
    icon: faListCheck
  },
]



export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center gap-4 justify-between ">
        <div className="flex flex-col text-lg">
          <strong>Hello, <span>{'Tommy Le'}</span>🙌</strong>
          <p className="text-gray-400 font-thin">Good morning</p>
        </div>
        <div className="flex items-center gap-4">
          <Label className="flex items-center gap-2 border cursor-pointer rounded-md p-2">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" className="outline-none border-none ring-0" placeholder="Search" />
          </Label>
          <div className="w-8 aspect-square flex justify-center items-center bg-gray-100 rounded-md">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <Popover>
            <PopoverTrigger>
              <div className="rounded-md border p-2 flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-grow">
                  <strong>{'Tommy Le'}</strong>
                  <p>{'HR staff'}</p>
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 grid grid-cols-2 gap-4 w-full ">

          {dataDashboardCards.map(item => (
            <Card key={item.id} className="gap-0 p-0 ">
              <CardHeader className="p-2 flex flex-row items-center gap-1">
                <div className="w-8 aspect-square flex justify-center items-center bg-violet-100 rounded-md">
                  <FontAwesomeIcon icon={item.icon} className="text-xs text-violet-600" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 flex items-center justify-between">
                <strong className="text-lg font-bold">{item.mainMetric}</strong>
                <div className={`px-2 py-1 ${item.isPositiveTrend ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'} flex items-center gap-1 rounded-sm`}>
                  <FontAwesomeIcon icon={item.isPositiveTrend ? faSortUp : faSortDown} className={`text-xs ${item.isPositiveTrend ? 'mt-1' : 'mb-1'}`} />
                  <strong>{item.trendMetric}</strong>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="my-0 p-2">
                <p className="font-thin text-gray-400">Update: <span>{item.lastUpdated}</span></p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="col-span-4 w-full flex flex-col gap-4">
          <div className="flex items-center justify-between ">
            <strong>My Schedule</strong>
            <div className="w-8 aspect-square flex justify-center items-center bg-violet-100 text-violet-500 rounded-md">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md shadow-none mx-auto"
          />
        </div>
      </div>
      <DashboardAtendanceReviewTable />
    </div>
  );
}
