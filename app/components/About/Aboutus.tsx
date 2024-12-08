
// import { Card, CardContent } from '@/components/ui/card';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
// import React from 'react';

// function generateRandomWords(wordCount) {
//   const words = [];
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   for (let i = 0; i < wordCount; i++) {
//     const wordLength = Math.floor(Math.random() * 8) + 3; // Random word length between 3 and 10
//     let word = '';
//     for (let j = 0; j < wordLength; j++) {
//       word += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     words.push(word);
//   }
//   return words.join(' ');
// }

// // const AboutUs = () => {
// //   const randomText = generateRandomWords(200); // Generate approximately 200 words

// //   return (
// //     <>
// //     <div className='flex flex-row'>
// //     <div className="w-full mt-40" id="aboutus-section">
// //       <div className="ml-40 w-[80%] h-[80%] flex flex-col p-6">
// //         <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Us</h1>
// //         <p className="text-left text-gray-700 leading-relaxed">{randomText}</p>
// //       </div>
// //     </div>



// //      <div className='mt-60 mr-35 w-[60%]'>

// //      <Carousel className="w-full max-w-md">
// //   <CarouselContent>
// //     {Array.from({ length: 5 }).map((_, index) => (
// //       <CarouselItem key={index}>
// //         <div className="p-1">
// //           <Card>
// //             <CardContent className="flex aspect-square items-center justify-center p-6">
// //               <img
// //                 src={`/assets/carousel/Abt${index + 1}.jpg`} // Dynamic path for each image
// //                 alt={`Carousel Item ${index + 1}`} // Alt text for accessibility
// //                 className="object-cover w-full h-full" // Ensures proper scaling
// //               />
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </CarouselItem>
// //     ))}
// //   </CarouselContent>
// //   <CarouselPrevious />
// //   <CarouselNext />
// // </Carousel>






// const AboutUs = () => {
//   const randomText = generateRandomWords(200); // Generate approximately 200 words

//   return (
//     <>
//       <div className="flex flex-col md:flex-row items-center md:items-start">
//         {/* Text Section */}
//         <div className="w-full mt-20 px-4 md:px-20 lg:px-40" id="aboutus-section">
//           <div className="flex flex-col p-4 md:p-6">
//             <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center md:text-left">
//               About Us
//             </h1>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               {randomText}
//             </p>
//           </div>
//         </div>

//         {/* Carousel Section */}
//         <div className="mt-10 md:mt-0 md:ml-4 px-4 w-full max-w-[90%] sm:max-w-[60%]">
//           <Carousel className="w-full">
//             <CarouselContent>
//               {Array.from({ length: 5 }).map((_, index) => (
//                 <CarouselItem key={index}>
//                   <div className="p-1">
//                     <Card>
//                       <CardContent className="flex items-center justify-center">
//                         <img
//                           src={`/assets/carousel/Abt${index + 1}.jpg`}
//                           alt={`Carousel Item ${index + 1}`}
//                           className="object-cover w-full h-full"
//                         />
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutUs;







import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

function generateRandomWords(wordCount) {
  const words = [];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < wordCount; i++) {
    const wordLength = Math.floor(Math.random() * 8) + 3; // Random word length between 3 and 10
    let word = "";
    for (let j = 0; j < wordLength; j++) {
      word += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    words.push(word);
  }
  return words.join(" ");
}

const AboutUs = () => {
  const randomText = generateRandomWords(150); // Generate approximately 200 words

  return (
    <>
    <div id="aboutus-section">
      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 lg:px-20">
        {/* Text Section */}
        <div className="w-full mt-10 md:mt-20 ">
          <div className="flex flex-col p-4 md:p-6">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center md:text-left">
              About Us
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">{randomText}</p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-40 md:ml-8 w-full max-w-[90%] sm:max-w-[60%]">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <img
                          src={`/assets/carousel/Abt${index + 1}.jpg`}
                          alt={`Carousel Item ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
  </div>
    </>
  );
};

export default AboutUs;
