export type Type_candidate_status = 'Applied' | 'Selected' | 'Rejected' | 'In progress';

export const arr_candidate_status = [
    { value: 'APPLIED', label: 'Applied' },
    { value: 'SELECTED', label: 'Selected' },
    { value: 'REJECTED', label: 'Rejected' },
    { value: 'IN_PROGRESS', label: 'In progress' }
];



export const table_candidates: {
    id: number,
    name: string,
    avatar: string,
    appliedFor: string,
    appliedDate: number,
    contact: {
        email: string,
        phone: string,
        appliedFrom: string
    },
    status: 'APPLIED' | 'SELECTED' | 'REJECTED' | 'IN_PROGRESS'
}[] = [
        {
            id: 1,
            name: "Tommy Teo",
            avatar: "https://github.com/shadcn.png",
            appliedFor: "Therapist staff",
            appliedDate: 1735211894, // Example timestamp (in milliseconds)
            contact: {
                email: "tommy@example.com",
                phone: "123-456-7890",
                appliedFrom: "Facebook" // Platform applied from
            },
            status: 'IN_PROGRESS'
        },
        {
            id: 2,
            name: "Alice Brown",
            avatar: "https://github.com/alicebrown.png",
            appliedFor: "Frontdesk",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "alice@example.com",
                phone: "987-654-3210",
                appliedFrom: "LinkedIn" // Platform applied from
            },
            status: 'APPLIED'
        },
        {
            id: 3,
            name: "John Doe",
            avatar: "https://github.com/johndoe.png",
            appliedFor: "Marketer",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "john@example.com",
                phone: "555-123-4567",
                appliedFrom: "Office Website" // Platform applied from
            },
            status: 'SELECTED'
        },
        {
            id: 4,
            name: "Emma Lee",
            avatar: "https://github.com/emmalee.png",
            appliedFor: "Frontdesk",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "emma@example.com",
                phone: "555-234-5678",
                appliedFrom: "Indeed" // Platform applied from
            },
            status: 'REJECTED'
        },
        {
            id: 5,
            name: "Jake Smith",
            avatar: "https://github.com/jakesmith.png",
            appliedFor: "Therapist staff",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "jake@example.com",
                phone: "555-345-6789",
                appliedFrom: "Facebook" // Platform applied from
            },
            status: 'IN_PROGRESS'
        },
        {
            id: 6,
            name: "Sara White",
            avatar: "https://github.com/sarawhite.png",
            appliedFor: "Accountant",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "sara@example.com",
                phone: "555-456-7890",
                appliedFrom: "LinkedIn" // Platform applied from
            },
            status: 'APPLIED'
        },
        {
            id: 7,
            name: "Michael Green",
            avatar: "https://github.com/michaelgreen.png",
            appliedFor: "Marketer",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "michael@example.com",
                phone: "555-567-8901",
                appliedFrom: "Indeed" // Platform applied from
            },
            status: 'SELECTED'
        },
        {
            id: 8,
            name: "David Black",
            avatar: "https://github.com/davidblack.png",
            appliedFor: "Accountant",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "david@example.com",
                phone: "555-678-9012",
                appliedFrom: "Office Website" // Platform applied from
            },
            status: 'REJECTED'
        },
        {
            id: 9,
            name: "Olivia Grey",
            avatar: "https://github.com/oliviagrey.png",
            appliedFor: "Frontdesk",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "olivia@example.com",
                phone: "555-789-0123",
                appliedFrom: "Facebook" // Platform applied from
            },
            status: 'IN_PROGRESS'
        },
        {
            id: 10,
            name: "Liam Turner",
            avatar: "https://github.com/liamturner.png",
            appliedFor: "Therapist staff",
            appliedDate: 1735211894, // Example timestamp
            contact: {
                email: "liam@example.com",
                phone: "555-890-1234",
                appliedFrom: "LinkedIn" // Platform applied from
            },
            status: 'SELECTED'
        }
    ];
