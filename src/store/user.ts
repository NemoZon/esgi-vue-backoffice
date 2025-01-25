import { defineStore } from "pinia";

export interface UserDTO {
    id: string;
    email: string;
    role: 'Admin' | 'Speaker' | 'Student' | undefined;
}
export interface SpeakerDTO extends UserDTO {
    role: 'Speaker';
    firstName: string;
    lastName: string;
    avatar: string;
    objects: string[];
}

export interface StudentDTO extends UserDTO {
    role: 'Student';
    firstName: string;
    lastName: string;
    avatar: string;
    evaluations: string[];
    absences: string[];
}

export interface AdminDTO extends UserDTO {
    role: 'Admin';
}

export const user: UserDTO = {
    id: "",
    email: "",
    role: undefined,
};

export type User = AdminDTO | StudentDTO | SpeakerDTO;

export interface UsersState {
    admins: AdminDTO[];
    students: StudentDTO[];
    speakers: SpeakerDTO[];
}

export interface UsersActions {
    addAdmins: (user: AdminDTO[]) => void;
    addStudents: (user: StudentDTO[]) => void;
    addSpeakers: (user: SpeakerDTO[]) => void;
}

export const useUsers = defineStore<'users', UsersState, {}, UsersActions>('users', {
    state: (): UsersState => ({
        admins: [],
        students: [],
        speakers: [],
    }),
    actions: {
        addAdmins(admins: AdminDTO[]) {
            this.admins.push(...admins);
        },
        addStudents(students: StudentDTO[]) {
            console.log(students);
            
            this.students.push(...students);
        },
        addSpeakers(speakers: SpeakerDTO[]) {
            this.speakers.push(...speakers);
        },
    }
});