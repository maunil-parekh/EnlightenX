// import React from 'react'
// import {Link, NavLink} from 'react-router-dom'

// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                 {/* <Link to="/" className="flex items-center">
//                         <img
//                             src="./logo-2.png"
//                             // className="mr-3 h-12"
//                             alt="Logo"
//                         />
//                     </Link> */}
//        <Link to="/" className="flex items-center">
//     <svg width="140" height="40" viewBox="0 0 350.000000 97.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//         <g transform="translate(0.000000,97.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
//             <path d="M10 490 l0 -480 1740 0 1740 0 0 480 0 480 -1740 0 -1740 0 0 -480z m3457 0 l2 -450 -1719 0 -1720 0 0 450 0 450 1718 0 1717 0 2 -450z"/>
//             <path d="M100 490 l0 -390 1640 0 1640 0 0 390 0 390 -1640 0 -1640 0 0 -390z m1456 134 c32 -15 64 -48 64 -66 0 -16 -33 -7 -62 17 -93 78 -214 -49 -134 -142 20 -23 32 -28 71 -28 39 0 51 5 71 28 13 15 24 32 24 38 0 5 -25 9 -55 9 -42 0 -55 3 -55 15 0 12 15 15 75 15 69 0 75 -2 75 -20 0 -53 -57 -115 -116 -126 -48 -9 -117 27 -138 70 -33 70 -9 154 55 188 42 22 81 23 125 2z m-958 -6 c-3 -8 -28 -14 -66 -16 l-62 -3 0 -39 0 -40 55 0 c42 0 55 -3 55 -15 0 -12 -13 -15 -55 -15 l-55 0 0 -45 0 -45 65 0 c51 0 65 -3 65 -15 0 -12 -16 -15 -85 -15 l-85 0 0 130 0 130 86 0 c64 0 85 -3 82 -12z m195 -85 l67 -97 0 97 c0 90 1 97 20 97 19 0 20 -7 20 -130 0 -122 -1 -130 -19 -130 -13 0 -42 32 -88 98 l-68 97 -3 -97 c-2 -78 -6 -98 -17 -98 -12 0 -15 23 -15 130 0 166 8 168 103 33z m247 -18 l0 -115 60 0 c47 0 60 -3 60 -15 0 -12 -16 -15 -80 -15 l-80 0 0 130 c0 123 1 130 20 130 19 0 20 -7 20 -115z m230 -15 c0 -109 -2 -130 -15 -130 -13 0 -15 21 -15 130 0 109 2 130 15 130 13 0 15 -21 15 -130z m480 75 l0 -55 65 0 c63 0 71 4 65 35 -4 25 12 75 25 75 12 0 15 -23 15 -131 0 -119 -2 -130 -17 -127 -14 2 -19 15 -21 61 l-3 58 -62 -3 -62 -3 -3 -57 c-3 -50 -6 -58 -22 -58 -19 0 -20 8 -20 130 0 123 1 130 20 130 18 0 20 -7 20 -55z m460 40 c0 -11 -12 -15 -45 -15 l-45 0 0 -115 c0 -108 -1 -115 -20 -115 -19 0 -20 7 -20 115 l0 115 -39 0 c-38 0 -57 10 -44 24 3 3 53 6 110 6 85 0 103 -3 103 -15z m240 0 c0 -12 -14 -15 -65 -15 l-65 0 0 -40 0 -40 60 0 c46 0 60 -3 60 -15 0 -10 -15 -15 -57 -17 l-58 -3 -3 -42 -3 -43 65 0 c52 0 66 -3 66 -15 0 -12 -16 -15 -80 -15 l-80 0 0 130 0 130 80 0 c64 0 80 -3 80 -15z m197 -81 l68 -97 3 97 c2 76 6 96 17 96 12 0 15 -23 15 -130 0 -165 -8 -168 -102 -33 l-68 97 0 -97 c0 -90 -1 -97 -20 -97 -19 0 -20 7 -20 130 0 122 1 130 19 130 13 0 42 -32 88 -96z m284 61 c23 -39 32 -38 54 6 13 25 21 29 55 29 22 0 40 -2 40 -5 0 -3 -16 -29 -35 -58 -19 -28 -35 -56 -35 -62 0 -6 11 -26 23 -45 13 -19 32 -47 42 -62 l17 -28 -44 0 c-41 0 -46 3 -64 35 -10 19 -22 35 -25 35 -4 0 -17 -16 -29 -35 -19 -31 -26 -35 -66 -35 l-44 0 44 66 45 67 -33 51 c-18 28 -36 57 -40 64 -5 9 4 12 34 12 36 0 43 -4 61 -35z"/>
//         </g>
//     </svg>
// </Link>


//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="#"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="#"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Register
//                         </Link>
//                     </div>
//                     <div
//                         className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/contact"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Updates
//                                 </NavLink>
//                             </li>
//                              <li>
//                                 <NavLink
//                                 to="/finanicialplanning"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Financial Planning 
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/about"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


