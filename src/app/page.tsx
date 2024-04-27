import { MediaDetailsDto } from "@/ApiAccess/Media/dtos/mediaDetials.model";
import MediaCard from "@/components/mediaCard.component";

export default function Home() {
  // const data = MediaDetailsDto; array of media objects
  const data = [
    new MediaDetailsDto("type", "ثمانية", "viewUrl", "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/5e/4f/be/5e4fbe75-14aa-09a7-a260-de5aed951c8d/mza_3967295007949720058.jpg/100x100bb.jpg", "artist", "artistViewUrl"),
    new MediaDetailsDto("type", "ثمانية", "viewUrl", "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/5e/4f/be/5e4fbe75-14aa-09a7-a260-de5aed951c8d/mza_3967295007949720058.jpg/100x100bb.jpg", "artist", "artistViewUrl"),
    new MediaDetailsDto("type", "ثمانية", "viewUrl", "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/5e/4f/be/5e4fbe75-14aa-09a7-a260-de5aed951c8d/mza_3967295007949720058.jpg/100x100bb.jpg", "artist", "artistViewUrl"),
    new MediaDetailsDto("type", "ثمانية", "viewUrl", "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/5e/4f/be/5e4fbe75-14aa-09a7-a260-de5aed951c8d/mza_3967295007949720058.jpg/100x100bb.jpg", "artist", "artistViewUrl"),
    new MediaDetailsDto("type", "ثمانية", "viewUrl", "https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/5e/4f/be/5e4fbe75-14aa-09a7-a260-de5aed951c8d/mza_3967295007949720058.jpg/100x100bb.jpg", "artist", "artistViewUrl"),
  ]
  return (
    <div className="flex flex-col items-center w-full">
      {/* search bar */}
      <div className="m-3 w-2/5">
        <input type="search" 
        className="bg-purple-white w-full shadow rounded border-0 p-3 text-center" 
        placeholder="Search..."/>
      </div>
      <div className="w-full p-8">
        <div>
          <div className="text-xl font-medium">Top results for .... </div>
        </div>
        <hr className="w-full h-0.5 bg-red-700"/>
      </div>
      {/* media cards */}
      <div className="mr-10 ml-10 w-full p-8 flex flex-wrap	">
        {/* card */}
        {data.map((media) => (
          <div className="m-2">
            <MediaCard media={media}/>
          </div>
        ))}
      </div>
    </div>
  );
}
