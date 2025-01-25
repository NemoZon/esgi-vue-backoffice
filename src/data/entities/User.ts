export interface User {
  _id: string;
  email: string;
  password: string;
  role: 'Admin' | 'Speaker' | 'Student';
}

export interface Speaker extends User {
  role: 'Speaker';
  firstName: string;
  lastName: string;
  avatar: string;
  objects: string[];
}

export interface Student extends User {
  role: 'Student';
  firstName: string;
  lastName: string;
  avatar: string;
  evaluations: string[];
  absences: string[];
}

export interface Admin extends User {
  role: 'Admin';
}

export function isStudent(user: User): user is Student {
  return user.role === 'Student';
}

export function isAdmin(user: User): user is Admin {
  return user.role === 'Admin';
}

export function isSpeaker(user: User): user is Speaker {
  return user.role === 'Speaker';
}
