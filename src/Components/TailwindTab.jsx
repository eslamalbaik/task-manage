// TailwindTabs by @cassidoo
// github.com/cassidoo/react-tailwind-tabs

import React, { useState, createContext, useContext, Children } from "react";


const TabsContext = createContext();

function TailwindTabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
	// F0F1F6
	// flex justify-center items-start lg:justify-center lg:flex-row lg:items-start  md:flex-row-reverse md:items-start md:justify-between
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <section className=" bg-[#F0F1F6]">
        <div className="lg:flex max-[1024px]:relative h-screen ">{children}</div>
      </section>
    </TabsContext.Provider>
  );
}

const TabContext = createContext();

function TailwindTabList({ children }) {
	const wrappedChildren = Children.map(children, (child, index) => (
	  <TabContext.Provider value={index}>{child}</TabContext.Provider>
	));
  
	return (
	  <div className="block  max-[1024px]:absolute max-[1024px]:bottom-0 max-[1024px]:right-1/4   border-t-2 md:border-t-0 md:border-r-2 border-[#979399] border-opacity-5 mt-auto md:mt-0">
		{/* Hide these elements on mobile, show on md and up */}
		<h1 className="text-2xl font-medium pb-4 hidden md:block">Manage Account</h1>
		<p className="py-4 hidden md:block">
		  Easily manage your account and security settings across all our services,
		  <span className="text-blue-400"> Need Help?</span>
		</p>
		<h2 className="text-xl font-medium pb-4 pt-4 hidden md:block">Account Settings</h2>
		
		{/* Only the list is visible on all screen sizes */}
		<ul className= "flex  lg:flex-col  max-[1024px]:flex-row max-[1024px]:justify-center max-[1024px]:items-center mb-6">{wrappedChildren}</ul>
	  </div>
	);
  }
  
  function TailwindTab({ children, isDisabled, ...rest }) {
	const index = useContext(TabContext);
	const { activeIndex, setActiveIndex } = useContext(TabsContext);
	const isActive = index === activeIndex;
	return (
	  <li
		className={`flex justify-start gap-2 items-center  cursor-pointer font-medium mr-2 p-4 rounded-2xl ${
		  isDisabled
			? "disabled cursor-not-allowed opacity-50"
			: isActive
			? `active bg-[#097969] text-white`
			: ""
		}`}
		onClick={isDisabled ? undefined : () => setActiveIndex(index)}
		key={index + "tab"}
		{...rest}
	  >
		{children[0]} {/* Show the icon */}
		<span className="hidden md:inline">{children.slice(1)}</span> {/* Hide label on mobile */}
	  </li>
	);
  }
  

function TailwindTabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);
  return <div>{children[activeIndex]}</div>;
}

function TailwindTabPanel({ children }) {
  return children;
}

function TailwindComposedTabs({ data }) {
  return (
    <TailwindTabs>
	  <TailwindTabList>
        {data.map((tab, i) => (
          <TailwindTab isDisabled={tab.disabled} key={`tw-tab-${i}`}>
			{tab.icon}
            {tab.label}
          </TailwindTab>
        ))}
      </TailwindTabList>
      <TailwindTabPanels>
        {data.map((tab, i) => (
          <TailwindTabPanel key={`tw-tabp-${i}`}>
            {tab.content}
          </TailwindTabPanel>
        ))}
      </TailwindTabPanels>
	
    </TailwindTabs>
  );
}

export {
  TailwindTabs,
  TailwindTabList,
  TailwindTab,
  TailwindTabPanels,
  TailwindTabPanel,
  TailwindComposedTabs,
};
