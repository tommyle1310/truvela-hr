export interface Props_Candidate {
    applied_date: number,
    created_at: number,
    name: string,
    updated_at: number,
    id: string,
    email: string,
    job: { title: string } | null,
    source: string,
    office_location: null | { name: string },
    phone: string,
    resume: string,
    status: 'Applied' | 'Rejected' | 'Selected' | 'In progress',
}