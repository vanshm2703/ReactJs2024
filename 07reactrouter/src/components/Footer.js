import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
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
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/vanshm2703"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
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
                        <a href="https://github.com/vanshm2703" className="hover:underline">
                            Vansh Mehta
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
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
                    </div>
                </div>
            </div>
        </footer>
    );
}