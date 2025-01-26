import { isAdmin, isSpeaker, isStudent } from "@/data/entities/User";
import { getUsers } from "@/http/userAPI";
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
    class: string;
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
    error: Error | null;
}

export interface UsersActions {
    fetchUsers: () => Promise<void>;
    addAdmins: (user: AdminDTO[]) => void;
    addStudents: (user: StudentDTO[]) => void;
    addSpeakers: (user: SpeakerDTO[]) => void;
}

export const useUsers = defineStore<'users', UsersState, {}, UsersActions>('users', {
    state: (): UsersState => ({
        admins: [],
        students: [],
        speakers: [],
        error: null,
    }),
    actions: {
        async fetchUsers() {
            try {
                const usersFromAPI = await getUsers();
                
                this.students = usersFromAPI
                .filter(isStudent)
                .map((user) => ({
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                    avatar: user.avatar,
                    evaluations: user.evaluations,
                    absences: user.absences,
                    class: user.class,
                }));

                this.admins = usersFromAPI
                .filter(isAdmin)
                .map((user) => ({
                    id: user._id,
                    email: user.email,
                    role: user.role,
                }));

                this.speakers = usersFromAPI
                .filter(isSpeaker)
                .map((user) => ({
                    id: user._id,
                    email: user.email,
                    role: user.role,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    avatar: user.avatar,
                    objects: user.objects,
                }));
                console.log(this.students);
                
                
            } catch (error) {
                console.error(error);
                if (error instanceof Error) {
                    this.error = error;
                }
            }  
        },
        addAdmins(admins: AdminDTO[]) {
            this.admins = [...this.admins, ...admins];
        },
        addStudents(students: StudentDTO[]) {            
            this.students = [...this.students, ...students];
        },
        addSpeakers(speakers: SpeakerDTO[]) {
            this.speakers = [...this.speakers, ...speakers];
        },
    }
});