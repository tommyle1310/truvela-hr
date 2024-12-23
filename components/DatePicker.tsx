import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({
    setPropSelectedDate,
    selectedDate,
    placeholder,
}: {
    selectedDate: number
    setPropSelectedDate: Dispatch<SetStateAction<number>>
    placeholder?: string
}) {
    const [childPlaceholder, setChildPlaceholder] = useState<string | undefined>(placeholder)
    const formattedDate = !childPlaceholder ? format(new Date(selectedDate * 1000), "PPP") : childPlaceholder;

    // Convert the Date to timestamp and set it
    const handleDateSelect = (date: Date | undefined) => {
        if (date) {
            setPropSelectedDate(Math.floor(date.getTime() / 1000)); // Convert to timestamp (in seconds)
        }
    };

    useEffect(() => {
        setChildPlaceholder('')
    }, [selectedDate])
    useEffect(() => {
        setChildPlaceholder(placeholder)
    }, [])

    return (
        <div className="space-y-8">
            <div className="flex flex-col">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-full pl-3 text-left font-normal",
                                !selectedDate && "text-muted-foreground"
                            )}
                        >
                            {/* Show the placeholder initially, then the formatted date */}
                            {selectedDate ? formattedDate : placeholder || "Pick a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={new Date(selectedDate * 1000)}
                            onSelect={handleDateSelect} // Use the new handler
                            disabled={(date) =>
                                date < new Date("1900-01-01")
                            }
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
