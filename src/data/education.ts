export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University of Technology",
    year: "2020 - 2024",
    description: "Graduated with honors. Coursework includes Data Structures, Algorithms, Database Systems, Web Development, and Machine Learning.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "State Board of Education",
    year: "2018 - 2020",
    description: "Completed with focus on Science stream with Computer Science as an elective subject.",
  },
];
