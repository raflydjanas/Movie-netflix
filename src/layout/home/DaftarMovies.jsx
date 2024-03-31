import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import AllMovie from "../../components/home/AllMovie";
import PopularMovie from "../../components/home/PopularMovies";
import MarvelMovies from "../../components/home/MarvelMovies";
import { useContext } from "react";
import { LangguegeContext } from "../../Context/Langguege";

function DaftarMovies() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const { lang } = useContext(LangguegeContext);
  return (
    <>
      <marquee className="text-red-600 font-semibold text-base lg:text-3xl 2xl:text-4xl pt-5 lg:pt-10 2xl:pt10">
        {/* {lang === "english" ? `Welcome ${user.username} please anjoy the films we provide` : `selamat datang ${user.username} silahkan nikamti film yang kami sediakan`} */}
      </marquee>
      <Tabs position="relative" variant="unstyled" colorScheme="blue">
        <TabList className="gap-5 mt-6 ml-8 lg:ml-12">
          <Tab className="text-red-600 lg:text-2xl hover:text-red-800">{lang === "english" ? "All Movie" : "semua film"}</Tab>
          <Tab className="text-red-600 lg:text-2xl hover:text-red-800">{lang === "english" ? "Popular" : "Populer"}</Tab>
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
    </>
  );
}

export default DaftarMovies;
