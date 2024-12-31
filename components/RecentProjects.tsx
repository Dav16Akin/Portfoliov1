"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projectData } from "@/constants/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="px-8" id="projects">
      <div className="flex flex-wrap w-full items-center justify-center gap-8">
        <h1 className="sm:text-5xl text-3xl text-center sm:p-8 capitalize">
          Here's a glimpse of some{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tl from-slate-800 via-blue-600 to-zinc-400">
            Exciting Projects
          </span>{" "}
          I've done
        </h1>
        {projectData.map((item) => (
          <Link href={item.link} key={item.id}>
            {" "}
            <CardContainer >
              <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[32rem] h-auto rounded-xl p-8 border">
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full mb-20 object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl text-left font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-left text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.des}
                </CardItem>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <CardItem>
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>
                  </CardItem>

                  <CardItem>
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
