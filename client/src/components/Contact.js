import React from "react";
import WhatsApp from "../assets/WhatsApp.svg";
import siddhant from "../assets/siddhant.JPG";
import abhishek from "../assets/abhishek.jpg";
import saurabh from "../assets/saurabh.jpg";

function Contact() {
  let message = `Welcome to Rupay Bank, where financial dreams find their wings! We're more than just a bank; we're your trusted partner in every step of your financial journey. From seamless transactions to personalized services, we're committed to making banking simple, secure, and rewarding for you. Join us today and experience banking the Rupay way!`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title font-bold text-4xl">The Team Behind RuPay Bank</h2><br></br>
            <p className="section-subtitle font-semibold text-xl">{message}</p><br></br>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item flex flex-col items-center">
              <img src={abhishek} className="team-img h-36 w-52" alt="pic" />
              <h3>Abhishek Shivade</h3>
              <div className="team-info">
                <p className="font-semibold">008 Juhu</p>
                <p>
                Abhishek is the driving force behind our project, currently pursuing advanced studies at CDAC. He excels at leading our team through complex challenges. In his spare time, Abhishek enjoys exploring technologies.

                </p>

                <div className=" flex items-center gap-2 w-fit mx-auto my-5">
                  <div className="w-10 h-10">
                    <a
                      href="https://www.linkedin.com/in/abhishek-shivade/"
                      target="_blank"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <circle
                            cx="512"
                            cy="512"
                            r="512"
                            style={{
                              fill: "#0a66c2",
                              stroke: "#ffffff",
                              strokeWidth: "10",
                            }}
                          ></circle>
                          <path
                            d="M693.1 693.2h-76v-119c0-28.4-.6-64.9-39.6-64.9-39.6 0-45.7 30.9-45.7 62.8v121.1h-76V448.4h73v33.4h1c10.2-19.2 35-39.5 72-39.5 77 0 91.2 50.7 91.2 116.6l.1 134.3zm-323-278.3c-24.5 0-44.1-19.8-44.1-44.1s19.7-44.1 44.1-44.1c24.4 0 44.1 19.8 44.1 44.1s-19.8 44.1-44.1 44.1zm38.1 278.3H332V448.4h76.2v244.8zM731.1 256H293.9c-20.9 0-37.9 16.5-37.9 37v439c0 20.4 16.9 37 37.9 37H731c20.9 0 38-16.5 38-37V293c0-20.5-17.1-37-37.9-37z"
                            style={{ fill: "#fff" }}
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="w-10 h-10">
                    <a href="mailto:abhishekshivade@gmail.com" target="_blank">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                            fill="white"
                          ></path>{" "}
                          <path
                            d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                            fill="#EA4335"
                          ></path>{" "}
                          <path
                            d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                            fill="#FBBC05"
                          ></path>{" "}
                          <path
                            d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                            fill="#34A853"
                          ></path>{" "}
                          <path
                            d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                            fill="#4285F4"
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="w-10 h-10">
                    <a href="https://wa.me/9518973338" target="_blank">
                      <img src={WhatsApp} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item flex flex-col items-center">
              <img src={siddhant} className="team-img " alt="siddhant" />
              <h3>Siddhant Lahane</h3>
              <div className="team-info">
                <p className="font-semibold">084 Juhu</p>
                <p>
                Siddhant specializes in end-to-end development. His training at CDAC has equipped him with the latest skills. In his free time, Siddhant is an avid reader of non-fiction books and enjoys exploring new technologies.
                </p>

                <div className=" flex items-center gap-2 w-fit mx-auto my-5">
                  <div className="w-10 h-10">
                    <a
                      href="https://www.linkedin.com/in/siddhant-lahane-8b1715129/"
                      target="_blank"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <circle
                            cx="512"
                            cy="512"
                            r="512"
                            style={{
                              fill: "#0a66c2",
                              stroke: "#ffffff",
                              strokeWidth: "10",
                            }}
                          ></circle>
                          <path
                            d="M693.1 693.2h-76v-119c0-28.4-.6-64.9-39.6-64.9-39.6 0-45.7 30.9-45.7 62.8v121.1h-76V448.4h73v33.4h1c10.2-19.2 35-39.5 72-39.5 77 0 91.2 50.7 91.2 116.6l.1 134.3zm-323-278.3c-24.5 0-44.1-19.8-44.1-44.1s19.7-44.1 44.1-44.1c24.4 0 44.1 19.8 44.1 44.1s-19.8 44.1-44.1 44.1zm38.1 278.3H332V448.4h76.2v244.8zM731.1 256H293.9c-20.9 0-37.9 16.5-37.9 37v439c0 20.4 16.9 37 37.9 37H731c20.9 0 38-16.5 38-37V293c0-20.5-17.1-37-37.9-37z"
                            style={{ fill: "#fff" }}
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="w-10 h-10">
                    <a href="mailto:siddhantlahane66@gmail.com" target="_blank">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                            fill="white"
                          ></path>{" "}
                          <path
                            d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                            fill="#EA4335"
                          ></path>{" "}
                          <path
                            d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                            fill="#FBBC05"
                          ></path>{" "}
                          <path
                            d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                            fill="#34A853"
                          ></path>{" "}
                          <path
                            d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                            fill="#4285F4"
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="w-10 h-10">
                    <a href="https://wa.me/9881029469" target="_blank">
                      <img src={WhatsApp} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item flex flex-col items-center">
              <img src={saurabh} className="team-img" alt="pic" />
              <h3>Saurabh Pande</h3>
              <div className="team-info">
                <p className="font-semibold">090 Kharghar</p>
                <p>
                Saurabh is an integral part of our team. His coursework at CDAC has enhanced his expertise in various technologies. When he's not coding, saurabh enjoys solving complex puzzles and playing chess
                </p>

                <div className=" flex items-center gap-2 w-fit mx-auto my-5">
                  <div className="w-10 h-10">
                    <a
                      href="https://www.linkedin.com/in/saurabh-pande-31bb4b244/"
                      target="_blank"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <circle
                            cx="512"
                            cy="512"
                            r="512"
                            style={{
                              fill: "#0a66c2",
                              stroke: "#ffffff",
                              strokeWidth: "10",
                            }}
                          ></circle>
                          <path
                            d="M693.1 693.2h-76v-119c0-28.4-.6-64.9-39.6-64.9-39.6 0-45.7 30.9-45.7 62.8v121.1h-76V448.4h73v33.4h1c10.2-19.2 35-39.5 72-39.5 77 0 91.2 50.7 91.2 116.6l.1 134.3zm-323-278.3c-24.5 0-44.1-19.8-44.1-44.1s19.7-44.1 44.1-44.1c24.4 0 44.1 19.8 44.1 44.1s-19.8 44.1-44.1 44.1zm38.1 278.3H332V448.4h76.2v244.8zM731.1 256H293.9c-20.9 0-37.9 16.5-37.9 37v439c0 20.4 16.9 37 37.9 37H731c20.9 0 38-16.5 38-37V293c0-20.5-17.1-37-37.9-37z"
                            style={{ fill: "#fff" }}
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="w-10 h-10">
                    <a href="mailto:saurabhpande062@gmail.com" target="_blank">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                            fill="white"
                          ></path>{" "}
                          <path
                            d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                            fill="#EA4335"
                          ></path>{" "}
                          <path
                            d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                            fill="#FBBC05"
                          ></path>{" "}
                          <path
                            d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                            fill="#34A853"
                          ></path>{" "}
                          <path
                            d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                            fill="#C5221F"
                          ></path>{" "}
                          <path
                            d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                            fill="#4285F4"
                          ></path>{" "}
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div className="w-10 h-10">
                    <a href="https://wa.me/9561908640" target="_blank">
                      <img src={WhatsApp} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
