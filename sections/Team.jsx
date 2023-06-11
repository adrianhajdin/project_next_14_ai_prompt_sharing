import React from 'react';
import Image from 'next/image';

const people = [
  {
    name: 'Mick',
    role: 'Captain',
    imageUrl: '/portraitmick.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Simon',
    role: 'Obermaat',
    imageUrl: '/Matrose.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Anne',
    role: 'I. Offizierin',
    imageUrl: '/Offizier-weiblich.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Kalim',
    role: 'Maat',
    imageUrl: '/ancerIcon.svg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Theo',
    role: 'Smutje',
    imageUrl: '/ancerIcon.svg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'James',
    role: 'Funker',
    imageUrl: '/ancerIcon.svg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },]
  
  const Team = () => {      
  return (
    <section id="section-team" className="mt-[24vh] bg-gradient-to-b from-[#1A232E] to-[#1A232E] lg.
      lg:bg-[length:100vw_15vh] lg:bg-center lg:bg-no-repeat">
      <div className="py- mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-5 sm:space-y-1">
          <div className="space-y-3 sm:mx-auto sm:max-w-xl lg:max-w-5xl">
            <div className=" flex flex-row items-start justify-center gap-x-5">
              <h2 className="headingA text-6xl font-extrabold tracking-tight text-yellow-600 sm:text-7xl 2xl:text-6xl">
                Das Team
              </h2>
              <img
                src="/matroseimseil.png"
                width="60"
                height="auto"
                alt="LogoAlt"
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image src="/LogoAlt.png" width="200" height="20" alt="LogoAlt" />
            </div>
          </div>

          <p className="text-xl text-gray-100">Unser Team stellt sich vor</p>
        </div>
        <ul
          role="list"
          className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:mt-10 lg:max-w-5xl lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="space-y-6">
                <img
                  className="lg:border-5 mx-auto h-40 w-40 rounded-full lg:border-yellow-500 xl:h-56 xl:w-56"
                  src={person.imageUrl}
                  width="200"
                  height="auto"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="space-y-1 rounded-2xl p-1 text-3xl text-blue-100 font-black leading-6 lg:lg:bg-black/10">
                    <h3>{person.name}</h3>
                    <p className="text-yellow-600">{person.role}</p>
                  </div>
                  <ul role="list" className="flex justify-center space-x-5">
                    <li>
                      <a
                        href={person.twitterUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Team