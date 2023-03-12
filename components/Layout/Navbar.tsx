import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <header class="fixed top-0 left-0 right-0 z-10 bg-zinc-50 bg-opacity-95 shadow-md">
     <div class="flex items-center justify-between px-4 py-5">
       <div class="relative flex items-center">
         <div class="absolute top-1/2 transform -translate-y-1/2 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
           <span class="text-white font-bold text-2xl">I</span>
         </div>
         <span class="z-10 ml-14 font-medium text-gray-700 text-2xl">know</span>
       </div>
       <div class="flex items-center space-x-4">
         <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">Chat</a>
         <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">Search</a>
         <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">History</a>
         <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">Upload</a>
       </div>
     </div>
   </header>
  );
};
