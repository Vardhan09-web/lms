// import React from "react";
// import Link from "next/link";
// import Contactus from './Contactus';
// import Signdialog from './Signdialog';
// import Registerdialog from './Registerdialog';

// interface NavigationItem {
//   name: string;
//   href: string;
//   current: boolean;
// }

// const navigation: NavigationItem[] = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Courses', href: '#courses-section', current: false },
//   { name: 'Mentors', href: '#mentors-section', current: false },
//   { name: 'Testimonial', href: '#testimonial-section', current: false },
//   { name: 'Join', href: '#join-section', current: false },
//   { name: 'About Us', href: '#aboutus-section', current: false },
// ]

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

// const Data = () => {
//   return (
//     <div className="rounded-md max-w-sm w-full mx-auto">
//       <div className="flex-1 space-y-4 py-1">
//         <div className="sm:block">
//           <div className="space-y-1 px-5 pt-2 pb-3">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={classNames(
//                   item.current ? ' text-Orange' : 'text-black  hover:text-Orange',
//                   'block  py-2 rounded-md text-base font-medium'
//                 )}
//                 aria-current={item.current ? 'page' : undefined}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Contactus />
//             <div className="mt-4"></div>
//             <button className="bg-white w-full hover:bg-Orange hover:text-white text-black border border-Orange font-medium py-2 px-4 rounded">
//               Sign In
//             </button>
//             <button className="bg-lightBlue w-full hover:bg-Orange hover:text-white text-white font-medium my-2 py-2 px-4 rounded">
//               Register
//             </button>
//             {/* <Signdialog />
//             <Registerdialog/> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Data;















import React, { useState } from "react";
import Link from "next/link";
import Contactus from './Contactus';
import Signdialog from './Signdialog';
import Registerdialog from './Registerdialog';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Courses', href: '#courses-section', current: false },
  { name: 'Mentors', href: '#mentors-section', current: false },
  { name: 'Testimonial', href: '#testimonial-section', current: false },
  { name: 'Join', href: '#join-section', current: false },
  { name: 'About Us', href: '#aboutus-section', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Data = () => {
  // State to manage dialog visibility
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-Orange' : 'text-black hover:text-Orange',
                  'block py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Contactus />
            <div className="mt-4"></div>
            {/* Sign In Button */}
            <button
              className="bg-white w-full hover:bg-Orange hover:text-white text-black border border-Orange font-medium py-2 px-4 rounded"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </button>
            {/* Register Button */}
            <button
              className="bg-lightBlue w-full hover:bg-Orange hover:text-white text-white font-medium my-2 py-2 px-4 rounded"
              onClick={() => setShowRegister(true)}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally Render Dialogs
      {showSignIn && (
        <Signdialog onClose={() => setShowSignIn(false)} />
      )}
      {showRegister && (
        <Registerdialog onClose={() => setShowRegister(false)} />
      )} */}
    </div>
  );
};

export default Data;






