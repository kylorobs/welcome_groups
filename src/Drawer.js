/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Drawer({ children, isOpen, close }) {
    return (
        <main
            className={` fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
                isOpen
                    ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
                    : ' transition-all delay-500 opacity-0 translate-x-full  '
            }`}
        >
            <section
                className={` w-screen max-w-4xl right-0 absolute bg-white h-full shadow-xl duration-500 ease-in-out transition-all transform  ${
                    isOpen ? ' translate-x-0 ' : ' translate-x-full '
                }`}
            >
                {children}
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    close();
                }}
            />
        </main>
    );
}
