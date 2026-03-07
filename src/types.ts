export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  trainer: string;
  trainerId: string;
  description: string;
  duration: string;
  lessonsCount: number;
  level: Level;
  price: number;
  studentsCount: number;
  rating: number;
  curriculum: Lesson[];
  category: string;
  image: string;
}

export interface UserCourseProgress {
  courseId: string;
  completedLessons: string[]; // IDs of completed lessons
  enrolledAt: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  issueDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  enrolledCourses: UserCourseProgress[];
  certificates: Certificate[];
  role: 'user' | 'admin';
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  coursesCount: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}
