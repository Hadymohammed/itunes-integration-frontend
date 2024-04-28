import { useEffect, useState } from "react";
import { MediaDetailsDto } from "../ApiAccess/Media/dtos/mediaDetials.model";

export default function AritstCard({ media }: { media: MediaDetailsDto }) {
  const colorList = [
    '#6dc086','#9b7dd9','#e86491','#4daee8'
   ]
  const [randomColor,setRandomColor] = useState(colorList[Math.floor(Math.random() * colorList.length)])
   
    return (
      <div className="flex flex-col items-center">
          {/* image */}
          <div className="mb-2 w-full">
            <a href={media.artistViewUrl}>
              <img
                src={media.artworkUrl100}
                alt="placeholder"
                className="rounded-full object-fit w-full overflow-hidden aspect-square"
              />
            </a>
          </div>

            {/* text */}
            <div className="flex flex-col w-4/5 items-center">
              <p className="font-medium text-xs lg:text-base mt-1"
                style={{color:randomColor}}>
                <a href={media.artistViewUrl}>{media.artist}</a>
              </p>
            </div>
      </div>
    )
}
