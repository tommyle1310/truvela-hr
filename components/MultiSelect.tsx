import React, { useState, useRef, useEffect } from "react";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Define the structure of options
interface Option {
    label: string;
    value: string;
}

const MultiSelect: React.FC = () => {
    // Available options
    const options: Option[] = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
        { label: "Option 4", value: "option4" },
        { label: "Option 5", value: "option5" },
        { label: "Option 6", value: "option6" },
    ];

    // State to hold selected values, search query, and dropdown open state
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false); // State for dropdown open/close
    const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
    const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the container

    const MAX_VISIBLE_SELECTED = 3; // Maximum number of visible selected options in the label

    // Function to toggle selection
    const handleChange = (value: string) => {
        setSelectedValues((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value) // Remove if already selected
                : [...prev, value] // Add if not selected
        );
    };

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false); // Close dropdown
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Filter options based on search query
    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div ref={containerRef} className="relative">
            {/* Show selected values as labels */}
            <div
                className="border border-gray-300 rounded-md p-2 cursor-pointer flex flex-wrap gap-2 bg-gray-50"
                onClick={toggleDropdown}
            >
                {selectedValues.length > 0 ? (
                    // Show the selected options with a limit on the number of visible items
                    <>
                        {selectedValues.slice(0, MAX_VISIBLE_SELECTED).map((value) => {
                            const option = options.find((opt) => opt.value === value);
                            return option ? (
                                <span
                                    key={value}
                                    className="text-gray-700 bg-gray-200 px-2 py-1 text-xs rounded-md"
                                >
                                    <div className=" text-xs flex items-center gap-1  ">
                                    {option.label}
                                        <div onClick={() => handleChange(option.value)} className="hover p-1 hover:bg-red-300 hover:text-red-700 center rounded-full">
                                        <FontAwesomeIcon icon={faXmark}/>
                                    </div>
                                    </div>
                                </span>
                            ) : null;
                        })}
                        {/* Show the '...' if the number of selected values exceeds the limit */}
                        {selectedValues.length > MAX_VISIBLE_SELECTED && (
                            <span className="text-gray-500">...</span>
                        )}
                    </>
                ) : (
                    <span className="text-gray-500">Select options...</span>
                )}
            </div>

            {/* Dropdown (popover) */}
            {isOpen && (
                <div className="absolute left-0 top-full w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10 p-2">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    />

                    {/* Filtered options */}
                    <div className="max-h-60 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <Label
                                    key={option.value}
                                    htmlFor={option.value}
                                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                                >
                                    <Checkbox
                                        id={option.value}
                                        checked={selectedValues.includes(option.value)}
                                        onClick={() => handleChange(option.value)}
                                        className="mr-2"
                                    />
                                    <label htmlFor={option.value} className="cursor-pointer">
                                        {option.label}
                                    </label>
                                </Label>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">No results found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
