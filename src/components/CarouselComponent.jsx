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
            src="https://images.unsplash.com/photo-1592066575517-58df903152f2?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
            src="https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
            src="https://images.unsplash.com/photo-1663246544917-9fa8f65b8359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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

