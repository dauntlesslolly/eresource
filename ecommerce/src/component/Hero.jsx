import React from 'react'

const Hero = () => {
  return (
    <>
     <div className="flex z-10 flex-col items-end px-16 pt-7 pb-4 w-full text-lg font-semibold text-black whitespace-nowrap bg-blue-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mr-24 max-w-full w-[822px] max-md:flex-wrap max-md:mr-2.5">
          <div className="flex gap-5 justify-between self-start mt-2">
            <div className="flex flex-col">
              <div>HOME</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16043524dd5972a650efbf6bf68bad7e077a921fd87a4304c31c007992a79255?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                className="mt-1 w-6 border border-black border-solid aspect-[25] stroke-[1px] stroke-black"
              />
            </div>
            <div>PRODUCTS</div>
            <div>SUPPORT</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ecfc1582bf0e175883f9e4f84e8fea93be6881e1bc6a7ede66847c102fcfb6?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
            className="shrink-0 aspect-square fill-zinc-900 w-[27px]"
          />
        </div>
      </div>
      <div className="flex flex-col pt-5 mt-0 w-full text-6xl font-semibold text-black bg-sky-50 max-md:max-w-full max-md:text-4xl">
        <div className="flex overflow-hidden relative flex-col justify-center items-start pt-44 pr-16 pb-40 pl-20 w-full min-h-[632px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7799cc9109ff02bc87bea19cd664e665997dd83af48b80c2845f45b54c7cbbe?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
            className="object-cover absolute inset-0 size-full"
          />
          Get 30% Discount on the Iphone 14 series.{" "}
        </div>
      </div>
    </>
  )
}

export default Hero