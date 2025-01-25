import type { User, Student, Speaker, Admin} from "../entities/User";

export const admins: Admin[] = [
  {
    _id: '1',
    email: 'admin1@example.com',
    password: 'password1',
    role: 'Admin'
  },
  {
    _id: '4',
    email: 'admin2@example.com',
    password: 'password4',
    role: 'Admin'
  },
  {
    _id: '7',
    email: 'admin3@example.com',
    password: 'password7',
    role: 'Admin'
  },
  {
    _id: '10',
    email: 'admin4@example.com',
    password: 'password10',
    role: 'Admin'
  }
];

export const speakers: Speaker[] = [
  {
    _id: '2',
    email: 'speaker1@example.com',
    password: 'password2',
    role: 'Speaker',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'avatar4.png',
    objects: ['Object1', 'Object2']
  },
  {
    _id: '5',
    email: 'speaker2@example.com',
    password: 'password5',
    role: 'Speaker',
    firstName: 'Alice',
    lastName: 'Smith',
    avatar: 'avatar5.png',
    objects: ['Object2', 'Object3']
  },
  {
    _id: '8',
    email: 'speaker3@example.com',
    password: 'password8',
    role: 'Speaker',
    firstName: 'Charlie',
    lastName: 'Brown',
    avatar: 'avatar6.png',
    objects: ['Object3']
  }
];

export const students: Student[] = [
  {
    _id: '3',
    email: 'student1@example.com',
    password: 'password3',
    role: 'Student',
    firstName: 'Jane',
    lastName: 'Doe',
    avatar: 'avatar1.png',
    evaluations: ['A'],
    absences: ['2021-10-01', '2021-10-02']
  },
  {
    _id: '6',
    email: 'student2@example.com',
    password: 'password6',
    role: 'Student',
    firstName: 'Bob',
    lastName: 'Smith',
    avatar: 'avatar2.png',
    evaluations: ['B'],
    absences: ['2021-10-03', '2021-10-04'],
  },
  {
    _id: '9',
    email: 'student3@example.com',
    password: 'password9',
    role: 'Student',
    firstName: 'David',
    lastName: 'Brown',
    avatar: 'avatar3.png',
    evaluations: ['C'],
    absences: ['2021-10-05', '2021-10-06'],
  }
];

export const users: User[] = [
  ...admins,
  ...speakers,
  ...students,
];