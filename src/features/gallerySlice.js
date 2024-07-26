import { createSlice } from '@reduxjs/toolkit';
import sports from '../img/sports_day.jpg'
import science from '../img/science_exhibition.jpg'
import cultural from '../img/cultural_fest.jpg'
import classroom from '../img/classroom.jpg'
import library from '../img/library.jpg'
import school_tour from '../img/school_tour.mp4'
import annual from '../img/annual_function.mp4'
// Initial state for the gallery
const initialState = {
  images: [
    { src: sports , description: "Students participating in various sports events." },
    { src: science, description: "Students presenting their science projects." },
    { src: cultural , description: "Students performing in the cultural fest." },
    { src: classroom, description: "A glimpse of our interactive classrooms." },
    { src: library, description: "Students reading and studying in the school library." },
  ],
  videos: [
    { src: school_tour, description: "Virtual tour of Springdale Public School." },
    { src: annual, description: "Highlights from the Annual Function 2023." },
  ],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    // You can add reducers here if needed for future actions
  },
});

export const selectGallery = (state) => state.gallery;
export default gallerySlice.reducer;
