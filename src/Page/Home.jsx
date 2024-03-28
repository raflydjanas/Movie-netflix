import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import NavBar from "../layout/NavBar";
import Hero from "../layout/home/Hero";
import AllMovie from "../components/home/AllMovie";
import PopularMovie from "../components/home/PopularMovie";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [isMobile]);

  return (
    <>
      <div className="bg-black h-auto w-full">
        {isMobile ? <NavBar type="mobile" /> : <NavBar type="dekstopHome" />}
        <Hero />
        <Tabs position="relative" variant="unstyled" colorScheme="blue">
          <TabList className="gap-5 mt-10 ml-8 lg:ml-12">
            <Tab className="text-red-600 lg:text-2xl hover:text-red-800">All Movie</Tab>
            <Tab className="text-red-600 lg:text-2xl hover:text-red-800">Popular</Tab>
            <Tab className="text-red-600 lg:text-2xl hover:text-red-800">Marvel</Tab>
          </TabList>
          <TabIndicator mt="1.5px" height="5px" bg="blue.500" borderRadius="1px" />
          <TabPanels>
            <TabPanel>
              <AllMovie />
            </TabPanel>
            <TabPanel>
              <PopularMovie />
            </TabPanel>
            <TabPanel>
              <p className="text-white">Marvel</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
