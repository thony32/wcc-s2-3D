import ThemeChanger from "./ThemeChanger"
import Sound from "./Sound";
import { Link } from 'react-scroll'
import { useEffect, useState } from "react";

function Navbar() {
    // * active link
    const [activeDiv, setActiveDiv] = useState('div_welcome')

    useEffect(() => {
        const handleScroll = () => {
            const divs = document.querySelectorAll('div[id^="div_"]');
            let activeId = '';
            divs.forEach((div) => {
                const rect = div.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    activeId = div.id;
                }
                if (rect.top > 3000) {
                    activeId = "div_welcome"
                }
                console.log(rect.top)
            });
            setActiveDiv(activeId);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="navbar sticky top-0 bg-base-100 z-50">
            {/* for mobile */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className='text-lg'>Fandraisana</a></li>
                        <li><a className='text-lg'>Ireo Kilalao</a></li>
                        <li><a className='text-lg'>Kilalao 1</a></li>
                        <li><a className='text-lg'>Kilalao 2</a></li>
                        <li><a className='text-lg'>Kilalao 3</a></li>
                    </ul>
                </div>
                <svg viewBox="0 0 1440 809.999993" className="w-48 h-20">
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(13.17385, 539.133223)">
                            <g>
                                <path
                                    d="M 139.863281 -211.28125 L 46.125 -211.28125 C 19.640625 -211.28125 -0.894531 -189.558594 -0.894531 -163.371094 C -0.894531 -138.078125 19.640625 -116.355469 46.125 -116.355469 L 46.125 -44.933594 C 46.125 -18.449219 67.550781 3.273438 93.144531 3.273438 C 119.328125 3.273438 141.054688 -18.449219 141.054688 -44.933594 L 140.753906 -116.355469 C 167.242188 -116.355469 187.773438 -138.078125 187.773438 -163.371094 C 187.773438 -189.558594 166.347656 -211.28125 139.863281 -211.28125 Z M 139.863281 -211.28125 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(205.407658, 539.133223)">
                            <g>
                                <path
                                    d="M 47.019531 0 C 74.097656 0 94.929688 -21.722656 94.929688 -47.613281 L 94.929688 -164.5625 C 94.929688 -190.453125 74.097656 -211.28125 47.019531 -211.28125 C 20.832031 -211.28125 0 -190.453125 0 -164.5625 L 0 -47.613281 C 0 -21.722656 20.832031 0 47.019531 0 Z M 47.019531 0 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(0.0223166, 525.98168)">
                            <g>
                                <path
                                    d="M 139.863281 -211.28125 L 46.125 -211.28125 C 19.640625 -211.28125 -0.894531 -189.558594 -0.894531 -163.371094 C -0.894531 -138.078125 19.640625 -116.355469 46.125 -116.355469 L 46.125 -44.933594 C 46.125 -18.449219 67.550781 3.273438 93.144531 3.273438 C 119.328125 3.273438 141.054688 -18.449219 141.054688 -44.933594 L 140.753906 -116.355469 C 167.242188 -116.355469 187.773438 -138.078125 187.773438 -163.371094 C 187.773438 -189.558594 166.347656 -211.28125 139.863281 -211.28125 Z M 139.863281 -211.28125 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(192.256125, 525.98168)">
                            <g>
                                <path
                                    d="M 47.019531 0 C 74.097656 0 94.929688 -21.722656 94.929688 -47.613281 L 94.929688 -164.5625 C 94.929688 -190.453125 74.097656 -211.28125 47.019531 -211.28125 C 20.832031 -211.28125 0 -190.453125 0 -164.5625 L 0 -47.613281 C 0 -21.722656 20.832031 0 47.019531 0 Z M 47.019531 0 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(309.834725, 539.133223)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(386.906783, 539.133223)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(463.978841, 539.133223)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(541.050899, 539.133223)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(296.683192, 525.98168)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(373.75525, 525.98168)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(450.827308, 525.98168)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(527.899366, 525.98168)">
                            <g />
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(618.119299, 539.133223)">
                            <g>
                                <path
                                    d="M 144.027344 -211.28125 L 46.125 -211.28125 C 19.9375 -211.28125 -1.488281 -189.855469 -1.488281 -163.96875 C -1.488281 -141.054688 14.285156 -122.601562 35.414062 -117.542969 L 59.8125 -134.804688 C 61.597656 -135.996094 63.980469 -133.316406 62.195312 -131.53125 L 14.878906 -83.324219 C 5.355469 -73.800781 -2.082031 -62.195312 -2.082031 -47.316406 C -2.082031 -21.128906 19.9375 0 46.125 0 L 144.921875 0 C 170.8125 0 192.238281 -23.804688 192.238281 -47.316406 C 192.238281 -72.015625 176.761719 -88.976562 155.335938 -94.035156 L 129.148438 -76.777344 C 126.769531 -75.289062 125.28125 -77.667969 126.769531 -79.15625 C 144.027344 -96.417969 161.289062 -113.378906 177.359375 -129.746094 C 205.332031 -157.71875 190.453125 -211.28125 144.027344 -211.28125 Z M 144.027344 -211.28125 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(818.982793, 539.133223)">
                            <g>
                                <path
                                    d="M 130.042969 -64.871094 C 131.53125 -66.65625 133.910156 -64.871094 133.019531 -62.492188 L 114.867188 -34.816406 C 119.925781 -14.878906 136.292969 0 160.695312 0 C 184.5 0 207.710938 -20.832031 207.710938 -46.71875 L 207.710938 -163.96875 C 207.710938 -181.820312 198.488281 -197.296875 183.90625 -204.734375 C 176.761719 -209.199219 168.429688 -211.28125 160.394531 -211.28125 C 147.003906 -211.28125 133.910156 -205.628906 124.6875 -194.914062 L 10.714844 -79.453125 C 1.785156 -70.230469 -2.976562 -58.324219 -2.976562 -46.421875 C -2.976562 -34.519531 1.785156 -22.914062 10.714844 -13.6875 C 19.9375 -4.464844 32.140625 0 44.339844 0 C 56.242188 0 68.445312 -4.464844 77.667969 -13.6875 Z M 130.042969 -64.871094 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(1035.617797, 539.133223)">
                            <g>
                                <path
                                    d="M 144.027344 -211.28125 L 46.125 -211.28125 C 19.9375 -211.28125 -1.488281 -189.855469 -1.488281 -163.96875 C -1.488281 -141.054688 14.285156 -122.601562 35.414062 -117.542969 L 59.8125 -134.804688 C 61.597656 -135.996094 63.980469 -133.316406 62.195312 -131.53125 L 14.878906 -83.324219 C 5.355469 -73.800781 -2.082031 -62.195312 -2.082031 -47.316406 C -2.082031 -21.128906 19.9375 0 46.125 0 L 144.921875 0 C 170.8125 0 192.238281 -23.804688 192.238281 -47.316406 C 192.238281 -72.015625 176.761719 -88.976562 155.335938 -94.035156 L 129.148438 -76.777344 C 126.769531 -75.289062 125.28125 -77.667969 126.769531 -79.15625 C 144.027344 -96.417969 161.289062 -113.378906 177.359375 -129.746094 C 205.332031 -157.71875 190.453125 -211.28125 144.027344 -211.28125 Z M 144.027344 -211.28125 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-info" fillOpacity="1">
                        <g transform="translate(1236.481292, 539.133223)">
                            <g>
                                <path
                                    d="M 130.042969 -64.871094 C 131.53125 -66.65625 133.910156 -64.871094 133.019531 -62.492188 L 114.867188 -34.816406 C 119.925781 -14.878906 136.292969 0 160.695312 0 C 184.5 0 207.710938 -20.832031 207.710938 -46.71875 L 207.710938 -163.96875 C 207.710938 -181.820312 198.488281 -197.296875 183.90625 -204.734375 C 176.761719 -209.199219 168.429688 -211.28125 160.394531 -211.28125 C 147.003906 -211.28125 133.910156 -205.628906 124.6875 -194.914062 L 10.714844 -79.453125 C 1.785156 -70.230469 -2.976562 -58.324219 -2.976562 -46.421875 C -2.976562 -34.519531 1.785156 -22.914062 10.714844 -13.6875 C 19.9375 -4.464844 32.140625 0 44.339844 0 C 56.242188 0 68.445312 -4.464844 77.667969 -13.6875 Z M 130.042969 -64.871094 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(604.967765, 525.98168)">
                            <g>
                                <path
                                    d="M 144.027344 -211.28125 L 46.125 -211.28125 C 19.9375 -211.28125 -1.488281 -189.855469 -1.488281 -163.96875 C -1.488281 -141.054688 14.285156 -122.601562 35.414062 -117.542969 L 59.8125 -134.804688 C 61.597656 -135.996094 63.980469 -133.316406 62.195312 -131.53125 L 14.878906 -83.324219 C 5.355469 -73.800781 -2.082031 -62.195312 -2.082031 -47.316406 C -2.082031 -21.128906 19.9375 0 46.125 0 L 144.921875 0 C 170.8125 0 192.238281 -23.804688 192.238281 -47.316406 C 192.238281 -72.015625 176.761719 -88.976562 155.335938 -94.035156 L 129.148438 -76.777344 C 126.769531 -75.289062 125.28125 -77.667969 126.769531 -79.15625 C 144.027344 -96.417969 161.289062 -113.378906 177.359375 -129.746094 C 205.332031 -157.71875 190.453125 -211.28125 144.027344 -211.28125 Z M 144.027344 -211.28125 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(805.83126, 525.98168)">
                            <g>
                                <path
                                    d="M 130.042969 -64.871094 C 131.53125 -66.65625 133.910156 -64.871094 133.019531 -62.492188 L 114.867188 -34.816406 C 119.925781 -14.878906 136.292969 0 160.695312 0 C 184.5 0 207.710938 -20.832031 207.710938 -46.71875 L 207.710938 -163.96875 C 207.710938 -181.820312 198.488281 -197.296875 183.90625 -204.734375 C 176.761719 -209.199219 168.429688 -211.28125 160.394531 -211.28125 C 147.003906 -211.28125 133.910156 -205.628906 124.6875 -194.914062 L 10.714844 -79.453125 C 1.785156 -70.230469 -2.976562 -58.324219 -2.976562 -46.421875 C -2.976562 -34.519531 1.785156 -22.914062 10.714844 -13.6875 C 19.9375 -4.464844 32.140625 0 44.339844 0 C 56.242188 0 68.445312 -4.464844 77.667969 -13.6875 Z M 130.042969 -64.871094 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(1022.466264, 525.98168)">
                            <g>
                                <path
                                    d="M 144.027344 -211.28125 L 46.125 -211.28125 C 19.9375 -211.28125 -1.488281 -189.855469 -1.488281 -163.96875 C -1.488281 -141.054688 14.285156 -122.601562 35.414062 -117.542969 L 59.8125 -134.804688 C 61.597656 -135.996094 63.980469 -133.316406 62.195312 -131.53125 L 14.878906 -83.324219 C 5.355469 -73.800781 -2.082031 -62.195312 -2.082031 -47.316406 C -2.082031 -21.128906 19.9375 0 46.125 0 L 144.921875 0 C 170.8125 0 192.238281 -23.804688 192.238281 -47.316406 C 192.238281 -72.015625 176.761719 -88.976562 155.335938 -94.035156 L 129.148438 -76.777344 C 126.769531 -75.289062 125.28125 -77.667969 126.769531 -79.15625 C 144.027344 -96.417969 161.289062 -113.378906 177.359375 -129.746094 C 205.332031 -157.71875 190.453125 -211.28125 144.027344 -211.28125 Z M 144.027344 -211.28125 " />
                            </g>
                        </g>
                    </g>
                    <g className="fill-primary" fillOpacity="1">
                        <g transform="translate(1223.329759, 525.98168)">
                            <g>
                                <path
                                    d="M 130.042969 -64.871094 C 131.53125 -66.65625 133.910156 -64.871094 133.019531 -62.492188 L 114.867188 -34.816406 C 119.925781 -14.878906 136.292969 0 160.695312 0 C 184.5 0 207.710938 -20.832031 207.710938 -46.71875 L 207.710938 -163.96875 C 207.710938 -181.820312 198.488281 -197.296875 183.90625 -204.734375 C 176.761719 -209.199219 168.429688 -211.28125 160.394531 -211.28125 C 147.003906 -211.28125 133.910156 -205.628906 124.6875 -194.914062 L 10.714844 -79.453125 C 1.785156 -70.230469 -2.976562 -58.324219 -2.976562 -46.421875 C -2.976562 -34.519531 1.785156 -22.914062 10.714844 -13.6875 C 19.9375 -4.464844 32.140625 0 44.339844 0 C 56.242188 0 68.445312 -4.464844 77.667969 -13.6875 Z M 130.042969 -64.871094 " />
                            </g>
                        </g>
                    </g>
                    <g clip-path="url(#5e4b2ec46d)">
                        <path className="fill-info"
                            d="M 529.480469 534.867188 L 341.675781 534.867188 C 341.019531 534.867188 340.363281 534.847656 339.707031 534.804688 C 339.050781 534.761719 338.398438 534.695312 337.75 534.609375 C 337.097656 534.523438 336.449219 534.417969 335.808594 534.289062 C 335.164062 534.160156 334.523438 534.011719 333.890625 533.839844 C 333.257812 533.671875 332.628906 533.480469 332.007812 533.269531 C 331.386719 533.058594 330.773438 532.828125 330.164062 532.574219 C 329.558594 532.324219 328.960938 532.050781 328.371094 531.761719 C 327.785156 531.472656 327.207031 531.160156 326.636719 530.832031 C 326.070312 530.503906 325.511719 530.15625 324.964844 529.792969 C 324.421875 529.425781 323.886719 529.042969 323.367188 528.644531 C 322.84375 528.242188 322.335938 527.828125 321.84375 527.394531 C 321.351562 526.960938 320.871094 526.511719 320.40625 526.046875 C 319.941406 525.582031 319.496094 525.101562 319.0625 524.609375 C 318.628906 524.113281 318.210938 523.605469 317.8125 523.085938 C 317.414062 522.5625 317.03125 522.027344 316.664062 521.484375 C 316.300781 520.9375 315.953125 520.378906 315.625 519.808594 C 315.296875 519.238281 314.988281 518.660156 314.699219 518.070312 C 314.40625 517.480469 314.136719 516.882812 313.882812 516.277344 C 313.632812 515.667969 313.402344 515.054688 313.191406 514.429688 C 312.980469 513.808594 312.789062 513.179688 312.617188 512.546875 C 312.449219 511.910156 312.296875 511.269531 312.167969 510.625 C 312.042969 509.980469 311.933594 509.332031 311.847656 508.679688 C 311.761719 508.027344 311.695312 507.375 311.652344 506.71875 C 311.609375 506.0625 311.589844 505.40625 311.589844 504.75 C 311.585938 504.089844 311.609375 503.433594 311.652344 502.777344 C 311.695312 502.121094 311.757812 501.46875 311.84375 500.816406 C 311.925781 500.164062 312.035156 499.515625 312.160156 498.871094 C 312.289062 498.226562 312.4375 497.585938 312.605469 496.953125 C 312.777344 496.316406 312.964844 495.6875 313.175781 495.066406 C 313.386719 494.441406 313.617188 493.828125 313.867188 493.21875 C 314.117188 492.613281 314.386719 492.011719 314.679688 491.421875 C 314.96875 490.832031 315.277344 490.253906 315.605469 489.683594 L 409.445312 326.730469 C 409.773438 326.160156 410.121094 325.601562 410.484375 325.054688 C 410.851562 324.507812 411.234375 323.972656 411.632812 323.449219 C 412.03125 322.929688 412.449219 322.421875 412.882812 321.925781 C 413.316406 321.433594 413.765625 320.953125 414.230469 320.488281 C 414.695312 320.023438 415.175781 319.574219 415.667969 319.140625 C 416.160156 318.707031 416.667969 318.289062 417.191406 317.886719 C 417.710938 317.488281 418.246094 317.105469 418.792969 316.738281 C 419.339844 316.375 419.894531 316.027344 420.464844 315.699219 C 421.035156 315.367188 421.613281 315.058594 422.203125 314.769531 C 422.792969 314.476562 423.390625 314.207031 423.996094 313.953125 C 424.601562 313.703125 425.21875 313.472656 425.839844 313.257812 C 426.460938 313.046875 427.089844 312.859375 427.722656 312.6875 C 428.359375 312.515625 429 312.367188 429.644531 312.238281 C 430.285156 312.109375 430.933594 312.003906 431.585938 311.917969 C 432.238281 311.832031 432.890625 311.769531 433.546875 311.726562 C 434.203125 311.683594 434.859375 311.660156 435.515625 311.660156 C 436.171875 311.660156 436.828125 311.683594 437.484375 311.726562 C 438.136719 311.769531 438.792969 311.832031 439.441406 311.917969 C 440.09375 312.003906 440.742188 312.109375 441.386719 312.238281 C 442.03125 312.367188 442.667969 312.515625 443.304688 312.6875 C 443.9375 312.859375 444.566406 313.046875 445.1875 313.257812 C 445.8125 313.472656 446.425781 313.703125 447.03125 313.953125 C 447.640625 314.207031 448.238281 314.476562 448.828125 314.769531 C 449.414062 315.058594 449.996094 315.367188 450.5625 315.699219 C 451.132812 316.027344 451.691406 316.375 452.238281 316.738281 C 452.78125 317.105469 453.316406 317.488281 453.839844 317.886719 C 454.359375 318.289062 454.867188 318.707031 455.359375 319.140625 C 455.855469 319.574219 456.335938 320.023438 456.800781 320.488281 C 457.261719 320.953125 457.710938 321.433594 458.144531 321.925781 C 458.578125 322.421875 458.996094 322.929688 459.394531 323.449219 C 459.796875 323.972656 460.179688 324.507812 460.542969 325.054688 C 460.910156 325.601562 461.257812 326.160156 461.585938 326.730469 L 554.097656 487.351562 C 555.929688 489.878906 557.3125 492.625 558.253906 495.601562 C 559.195312 498.574219 559.644531 501.617188 559.601562 504.738281 C 559.601562 505.714844 559.554688 506.691406 559.460938 507.667969 C 559.367188 508.640625 559.222656 509.605469 559.035156 510.566406 C 558.847656 511.527344 558.609375 512.476562 558.328125 513.414062 C 558.046875 514.347656 557.722656 515.269531 557.351562 516.175781 C 556.980469 517.082031 556.566406 517.964844 556.109375 518.832031 C 555.652344 519.695312 555.152344 520.535156 554.613281 521.351562 C 554.074219 522.167969 553.5 522.957031 552.882812 523.714844 C 552.265625 524.476562 551.617188 525.203125 550.929688 525.898438 C 550.242188 526.59375 549.523438 527.257812 548.773438 527.882812 C 548.023438 528.507812 547.242188 529.097656 546.433594 529.644531 C 545.628906 530.195312 544.792969 530.703125 543.9375 531.171875 C 543.078125 531.640625 542.203125 532.066406 541.300781 532.449219 C 540.402344 532.832031 539.488281 533.171875 538.554688 533.464844 C 537.625 533.757812 536.679688 534.003906 535.722656 534.207031 C 534.769531 534.40625 533.804688 534.5625 532.832031 534.667969 C 531.863281 534.777344 530.890625 534.835938 529.914062 534.847656 Z M 529.480469 534.867188 "
                            fillOpacity="1" fillRule="nonzero" />
                    </g>
                    <g clip-path="url(#cf18adfc7c)">
                        <path className="fill-primary"
                            d="M 513.816406 519.128906 L 339.265625 519.128906 C 338.65625 519.128906 338.046875 519.109375 337.4375 519.070312 C 336.832031 519.027344 336.222656 518.96875 335.617188 518.890625 C 335.015625 518.808594 334.414062 518.710938 333.8125 518.589844 C 333.214844 518.472656 332.621094 518.332031 332.03125 518.175781 C 331.445312 518.015625 330.859375 517.839844 330.28125 517.640625 C 329.703125 517.445312 329.132812 517.230469 328.570312 516.996094 C 328.007812 516.761719 327.453125 516.511719 326.90625 516.242188 C 326.355469 515.96875 325.820312 515.683594 325.292969 515.378906 C 324.761719 515.070312 324.246094 514.75 323.738281 514.410156 C 323.230469 514.070312 322.734375 513.714844 322.25 513.34375 C 321.765625 512.972656 321.296875 512.582031 320.835938 512.179688 C 320.378906 511.777344 319.933594 511.359375 319.5 510.929688 C 319.070312 510.496094 318.652344 510.050781 318.25 509.589844 C 317.847656 509.132812 317.460938 508.660156 317.089844 508.175781 C 316.71875 507.691406 316.363281 507.195312 316.023438 506.6875 C 315.683594 506.179688 315.363281 505.660156 315.058594 505.128906 C 314.753906 504.601562 314.464844 504.0625 314.195312 503.515625 C 313.925781 502.96875 313.671875 502.410156 313.4375 501.847656 C 313.203125 501.28125 312.988281 500.710938 312.792969 500.132812 C 312.597656 499.554688 312.417969 498.96875 312.261719 498.378906 C 312.101562 497.789062 311.964844 497.195312 311.84375 496.59375 C 311.726562 495.996094 311.625 495.394531 311.546875 494.785156 C 311.464844 494.179688 311.40625 493.574219 311.367188 492.964844 C 311.324219 492.355469 311.304688 491.742188 311.304688 491.132812 C 311.304688 490.519531 311.324219 489.910156 311.363281 489.300781 C 311.402344 488.691406 311.460938 488.082031 311.539062 487.476562 C 311.621094 486.871094 311.71875 486.269531 311.835938 485.667969 C 311.957031 485.070312 312.09375 484.472656 312.25 483.882812 C 312.410156 483.292969 312.585938 482.707031 312.78125 482.128906 C 312.976562 481.550781 313.191406 480.980469 313.421875 480.414062 C 313.65625 479.851562 313.90625 479.292969 314.175781 478.746094 C 314.445312 478.195312 314.734375 477.65625 315.039062 477.128906 L 402.253906 325.65625 C 402.558594 325.128906 402.878906 324.609375 403.21875 324.101562 C 403.558594 323.589844 403.914062 323.09375 404.285156 322.609375 C 404.660156 322.125 405.046875 321.652344 405.449219 321.191406 C 405.851562 320.734375 406.269531 320.285156 406.699219 319.855469 C 407.132812 319.421875 407.578125 319.003906 408.035156 318.601562 C 408.496094 318.199219 408.96875 317.8125 409.453125 317.4375 C 409.9375 317.066406 410.433594 316.710938 410.941406 316.371094 C 411.449219 316.03125 411.964844 315.707031 412.496094 315.402344 C 413.023438 315.097656 413.5625 314.808594 414.109375 314.539062 C 414.65625 314.269531 415.214844 314.015625 415.777344 313.78125 C 416.339844 313.546875 416.914062 313.332031 417.492188 313.136719 C 418.070312 312.941406 418.652344 312.761719 419.242188 312.605469 C 419.832031 312.445312 420.425781 312.308594 421.023438 312.1875 C 421.625 312.070312 422.226562 311.96875 422.832031 311.890625 C 423.4375 311.808594 424.042969 311.75 424.652344 311.710938 C 425.261719 311.671875 425.871094 311.648438 426.484375 311.648438 C 427.09375 311.648438 427.703125 311.671875 428.3125 311.710938 C 428.921875 311.75 429.527344 311.808594 430.132812 311.890625 C 430.738281 311.96875 431.339844 312.070312 431.941406 312.1875 C 432.539062 312.308594 433.132812 312.445312 433.722656 312.605469 C 434.3125 312.761719 434.894531 312.941406 435.472656 313.136719 C 436.050781 313.332031 436.625 313.546875 437.1875 313.78125 C 437.75 314.015625 438.308594 314.269531 438.855469 314.539062 C 439.402344 314.808594 439.941406 315.097656 440.46875 315.402344 C 441 315.707031 441.515625 316.03125 442.023438 316.371094 C 442.53125 316.710938 443.027344 317.066406 443.511719 317.4375 C 443.996094 317.8125 444.46875 318.199219 444.929688 318.601562 C 445.386719 319.003906 445.832031 319.421875 446.265625 319.855469 C 446.695312 320.285156 447.113281 320.734375 447.515625 321.191406 C 447.917969 321.652344 448.304688 322.125 448.679688 322.609375 C 449.050781 323.09375 449.40625 323.589844 449.746094 324.101562 C 450.085938 324.609375 450.40625 325.128906 450.710938 325.65625 L 536.695312 474.960938 C 538.394531 477.308594 539.683594 479.863281 540.558594 482.628906 C 541.433594 485.390625 541.851562 488.222656 541.8125 491.121094 C 541.8125 492.03125 541.765625 492.9375 541.679688 493.84375 C 541.589844 494.75 541.457031 495.648438 541.28125 496.539062 C 541.105469 497.433594 540.890625 498.3125 540.628906 499.183594 C 540.367188 500.054688 540.0625 500.910156 539.71875 501.753906 C 539.371094 502.59375 538.988281 503.417969 538.5625 504.222656 C 538.136719 505.023438 537.675781 505.804688 537.175781 506.566406 C 536.675781 507.324219 536.136719 508.054688 535.566406 508.761719 C 534.992188 509.46875 534.386719 510.144531 533.75 510.792969 C 533.113281 511.4375 532.445312 512.054688 531.746094 512.636719 C 531.046875 513.214844 530.324219 513.761719 529.574219 514.273438 C 528.820312 514.785156 528.046875 515.257812 527.25 515.695312 C 526.453125 516.128906 525.636719 516.523438 524.800781 516.882812 C 523.96875 517.238281 523.117188 517.550781 522.25 517.824219 C 521.382812 518.097656 520.507812 518.328125 519.617188 518.511719 C 518.730469 518.699219 517.835938 518.84375 516.933594 518.941406 C 516.03125 519.042969 515.125 519.097656 514.214844 519.109375 Z M 513.816406 519.128906 "
                            fillOpacity="1" fillRule="nonzero" />
                    </g>
                </svg>
            </div>
            {/* for desktop */}
            <div className="navbar-center hidden lg:flex">
                <div className="flex gap-6 items-center">
                    <Link to="div_welcome" smooth={true} duration={500} offset={-175} className={activeDiv === "div_welcome" ? "space-y-2 cursor-pointer group text-primary" : "space-y-2 cursor-pointer group"}>
                        <div className="flex justify-center">
                            <svg className="stroke-current group-hover:stroke-primary duration-150 w-8" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                                    stroke-width="1.5" stroke-linecap="round" />
                                <path className="group-hover:-translate-y-1 duration-300" d="M15 18H9" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </div>
                        <button className='fortnite text-xl group-hover:text-primary duration-150'>Fandraisana</button>
                    </Link>
                    <Link to="div_presentation" smooth={true} duration={500} offset={-175} className={activeDiv === "div_presentation" ? "space-y-2 cursor-pointer group text-primary" : "space-y-2 cursor-pointer group"}>
                        <div className="flex justify-center items-center">
                            <svg className="w-8 fill-current group-hover:fill-primary duration-150 rotate-45" viewBox="0 0 24 24">
                                <g fill-rule="nonzero">
                                    <path className="group-hover:translate-y-1 duration-300"
                                        d="M14.9978834,5 C18.8638767,5 21.9978834,8.13400675 21.9978834,12 C21.9978834,15.7854517 18.9931001,18.8690987 15.2385332,18.995941 L14.9978834,19 L9.00211656,19 C5.13612331,19 2.00211656,15.8659932 2.00211656,12 C2.00211656,8.21454828 5.00689994,5.13090132 8.76146681,5.00405902 L9.00211656,5 L14.9978834,5 Z M14.9978834,6.5 L9.00211656,6.5 C5.96455044,6.5 3.50211656,8.96243388 3.50211656,12 C3.50211656,14.9634791 5.84589657,17.3795391 8.78090942,17.4956328 L9.00211656,17.5 L14.9978834,17.5 C18.0354496,17.5 20.4978834,15.0375661 20.4978834,12 C20.4978834,9.03652085 18.1541034,6.62046086 15.2190906,6.5043672 L14.9978834,6.5 Z M8,9 C8.41421356,9 8.75,9.33578644 8.75,9.75 L8.74911656,11.248 L10.25,11.2487458 C10.6642136,11.2487458 11,11.5845322 11,11.9987458 C11,12.4129593 10.6642136,12.7487458 10.25,12.7487458 L8.74911656,12.748 L8.75,14.25 C8.75,14.6642136 8.41421356,15 8,15 C7.58578644,15 7.25,14.6642136 7.25,14.25 L7.24911656,12.748 L5.75,12.7487458 C5.33578644,12.7487458 5,12.4129593 5,11.9987458 C5,11.5845322 5.33578644,11.2487458 5.75,11.2487458 L7.24911656,11.248 L7.25,9.75 C7.25,9.33578644 7.58578644,9 8,9 Z M14.75,12.5 C15.4403559,12.5 16,13.0596441 16,13.75 C16,14.4403559 15.4403559,15 14.75,15 C14.0596441,15 13.5,14.4403559 13.5,13.75 C13.5,13.0596441 14.0596441,12.5 14.75,12.5 Z M16.75,9 C17.4403559,9 18,9.55964406 18,10.25 C18,10.9403559 17.4403559,11.5 16.75,11.5 C16.0596441,11.5 15.5,10.9403559 15.5,10.25 C15.5,9.55964406 16.0596441,9 16.75,9 Z"
                                    >

                                    </path>
                                </g>
                            </svg>
                        </div>
                        <button className='fortnite text-xl group-hover:text-primary duration-150'>Ireo kilalao</button>
                    </Link>
                    <Link to="div_game_one" smooth={true} duration={500} offset={-175} className={activeDiv === "div_game_one" ? "space-y-2 cursor-pointer group text-primary" : "space-y-2 cursor-pointer group"}>
                        <div className="flex justify-center items-center">
                            <svg className="w-8 fill-current group-hover:fill-primary duration-150 group-hover:rotate-12" viewBox="0 0 512 512">
                                <path
                                    d="M241.063 54.406c-2.31.008-4.61.032-6.907.094-1.805.05-3.61.106-5.406.188-8.814 1.567-12.884 5.426-15.094 9.843-2.435 4.87-2.34 11.423.375 17.25 2.717 5.83 7.7 10.596 14.657 12.376 6.958 1.78 16.536.86 29.125-7.187l10.063 15.75c-15.818 10.11-31.124 12.777-43.813 9.53-12.688-3.247-22.103-12.123-26.968-22.563-4.584-9.836-5.426-21.376-1.03-31.624-42.917 6.94-81.777 23.398-111.626 46.562-9.81 10.688-10.77 23.11-6.47 31.594 4.83 9.526 16.21 16.48 38.97 9.28l5.656 17.813c-28.58 9.04-52.137-.588-61.28-18.625-2.23-4.397-3.592-9.156-4.127-14.063-4.814 5.712-9.16 11.658-13 17.844l.126.06c-8.614 19.616-8.81 33.203-5.376 42.032 3.436 8.83 10.635 14.44 21.72 17.532 22.168 6.18 58.065-1.277 83.343-20.156 10.82-8.08 21.077-27.677 21.97-42.875.445-7.6-1.165-13.604-4.345-17.438-3.18-3.834-8.272-6.703-18.813-6.594l-.187-18.686c14.487-.15 26.25 4.754 33.375 13.344 7.124 8.59 9.26 19.652 8.625 30.468-1.27 21.633-12.595 44.172-29.438 56.75-29.876 22.314-69.336 31.606-99.53 23.188-13.988-3.9-26.37-12.386-32.75-25.53-9.546 45.446 4.323 87.66 30.718 116.874 3.45 3.82 7.122 7.43 10.97 10.78-2.754-7.887-4.016-16.1-3.72-24.093.53-14.325 6.082-28.346 17.22-38.03 9.134-7.946 21.752-12.53 36.843-12.5 1.006 0 2.034.018 3.062.06 2.35.1 4.763.304 7.22.626l-2.44 18.532c-15.588-2.048-25.705 1.522-32.436 7.375-6.73 5.854-10.443 14.614-10.813 24.625-.74 20.024 12.07 43.406 39.69 50.188l-.032.188c27.192 5.19 57.536.372 88-18.22.018-.012.043-.017.062-.03 6.34-4.45 9.755-8.808 11.438-12.563 1.985-4.432 1.943-8.292.53-12.438-2.824-8.29-12.94-16.812-22.218-19.187-15.002-3.84-24.532 1.436-29 7.72-4.468 6.28-4.74 12.45 2.156 17.81l-11.47 14.75c-14.187-11.033-15.092-30.487-5.905-43.405 6.892-9.688 18.985-16.326 33.564-16.75.607-.018 1.228-.036 1.844-.03 4.306.03 8.79.622 13.437 1.81 15.505 3.97 29.84 15.277 35.28 31.25 1.416 4.155 2.09 8.69 1.876 13.314 16.71-8.538 34.332-16.12 52.282-21.814 30.156-13.78 43.23-37.938 42.72-58.28-.515-20.493-13.187-37.74-42.376-40.626l1.844-18.594c36.666 3.626 58.462 29.848 59.188 58.75.422 16.84-5.754 34.363-18.188 49.28 16.072-1.8 32.044-1.495 47.53 1.627-3.152-6.472-4.68-13.478-4.467-20.438.677-22.036 19.42-42.593 48.875-42.906 1.963-.022 3.974.053 6.03.218l-1.5 18.625c-24.927-1.998-34.3 11.086-34.718 24.656-.412 13.42 8.545 28.442 34.22 30.436 28.3.25 48.588-15.098 58.53-37.906 13.31-30.536 6.997-76.317-34.844-118.188-.792-.793-1.578-1.593-2.375-2.375-.444 3.792-1.424 7.443-2.842 10.844-7.25 17.39-24.233 29.128-41.875 32.407-24.335 4.522-44.29-5.347-53.5-20.406-9.21-15.057-6.792-36.35 9.78-47.56l10.47 15.5c-8.913 6.028-9.28 14.19-4.313 22.31 4.967 8.122 16.17 15.156 34.156 11.814 11.306-2.102 23.896-11.33 28.03-21.25 2.07-4.96 2.47-9.862.408-15.47-1.675-4.555-5.187-9.764-11.72-15.25l-.187-.155c-27.316-20.587-56.338-35.393-85.75-45.157.018.032.045.06.063.093 6.684 12.22 7.18 26.082 3.063 38.344-8.233 24.525-34.07 43.848-66.032 42.78-6.948-.23-13.56 3.12-19.186 9.657-5.627 6.537-9.735 16.113-10.688 26.313-1.905 20.4 6.923 42.886 41.344 54L277 258.28c-41.083-13.264-56.83-45.546-54.22-73.5 1.307-13.975 6.706-26.962 15.157-36.78 8.452-9.818 20.475-16.603 33.97-16.156 24.04.802 42.323-14.084 47.687-30.063 2.682-7.988 2.335-15.937-1.75-23.405-3.968-7.252-11.83-14.423-25.906-19.656-17.114-2.967-34.16-4.367-50.875-4.314zM342.28 306.344c-41.915 3.41-87.366 23.4-125.28 46.562-55.98 34.198-114.89 26.733-156.688-4.28 16.444 58.844 74.712 70.788 135.5 55.905 6.083-2.285 12.06-6.538 17.157-12.03 7.057-7.607 12.17-17.47 13.78-25.625l18.344 3.625c-2.445 12.383-9.078 24.666-18.406 34.72-8.95 9.645-20.61 17.35-34.094 19.374-6.766 15.07-12.334 29.68-14.594 39.906-3.55 16.06 14.206 22.225 22.156 6.03 19.022-38.743 45.87-73.23 79.406-102.967 26.064-17.153 48.406-38.303 62.72-61.22z" />
                            </svg>
                        </div>
                        <button className='fortnite text-xl group-hover:text-primary duration-150'>Saina</button>
                    </Link>
                    <Link to="div_game_two" smooth={true} duration={500} offset={-175} className={activeDiv === "div_game_two" ? "space-y-2 cursor-pointer group text-primary" : "space-y-2 cursor-pointer group"}>
                        <div className="flex justify-center items-center">
                            <svg className="w-8 stroke-current group-hover:stroke-primary duration-150" viewBox="0 0 64 64" stroke-width="3" fill="none">
                                <path
                                    d="M34.07,50.93S53.86,44.38,45.68,26.6c0,0-4.8-11.46-19.31-13.27S8.3,20.8,8.3,20.8,1.81,33.68,13.1,35c1.62.19,5-.56,6.4,1.33s.29,4.2,0,8.8C19.34,47.69,21.27,53.87,34.07,50.93Z"
                                    stroke-linecap="round" />
                                <circle cx="17.2" cy="24.01" r="3.59" stroke-linecap="round" />
                                <circle cx="38.02" cy="28.02" r="2.43" stroke-linecap="round" />
                                <circle cx="38.02" cy="39.04" r="2.43" stroke-linecap="round" />
                                <circle cx="28.14" cy="44.38" r="2.43" stroke-linecap="round" />
                                <g className="group-hover:translate-y-1 group-hover:rotate-12 duration-300">
                                    <path
                                        d="M54,12.62c-.69,3.31-2.07,10.9-2.18,27a.41.41,0,0,0,.41.41h4.91a.41.41,0,0,0,.41-.42c-.1-2.82-.74-18.12-2.75-27A.41.41,0,0,0,54,12.62Z"
                                        stroke-linecap="round" />
                                    <path d="M57.48,43.8c0,1.53-1.92,7.37-2.78,7.37s-2.78-5.84-2.78-7.37a2.78,2.78,0,1,1,5.56,0Z"
                                        stroke-linecap="round" />
                                </g>
                            </svg>
                        </div>
                        <button className='fortnite text-xl group-hover:text-primary duration-150'>Lookoy</button>
                    </Link>
                    <Link to="div_game_three" smooth={true} duration={500} offset={-175} className={activeDiv === "div_game_three" ? "space-y-2 cursor-pointer group text-primary" : "space-y-2 cursor-pointer group"}>
                        <div className="flex justify-center items-center">
                            <svg className="w-8 stroke-current group-hover:stroke-primary duration-150" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                                    stroke-width="1.5" stroke-linecap="round" />
                                <path className="group-hover:scale-90 duration-300"
                                    d="M18 8.49998H14M18 14.5H14M18 17.5H14M10 8.49999H8M8 8.49999L6 8.49999M8 8.49999L8 6.49998M8 8.49999L8 10.5M9.5 14.5L8.00001 16M8.00001 16L6.50001 17.5M8.00001 16L6.5 14.5M8.00001 16L9.49999 17.5"
                                    stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </div>
                        <button className='fortnite text-xl group-hover:text-primary duration-150'>Kajikaji</button>
                    </Link>
                </div>
            </div>
            <div className="navbar-end flex gap-4 items-center">
                <Sound />
                <ThemeChanger />
            </div>
        </div>
    )
}

export default Navbar