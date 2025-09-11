// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import { Box, Typography } from '@mui/material';

// const CarouselComponent = () => {
//   return (
//     <Box sx={{ width: '80%', maxWidth: 1200, margin: '0 auto' }}>
//       <Carousel
//         showArrows={true}
//         showThumbs={false}
//         infiniteLoop={true}
//         autoPlay={true}
//         interval={5000} // Adjust the time interval as needed
//         transitionTime={500} // Adjust the transition time as needed
//       >
//         <div>
//           <img src="https://via.placeholder.com/800x400?text=School+Building" alt="School Building" />
//           <Typography variant="h6" sx={{ position: 'absolute', bottom: 0, left: 0, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: 1 }}>
//             Our Beautiful School Building
//           </Typography>
//         </div>
//         <div>
//           <img src="https://via.placeholder.com/800x400?text=Classroom" alt="Classroom" />
//           <Typography variant="h6" sx={{ position: 'absolute', bottom: 0, left: 0, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: 1 }}>
//             Modern and Well-Equipped Classrooms
//           </Typography>
//         </div>
//         <div>
//           <img src="https://via.placeholder.com/800x400?text=School+Events" alt="School Events" />
//           <Typography variant="h6" sx={{ position: 'absolute', bottom: 0, left: 0, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: 1 }}>
//             Exciting School Events
//           </Typography>
//         </div>
//       </Carousel>
//     </Box>
//   );
// };

// export default CarouselComponent;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Box, Typography } from '@mui/material';

const CarouselComponent = () => {
  return (
    <Box sx={{ width: '80%', maxWidth: 1200, margin: '0 auto' }}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
      >
        <div style={{ position: 'relative' }}>
          <img 
            src="https://unsplash.com/photos/white-concrete-building-near-green-trees-during-daytime-bgQgAKagQB4" 
            alt="School Building" 
          />
          <Typography 
            variant="h6" 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              color: 'white', 
              backgroundColor: 'rgba(0,0,0,0.5)', 
              padding: 1 
            }}
          >
            Our Beautiful School Building
          </Typography>
        </div>

        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80" 
            alt="Classroom" 
          />
          <Typography 
            variant="h6" 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              color: 'white', 
              backgroundColor: 'rgba(0,0,0,0.5)', 
              padding: 1 
            }}
          >
            Modern and Well-Equipped Classrooms
          </Typography>
        </div>

        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80" 
            alt="School Events" 
          />
          <Typography 
            variant="h6" 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              color: 'white', 
              backgroundColor: 'rgba(0,0,0,0.5)', 
              padding: 1 
            }}
          >
            Exciting School Events
          </Typography>
        </div>
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

