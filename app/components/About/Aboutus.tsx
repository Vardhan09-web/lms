
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

// function generateRandomWords(wordCount) {
//   const words = [];
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < wordCount; i++) {
//     const wordLength = Math.floor(Math.random() * 8) + 3; // Random word length between 3 and 10
//     let word = "";
//     for (let j = 0; j < wordLength; j++) {
//       word += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     words.push(word);
//   }
//   return words.join(" ");
// }

const AboutUs = () => {
  // const randomText = generateRandomWords(150); // Generate approximately 200 words

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
            {/* <p className="text-gray-700 leading-relaxed text-justify">{randomText}</p> */}
            <p>
            Eduwedo is a dynamic EdTech platform committed to transforming education through hands-on, industry-aligned training in high-demand fields such as Cloud Computing, Data Science, Full Stack Development, Java, Python, DevOps, Competitive Programming, and Cybersecurity. We bridge the gap between theoretical knowledge and practical application, equipping students and professionals with real-world skills that meet today's tech-driven job market.
Our mission is to empower learners—whether college students preparing for careers or professionals upskilling for advancement—with cutting-edge, tailored training solutions. With a team of experienced industry experts, we bring training programs directly to universities, corporations, and individuals across the globe, helping to build the future workforce in emerging tech sectors.
            </p>
            <h3 className="text-xl font-bold">How We Deliver</h3>
            <p>Eduwedo offers flexible training formats, including virtual classrooms, on-campus programs, and on-site corporate workshops. Our unique teaching approach uses examples in AR/VR to create immersive learning experiences, making complex concepts more accessible and engaging. Through project-based learning, practical exercises, and real-world simulations, our courses ensure learners not only gain knowledge but also build confidence to apply it effectively.</p>
            <h3 className="text-xl font-bold">Join Eduwedo</h3>
            <p>At Eduwedo, we envision a future where education is accessible, relevant, and empowering. Join us on our mission to develop a tech-savvy, future-ready workforce equipped to excel in an ever-evolving industry. Empower your career or organization with the skills that matter today and will drive success tomorrow. Let’s innovate, learn, and grow together!</p>
            <div className="flex flex-row gap-10">
              <div>
            <h3 className="text-xl font-bold">Website</h3>
            <a href='https://www.eduwedo.in/' className="text-lightBlue hover:underline">https://www.eduwedo.in/</a></div>
            <div>
            <h3 className="text-xl font-bold">Phone</h3>
            <p>8341209407</p></div>
            <div>
            <h3 className="text-xl font-bold">Industry</h3>
            <p>Professional Training and Coaching</p></div></div>
            <h3 className="text-xl font-bold">Company size</h3>
            <p>2-10 employees
7 associated members LinkedIn members who’ve listed Eduwedo as their current workplace on their profile.
</p>
            <div className="flex flex-row gap-10">
              <div>
            <h3 className="text-xl font-bold">Headquarters</h3>
            <p>Hyderabad, Telangana</p>
            </div>
            <div>
            <h3 className="text-xl font-bold">Founded</h3>
            <p>2024</p>
            </div>
            </div>
            <h3 className="text-xl font-bold">Specialties</h3>
            <p>Training and Devlopement, EdTech Solutions, Cloud Computing, Data Science, Full Stack Development, Cybersecurity, Competitive Programming, DevOps, Java Programming, Python Programming, AR/VR in Education, Corporate Training, Hands-on Learning, Industry Relevant Skills, Real-World Simulations, Project-Based Learning, Emerging Technologies, Upskilling Programs, Workforce Development, Technical Training, Professional Development, and Faculty Development Programs</p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-60 md:ml-8 w-full max-w-[90%] sm:max-w-[60%]">
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
