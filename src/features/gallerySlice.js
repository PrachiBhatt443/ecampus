import { createSlice } from '@reduxjs/toolkit';

// Initial state for the gallery
const initialState = {
  images: [
    { src: "https://unsplash.it/640?sports", description: "Students participating in various sports events." },
    { src: "https://unsplash.it/640/?science", description: "Students presenting their science projects." },
    { src: "https://unsplash.it/640/?culture", description: "Students performing in the cultural fest." },
    { src: "https://unsplash.it/640/?classroom", description: "A glimpse of our interactive classrooms." },
    { src: "https://source.unsplash.com/random?blue sky", description: "Students reading and studying in the school library." },
  ],
  videos: [
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", description: "Virtual tour of Springdale Public School." },
    { src: "https://www.w3schools.com/html/movie.mp4", description: "Highlights from the Annual Function 2023." },
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
