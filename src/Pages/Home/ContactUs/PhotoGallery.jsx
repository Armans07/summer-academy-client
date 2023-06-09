import React from 'react';
import { Slide } from 'react-awesome-reveal';

const PhotoGallery = () => {
  return (

    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8 my-10">
      <div className="max-w-6xl mx-auto">
        <Slide>
          <h1 className="text-center text-3xl font-semibold mb-10">Academy Photo Gallery</h1>
        </Slide>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
          <div className="relative">
            <img
              src="https://i.ibb.co/JdnWrsd/football-trainer-teaching-his-pupils.jpg"
              alt="Image 1"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition duration-300 ease-in-out bg-black">
              <svg
                className="h-16 w-16 text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.707,5.293 C20.098,5.684 20.098,6.316 19.707,6.707 L18.414,8 L21,8 C21.552,8 22,8.448 22,9 L22,19 C22,20.105 21.105,21 20,21 L4,21 C2.895,21 2,20.105 2,19 L2,5 C2,3.895 2.895,3 4,3 L14,3 C14.552,3 15,3.448 15,4 L15,6.586 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 L19.707,7.293 C20.098,7.684 20.098,8.316 19.707,8.707 L17.707,10.707 C17.512,10.902 17.256,11 17,11 C16.744,11 16.488,10.902 16.293,10.707 L14.293,8.707 C13.902,8.316 13.902,7.684 14.293,7.293 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 Z M14,19 L20,19 L20,9 L4,9 L4,19 L10,19 L10,17 L7,17 C5.895,17 5,16.105 5,15 L5,13 L7,13 L7,15 L10,15 L10,13 L7,13 L7,11 L10,11 L10,9 L6,9 L6,15 C6,15.552 6.448,16 7,16 L14,16 L14,19 Z"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/PwKqdZt/taiki-ishikawa-ZWVNmb-Pr1-FA-unsplash.jpg"
              alt="Image 1"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition duration-300 ease-in-out bg-black">
              <svg
                className="h-16 w-16 text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.707,5.293 C20.098,5.684 20.098,6.316 19.707,6.707 L18.414,8 L21,8 C21.552,8 22,8.448 22,9 L22,19 C22,20.105 21.105,21 20,21 L4,21 C2.895,21 2,20.105 2,19 L2,5 C2,3.895 2.895,3 4,3 L14,3 C14.552,3 15,3.448 15,4 L15,6.586 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 L19.707,7.293 C20.098,7.684 20.098,8.316 19.707,8.707 L17.707,10.707 C17.512,10.902 17.256,11 17,11 C16.744,11 16.488,10.902 16.293,10.707 L14.293,8.707 C13.902,8.316 13.902,7.684 14.293,7.293 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 Z M14,19 L20,19 L20,9 L4,9 L4,19 L10,19 L10,17 L7,17 C5.895,17 5,16.105 5,15 L5,13 L7,13 L7,15 L10,15 L10,13 L7,13 L7,11 L10,11 L10,9 L6,9 L6,15 C6,15.552 6.448,16 7,16 L14,16 L14,19 Z"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/Dkb7NtP/football-concept-with-slate.jpg"
              alt="Image 1"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition duration-300 ease-in-out bg-black">
              <svg
                className="h-16 w-16 text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.707,5.293 C20.098,5.684 20.098,6.316 19.707,6.707 L18.414,8 L21,8 C21.552,8 22,8.448 22,9 L22,19 C22,20.105 21.105,21 20,21 L4,21 C2.895,21 2,20.105 2,19 L2,5 C2,3.895 2.895,3 4,3 L14,3 C14.552,3 15,3.448 15,4 L15,6.586 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 L19.707,7.293 C20.098,7.684 20.098,8.316 19.707,8.707 L17.707,10.707 C17.512,10.902 17.256,11 17,11 C16.744,11 16.488,10.902 16.293,10.707 L14.293,8.707 C13.902,8.316 13.902,7.684 14.293,7.293 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 Z M14,19 L20,19 L20,9 L4,9 L4,19 L10,19 L10,17 L7,17 C5.895,17 5,16.105 5,15 L5,13 L7,13 L7,15 L10,15 L10,13 L7,13 L7,11 L10,11 L10,9 L6,9 L6,15 C6,15.552 6.448,16 7,16 L14,16 L14,19 Z"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/YhMSGRw/football-trainer-teaching-kids-high-angle.jpg"
              alt="Image 1"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition duration-300 ease-in-out bg-black">
              <svg
                className="h-16 w-16 text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.707,5.293 C20.098,5.684 20.098,6.316 19.707,6.707 L18.414,8 L21,8 C21.552,8 22,8.448 22,9 L22,19 C22,20.105 21.105,21 20,21 L4,21 C2.895,21 2,20.105 2,19 L2,5 C2,3.895 2.895,3 4,3 L14,3 C14.552,3 15,3.448 15,4 L15,6.586 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 L19.707,7.293 C20.098,7.684 20.098,8.316 19.707,8.707 L17.707,10.707 C17.512,10.902 17.256,11 17,11 C16.744,11 16.488,10.902 16.293,10.707 L14.293,8.707 C13.902,8.316 13.902,7.684 14.293,7.293 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 Z M14,19 L20,19 L20,9 L4,9 L4,19 L10,19 L10,17 L7,17 C5.895,17 5,16.105 5,15 L5,13 L7,13 L7,15 L10,15 L10,13 L7,13 L7,11 L10,11 L10,9 L6,9 L6,15 C6,15.552 6.448,16 7,16 L14,16 L14,19 Z"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/rZkvmm9/team-celebrating-win-silver-cup-2.jpg"
              alt="Image 1"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition duration-300 ease-in-out bg-black">
              <svg
                className="h-16 w-16 text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.707,5.293 C20.098,5.684 20.098,6.316 19.707,6.707 L18.414,8 L21,8 C21.552,8 22,8.448 22,9 L22,19 C22,20.105 21.105,21 20,21 L4,21 C2.895,21 2,20.105 2,19 L2,5 C2,3.895 2.895,3 4,3 L14,3 C14.552,3 15,3.448 15,4 L15,6.586 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 L19.707,7.293 C20.098,7.684 20.098,8.316 19.707,8.707 L17.707,10.707 C17.512,10.902 17.256,11 17,11 C16.744,11 16.488,10.902 16.293,10.707 L14.293,8.707 C13.902,8.316 13.902,7.684 14.293,7.293 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 Z M14,19 L20,19 L20,9 L4,9 L4,19 L10,19 L10,17 L7,17 C5.895,17 5,16.105 5,15 L5,13 L7,13 L7,15 L10,15 L10,13 L7,13 L7,11 L10,11 L10,9 L6,9 L6,15 C6,15.552 6.448,16 7,16 L14,16 L14,19 Z"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/t29ZJFY/team-celebrating-win-silver-cup-1.jpg"
              alt="Image 2"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition duration-300 ease-in-out bg-black">
              <svg
                className="h-16 w-16 text-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.707,5.293 C20.098,5.684 20.098,6.316 19.707,6.707 L18.414,8 L21,8 C21.552,8 22,8.448 22,9 L22,19 C22,20.105 21.105,21 20,21 L4,21 C2.895,21 2,20.105 2,19 L2,5 C2,3.895 2.895,3 4,3 L14,3 C14.552,3 15,3.448 15,4 L15,6.586 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 L19.707,7.293 C20.098,7.684 20.098,8.316 19.707,8.707 L17.707,10.707 C17.512,10.902 17.256,11 17,11 C16.744,11 16.488,10.902 16.293,10.707 L14.293,8.707 C13.902,8.316 13.902,7.684 14.293,7.293 L16.293,5.293 C16.684,4.902 17.316,4.902 17.707,5.293 Z M14,19 L20,19 L20,9 L4,9 L4,19 L10,19 L10,17 L7,17 C5.895,17 5,16.105 5,15 L5,13 L7,13 L7,15 L10,15 L10,13 L7,13 L7,11 L10,11 L10,9 L6,9 L6,15 C6,15.552 6.448,16 7,16 L14,16 L14,19 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
