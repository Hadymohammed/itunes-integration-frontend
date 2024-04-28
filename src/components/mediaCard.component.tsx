import { useEffect } from "react";
import { MediaDetailsDto } from "../ApiAccess/Media/dtos/mediaDetials.model";

export default function MediaCard({ media }: { media: MediaDetailsDto }) {
   const colorList = [
    '#6dc086','#9b7dd9','#e86491','#4daee8'
   ]
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    return (
      <div className="flex flex-col items-center">
          {/* image */}
          <div className="mb-2 w-full">
            <a href={media.viewUrl}>
              <img
                src={media.artworkUrl100}
                alt="placeholder"
                className="rounded object-cover w-full"
              />
            </a>
          </div>

          <div className="flex w-full p-1 justify-between">
            {/* text */}
            <div className="flex flex-col w-4/5">
              <a href={media.viewUrl} className="font-semibold hover:underline line-limit text-xs lg:text-base">{media.name}</a>
              <p className="font-medium text-xs lg:text-base mt-1"
                style={{color:randomColor}}>
                <a href={media.artistViewUrl}>{media.artist}</a>
              </p>
            </div>
            {/* menu */}
            <div className="relative">
                <button id={`dropdownMenuIconButton_${media.id}`} data-dropdown-toggle={`dropdownDots_${media.id}`} className="inline-flex items-center pt-2 pb-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:text-gray-100" type="button">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                </svg>
                </button>
                <div id={`dropdownDots_${media.id}`} className="z-10 fixed hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby={`dropdownMenuIconButton_${media.id}`}>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">action#1</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">action#2</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">action#3</a>
                      </li>
                    </ul>
                </div>
            </div>
          </div>
      </div>
    )
}
