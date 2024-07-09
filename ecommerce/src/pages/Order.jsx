import React from 'react'

const Order = () => {
  return (
    <div>
        <div className="flex flex-col bg-zinc-100">
   
   <div className="flex flex-col px-5 pt-10 pb-20 mt-0 w-full bg-sky-50 max-md:max-w-full">
     <div className="self-center text-3xl text-black">Shopping Cart</div>
     <div className="flex flex-col items-start px-16 py-12 mt-6 bg-white shadow-sm max-md:px-5 max-md:max-w-full">
       <div className="max-w-full w-[866px]">
         <div className="flex gap-5 max-md:flex-col max-md:gap-0">
           <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
             <img
               loading="lazy"
               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b81b1513a50e16c608460a27f19a85bd96b9f2298f9253ecb174ef3fb53bfc36?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
               className="grow w-full aspect-[0.73] max-md:mt-6"
             />
           </div>
           <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
             <div className="flex flex-col mt-5 font-semibold text-black max-md:mt-10 max-md:max-w-full">
               <div className="text-5xl max-md:max-w-full max-md:text-4xl">
                 Samsung Fold 3 1TB <br />
                 Nano sim. Black
               </div>
               <div className="flex gap-5 justify-between items-center px-3 py-7 mt-14 max-w-full text-3xl whitespace-nowrap rounded-lg bg-zinc-300 bg-opacity-50 w-[185px] max-md:mt-10">
                 <div className="self-stretch my-auto text-neutral-400">
                   -
                 </div>
                 <div className="self-start">1</div>
                 <div className="self-stretch my-auto">+</div>
               </div>
               <div className="mt-14 text-4xl max-md:mt-10 max-md:max-w-full">
                 N 1,500,000
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="flex gap-5 mt-5 ml-3 max-w-full w-[791px] max-md:flex-wrap">
         <div className="flex-auto self-end mt-12 text-lg font-light text-black underline max-md:mt-10">
           Continue shopping{" "}
         </div>
         <div className="justify-center items-center px-16 py-6 text-3xl font-semibold text-white whitespace-nowrap rounded-2xl border border-white border-solid bg-blue-950 max-md:px-5">
           Checkout
         </div>
       </div>
     </div>
   </div>


  
 </div>
    </div>
  )
}

export default Order

