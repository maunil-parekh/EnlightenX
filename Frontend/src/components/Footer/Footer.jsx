import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y ">
            <br />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        
                        <Link to="/" className="flex items-center">
    <svg width="200" height="50" viewBox="0 0 350.000000 97.000000" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g transform="translate(0.000000,97.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M10 490 l0 -480 1740 0 1740 0 0 480 0 480 -1740 0 -1740 0 0 -480z m3457 0 l2 -450 -1719 0 -1720 0 0 450 0 450 1718 0 1717 0 2 -450z"/>
            <path d="M100 490 l0 -390 1640 0 1640 0 0 390 0 390 -1640 0 -1640 0 0 -390z m1456 134 c32 -15 64 -48 64 -66 0 -16 -33 -7 -62 17 -93 78 -214 -49 -134 -142 20 -23 32 -28 71 -28 39 0 51 5 71 28 13 15 24 32 24 38 0 5 -25 9 -55 9 -42 0 -55 3 -55 15 0 12 15 15 75 15 69 0 75 -2 75 -20 0 -53 -57 -115 -116 -126 -48 -9 -117 27 -138 70 -33 70 -9 154 55 188 42 22 81 23 125 2z m-958 -6 c-3 -8 -28 -14 -66 -16 l-62 -3 0 -39 0 -40 55 0 c42 0 55 -3 55 -15 0 -12 -13 -15 -55 -15 l-55 0 0 -45 0 -45 65 0 c51 0 65 -3 65 -15 0 -12 -16 -15 -85 -15 l-85 0 0 130 0 130 86 0 c64 0 85 -3 82 -12z m195 -85 l67 -97 0 97 c0 90 1 97 20 97 19 0 20 -7 20 -130 0 -122 -1 -130 -19 -130 -13 0 -42 32 -88 98 l-68 97 -3 -97 c-2 -78 -6 -98 -17 -98 -12 0 -15 23 -15 130 0 166 8 168 103 33z m247 -18 l0 -115 60 0 c47 0 60 -3 60 -15 0 -12 -16 -15 -80 -15 l-80 0 0 130 c0 123 1 130 20 130 19 0 20 -7 20 -115z m230 -15 c0 -109 -2 -130 -15 -130 -13 0 -15 21 -15 130 0 109 2 130 15 130 13 0 15 -21 15 -130z m480 75 l0 -55 65 0 c63 0 71 4 65 35 -4 25 12 75 25 75 12 0 15 -23 15 -131 0 -119 -2 -130 -17 -127 -14 2 -19 15 -21 61 l-3 58 -62 -3 -62 -3 -3 -57 c-3 -50 -6 -58 -22 -58 -19 0 -20 8 -20 130 0 123 1 130 20 130 18 0 20 -7 20 -55z m460 40 c0 -11 -12 -15 -45 -15 l-45 0 0 -115 c0 -108 -1 -115 -20 -115 -19 0 -20 7 -20 115 l0 115 -39 0 c-38 0 -57 10 -44 24 3 3 53 6 110 6 85 0 103 -3 103 -15z m240 0 c0 -12 -14 -15 -65 -15 l-65 0 0 -40 0 -40 60 0 c46 0 60 -3 60 -15 0 -10 -15 -15 -57 -17 l-58 -3 -3 -42 -3 -43 65 0 c52 0 66 -3 66 -15 0 -12 -16 -15 -80 -15 l-80 0 0 130 0 130 80 0 c64 0 80 -3 80 -15z m197 -81 l68 -97 3 97 c2 76 6 96 17 96 12 0 15 -23 15 -130 0 -165 -8 -168 -102 -33 l-68 97 0 -97 c0 -90 -1 -97 -20 -97 -19 0 -20 7 -20 130 0 122 1 130 19 130 13 0 42 -32 88 -96z m284 61 c23 -39 32 -38 54 6 13 25 21 29 55 29 22 0 40 -2 40 -5 0 -3 -16 -29 -35 -58 -19 -28 -35 -56 -35 -62 0 -6 11 -26 23 -45 13 -19 32 -47 42 -62 l17 -28 -44 0 c-41 0 -46 3 -64 35 -10 19 -22 35 -25 35 -4 0 -17 -16 -29 -35 -19 -31 -26 -35 -66 -35 l-44 0 44 66 45 67 -33 51 c-18 28 -36 57 -40 64 -5 9 4 12 34 12 36 0 43 -4 61 -35z"/>
        </g>
    </svg>
</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 
                        <a href="/" className="hover:underline">
                         - EnlightenX
                        </a>
                        . All Rights Reserved.
                    </span>
                    {/* social media link */}
                    {/* <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div> */}
                </div>

            </div>
        </footer>
    );
}