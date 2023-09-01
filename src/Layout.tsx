import { useState } from "react";
import Header from "./components/Header";
import { references } from "./CONSTS";
import { ChevronDown, ExternalLink } from "lucide-react";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: IProps) => {
  const [footerOpen, setFooterOpen] = useState(false);
  return (
    <div className="h-full flex flex-col">
      <Header />

      <main className=" flex-1 mt-10">{children}</main>

      <footer className="max-w-lg w-full px-4 m-auto mb-4">
        <div className="py-2">
          <p className="text-xs text-center font-normal">
            Developed by{" "}
            <a
              title="Carolina Valladares"
              target="_blank"
              className="text-orange-500 hover:text-orange-500"
              href="https://github.com/carolinavalladares"
            >
              Carolina Valladares
            </a>
          </p>
        </div>

        <button
          onClick={() => setFooterOpen(!footerOpen)}
          className="flex items-center justify-center gap-1 m-auto mb-2"
        >
          <h2 className="font-medium text-sm leading-none mb-1">References</h2>
          <ChevronDown
            className={`transition-all ${
              footerOpen ? "rotate-180" : "  rotate-0"
            }`}
            size={20}
            strokeWidth={1}
          />
        </button>

        <ul
          className={`w-full transition-all ${
            footerOpen ? "scale-y-100 h-fit" : " scale-y-0 h-0"
          } overflow-hidden`}
        >
          {references.map((reference, i) => {
            return (
              <li key={i}>
                <a
                  target="_blank"
                  className="hover:text-white text-white text-sm font-normal flex items-center justify-between gap-1 mb-2"
                  href={reference}
                >
                  <span>{reference}</span>

                  <button
                    title="go to page"
                    className="text-xs w-7 h-7 p-0 flex items-center justify-center"
                  >
                    <ExternalLink size={16} strokeWidth={1} />
                  </button>
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
