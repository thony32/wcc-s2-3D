import { Canvas } from "@react-three/fiber"
import { Boy3D } from "../3D/Boy3D"
import { OrbitControls } from "@react-three/drei"
import { Girl3D } from "../3D/Gril3D"
import { useState } from "react"
import { config, useSpring } from "@react-spring/three"
import { Link } from 'react-scroll'

function Welcome() {
  // * animation on theme change
  const [scaleB, setScaleB] = useState(2);
  const [scaleG, setScaleG] = useState(1);

  const { scaleBS } = useSpring({
    scaleBS: scaleB,
    config: config.wobbly
  }) as any

  const { scaleGS } = useSpring({
    scaleGS: scaleG,
    config: config.wobbly
  }) as any

  window.addEventListener("themeChanged", () => {
    if (localStorage.getItem("theme") === "light") {
      setScaleB(2.5)
      setScaleG(1)
    }
    if (localStorage.getItem("theme") === "valentine") {
      setScaleB(2)
      setScaleG(1.5)
    }
  })
  return (
    <div className='h-[75vh] px-[0%] 2xl:px-[5%] min-[2000px]:px-[15%]'>
      <svg className="absolute bottom-[15%] -rotate-45 right-[55%] hidden sm:block" width="200" viewBox="0 0 150 149.999998" height="200">
        <defs>
          <clipPath id="5d53806b99">
            <path d="M 4.753906 75 L 75 75 L 75 147.515625 L 4.753906 147.515625 Z M 4.753906 75 "
              clipRule="nonzero" />
          </clipPath>
          <clipPath id="727ed35774">
            <path d="M 74 75 L 145.003906 75 L 145.003906 147.515625 L 74 147.515625 Z M 74 75 " clipRule="nonzero" />
          </clipPath>
          <clipPath id="2383711c1d">
            <path d="M 38 2.765625 L 109 2.765625 L 109 76 L 38 76 Z M 38 2.765625 " clipRule="nonzero" />
          </clipPath>
        </defs>
        <g clipPath="url(#5d53806b99)">
          <path fill="#f4e44d"
            d="M 63.199219 147.429688 L 16.484375 147.429688 C 10.007812 147.429688 4.753906 142.15625 4.753906 135.65625 L 4.753906 86.953125 C 4.753906 80.453125 10.007812 75.183594 16.484375 75.183594 L 63.199219 75.183594 C 69.675781 75.183594 74.929688 80.453125 74.929688 86.953125 L 74.929688 135.65625 C 74.929688 142.15625 69.675781 147.429688 63.199219 147.429688 Z M 63.199219 147.429688 "
            fillOpacity="1" fillRule="nonzero" />
        </g>
        <path fill="#318a8c"
          d="M 56.601562 137.847656 L 24.242188 137.847656 C 18.195312 137.847656 13.292969 132.929688 13.292969 126.859375 L 13.292969 96.191406 C 13.292969 90.125 18.195312 85.203125 24.242188 85.203125 L 56.601562 85.203125 C 62.648438 85.203125 67.550781 90.125 67.550781 96.191406 L 67.550781 126.859375 C 67.550781 132.929688 62.648438 137.847656 56.601562 137.847656 Z M 56.601562 137.847656 "
          fillOpacity="1" fillRule="nonzero" />
        <path fill="#191916"
          d="M 28.171875 105.863281 C 28.433594 105.660156 33.375 95.355469 39.929688 97.441406 C 43.097656 98.445312 45.003906 100.589844 43.910156 104.140625 C 43.179688 106.484375 41.554688 108.378906 39.820312 110.046875 C 35.839844 113.882812 31.78125 117.625 27.539062 121.175781 C 27 121.628906 24.742188 124.980469 28.171875 126.339844 L 46.585938 124.71875 C 47.089844 124.679688 47.570312 124.496094 47.980469 124.183594 C 48.964844 123.449219 50.796875 121.910156 51.640625 120.199219 C 52.292969 118.882812 51.160156 117.371094 49.714844 117.574219 L 38.917969 119.09375 C 38.917969 119.09375 49.476562 112.84375 49.65625 104.695312 C 49.65625 104.695312 50.105469 95.09375 43.339844 92.378906 C 36.484375 89.621094 29.09375 94.511719 25.804688 100.476562 C 24.273438 103.226562 23.167969 109.796875 28.171875 105.863281 Z M 28.171875 105.863281 "
          fillOpacity="1" fillRule="nonzero" />
        <g clipPath="url(#727ed35774)">
          <path fill="#ef35c8"
            d="M 133.285156 147.257812 L 86.566406 147.257812 C 80.089844 147.257812 74.839844 141.984375 74.839844 135.484375 L 74.839844 86.785156 C 74.839844 80.285156 80.089844 75.011719 86.566406 75.011719 L 133.285156 75.011719 C 139.761719 75.011719 145.011719 80.285156 145.011719 86.785156 L 145.011719 135.484375 C 145.011719 141.984375 139.761719 147.257812 133.285156 147.257812 Z M 133.285156 147.257812 "
            fillOpacity="1" fillRule="nonzero" />
        </g>
        <path fill="#318a8c"
          d="M 125.574219 137.457031 L 93.214844 137.457031 C 87.167969 137.457031 82.265625 132.535156 82.265625 126.46875 L 82.265625 95.800781 C 82.265625 89.730469 87.167969 84.8125 93.214844 84.8125 L 125.574219 84.8125 C 131.621094 84.8125 136.523438 89.730469 136.523438 95.800781 L 136.523438 126.46875 C 136.523438 132.535156 131.628906 137.457031 125.574219 137.457031 Z M 125.574219 137.457031 "
          fillOpacity="1" fillRule="nonzero" />
        <path fill="#191916"
          d="M 102.066406 122.835938 C 103.371094 124.65625 105.625 125.746094 107.878906 125.824219 C 110.515625 125.914062 113.09375 124.777344 115.117188 123.078125 C 116.914062 121.578125 118.367188 119.597656 118.96875 117.332031 C 119.570312 115.070312 119.25 112.511719 117.867188 110.621094 C 116.480469 108.730469 113.984375 107.640625 111.710938 108.1875 C 111.21875 108.308594 110.496094 108.347656 110.417969 107.855469 C 110.375 107.621094 110.539062 107.402344 110.6875 107.230469 C 112.734375 104.925781 116.8125 104.5625 118.015625 101.484375 C 118.46875 100.335938 118.328125 99.019531 117.84375 97.890625 C 117.035156 96.011719 115.300781 94.613281 113.363281 93.949219 C 109.3125 92.550781 103.21875 93.808594 99.878906 96.484375 C 98.929688 97.25 98.078125 98.496094 98.539062 99.632812 C 98.828125 100.347656 99.570312 100.789062 100.320312 100.929688 C 101.074219 101.070312 101.855469 100.953125 102.617188 100.832031 C 104.050781 100.609375 105.484375 100.378906 106.929688 100.15625 C 107.570312 100.054688 108.300781 99.976562 108.824219 100.378906 C 109.304688 100.75 109.425781 101.464844 109.253906 102.046875 C 109.074219 102.632812 108.652344 103.113281 108.191406 103.515625 C 106.757812 104.773438 104.921875 105.480469 103.417969 106.65625 C 101.914062 107.832031 100.761719 109.867188 101.503906 111.628906 C 102.066406 112.976562 103.550781 113.691406 104.972656 113.960938 C 106.398438 114.234375 107.878906 114.164062 109.292969 114.503906 C 109.65625 114.59375 110.015625 114.714844 110.296875 114.957031 C 110.847656 115.429688 110.949219 116.285156 110.667969 116.949219 C 110.386719 117.613281 109.785156 118.105469 109.144531 118.429688 C 107.761719 119.113281 106.054688 119.113281 104.671875 118.417969 C 103.878906 118.027344 103.1875 117.414062 102.347656 117.152344 C 101.503906 116.890625 100.382812 117.140625 100.101562 117.976562 C 99.960938 118.410156 100.0625 118.882812 100.203125 119.316406 C 100.574219 120.53125 101.113281 121.699219 101.796875 122.765625 C 101.695312 122.464844 101.59375 122.152344 101.496094 121.851562 C 101.65625 122.203125 101.84375 122.523438 102.066406 122.835938 Z M 102.066406 122.835938 "
          fillOpacity="1" fillRule="nonzero" />
        <g clipPath="url(#2383711c1d)">
          <path fill="#00983a"
            d="M 96.613281 75.183594 L 49.894531 75.183594 C 43.417969 75.183594 38.167969 69.910156 38.167969 63.410156 L 38.167969 14.707031 C 38.167969 8.207031 43.417969 2.9375 49.894531 2.9375 L 96.613281 2.9375 C 103.089844 2.9375 108.339844 8.207031 108.339844 14.707031 L 108.339844 63.410156 C 108.339844 69.910156 103.089844 75.183594 96.613281 75.183594 Z M 96.613281 75.183594 "
            fillOpacity="1" fillRule="nonzero" />
        </g>
        <path fill="#318a8c"
          d="M 90.015625 65.382812 L 57.65625 65.382812 C 51.609375 65.382812 46.707031 60.460938 46.707031 54.394531 L 46.707031 23.722656 C 46.707031 17.65625 51.609375 12.738281 57.65625 12.738281 L 90.015625 12.738281 C 96.0625 12.738281 100.964844 17.65625 100.964844 23.722656 L 100.964844 54.394531 C 100.964844 60.460938 96.0625 65.382812 90.015625 65.382812 Z M 90.015625 65.382812 "
          fillOpacity="1" fillRule="nonzero" />
        <path fill="#191916"
          d="M 72.632812 21.851562 C 72.019531 21.84375 71.441406 22.144531 70.769531 22.394531 C 69.796875 22.769531 68.84375 23.199219 67.929688 23.714844 C 66.246094 24.671875 64.621094 25.929688 63.648438 27.636719 C 63.210938 28.414062 62.957031 29.277344 62.980469 30.175781 C 62.988281 30.597656 62.917969 31.148438 63.210938 31.503906 C 63.378906 31.714844 63.648438 31.792969 63.902344 31.894531 C 66.929688 33.042969 68.664062 35.96875 68.664062 39.160156 C 68.664062 40.566406 68.664062 41.976562 68.664062 43.386719 C 68.664062 44.503906 68.664062 45.609375 68.664062 46.726562 C 68.664062 49.230469 69.054688 51.726562 70.175781 53.980469 C 70.878906 55.398438 72.242188 57.273438 73.824219 55.730469 C 75.789062 53.820312 76.191406 50.890625 76.613281 48.285156 C 76.972656 46.023438 77.273438 43.738281 77.476562 41.445312 C 77.976562 35.847656 78.648438 28.945312 75.441406 23.964844 C 74.957031 23.222656 74.328125 22.546875 73.554688 22.113281 C 73.222656 21.933594 72.921875 21.863281 72.632812 21.851562 Z M 72.632812 21.851562 "
          fillOpacity="1" fillRule="nonzero" />
      </svg>
      <div className="lg:px-[5%] grid md:grid-cols-2 ">
        <div className="flex flex-col md:justify-between gap-8 py-8 px-5 md:px-0 2xl:py-0 2xl:px-0">
          <div>
            <h1 className="fortnite text-5xl md:text-7xl text-center lg:text-left 2xl:text-9xl font-bold">
              Tongasoa eto amin'ny <label className="text-primary">TIA ZAZA</label>
            </h1>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <p className="text-sm md:text-xl text-center lg:text-left 2xl:text-3xl w-full lg:w-2/3 first-letter:text-lg lg:first-letter:text-5xl">Tonga ity ny fialan-tsasatra koa indro ary ny tranokala iray izay manolotra ireo ankizy karzana kilalao telo mba hialan'izy ireo voly.</p>
          </div>
          <div className=" flex justify-center lg:justify-start">
            <div>
              <h1 className="font-bold lg:text-xl 2xl:text-3xl">Koa Andeha isika <span className="text-secondary lg:text-3xl 2xl:text-4xl">hilalao</span> rankizy !</h1>
              <div className="hidden sm:flex sm:gap-2 sm:items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div>
                  Afaka ahodinao ilay sary amin'ny sisiny io
                </div>
              </div>
              <div className="flex gap-2 items-center sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div>
                  Afaka ahodinao ilay sary ao ambony
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link to="div_game_one" smooth={true} duration={500} offset={-175} className="flex cursor-pointer items-center text-sm md:text-2xl bg-primary hover:translate- hover:transition hover:duration-300 text-base-100 p-2 md:p-4 rounded-full font-bold">
              <span className="mx-4">Ireo kilalaontsika</span>
              <svg className="w-8 h-8 stroke-base-100 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L12 20M12 20L18 14M12 20L6 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center order-first lg:order-last">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Boy3D scale={scaleBS} position={[-2, -2, 0]} />
            <Girl3D scale={scaleGS} position={[2, -2, 0]} />
            <OrbitControls enableZoom={false} enableRotate={true}
              maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Welcome