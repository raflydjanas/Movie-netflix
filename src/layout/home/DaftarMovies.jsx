import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import AllMovie from "../../components/home/AllMovie";
import PopularMovie from "../../components/home/PopularMovies";
import MarvelMovies from "../../components/home/MarvelMovies";

function DaftarMovies() {
  return (
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
          <MarvelMovies />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default DaftarMovies;
