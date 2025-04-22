import React, { useState } from "react";
import ProjectOne from "../ProjectOne";
import Button from "../Button";
import Card from "./Card";

const Projects = () => {
  const [project, setProject] = useState("Kshema2.0");
  const handleOpenUrl = () => {
    if(project === "Kshema2.0" || project === "Kshema"){
        window.open(
          "https://play.google.com/store/search?q=kshema&c=apps&hl=en_IN",
          "_blank"
        );
    }
    else {
        window.open(
          "https://play.google.com/store/search?q=smart%20cce&c=apps&hl=en_IN",
          "_blank"
        );
    }
  };
  return (
    <div className="p-8 w-[80%]">
      <ProjectOne>
        {project === "Kshema2.0" && (
          <p className="text-base pt-10 text-[#A9AEB9]">
            <span className="text-white">Kshema 2.0</span> is a mobile-first{" "}
            <span className="text-white">crop insurance</span> platform built
            with{" "}
            <span className="text-white">
              React Native, Redux, and Storybook
            </span>
            . It features{" "}
            <span className="text-white">
              polygon drawing on Google Maps, geo-tagging, multilingual support,
              and video capture
            </span>
            . Redux ensures smooth state management across complex workflows.
            Storybook enabled reusable, consistent UI components for scalable
            development. Designed to simplify crop insurance with a seamless,
            user-centric experience.
          </p>
        )}

        {project === "Kshema" && (
          <p className="text-base pt-10 text-[#A9AEB9]">
            <span className="text-white">Kshema</span> is a mobile crop insurance application built using the <span className="text-white">Ionic
            framework</span> to serve rural farmers and field agents. The app enables
            quick and efficient crop claim registration, <span className="text-white">geo-tagged field
            verification, and multilingual support for accessibility</span>. Integrated
            camera access, document uploads, and <span className="text-white">offline</span> capabilities ensure
            seamless functionality even in remote areas. With a clean UI and
            robust form validations, Kshema simplifies insurance workflows and
            reduces manual errors, improving turnaround times for claim
            processing.
          </p>
        )}

        {project === "CCE" && (
          <p className="text-base pt-10 text-[#A9AEB9]">
            <span className="text-white">Smart CCE</span> is a mobile application designed to streamline the Crop
            Cutting Experiment (CCE) process used in agricultural yield
            estimation. Built with <span className="text-white">Ionic and Angular</span>, it enables field agents to
            efficiently collect and <span className="text-white">store data offline using SQLite</span>, ensuring
            reliable operation in remote rural areas. The app includes GPS-based
            geo-tagging, image capture, form validation, and multilingual
            support to enhance accuracy and usability. Smart CCE minimizes
            paperwork, standardizes data collection, and improves the
            transparency of crop yield assessments.
          </p>
        )}
      </ProjectOne>
      <div className="ml-8 gap-4 flex flex-row">
        <Button
          text="Project 1"
          isActive={project === "Kshema2.0"}
          onclick={() => {
            setProject("Kshema2.0");
          }}
          className="w-auto px-3 py-2 text-sm"
        />
        <Button
          text="Project 2"
          isActive={project === "Kshema"}
          onclick={() => {
            setProject("Kshema");
          }}
          className="w-auto px-3 py-2 text-sm"
        />
        <Button
          text="Project 3"
          isActive={project === "CCE"}
          onclick={() => {
            setProject("CCE");
          }}
          className="w-auto px-3 py-2 text-sm"
        />
      </div>
      <div className="flex justify-center items-center justify-end mt-15">
        <div className="p-1 bg-[#262628] border-[#3C3C3E] border-[2px] rounded-3xl hover:scale-105">
          {project === "Kshema2.0" && <Card title="Kshema 2.0" subtitle="Crop Insurance" />}
          {project === "Kshema" && <Card title="Kshema" subtitle="Crop Insurance" />}
          {project === "CCE" && <Card title="Smart CCE" subtitle="Crop Cutting Experiment" />}
        </div>
      </div>
      <div className="mt-25 h-125 flex flex-row justify-between align-center">
      <div className="relative h-full group">
  {/* Kshema 2.0 */}
  {project === "Kshema2.0" && (
    <>
      {/* Hidden by default, visible on hover */}
      <div className="absolute top-10 left-20 w-60 h-125 bg-gray-700 rounded-xl bg-[url('assets/icons/KshemaDashboard.png')] bg-cover bg-center opacity-100 group-hover:left-70 transition-opacity duration-300" />

      {/* Always visible */}
      <div className="absolute top-0 left-0 w-60 h-125 bg-gray-800 rounded-xl bg-[url('assets/icons/Kshema2Main.png')] bg-cover bg-center transition-opacity duration-300" />
    </>
  )}

  {/* Kshema */}
  {project === "Kshema" && (
    <>
      <div className="absolute top-10 left-20 w-60 h-125 bg-gray-700 rounded-xl bg-[url('assets/icons/KshemaCat.png')] bg-cover bg-center opacity-100 group-hover:left-70 transition-opacity duration-300" />
      <div className="absolute top-0 left-0 w-60 h-125 bg-gray-800 rounded-xl bg-[url('assets/icons/KshemaMain.png')] bg-cover bg-center transition-opacity duration-300" />
    </>
  )}

  {/* Smart CCE */}
  {project === "CCE" && (
    <>
      <div className="absolute top-10 left-20 w-60 h-125 bg-gray-700 rounded-xl bg-[url('assets/icons/CCE.png')] bg-cover bg-center opacity-100 group-hover:left-70 transition-opacity duration-300" />
      <div className="absolute top-0 left-0 w-60 h-125 bg-gray-800 rounded-xl bg-[url('assets/icons/CCEMain.png')] bg-cover bg-center transition-opacity duration-300" />
    </>
  )}
</div>

        <div className="ml-120 mt-20">
          <div>
            {project === "Kshema2.0" && <> <div>
              <p className="text-3xl font-bold">
                Kshema 2.0 – Currently Developing
              </p>
              <p className="text-base pt-10 text-[#A9AEB9]">
                Kshema 2.0 is a mobile-first crop insurance platform built for
                farmers and field agents. It simplifies the claim process using
                features like geo-tagged polygon drawing, video capture, and
                multilingual support. The app ensures accurate field-level data
                collection and speeds up claim verification. Redux handles
                complex workflows with consistent state management, while
                Storybook powers reusable UI components. Overall, it provides a
                seamless, efficient, and scalable solution for modernizing crop
                insurance operations.
              </p>
            </div>
            <Button
            text="See More ⟶"
            onclick={handleOpenUrl}
            className="w-auto px-3 py-2 text-sm mt-15"
          /></>}
            {project === "Kshema" && <><div>
              <p className="text-3xl font-bold">
                Kshema
              </p>
              <p className="text-base pt-10 text-[#A9AEB9]">
                Kshema is a mobile crop insurance app built with Ionic and
                Angular, focused on simplifying claim registration and
                verification for farmers and field officers. It supports
                geo-tagged photo capture, multilingual input, and document
                uploads for accurate, on-site data collection. With offline
                capabilities and robust form validation, the app ensures smooth
                performance even in low-connectivity areas. Cordova plugins
                enable native functionality, enhancing usability in rural
                environments. Overall, Kshema improves efficiency, reduces
                manual errors, and speeds up crop insurance claim processing.
              </p>
            </div>
            <Button
                text="See More ⟶"
                onclick={handleOpenUrl}
                className="w-auto px-3 py-2 text-sm mt-15"
            />
            </>}
            {project === "CCE" && <> <div>
              <p className="text-3xl font-bold">
                Smart CCE
              </p>
              <p className="text-base pt-10 text-[#A9AEB9]">
                Smart CCE is a mobile application developed to digitize and
                streamline the Crop Cutting Experiment (CCE) process used in
                agricultural yield estimation. Built using Ionic and Angular
                with local storage via SQLite, it enables accurate offline data
                entry in remote field locations. The app features geo-tagging,
                photo capture, dynamic forms, and multilingual support for
                usability across regions. Its user-friendly design reduces
                paperwork, standardizes data collection, and ensures
                transparency in yield measurement. Smart CCE enhances the speed,
                accuracy, and reliability of field-level agricultural data.
              </p>
            </div>
            <Button
                text="See More ⟶"
                onclick={handleOpenUrl}
                className="w-auto px-3 py-2 text-sm mt-15"
            />
            </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
