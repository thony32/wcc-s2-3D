import triangle3d from "../assets/triangle3D.svg";
import star3d from "../assets/star3D.svg";
import line from "../assets/underline.svg";
function Presentation() {
  return (
    <div>
<<<<<<< HEAD
      <div className="lg:grid lg:grid-cols-5 px-8 2xl:px-36 2xl:py-12">
        <div className="hidden lg:block lg:px-8 lg:py-16 2xl:px-16 2xl:py-16">
          <img src={triangle3d} alt="" />
        </div>
        <div className="lg:col-span-3 space-y-4 p-8 bg-slate-800 rounded-2xl">
          <div className="">
            <h1 className="fortnite border-b-2 border-base-500 w-1/2 text-xl text-base-100">Momba ireo kilalao rehetra !</h1>
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-base-300">
              Toy izao ny fomba hilalaovana azy ireo...
              <img src={line} alt="" className="w-2/3 h-4" />
            </h1>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div>
                <h1 className="font-bold text-base-100 text-lg">Puzzle</h1>
              </div>
              <div>
                <p className="text-base-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  non facere dicta libero possimus veniam quibusdam maiores
                  minus inventore perspiciatis expedita nemo consequuntur
                  voluptates excepturi, deserunt reiciendis. Iusto, molestiae
                  dolor.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="font-bold text-base-200 text-lg">Lokoy ny sary</h1>
              </div>
              <div>
                <p className="text-base-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere qui modi nam amet eaque molestias, aperiam maxime,
                  doloremque repellat inventore accusamus. Voluptatem debitis
                  nisi nesciunt accusantium sint beatae magnam ipsum?
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="font-bold text-base-200 text-lg">Fantaro hoe firy ny mifanaraka?</h1>
              </div>
              <div>
                <p className="text-base-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  tenetur hic quos eaque omnis qui porro praesentium deserunt
                  libero rem expedita, a debitis laudantium, quod et nam sequi!
                  Architecto, facere!
                </p>
=======
      <div className="hidden">
        <img src={star3d} alt="" />
        <img src={triangle3d} alt="" />
        <img src={line} alt="" className="w-2/3 h-4" />
      </div>

      <div>
        <div className="flex justify-center">
          <div className="card w-5/6 bg-neutral text-neutral-content mx-auto">
            <div className="card-body text-center">
              <h2>Ireo lalao</h2>
              <p>We are using cookies for no reason.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-x">
                <div className="flex justify-center">
                  <svg className="fill-base-100 w-10 h-10" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 32.005c-0.634 0-1.231-0.246-1.68-0.693l-13.641-13.64c-0.923-0.927-0.923-2.436-0.002-3.361l4.997-4.996c0.308-0.309 0.782-0.382 1.17-0.179 0.386 0.202 0.598 0.632 0.522 1.062-0.051 0.286-0.074 0.515-0.074 0.723 0 2.188 1.78 4.005 3.969 4.005 2.191 0 3.79-1.817 3.79-4.005 0-2.191-1.599-3.971-3.79-3.971-0.205 0-0.433 0.024-0.719 0.074-0.434 0.080-0.86-0.135-1.062-0.521-0.202-0.388-0.129-0.862 0.179-1.17l4.659-4.66c0.902-0.898 2.463-0.896 3.361-0.002l3.411 3.413c0.712-2.213 2.79-3.82 5.235-3.82 3.032 0 5.499 2.468 5.499 5.501 0 2.446-1.605 4.523-3.82 5.234l3.314 3.312c0.925 0.928 0.925 2.436 0.001 3.363l-13.639 13.64c-0.451 0.45-1.047 0.696-1.681 0.696zM5.465 12.351l-3.372 3.371c-0.145 0.146-0.145 0.389 0.002 0.537l13.636 13.637c0.191 0.189 0.342 0.192 0.537-0.002l13.636-13.637c0.146-0.148 0.146-0.387-0.001-0.536l-4.809-4.806c-0.301-0.301-0.379-0.76-0.194-1.143s0.589-0.61 1.016-0.557l0.152 0.020c0.084 0.011 0.168 0.025 0.256 0.025 1.93 0 3.499-1.569 3.499-3.497 0-1.931-1.57-3.501-3.499-3.501s-3.498 1.571-3.498 3.501c0 0.080 0.012 0.158 0.023 0.236l0.021 0.178c0.045 0.422-0.18 0.826-0.563 1.009-0.38 0.181-0.838 0.104-1.137-0.196l-4.904-4.907c-0.192-0.19-0.342-0.192-0.537 0.002l-3.035 3.035c2.603 0.644 4.356 2.999 4.356 5.798 0 3.291-2.498 6.004-5.79 6.004-2.798-0-5.152-1.972-5.795-4.572z"></path>
                  </svg>
                </div>
                <div className="flex justify-center">
                  <svg className="fill-base-100 w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41421 12.4142 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.5858 21.5858 11.25 22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM16.7705 2.27591C18.1384 0.908028 20.3562 0.908028 21.7241 2.27591C23.092 3.6438 23.092 5.86158 21.7241 7.22947L15.076 13.8776C14.7047 14.2489 14.4721 14.4815 14.2126 14.684C13.9069 14.9224 13.5761 15.1268 13.2261 15.2936C12.929 15.4352 12.6169 15.5392 12.1188 15.7052L9.21426 16.6734C8.67801 16.8521 8.0868 16.7126 7.68711 16.3129C7.28742 15.9132 7.14785 15.322 7.3266 14.7857L8.29477 11.8812C8.46079 11.3831 8.56479 11.071 8.7064 10.7739C8.87319 10.4239 9.07761 10.0931 9.31605 9.78742C9.51849 9.52787 9.7511 9.29529 10.1224 8.924L16.7705 2.27591ZM20.6634 3.33657C19.8813 2.55448 18.6133 2.55448 17.8312 3.33657L17.4546 3.7132C17.4773 3.80906 17.509 3.92327 17.5532 4.05066C17.6965 4.46372 17.9677 5.00771 18.48 5.51999C18.9923 6.03227 19.5363 6.30346 19.9493 6.44677C20.0767 6.49097 20.1909 6.52273 20.2868 6.54543L20.6634 6.16881C21.4455 5.38671 21.4455 4.11867 20.6634 3.33657ZM19.1051 7.72709C18.5892 7.50519 17.9882 7.14946 17.4193 6.58065C16.8505 6.01185 16.4948 5.41082 16.2729 4.89486L11.2175 9.95026C10.801 10.3668 10.6376 10.532 10.4988 10.7099C10.3274 10.9297 10.1804 11.1676 10.0605 11.4192C9.96337 11.623 9.88868 11.8429 9.7024 12.4017L9.27051 13.6974L10.3026 14.7295L11.5983 14.2976C12.1571 14.1113 12.377 14.0366 12.5808 13.9395C12.8324 13.8196 13.0703 13.6726 13.2901 13.5012C13.468 13.3624 13.6332 13.199 14.0497 12.7825L19.1051 7.72709Z" />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <svg className="stroke-base-100 w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4207 5.63965H21.7007" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.29956 5.64014H9.57956" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.4207 15.3301H21.7007" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.4207 21.3896H21.7007" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.0894 9.27V2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.29956 22L9.57956 14.73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.57956 22L2.29956 14.73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
>>>>>>> 75925c8 (haka)
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="hidden lg:block lg:px-8 lg:py-16 2xl:px-16">
          <img src={star3d} alt="" />
        </div>
=======


>>>>>>> 75925c8 (haka)
      </div>
    </div>
  );
}

export default Presentation;
