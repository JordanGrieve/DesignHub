import { GiHamburgerMenu } from "react-icons/gi";

function BurgerMenu() {
  return (
    <div className="fixed top-12 right-12 z-20 cursor-pointer">
      <GiHamburgerMenu size={26} />
    </div>
  );
}

export default BurgerMenu;
