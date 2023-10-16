import { AiFillHome, AiFillContainer, AiFillContacts } from "react-icons/ai";
import CustomNavLink from "./customNavLink";

export default function Sidebar() {
  return (
    <div className="w-[300px]">
      <nav className="w-full h-full bg-slate-700 rounded-md">
        <div className="w-full text-center py-2 border-b border-black">
          <h1 className="text-4xl font-bold text-slate-200">React</h1>
        </div>

        <ul className="grid">
          <CustomNavLink to="/" title="Home" icon={<AiFillHome />} />
          <CustomNavLink to="about" icon={<AiFillContainer />} title="About" />
          <CustomNavLink
            to="contact"
            icon={<AiFillContacts />}
            title="Contact"
          />
        </ul>
      </nav>
    </div>
  );
}
