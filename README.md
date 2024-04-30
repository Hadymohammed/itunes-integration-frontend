## Getting Started

- First, clone the repo and install dependencies 

```bash
$ git clone https://github.com/Hadymohammed/itunes-integration-frontend.git
$ npm i
```
- Setup the required environment variables in .env.local.example
- Run your RestAPI server.
```bash
$ npm run dev
```

- This project uses local fonts.
## Solution description
- Started with NextJs starter code. 
- Setup dto to receive the API data and built simple card component that accepts media.dto and display it, then display the list of media cards.
- Add Search bar with search term state that triggers changes in the search bar. On search term changes call to the media repository triggered to get the new data from the backend API and render the new data.
- Handling link sharing with the search term by pushing it to the URL and read it on component mounting as search term value.
- Adding collapsible side menu with temp navigation links and handle mobile screens by render a navigation bar instead of the side menu.
- Adding swiper section to display the unique artists of the received media, handled the required fixed width due collapsible side menu using calc function and use getUniqueArtist helper function to get the unique artists.
- Handling dropdown not extending bug using isOpen state.
- Adding SyncLoader component with isLoaded state to improve user experience on search results waiting.


## Deployment on Render

The easiest way to deploy the Next.js app is to use the [Render](https://Render.com).

You can see the deployed version [here](https://itunes-integration.onrender.com).

**note** 
Due the hosting free plan you may face starting down time.