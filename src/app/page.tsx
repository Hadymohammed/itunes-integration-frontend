"use client";
import { MediaDetailsDto } from "@/ApiAccess/Media/dtos/mediaDetials.model";
import { MediaRepository } from "@/ApiAccess/Media/media.repository";
import MediaCard from "@/components/mediaCard.component";
import { useEffect, useState } from "react";

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

  const handleSearch = async (e: any) => {
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
  }

  // Function to read query string parameter from URL
  const getQueryStringParam = (name: string): string | null => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
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
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* search bar */} 
      <div className="z-10 w-full sticky top-0 flex flex-col items-center search-box">
          <div className="m-3 w-2/5">
            <input type="search" 
            id="search"
            onChange={handleSearch}
            className="bg-purple-white w-full shadow rounded border-0 p-3 text-center" 
            placeholder="...بحث"/>
          </div>
        </div>
      <div className="w-full p-8">
        <div>
          <div className="text-xl font-medium">Top results for {pageData.term?pageData.term:'...'}</div>
        </div>
        <hr className="w-full h-0.5 bg-red-700"/>
      </div>
      {/* media cards */}
      <div className="mr-10 ml-10 w-full p-8 flex flex-wrap	justify-around">
        {/* card */}
        {pageData.media.map((media,index) => (
          <div className="w-32 h-fit lg:w-48 m-5">
            <MediaCard key={index} media={media}/>
          </div>
        ))}
      </div>
    </div>
  );
}
