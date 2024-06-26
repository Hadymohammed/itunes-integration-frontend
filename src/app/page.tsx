"use client";
import { MediaDetailsDto } from "@/ApiAccess/Media/dtos/mediaDetials.model";
import { MediaRepository } from "@/ApiAccess/Media/media.repository";
import SwiperContainer from "@/components/SwiperContainer.component";
import MediaCard from "@/components/mediaCard.component";
import Navbar from "@/components/navBar.component";
import SideMenu from "@/components/sideMenu";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { BarLoader, SyncLoader } from "react-spinners";

//state interface
interface IPageData {
  media: MediaDetailsDto[];
  term: string;
}

export default function Home() {
  const [pageData, setPageData] = useState<IPageData>({
    media: [],
    term: "",
  })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const mainSectionStyle = {
    width: isMobile? '100%' : (collapsed ? 'calc(100% - 80px)' : 'calc(100% - 270px)'), 
    transition: 'width 0.3s ease',
  };

  const handleSearch = async (e: any) => {
    console.log("search change : ",e.target.value);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(async () => {   
      setIsLoading(true);
      const search = e.target.value;
      if (search === '') {
        window.history.pushState({}, '', '/');
      }else{
        window.history.pushState({}, '', `?search=${search}`);
      }
      // fetch data from the backend
      const data: MediaDetailsDto[] = await MediaRepository.searchByTerm(search);
      setPageData({
        media: data,
        term: search,
      });
      setIsLoading(false);
    }, 1000) // 1000 milliseconds = 1 second
  }

  // Function to read query string parameter from URL
  const getQueryStringParam = (name: string): string | null => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  };
  const getUniqueArtists = (mediaArray:MediaDetailsDto[]) => {
    const uniqueArtists = mediaArray.reduce((acc:MediaDetailsDto[], media) => {
      // Check if artist already exists in the accumulator
      const existingArtist = acc.find((artist) => artist.artist === media.artist);
      if (!existingArtist) {
        // If artist doesn't exist, add it to the accumulator
        acc.push({
          id:media.id,
          name:media.name,
          viewUrl:media.viewUrl,
          type:media.type,
          artist: media.artist,
          artistViewUrl: media.artistViewUrl,
          artworkUrl100: media.artworkUrl100,
        });
      }
      return acc;
    }, []);
    return uniqueArtists;
  };
  

  useEffect(() => {
    // Read the 'search' query parameter from the URL
    const searchTerm = getQueryStringParam('search') || '';

    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.value = searchTerm;

    const fetchData = async () => {
      const data: MediaDetailsDto[] = await MediaRepository.searchByTerm(searchTerm);
      setPageData({
        media: data,
        term: searchTerm,
      });
    };
    fetchData();
    setIsLoading(false);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <div className="flex">
      {isMobile ==false && (
        <div className="sticky top-0 h-screen">
          <SideMenu collapsed={collapsed} setCollapsed={setCollapsed}/>
        </div>
      )}
      
      <main className="flex flex-col items-center" style={mainSectionStyle}>
        {/* search bar */} 
        <div className="z-10 w-full sticky top-0 flex flex-col items-center search-box">
          {isMobile && (<Navbar />)}
            <div className="m-3 w-2/5">
              <input type="search" 
              id="search"
              onChange={handleSearch}
              className="bg-purple-white w-full shadow rounded border-0 p-3 text-center" 
              placeholder="...بحث"/>
            </div>
          </div>
          {(isLoading? 
            (<div className="w-full h-screen flex flex-col justify-center items-center">
              <SyncLoader color="#ddc596" size={20} />
            </div>):(
            <React.Fragment>
            {/* header line */}
            <div className="w-full p-8">
              <div>
                <div className="text-xl font-medium">
                  {(pageData?.term && pageData.media.length ==0)  ?
                <span>No artists found for {pageData.term?pageData.term:'...'}</span> :
                <span>Top artists for {pageData.term?pageData.term:'...'}</span>
                }
                </div>
              </div>
              <hr className="w-full h-0.5 bg-red-700"/>
            </div>
            {/* swiper */}
            <SwiperContainer
              media={getUniqueArtists(pageData.media)}
              />
            {/* header line */}
            <div className="w-full p-8">
              <div>
                <div className="text-xl font-medium">
                  {(pageData?.term && pageData.media.length ==0)  ?
                  <span>No resualts found for {pageData.term?pageData.term:'...'}</span> :
                  <span>Top resualts for {pageData.term?pageData.term:'...'}</span>
                  }
                  </div>
              </div>
              <hr className="w-full h-0.5 bg-red-700"/>
            </div>
            {/* media cards */}
            <div className="mr-10 ml-10 w-full p-8 flex flex-wrap	justify-around">
              {/* card */}
              {pageData.media.map((media,index) => (
                <div  key={index} className="w-32 h-fit lg:w-48 m-5">
                  <MediaCard media={media}/>
                </div>
              ))}
            </div>
            </React.Fragment>
          ))}

      </main>
    </div>
  );
}
