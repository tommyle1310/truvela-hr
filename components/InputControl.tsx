import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import RequirePermission from './RequirePermission';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { Checkbox } from './ui/checkbox';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from './DatePicker';

interface IInputControl {
    placeholder?: string,
    disabled?: boolean,
    isImage?: boolean,
    dropdownValue?: { label: string, value: string }[],
    isHidden?: boolean,
    label?: string,
    value?: number | string,
    popOverExtraBtn?: { label: string, onClick: () => void }
    defaultValue?: string | number
    isSkipped?: boolean,
    datePicker?: {
        placeholder?: string,
        selectedDate: number
        setSelectedDate: Dispatch<SetStateAction<number>>
    },
    imageSize?: number,
    isImageGallery?: boolean,
    imageGallery?: string[],
    multiSelectValue?: {
        mainTitle: string,
        id: string,
        subTitle?: string
    }[]
}

const InputControl = ({
    placeholder,
    disabled,
    isImage,
    label,
    isHidden,
    imageSize,
    isSkipped,
    popOverExtraBtn,
    datePicker,
    value,
    defaultValue,
    dropdownValue,
    multiSelectValue,
    imageGallery,
    isImageGallery,
}: IInputControl) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || ""); // Initialize with `value` if provided.
    const [multiSelectData, setMultiSelectData] = useState<
        { mainTitle: string; id: string; subTitle: string }[] | undefined
    >();

    // Return empty div if skipped
    if (isSkipped) return <div />;

    // Handle multi-select logic
    useEffect(() => {
        if (!dropdownValue && multiSelectValue && multiSelectValue?.length) {
            const updatedData = multiSelectValue.map((item) => ({
                ...item,
                subTitle: item.subTitle ?? "", // Ensure subTitle is always a string (fallback to empty string)
            }));
            setMultiSelectData(updatedData);
        }
    }, [multiSelectValue]);

    const renderImageGallery = () => {
        return (
            <div className="relative w-full h-full">
                {imageGallery?.slice(-3)?.map((item, index) => {
                    if (index === 0) return <img
                        key={index}
                        src={item as string}
                        alt={label}
                        width={80}
                        height={80}
                        className="aspect-square w-6/12 bg-violet-300 shadow-lavender-primary-100 absolute top-0 left-0 shadow-md border rounded-md"
                    />
                    if (index === 1) return <img
                        key={index}
                        src={item as string}
                        alt={label}
                        width={80}
                        height={80}
                        className="aspect-square w-6/12 bg-violet-300 shadow-lavender-primary-100 absolute top-5 left-5 shadow-md border rounded-md"
                    />
                    if (index === 2) return <img
                        key={index}
                        src={item as string}
                        alt={label}
                        width={80}
                        height={80}
                        className="aspect-square w-6/12 bg-violet-300 shadow-lavender-primary-100 absolute top-10 left-10 shadow-md border rounded-md"
                    />
                })}
                <div className="w-3/12 aspect-square bg-white hv hover:bg-slate-100 center absolute top-0 right-0 rounded-lg shadow-md border shadow-lavender-primary-100">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        );
    };

    const renderMultiSelectList = () => {
        return (
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">List {label}</Button>
                </PopoverTrigger>
                <PopoverContent className="min-w-48">
                    <ScrollArea className="h-[200px]">
                        {popOverExtraBtn &&
                            <Button variant={'link'} onClick={popOverExtraBtn.onClick} className='self-end text-lavender-primary-500 pl-2'>{popOverExtraBtn.label}</Button>
                        }
                        <div className="flex flex-col gap-1">
                            {multiSelectData?.map((item) => (
                                <div
                                    key={item.id}
                                    className="py-1 px-2 rounded-sm hover:bg-slate-200 text-slate-600 flex items-center justify-between gap-3"
                                >
                                    <Label htmlFor={item.id} className="flex-grow flex gap-4 justify-between items-center">
                                        <h5>{item.mainTitle}</h5>
                                        {item.subTitle && <strong className="font-thin text-sm">{item.subTitle}</strong>}
                                    </Label>
                                    <Checkbox id={item.id} />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </PopoverContent>
            </Popover>
        );
    };

    const renderInputField = () => {
        if (isImage) {
            if (value) {
                return (
                    <img
                        src={value as string}
                        alt={label}
                        className="aspect-square shadow-md border rounded-md"
                        style={{
                            width: imageSize ? (imageSize < 1 ? `${imageSize * 100}%` : `${imageSize}px`) : '66%' // Default is '8/12' which is 66% width
                        }}
                    />
                );
            }
            return (
                <div
                    className="aspect-square shadow-md border rounded-md group hover:bg-violet-100 cursor-pointer hover bg-gray-100 center"
                    style={{
                        width: imageSize ? (imageSize < 1 ? `${imageSize * 100}%` : `${imageSize}px`) : '66%' // Default is '8/12' which is 66% width
                    }}
                >
                    <FontAwesomeIcon className='text-xl text-gray-400 group-hover:text-violet-600' icon={faCamera} />
                </div>
            )
        }
        return (
            <Input
                placeholder={placeholder}
                disabled={disabled}
                id={label}
                value={value}
                defaultValue={defaultValue}
            />
        );
    };

    const renderDropdown = () => {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                        {selectedValue
                            ? typeof dropdownValue?.[0] === "string"
                                ? selectedValue
                                : dropdownValue?.find((item: any) => item.label === selectedValue)?.label
                            : `Select ${label}...`}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder={`Search ${label}...`} />
                        <CommandList>
                            <CommandEmpty>No {label} found.</CommandEmpty>
                            <CommandGroup>
                                {dropdownValue?.map((item: { value: string, label: string }) =>
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            setSelectedValue(currentValue);
                                            setOpen(false); // Close the dropdown on selection.
                                        }}
                                    >
                                        {item.label}
                                        <Check
                                            className={cn("ml-auto", selectedValue === item.value ? "opacity-100" : "opacity-0")}
                                        />
                                    </CommandItem>

                                )}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    };

    const renderDatePicker = () => {
        return (
            <>
                {datePicker && (
                    <DatePicker
                        placeholder="Date of Birth"
                        selectedDate={datePicker.selectedDate}
                        setPropSelectedDate={datePicker?.setSelectedDate}
                    />
                )}
            </>
        );
    };


    let content
    if (dropdownValue) {
        content = renderDropdown();
    } else if (multiSelectValue) {
        content = renderMultiSelectList();
    } else if (datePicker) {
        content = renderDatePicker();
    } else if (isImageGallery) {
        content = renderImageGallery();
    } else if (isHidden) {
        content = <RequirePermission label={label} />;
    } else {
        content = renderInputField();
    }

    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="name">{label}</Label>
            {content}
        </div>
    );
};

export default InputControl
