import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  schoolName: "Springdale Public School",
  logo: "logo.png",
  introduction: "Welcome to Springdale Public School, where we nurture young minds for a brighter future.",
  highlights: [
    "Annual Sports Day - Celebrating Excellence in Sports",
    "Science Exhibition - Showcasing Student Innovations",
    "Cultural Fest - Embracing Diversity and Creativity"
  ],
  aboutUs: {
    history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
    principalMessage: "Welcome to our school, where we nurture young minds...",
    vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
    mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
    principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
    facilities: [
        { name: "State-of-the-art science and computer labs", image: "https://source.unsplash.com/600x400/?science-lab" },
        { name: "Spacious and well-equipped classrooms", image: "https://source.unsplash.com/600x400/?classroom" },
        { name: "Library with a vast collection of books and digital resources", image: "https://source.unsplash.com/600x400/?library" },
        { name: "Sports facilities including a playground, gymnasium, and swimming pool", image: "https://source.unsplash.com/600x400/?sports" }
      ],
  },
  academics: {
    curriculum: {
      primary: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"],
      secondary: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Social Studies", "Computer Science", "Physical Education", "Art"],
      seniorSecondary: {
        science: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"],
        commerce: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"]
      }
    },
    methodologies: "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
    resources: "Digital classrooms, interactive learning modules, and access to online educational platforms."
  },
  admissions: {
    process: "Admission forms are available for download. Submit the completed form along with required documents at the school office.",
    criteria: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.",
    dates: {
      formAvailability: "March 1st",
      submissionDeadline: "March 31st",
      entranceTest: "April 15th",
      resultsAnnouncement: "April 30th"
    }
  },
  upcomingEvents: [
    { id: 1, title: 'Annual Science Fair', date: 'August 15, 2024', details: 'An exciting day where students showcase their science projects and experiments.' },
    { id: 2, title: 'Art Exhibition', date: 'September 5, 2024', details: 'A display of artistic creations by our students, including paintings, sculptures, and more.' },
    { id: 3, title: 'Sports Meet', date: 'October 10, 2024', details: 'Annual sports meet with various athletic events and competitions.' }
  ],
  importantAnnouncements: [
    { id: 1, title: 'School Reopens', date: 'August 1, 2024', details: 'The school reopens for the new academic year.' },
    { id: 2, title: 'New Uniform Policy', date: 'September 1, 2024', details: 'Implementation of a new uniform policy for students.' },
    { id: 3, title: 'Parent-Teacher Meetings', date: 'Every Friday', details: 'Weekly parent-teacher meetings to discuss student progress.' }
  ],
  faculty: [
    { name: "John Doe", position: "Principal", qualification: "M.Ed", experience: "20 years of experience in educational administration" },
    { name: "Jane Smith", position: "Vice Principal", qualification: "M.Sc. in Physics", experience: "15 years of teaching experience" },
    { name: "Emily Johnson", position: "English Teacher", qualification: "M.A. in English", experience: "10 years of teaching experience" },
    { name: "Michael Brown", position: "Mathematics Teacher", qualification: "M.Sc. in Mathematics", experience: "8 years of teaching experience" },
    { name: "Sophia Davis", position: "Science Teacher", qualification: "M.Sc. in Chemistry", experience: "12 years of teaching experience" },
    { name: "David Wilson", position: "Computer Science Teacher", qualification: "B.Tech in Computer Science", experience: "5 years of teaching experience" }
  ],
  students: {
    activities: ["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"],
    clubs: ["Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"],
    achievements: [
      "John Smith - National Level Math Olympiad Winner",
      "Sarah Lee - Gold Medalist in State Swimming Championship",
      "Tech Innovators Club - Winners of Inter-School Robotics Competition"
    ],
    council: [
      { name: "Amy Parker", position: "President", grade: 12 },
      { name: "Rajiv Mehta", position: "Vice President", grade: 11 },
      { name: "Lisa Wong", position: "Secretary", grade: 10 }
    ]
  },
  gallery: {
    photos: [
      { src: "sports_day.jpg", description: "Students participating in various sports events." },
      { src: "science_exhibition.jpg", description: "Students presenting their science projects." },
      { src: "cultural_fest.jpg", description: "Students performing in the cultural fest." },
      { src: "classroom.jpg", description: "A glimpse of our interactive classrooms." },
      { src: "library.jpg", description: "Students reading and studying in the school library." }
    ],
    videos: [
      { src: "school_tour.mp4", description: "Virtual tour of Springdale Public School." },
      { src: "annual_function.mp4", description: "Highlights from the Annual Function 2023." }
    ]
  },
  contact: {
    address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code",
    phone: "+1 (123) 456-7890",
    email: "info@springdale.edu"
  }
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {},
});

export const selectSchool = (state) => state.school;
export default schoolSlice.reducer;
