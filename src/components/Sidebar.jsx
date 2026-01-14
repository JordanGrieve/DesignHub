import Button from "./Common/Button.jsx";

import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

function Sidebar() {
  return (
    <div className="Sidebar p-12 w-88 h-screen fixed top-0 left-0 overflow-y-auto">
      <h1 className="text-5xl">DesignHub</h1>
      <p className="my-5">
        UI/UX DESIGN STUDIO CREATING BEAUTIFUL, INTUITIVE DIGITAL EXPERIENCES
        THAT ENGAGE USERS AND DRIVE BUSINESS GROWTH.
      </p>
      <hr />
      <p className="my-5">GET IN CONTACT</p>
      <Button
        title="Contact Us"
        onClick={() => alert("Take them to contact page!!")}
      />

      {/* Icons */}
      <div className="flex flex-row justify-between">
        <div className="mt-20 flex flex-col gap-2">
          <CiFacebook className="size-8 text-white" />
          <CiLinkedin className="size-8 text-white" />
          <CiInstagram className="size-8 text-white" />
          <VscGithubAlt className="size-7 text-white" />
        </div>

        {/* Location */}
        <div>
          <p className="rotate-270 origin-bottom-right">SCOTLAND, EDINBURGH</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
