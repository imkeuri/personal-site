import {Button} from "@/components/ui/button.tsx";

const Navbar = () => {

  return (
      <nav className="grid gap-2 border-t border-gray-200 shrink-0 py-4 md:py-6 dark:border-gray-800 text-[#f1f7fe] bg-[#0e2743]">
        <div className="flex items-center justify-between px-4 text-xl font-semibold md:px-6">
          <a className="font-bold " href="#">
            Keuri Castillo
          </a>
          <nav className="hidden space-x-4 font-medium md:flex">
            <a
                className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                href="#"
            >
              Home
            </a>
            <a
                className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                href="#"
            >
              About
            </a>
            <a
                className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                href="#"
            >
              Portfolio
            </a>
            <a
                className="border-b-2 border-transparent transition-colors hover:border-[#f1f7fe] dark:hover:border-gray-50"
                href="#"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-[#0e2743]" size="sm" variant="outline">
            Contact Me
          </Button>
        </div>
      </nav>
  );
};

export default Navbar;
