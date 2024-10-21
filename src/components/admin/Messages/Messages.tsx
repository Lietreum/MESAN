import React, { useState } from "react";
import UserOne from '../../../assets/admin/images/user/user-01.png';

type MessagesProps = {};

const Messages: React.FC<MessagesProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <main className="u-min-h-screen">
      <div className="mx-auto h-[calc(100vh-80px)] max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        {/* Breadcrumb Start */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-bold text-black dark:text-white">
            Messages
          </h2>
        </div>
        {/* Breadcrumb End */}

        <div className="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
          <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
            <div className="hidden h-full flex-col xl:flex xl:w-1/4">
              {/* Chat List Start */}
              <div className="sticky border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                <h3 className="text-lg font-medium text-black dark:text-white 2xl:text-xl">
                  Active Conversations
                  <span className="rounded-md border-[.5px] border-stroke bg-gray-2 px-2 py-0.5 text-base font-medium text-black dark:border-strokedark dark:bg-boxdark-2 dark:text-white 2xl:ml-4">
                    7
                  </span>
                </h3>
              </div>
              <div className="flex max-h-full flex-col overflow-auto p-5">
                <form className="sticky mb-7">
                  <input
                    type="text"
                    className="w-full rounded border border-stroke bg-gray-2 py-2.5 pl-5 pr-10 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2"
                    placeholder="Search..."
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
                        fill="#637381"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.957 11.958C12.2499 11.6651 12.7247 11.6651 13.0176 11.958L16.2801 15.2205C16.573 15.5133 16.573 15.9882 16.2801 16.2811C15.9872 16.574 15.5124 16.574 15.2195 16.2811L11.957 13.0186C11.6641 12.7257 11.6641 12.2508 11.957 11.958Z"
                        fill="#637381"
                      />
                    </svg>
                  </button>
                </form>
                <div className="no-scrollbar max-h-full space-y-2.5 overflow-auto">
                  {/* Chat List Item */}
                  <div className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark">
                    <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
                      <img
                        src={UserOne}
                        alt="profile"
                        className="h-full w-full object-cover object-center"
                      />
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span>
                    </div>
                    <div className="w-full">
                      <h5 className="text-sm font-medium text-black dark:text-white">
                        Henry Dholi
                      </h5>
                      <p className="text-sm font-medium">
                        I came across your profile and...
                      </p>
                    </div>
                  </div>
                  {/* Repeat for other chat list items */}
                </div>
              </div>
              {/* Chat List End */}
            </div>
            <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4">
              {/* Chat Box Start */}
              <div className="sticky flex items-center justify-between border-b border-stroke px-6 py-4.5 dark:border-strokedark">
                <div className="flex items-center">
                  <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
                    <img
                      src={UserOne}
                      alt="avatar"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      Henry Dholi
                    </h5>
                    <p className="text-sm font-medium">Reply to message</p>
                  </div>
                </div>
                <div>
                  {/* Dropdown Menu */}
                  <div className="relative">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
                          fill=""
                        />
                        <path
                          d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                          fill=""
                        />
                        <path
                          d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 0H12C12.9 0 13.7 0.4 14.2 1L15.9 2.7C16.4 3.2 16.8 4 16.8 5V14C16.8 15.1 15.9 16 14.8 16H2.3C1.2 16 0.3 15.1 0.3 14V2C0.3 0.9 1.2 0 2.3 0H4Z"
                              fill="#A3A3A3"
                            />
                            <path
                              d="M6.5 6C5.7 6 5 6.7 5 7.5C5 8.3 5.7 9 6.5 9C7.3 9 8 8.3 8 7.5C8 6.7 7.3 6 6.5 6ZM9.5 6C8.7 6 8 6.7 8 7.5C8 8.3 8.7 9 9.5 9C10.3 9 11 8.3 11 7.5C11 6.7 10.3 6 9.5 6ZM6.5 10C5.7 10 5 10.7 5 11.5C5 12.3 5.7 13 6.5 13C7.3 13 8 12.3 8 11.5C8 10.7 7.3 10 6.5 10ZM9.5 10C8.7 10 8 10.7 8 11.5C8 12.3 8.7 13 9.5 13C10.3 13 11 12.3 11 11.5C11 10.7 10.3 10 9.5 10Z"
                              fill="#A3A3A3"
                            />
                          </svg>
                          Edit
                        </button>
                        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 2C1.44772 2 1 2.44772 1 3V14C1 14.5523 1.44772 15 2 15H12C12.5523 15 13 14.5523 13 14V6.41421C13 6.01639 12.842 5.63486 12.5607 5.35355L9.64645 2.43934C9.36514 2.15804 8.98361 2 8.58579 2H2Z"
                              fill="#A3A3A3"
                            />
                            <path
                              d="M2 4H8.29289L11 6.70711V14H2V4Z"
                              fill="#A3A3A3"
                            />
                          </svg>
                          Archive
                        </button>
                        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                          <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.58579 2L13 6.41421V13H2V2H8.58579ZM2 14H13C13.5523 14 14 13.5523 14 13V6.41421C14 6.01639 13.842 5.63486 13.5607 5.35355L9.64645 1.43934C9.36514 1.15804 8.98361 1 8.58579 1H2C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14Z"
                              fill="#A3A3A3"
                            />
                            <path
                              d="M4.5 7.5C4.22386 7.5 4 7.72386 4 8C4 8.27614 4.22386 8.5 4.5 8.5H11.5C11.7761 8.5 12 8.27614 12 8C12 7.72386 11.7761 7.5 11.5 7.5H4.5Z"
                              fill="#A3A3A3"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Chat Box End */}
              <div className="flex h-full flex-col justify-between overflow-auto p-6">
                <div className="flex flex-col gap-4">
                  {/* Messages Content */}
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col items-end">
                      <div className="w-full max-w-xs rounded bg-primary px-5 py-3 text-white">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                          diam nonumy eirmod.
                        </p>
                      </div>
                      <span className="mt-1 text-xs text-meta-3">4:32 PM</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-start">
                    <div className="flex flex-col items-start">
                      <div className="w-full max-w-xs rounded bg-gray px-5 py-3 text-black">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                          diam nonumy eirmod.
                        </p>
                      </div>
                      <span className="mt-1 text-xs text-meta-3">4:40 PM</span>
                    </div>
                  </div>
                </div>
                <div className="relative mt-4 flex items-center">
                  <input
                    type="text"
                    className="w-full rounded border border-stroke bg-gray-2 py-2.5 px-5 text-black outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
                    placeholder="Type a message"
                  />
                  <button className="absolute right-3.5">
                    <svg
                      className="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.99967 1.66666C5.3977 1.66666 1.66634 5.39802 1.66634 9.99999C1.66634 14.602 5.3977 18.3333 9.99967 18.3333C14.6016 18.3333 18.333 14.602 18.333 9.99999C18.333 5.39802 14.6016 1.66666 9.99967 1.66666ZM0.833008 9.99999C0.833008 4.93991 4.93959 0.833324 9.99967 0.833324C15.0598 0.833324 19.1663 4.93991 19.1663 9.99999C19.1663 15.0601 15.0598 19.1667 9.99967 19.1667C4.93959 19.1667 0.833008 15.0601 0.833008 9.99999ZM10.4601 6.055C10.6145 6.23479 10.6242 6.49255 10.4808 6.68456L8.14797 9.66666H12.5C12.7239 9.66666 12.917 9.82974 12.9654 10.0482C13.0137 10.2666 12.9035 10.4908 12.6997 10.5988L6.69967 13.5988C6.49268 13.7077 6.23519 13.6555 6.08075 13.4757C5.9263 13.2959 5.91665 13.0382 6.0601 12.8462L8.39296 9.86416H4.16634C3.94321 9.86416 3.75001 9.70108 3.70165 9.48263C3.65328 9.26419 3.76347 9.04 3.96728 8.93196L9.96728 5.93196C10.1743 5.82302 10.4318 5.87521 10.5862 6.055L10.4601 6.055Z"
                        fill="#3C50E0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Chat Box Wrapper End */}
          </div>
          {/* Chatbox End */}
        </div>
      </div>
      {/* Main Content End */}
    </main>
  );
};

export default Messages;
