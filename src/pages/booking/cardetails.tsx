// import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
// import React from 'react'

// const Cardetails = () => {
//     const selectedCar = []
//   return (
//     <div className="lg:w-1/3 bg-white p-5 rounded-lg shadow-lg fixed top-0 right-0 h-full lg:block">
//     <div
//     //   onClick={() => setSelectedCar(null)}
//       className="cursor-pointer text-gray-500 font-semibold"
//     >
//       Close
//     </div>
//     <div className="text-lg font-bold mb-3">{selectedCar.type}</div>
//     <img
//       src={selectedCar.image}
//       alt={selectedCar.type}
//       className="w-full h-48 object-cover mb-4"
//     />
//     <CarouselProvider
//       naturalSlideWidth={150}
//       naturalSlideHeight={100}
//       totalSlides={selectedCar.images.length}
//       visibleSlides={3}
//       isIntrinsicHeight
//     >
//       <Slider>
//         {selectedCar.images.map((img, index) => (
//           <Slide key={index} index={index}>
//             <div className="flex justify-center items-center space-x-5">
//               <img
//                 src={img}
//                 alt={`Car Image ${index + 1}`}
//                 className="w-[150px] h-[100px] object-contain border rounded-lg"
//               />
//             </div>
//           </Slide>
//         ))}
//       </Slider>
//       <div className="flex justify-between mt-3">
//         <ButtonBack className="px-3 py-2 bg-gray-200 rounded">
//           Back
//         </ButtonBack>
//         <ButtonNext className="px-3 py-2 bg-gray-200 rounded">
//           Next
//         </ButtonNext>
//       </div>
//     </CarouselProvider>

//     <p className="text-gray-600">{selectedCar.description}</p>

//     <div className="flex justify-center py-5">
//       <button
//         // onClick={() => navigateToBooking(selectedCar)}
//         className="bg-red-600 text-white w-[60%] py-2 rounded-lg font-semibold"
//       >
//         Book Car
//       </button>
//     </div>
//   </div>
//   )
// }

// export default Cardetails
