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
    objects: ['1']
  },
  {
    _id: '5',
    email: 'speaker2@example.com',
    password: 'password5',
    role: 'Speaker',
    firstName: 'Alice',
    lastName: 'Smith',
    avatar: 'avatar5.png',
    objects: ['1', '3']
  },
  {
    _id: '8',
    email: 'speaker3@example.com',
    password: 'password8',
    role: 'Speaker',
    firstName: 'Charlie',
    lastName: 'Brown',
    avatar: 'avatar6.png',
    objects: ['2']
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
    avatar: 'https://picsum.photos/200?random=3',
    evaluations: ['1'],
    absences: ['1'],
    class: '1',
  },
  {
    _id: '6',
    email: 'student2@example.com',
    password: 'password6',
    role: 'Student',
    firstName: 'Bob',
    lastName: 'Smith',
    avatar: 'https://picsum.photos/200?random=1',
    evaluations: ['2'],
    absences: [],
    class: '1',
  },
  {
    _id: '9',
    email: 'student3@example.com',
    password: 'password9',
    role: 'Student',
    firstName: 'David',
    lastName: 'Brown',
    avatar: 'https://picsum.photos/200?random=2',
    evaluations: ['3'],
    absences: [],
    class: '1',
  }
];

export const users: User[] = [
  ...admins,
  ...speakers,
  ...students,
];