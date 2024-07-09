import React from 'react'

const Footer = () => {
  return (
    <>
     <div className="flex flex-col px-20 py-14 mt-14 w-full bg-blue-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 self-center w-full max-w-[1081px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-5xl text-blue-950 max-md:text-4xl">
            <span className="font-semibold">Fenzy </span>
            <span className="font-semibold text-blue-950">Gadget</span>
          </div>
          <div className="flex flex-col text-white max-md:max-w-full">
            <div className="text-3xl font-semibold max-md:max-w-full">
              New to Fenzy Gadget?
            </div>
            <div className="mt-2.5 text-xl max-md:max-w-full">
              Subscribe to our newsletter to get updates on our latest offers!
            </div>
          </div>
        </div>
        <div className="flex gap-5 self-end pl-6 mt-3.5 mr-48 max-w-full bg-white rounded-3xl w-[629px] max-md:flex-wrap max-md:pl-5 max-md:mr-2.5">
          <div className="flex-auto my-auto text-2xl text-neutral-400">
            Enter E-mail address
          </div>
          <div className="justify-center px-10 py-6 text-xl text-white whitespace-nowrap rounded-2xl bg-blue-950 max-md:px-5">
            Subscribe
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-20 py-11 w-full bg-blue-950 max-md:px-5 max-md:max-w-full">
        <div className="text-2xl font-medium text-white underline">
          Follow us on
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79bc4875edcc131e525bdde12e0f3bbc19fd25301896f417c68ee54715aa2ec8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
          className="mt-9 max-w-full aspect-[7.69] w-[408px]"
        />
        <div className="self-stretch mt-11 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col py-2.5 text-white max-md:mt-10">
                <div className="text-2xl font-medium uppercase">About Us</div>
                <div className="mt-10 text-lg leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et
                  tortor nec laoreet.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-2.5 pb-0.5 text-lg text-white max-md:mt-10">
                <div className="text-2xl font-medium uppercase">
                  Information
                </div>
                <div className="mt-10">About</div>
                <div className="mt-5">Delivery information</div>
                <div className="mt-4">Privacy Policy</div>
                <div className="mt-4">Sales</div>
                <div className="mt-5">Terms & Conditions </div>
                <div className="mt-6">EMI Payment</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-2 text-lg text-white max-md:mt-10">
                <div className="text-2xl font-medium uppercase">ACCOUNT</div>
                <div className="mt-10">My Account</div>
                <div className="mt-4">My Orders</div>
                <div className="mt-4">Returns</div>
                <div className="mt-5">Shipping</div>
                <div className="mt-4">Wishlist</div>
                <div className="mt-5">Account Details</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[13%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col py-2 text-lg text-white max-md:mt-10">
                <div className="text-2xl font-medium uppercase">Store</div>
                <div className="mt-10">Affiliate</div>
                <div className="mt-5">Discounts</div>
                <div className="mt-6">Sale</div>
                <div className="mt-6">Contact</div>
                <div className="mt-5">All Collections</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 text-4xl text-white max-md:mt-10">
          <span className="font-semibold">Fenzy </span>
          <span className="font-semibold text-white">Gadget</span>
        </div>
        <div className="mt-5 text-2xl text-white max-md:max-w-full">
          © 2024-2024 Fenzy Gadget Copyright.
        </div>
      </div>
    </>
  )
}

export default Footer