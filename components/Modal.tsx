import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Modal: React.FC<{ isOpen: boolean, setIsOpen: (state: boolean) => void, children: React.ReactNode }> = ({ isOpen, setIsOpen, children }) => {
    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    if (!isOpen) return null; // Don't render anything if the modal is closed

    return (
        <div
            id="modal-overlay"
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-auto"}`}
            onClick={handleClickOutside}
            style={{ zIndex: 9999 }}  // Ensure modal is on top
        >
            <div
                className={`bg-white p-4 relative rounded-lg shadow-lg w-full sm:max-w-screen-lg transition-transform transform ${isOpen ? "scale-100" : "scale-95"}`}
            >
                <div className="absolute top-2 right-2 hover-icon"
                    onClick={() => setIsOpen(false)}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div
                    className="overflow-y-auto my-8"
                    style={{
                        zIndex: 10000, // Ensure modal content is above the overlay
                        maxHeight: 'calc(100vh - 10rem)', // Dynamically set the max height
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
