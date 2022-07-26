import { motion } from "framer-motion";
import React from "react";
import { Page } from "../types";

interface Props {
  name: string;
  page: Page;
  activePage: Page;
  setActivePage: React.Dispatch<React.SetStateAction<Page>>;
}

const NavigationItem: React.FC<Props> = ({
  name,
  page,
  activePage,
  setActivePage,
}) => {
  const setPage = () => {
    setActivePage(page);
  };

  return (
    <li className="px-2 relative">
      <a href="#" className="font-medium" onClick={setPage}>
        {name}
      </a>
      {activePage === page ? (
        <motion.div
          className="max-h-[2px] h-[2px] bg-primary absolute bottom-0 right-0 left-0"
          layoutId="underline"
        ></motion.div>
      ) : null}
    </li>
  );
};

export default NavigationItem;
