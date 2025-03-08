

// const arr = [1, 2, 3, 4, 5, 6];

// export default function Shimmer2() {
//     return (
//         <>
//             {arr.map((item) => (
//                    <div className=" w-[80%] max-auto border-b border-gray-300 py-9">
                 
    
//                     <div className="w-[20%] relative">
//                        <div className="w-full h-36 object-cover rounded-3xl bg-gray-200 "></div>
//                     </div>
//             </div>
//             ))}
//         </>
//     );
// }


import React from 'react';

const arr = [1, 2, 3];

const Shimmer2 = () => {
  return (
    <div className="p-4">
      <div className="animate-pulse">
        
        {/* Search Bar Shimmer */}
        <div className="h-10 mx-auto bg-gray-300 rounded w-1/2 mb-6"></div>

        {/* buttons */}
        
        
        <div className="flex ml-70 mt-15 gap-4 mb-20">
      <div className="px-8 py-5 border-2  bg-gray-400 text-xl text-white rounded-2xl "> </div>
      <div className="border-2 py-5 px-8 bg-gray-400 text-xl text-white rounded-2xl"></div>
      </div>

        <div className="space-y-4">

         
      {
          arr.map((item) => (
            <div key={item} className="p-4  border-none rounded-lg w-[80%] mx-auto flex items-center justify-between">
            <div className='w-[100%]'>  
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>

            <div className='w-[20%] h-36 object-cover rounded-3xl bg-gray-300' ></div>

          </div>
          ))
          
       }  
          
         
        </div>
      </div>
    </div>
  );
};

export default Shimmer2;