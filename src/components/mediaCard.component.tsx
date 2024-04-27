import { MediaDetailsDto } from "../ApiAccess/Media/dtos/mediaDetials.model";

export default function MediaCard({ media }: { media: MediaDetailsDto }) {
    return (
        <div className=" max-w-52 flex flex-col items-center">
        <a href="#">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/5e/4f/be/5e4fbe75-14aa-09a7-a260-de5aed951c8d/mza_3967295007949720058.jpg/100x100bb.jpg"
            alt="placeholder"
            className="rounded"
            width={200}
            height={200}
          />
        </a>

        <div className="flex w-full p-1 justify-between">
          {/* text */}
          <div className="flex flex-col w-4/5">
            <a href="#" className="font-semibold hover:underline">Media Name</a>
            <p className="font-medium">
              <a href="#">Artist</a>
            </p>
          </div>
          {/* menu */}
          <div className="relative">
              <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center pt-2 pb-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:text-gray-100" type="button">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
              </button>
              <div id="dropdownDots" className="z-10 fixed hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
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
