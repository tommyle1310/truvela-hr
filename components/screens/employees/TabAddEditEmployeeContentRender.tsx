import React from 'react'
import { input_form_personal_information_add_employee, input_form_professional_information_add_employee, tabs_add_edit_employee } from '@/data/screens/employees'
import InputControl from '@/components/InputControl'
import { Button } from '@/components/ui/button';
import TabHeaders from '@/components/TabHeaders';

const TabAddEditProgressContentRender = ({ selectedDate, setSelectedDate, type }: { type: string, selectedDate?: number, setSelectedDate?: React.Dispatch<React.SetStateAction<number>> }) => {
    switch (type) {
        case tabs_add_edit_employee[0].title:
            return (
                <div className="grid grid-cols-12 gap-4">
                    {input_form_personal_information_add_employee.map(item => {
                        if (item.label === 'Address') {
                            return (
                                <div className='col-span-8' key={item.id}>
                                    <InputControl
                                        placeholder={item.placeholder}
                                        label={item.label}
                                        value={item.value}

                                    />
                                </div>
                            )
                        }
                        if (!selectedDate || !setSelectedDate) return
                        return (
                            <div className="col-span-4" key={item.id}>
                                <InputControl
                                    placeholder={item.placeholder}
                                    label={item.label}
                                    value={item.value}
                                    isImage={item.isImage}
                                    dropdownValue={item.dropdownValue}
                                    multiSelectValue={item.multiSelectValue}
                                    imageGallery={item.imageGallery}
                                    imageSize={0.3}
                                    datePicker={item.datePicker && { selectedDate, setSelectedDate, placeholder: 'Date of Birth' }}
                                />
                            </div>
                        )
                    })}

                </div>
            )
        case tabs_add_edit_employee[1].title:
            return (
                <div className="grid grid-cols-12 gap-4">
                    {input_form_professional_information_add_employee.map(item => {
                        if (!selectedDate || !setSelectedDate) return

                        return (
                            <div className="col-span-4" key={item.id}>
                                <InputControl
                                    placeholder={item.placeholder}
                                    label={item.label}
                                    value={item.value}
                                    isImage={item.isImage}
                                    dropdownValue={item.dropdownValue}
                                    multiSelectValue={item.multiSelectValue}
                                    imageGallery={item.imageGallery}
                                    imageSize={0.3}
                                    datePicker={item.datePicker && { selectedDate, setSelectedDate, placeholder: 'Date of Birth' }}
                                />
                            </div>
                        )
                    })}

                </div>
            )
        case tabs_add_edit_employee[2].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    <InputControl label='Upload Appointment Letter' uploadFile={{ supportedFormats: 'jpeg, png, pdf' }} />
                    <InputControl label='Upload Salary Slips' uploadFile={{ supportedFormats: 'jpeg, png, pdf' }} />
                    <InputControl label='Upload Reliving Letter' uploadFile={{ supportedFormats: 'jpeg, png, pdf' }} />
                    <InputControl label='Upload Experience Letter' uploadFile={{ supportedFormats: 'jpeg, png, pdf' }} />
                </div>
            )
        case tabs_add_edit_employee[3].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {/* <InputControl label='Email Address' placeholder='Email Address' /> */}
                    <InputControl label='Facebook ID' placeholder='Facebook ID' />
                    <InputControl label='Zalo ID' placeholder='Zalo ID' />
                    <InputControl label='Truvela ID' placeholder='Truvela ID' />
                </div>
            )

    }
}

const TabAddEditEmployeeContentRender = ({ currentProgress, setCurrentProgress, handleCancel, selectedDate, setSelectedDate, handleNextStep }: { handleNextStep: () => void, currentProgress: string, handleCancel: () => void, setCurrentProgress: React.Dispatch<React.SetStateAction<string>>, selectedDate: number, setSelectedDate: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div className="border p-4 rounded-lg flex flex-col gap-4 shadow-md">
            <div className="flex items-center">
                {tabs_add_edit_employee.map(item => (
                    <TabHeaders currentProgress={currentProgress} icon={item.icon} title={item.title} id={item.id} setCurrentProgress={setCurrentProgress} key={item.id} />
                ))}
            </div>
            <TabAddEditProgressContentRender type={currentProgress} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <div className='flex justify-end items-center gap-4'>
                <Button onClick={handleCancel} variant={'outline'}>Cancel</Button>
                <Button onClick={handleNextStep}>{currentProgress === tabs_add_edit_employee[tabs_add_edit_employee.length - 1].title ? 'Confirm' : 'Next'}</Button>
            </div>
        </div>
    );
}

export default TabAddEditEmployeeContentRender
