// //easy method
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];

// export default function Shimmer() {
//     return (
//         <>
//             {arr.map((item) => (
//                 <div key={item} className="flex flex-col items-center">
//                     <div className="w-70 h-45 object-cover border-none rounded-2xl bg-gray-300"></div>
//                     <div className="w-60 h-4 rounded-2xl bg-gray-200 mt-2"></div>
//                     <div className="w-30 h-2 rounded-2xl bg-gray-300 mt-2"></div>
//                     <div className="w-40 h-2 rounded-2xl bg-gray-200 mt-2"></div>
//                 </div>
//             ))}
//         </>
//     );
// }


// // other method

import React, { createContext, useContext } from 'react';

const ShimmerContext = createContext(12);

const ShimmerBlock = () => (
    <div className="flex flex-col items-center transform transition ease-in-out bg-gradient-to-t from-gray-100 rounded-2xl to-transparent ">
        <div className="w-70 h-45 object-cover border-none rounded-2xl bg-gray-300"></div>
        <div className="w-60 h-4 rounded-2xl bg-gray-200 mt-2"></div>
        <div className="w-30 h-2 rounded-2xl bg-gray-300 mt-2"></div>
        <div className="w-40 h-2 rounded-2xl bg-gray-200 mt-2"></div>
    </div>
);

export default function Shimmer() {
    const itemCount = useContext(ShimmerContext);
    
    return (
        <>
            {Array.from({ length: itemCount }).map((_, i) => (
                <ShimmerBlock key={i} />
            ))}
        </>
    );
}

// Usage Example
const App = () => (
    <ShimmerContext.Provider value={12}>
        <Shimmer />
    </ShimmerContext.Provider>
);
