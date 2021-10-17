interface User {
  id: number;
  name: string;
  classes: { id: number; name: string }[];
  students: { id: number; name: string }[];
}

interface Year {
  id: number;
  gId: number;
  name: string;
  start: Date;
  end: Date;
}

interface Server {
  id: string;
  timeFormat: string;
  dateFormat: string;
}

interface Subject {
  id: string;
  name: string;
}

interface Credentials {
  user: User;
  year: Year;
  server: Server;
  schoolId: number;
  subjects: Subject[];
}

export default class {
  readonly user: User;
  readonly year: Year;
  readonly server: Server;
  readonly schoolId: number;
  readonly subjects: Subject[];

  constructor(credentials: Credentials) {
    this.user = credentials.user;
    this.year = credentials.year;
    this.server = credentials.server;
    this.schoolId = credentials.schoolId;
    this.subjects = credentials.subjects;
  }

  /** Проверяет является ли число частью года */
  checkDate(date: Date) {
    const { start, end } = this.year;
    return +start <= +date && +date <= +end;
  }

  /** Существует ли класс */
  classExists(id: number) {
    return !!this.user.classes.find((c) => c.id == id);
  }

  /** ID первого класса */
  defaultClass() {
    return this.user.classes[0]?.id ?? -1;
  }

  /** Существует ли ученик */
  studentExists(id: number) {
    return !!this.user.students.find((s) => s.id == id);
  }

  /** ID первого ученика */
  defaultStudent() {
    return this.user.students[0]?.id ?? -1;
  }
}