// Main Code Do not interrrupt this 
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from '@headlessui/react';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 ">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex justify-start items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center mr-4">
                    
 <svg width="140" height="40" viewBox="0 0 350.000000 97.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g transform="translate(0.000000,97.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
    <path d="M10 490 l0 -480 1740 0 1740 0 0 480 0 480 -1740 0 -1740 0 0 -480z m3457 0 l2 -450 -1719 0 -1720 0 0 450 0 450 1718 0 1717 0 2 -450z"/>
    <path d="M100 490 l0 -390 1640 0 1640 0 0 390 0 390 -1640 0 -1640 0 0 -390z m1456 134 c32 -15 64 -48 64 -66 0 -16 -33 -7 -62 17 -93 78 -214 -49 -134 -142 20 -23 32 -28 71 -28 39 0 51 5 71 28 13 15 24 32 24 38 0 5 -25 9 -55 9 -42 0 -55 3 -55 15 0 12 15 15 75 15 69 0 75 -2 75 -20 0 -53 -57 -115 -116 -126 -48 -9 -117 27 -138 70 -33 70 -9 154 55 188 42 22 81 23 125 2z m-958 -6 c-3 -8 -28 -14 -66 -16 l-62 -3 0 -39 0 -40 55 0 c42 0 55 -3 55 -15 0 -12 -13 -15 -55 -15 l-55 0 0 -45 0 -45 65 0 c51 0 65 -3 65 -15 0 -12 -16 -15 -85 -15 l-85 0 0 130 0 130 86 0 c64 0 85 -3 82 -12z m195 -85 l67 -97 0 97 c0 90 1 97 20 97 19 0 20 -7 20 -130 0 -122 -1 -130 -19 -130 -13 0 -42 32 -88 98 l-68 97 -3 -97 c-2 -78 -6 -98 -17 -98 -12 0 -15 23 -15 130 0 166 8 168 103 33z m247 -18 l0 -115 60 0 c47 0 60 -3 60 -15 0 -12 -16 -15 -80 -15 l-80 0 0 130 c0 123 1 130 20 130 19 0 20 -7 20 -115z m230 -15 c0 -109 -2 -130 -15 -130 -13 0 -15 21 -15 130 0 109 2 130 15 130 13 0 15 -21 15 -130z m480 75 l0 -55 65 0 c63 0 71 4 65 35 -4 25 12 75 25 75 12 0 15 -23 15 -131 0 -119 -2 -130 -17 -127 -14 2 -19 15 -21 61 l-3 58 -62 -3 -62 -3 -3 -57 c-3 -50 -6 -58 -22 -58 -19 0 -20 8 -20 130 0 123 1 130 20 130 18 0 20 -7 20 -55z m460 40 c0 -11 -12 -15 -45 -15 l-45 0 0 -115 c0 -108 -1 -115 -20 -115 -19 0 -20 7 -20 115 l0 115 -39 0 c-38 0 -57 10 -44 24 3 3 53 6 110 6 85 0 103 -3 103 -15z m240 0 c0 -12 -14 -15 -65 -15 l-65 0 0 -40 0 -40 60 0 c46 0 60 -3 60 -15 0 -10 -15 -15 -57 -17 l-58 -3 -3 -42 -3 -43 65 0 c52 0 66 -3 66 -15 0 -12 -16 -15 -80 -15 l-80 0 0 130 0 130 80 0 c64 0 80 -3 80 -15z m197 -81 l68 -97 3 97 c2 76 6 96 17 96 12 0 15 -23 15 -130 0 -165 -8 -168 -102 -33 l-68 97 0 -97 c0 -90 -1 -97 -20 -97 -19 0 -20 7 -20 130 0 122 1 130 19 130 13 0 42 -32 88 -96z m284 61 c23 -39 32 -38 54 6 13 25 21 29 55 29 22 0 40 -2 40 -5 0 -3 -16 -29 -35 -58 -19 -28 -35 -56 -35 -62 0 -6 11 -26 23 -45 13 -19 32 -47 42 -62 l17 -28 -44 0 c-41 0 -46 3 -64 35 -10 19 -22 35 -25 35 -4 0 -17 -16 -29 -35 -19 -31 -26 -35 -66 -35 l-44 0 44 66 45 67 -33 51 c-18 28 -36 57 -40 64 -5 9 4 12 34 12 36 0 43 -4 61 -35z"/>
</g>
</svg> 

                     </Link>

                     <div className="ml-[100px] justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-row mt-4 font-medium lg:space-x-8 lg:mt-0">
                             <li>
                                 <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                            <Menu as="div" className="relative inline-block text-left">
    <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Book-Notes
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </Menu.Button>
    </div>

    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-51 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Menu.Item>
                {({ active }) => (
                    <NavLink to="/book-summary" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2  text-sm`} role="menuitem">
                        Book Summary
                    </NavLink>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <NavLink to="/articles" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`} role="menuitem">
                        Articles
                    </NavLink>
                )}
            </Menu.Item>
        </div>
    </Menu.Items>
</Menu>

                            </li>
                            <li>
                                <NavLink
                                    to="/financial-planning"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Financial Planning
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/ai-tools-update"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    AI Tools & Updates
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/newsletter"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Newsletter
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                 
                </div>
            </nav>
        </header>
    );
}



// Experimentation
    