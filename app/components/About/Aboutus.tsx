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

// const AboutUs = () => {
//   const randomText = generateRandomWords(200); // Generate approximately 200 words

//   return (
//     <>
//     <div className='w-full '>
//       <div className="mt-40 ml-40  mr-40 w-[80%] flex flex-col shadow-lg shadow-purple p-6">
//         <h1 className="text-3xl sm:text-5xl font-bold mb-4 ">About Us</h1>
//         <p className="text-left text-gray-700 leading-relaxed">{randomText}</p>
//       </div>
//       </div>
//     </>
//   );
// };

// export default AboutUs;




import React from 'react';

function generateRandomWords(wordCount) {
  const words = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < wordCount; i++) {
    const wordLength = Math.floor(Math.random() * 8) + 3; // Random word length between 3 and 10
    let word = '';
    for (let j = 0; j < wordLength; j++) {
      word += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    words.push(word);
  }
  return words.join(' ');
}

const AboutUs = () => {
  const randomText = generateRandomWords(200); // Generate approximately 200 words

  return (
    <div className="w-full mt-40" id="aboutus-section">
      <div className="ml-40 mr-40 w-[80%] h-[80%] flex flex-col p-6">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-left text-gray-700 leading-relaxed">{randomText}</p>
      </div>
    </div>
  );
};

export default AboutUs;
