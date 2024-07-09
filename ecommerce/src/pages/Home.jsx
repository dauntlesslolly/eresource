import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'

const Home = () => {
  return (
    <div>
      {/* Hero section  */}
     <Hero />
      <div className="flex gap-5 self-end mt-14 mr-24 max-w-full text-black w-[764px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
        <div className="flex-auto text-7xl font-semibold max-md:text-4xl">
          Phones
        </div>
        <div className="flex-auto my-auto text-3xl underline">View all</div>
      </div>
      <div className="flex flex-col px-16 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-white shadow-sm max-md:mt-10">
                <div className="flex flex-col items-center px-16 pt-11 pb-5 bg-white aspect-square max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5645d701b71f0538746153a162bbbe127d984a0622c5697528aa04d5752ab4b1?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                    className="max-w-full aspect-[0.67] w-[229px]"
                  />
                </div>
                <div className="flex flex-col px-5 mt-2.5 text-3xl font-semibold text-black">
                  <div className="text-2xl">
                    Apple Iphone 14pro max 512gb <br />
                    Nano sim. White Titanium
                  </div>
                  <div className="mt-4">N 1,898,000</div>
                  <div className="justify-center py-6 pr-16 pl-16 mt-9 text-white rounded-3xl bg-blue-950 max-md:pr-7 max-md:pl-8">
                    ADD TO CART
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-white shadow-sm max-md:mt-10">
                <div className="flex flex-col items-center px-16 pt-10 pb-5 bg-white aspect-square max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec536df265c003e6c13a7ddd5ccba328605598bfe73a6de4fa1e2ffea393f237?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                    className="mx-6 w-full aspect-[0.69] max-md:mx-2.5"
                  />
                </div>
                <div className="flex flex-col px-6 mt-2.5 text-3xl font-semibold text-black max-md:px-5">
                  <div className="text-2xl">
                    Samsung Fold 3 1TB <br />
                    Nano sim. Black
                  </div>
                  <div className="mt-4">N 1,500,000</div>
                  <div className="justify-center self-start px-16 py-6 mt-9 ml-3.5 text-white rounded-3xl bg-blue-950 max-md:pr-7 max-md:pl-8 max-md:ml-2.5">
                    ADD TO CART
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-white shadow-sm max-md:mt-10">
                <div className="flex flex-col justify-center items-center px-12 bg-white aspect-square max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d8e291d7387ca3bdb59a81a57212edcccbd10b9e447019aee18b22278ec308f?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                    className="w-full aspect-[1.12]"
                  />
                </div>
                <div className="flex flex-col px-6 mt-2.5 text-3xl font-semibold text-black max-md:px-5">
                  <div className="text-2xl">
                    Infinix Zero 8i , 8gb Ram-
                    <br />
                    128gb, Dual Sim
                  </div>
                  <div className="mt-2.5">N 400,000</div>
                  <div className="justify-center self-start px-16 py-6 mt-9 ml-3.5 text-white rounded-3xl bg-blue-950 max-md:pr-7 max-md:pl-8 max-md:ml-2.5">
                    ADD TO CART
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 self-end mt-11 mr-9 max-w-full text-black w-[857px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
          <div className="flex-auto text-7xl font-semibold max-md:max-w-full max-md:text-4xl">
            Accessories
          </div>
          <div className="flex-auto my-auto text-3xl underline">View all</div>
        </div>
      </div>
      <div className="self-center px-5 mt-20 w-full max-w-[1311px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-6 w-full bg-white shadow-sm max-md:mt-10">
              <div className="flex flex-col justify-center items-center px-14 bg-white aspect-square max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbd1282c37cc2bcdc7280e59af9a0cd5d53793da8a2af59a7438be014199c5ac?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                  className="w-full aspect-square"
                />
              </div>
              <div className="flex flex-col px-6 mt-2.5 text-3xl font-semibold text-black max-md:px-5">
                <div className="text-2xl">
                  Oraimo Power Bank
                  <br />
                  100kmah{" "}
                </div>
                <div className="mt-4">N 45,000</div>
                <div className="justify-center self-start px-16 py-6 mt-9 ml-3.5 text-white rounded-2xl bg-blue-950 max-md:pr-7 max-md:pl-8 max-md:ml-2.5">
                  ADD TO CART
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-6 w-full bg-white shadow-sm max-md:mt-10">
              <div className="flex flex-col justify-center items-center px-16 bg-white aspect-square max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae00aa524d84b895cd6e87f05576acf1a7261b871985132d60b2c69aa91c68a0?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                  className="w-full aspect-square"
                />
              </div>
              <div className="flex flex-col px-6 mt-2.5 text-3xl font-semibold text-black max-md:px-5">
                <div className="mr-8 text-2xl max-md:mr-2.5">
                  JBL Charge 3 Waterproof <br />
                  Portable Bluetooth speaker
                </div>
                <div className="mt-2.5">N 290,000</div>
                <div className="justify-center self-start px-16 py-6 mt-9 ml-3.5 text-white rounded-2xl bg-blue-950 max-md:pr-7 max-md:pl-8 max-md:ml-2.5">
                  ADD TO CART
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-6 w-full bg-white shadow-sm max-md:mt-10">
              <div className="flex flex-col justify-center items-center px-16 bg-white aspect-square max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3596132b397f95c44cbf6e4cd1e6ed33a4f14aeb0fbc55f6b3b6f9622414ffe8?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                  className="mt-4 mr-6 ml-6 w-full aspect-square max-md:mx-2.5"
                />
              </div>
              <div className="flex flex-col px-6 mt-2.5 text-3xl font-semibold text-black max-md:px-5">
                <div className="text-2xl">
                  Motorola TurboPower
                  <br />
                  15+ with USB cable
                </div>
                <div className="mt-4">N 20,000</div>
                <div className="justify-center self-start px-16 py-6 mt-9 ml-3.5 text-white rounded-2xl bg-blue-950 max-md:pr-7 max-md:pl-8 max-md:ml-2.5">
                  ADD TO CART
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center px-5 pt-14 pb-1.5 mt-9 w-full bg-blue-100 rounded-2xl backdrop-blur-[4.449999809265137px] max-w-[1324px] max-md:max-w-full">
        <div className="ml-14 text-4xl text-black">Don’t miss it</div>
        <div className="mt-8 ml-14 text-6xl font-semibold text-black max-md:max-w-full max-md:text-4xl">
          <span className="text-blue-950">Up to 50% off</span> on your order
        </div>
        <div className="mt-3.5 ml-14 text-3xl text-black">Flash sales</div>
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd52c0266a0c52ded70f4c617c2e270a7c85c5ce55c9a13085a7729a6d1fcc52?apiKey=af7bd18a9fa042f2849d65971b8e94ac&"
                className="grow w-full aspect-[1.02] max-md:mt-2.5 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-5xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                10 : 14 : 32 : 10{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home