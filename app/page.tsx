'use client'
import { faCalendar, faSortDown, faSortUp, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { DashboardAtendanceReviewTable } from "@/components/Dashboard/AttendanceReview";
import { cards_dashboard } from "@/data/screens/dashboard/dashboard";





export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col gap-8 w-full">

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 grid grid-cols-2 gap-4 w-full ">

          {cards_dashboard.map(item => (
            <Card key={item.id} className="gap-0 p-0 ">
              <CardHeader className="p-4 flex flex-row items-center gap-1">
                <div className="w-8 aspect-square flex justify-center items-center bg-violet-100 rounded-md">
                  <FontAwesomeIcon icon={item.icon} className="text-xs text-violet-600" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 flex items-center justify-between">
                <strong className="text-lg font-bold">{item.mainMetric}</strong>
                <div className={`px-2 py-1 ${item.isPositiveTrend ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'} flex items-center gap-1 rounded-sm`}>
                  <FontAwesomeIcon icon={item.isPositiveTrend ? faSortUp : faSortDown} className={`text-xs ${item.isPositiveTrend ? 'mt-1' : 'mb-1'}`} />
                  <strong>{item.trendMetric}</strong>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="my-0 flex-grow p-4 ">
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
