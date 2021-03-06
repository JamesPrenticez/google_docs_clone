import { useSession, signOut } from "next-auth/react"
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  const {data: session} = useSession();
  
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      {/*Hamburger Menu Icon*/}
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="md:inline-flex h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>

      {/*Document Icon*/}
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>

      {/*Search Bar*/}
      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-blue-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent focus:outline-none focus:ring-0"
        />
      </div>

      {/*Apps Button*/}
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      {/*Sign In/Out*/}
      <img 
        loading="lazy"
        onClick={signOut}
        className="hidden md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2"
        src={session?.user.image}
        alt=""
      />
    </header>
  );
}

export default Header;
