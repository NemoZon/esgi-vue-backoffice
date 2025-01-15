export interface User {
    email: string;
    role?: 'Admin' | 'Speaker' | 'Student';
}

export const user: User = {
    email: ""
}