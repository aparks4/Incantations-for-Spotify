# Incantations for Spotify

Designed and developed by Phil Berdecio, Aryn Parks, and Erik Pedersen during a one-week sprint in late summer 2022.
#### FILE UNDER: MERN stack, Spotify API, web apps, sprint, paired programming, collaboration, random generators, playlist generators, Halloween
#### TECH STACK & DESIGN TOOLS: HTML, CSS, JavaScript, Express, Node.js, React, MongoDB, Mongoose, Figma, Adobe Illustrator, and Photoshop.


## Description
Incantations is a Halloween-themed app that allows Spotify users to generate a playlist automatically by entering a group of “magic words” of their choosing. Users can also search for individual tracks and play them in the app.


## Wireframes
<img width="1408" alt="INCANTATIONS_01" src="https://user-images.githubusercontent.com/109049703/191973781-706384ca-330b-4d8b-9791-7ada64478e6a.png">

<img width="1408" alt="INCANTATIONS_02" src="https://user-images.githubusercontent.com/109049703/191974022-5c6faa71-d163-476d-bcaa-018b567e6182.png">

<img width="1408" alt="INCANTATIONS_03" src="https://user-images.githubusercontent.com/109049703/191974079-8eeea4f5-f2e8-44f5-b25e-ec0113f41922.png">

<img width="1408" alt="INCANTATIONS_04" src="https://user-images.githubusercontent.com/109049703/191974117-6d88a4dd-41a0-4122-9c81-46af600b4208.png">



## User Stories
The user—ideally a Halloween or Samhain enthusiast—lands on the app’s Homepage, where they are prompted to sign in with their Spotify credentials. When they click on “Sign in with Spotify”, they’re redirected to an Authentication Page where they log in. Once logged in, they’re redirected to their Dashboard, which features a dynamic playlist generator called Incantations. The user is prompted to enter a spell or incantation which will generate a playlist for them by matching song titles that contain keywords from the input string. Upon creation, the user's new Incantations playlist will appear in their profile as a public playlist: the spell they entered is now the title of the playlist and the playlist description reads: "Created over a piping hot cauldron with the Incantations for Spotify app 🪄".


## API 
This app uses the Spotify API

https://developer.spotify.com/documentation/web-api/

The data responses from this API are too large to reproduce here. Information is linked here:
https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track


## Libraries, Wrappers, and other Timesavers 
The following libraries were essential to making Spotify's API more accessible and comprehensible. Many thanks to all the creators and contributors involved:
* [Spotify Web API Node](https://github.com/thelinmichael/spotify-web-api-node): a Node.js wrapper for Spotify's Web API.
* [React Spotify Web Playback](https://github.com/gilbarbara/react-spotify-web-playback): a simple player for Spotify's web playback.
* [Stopword](https://github.com/fergiemcdowall/stopword): a module for Node.js that removes stopwords ("a", "and", "of", etc).
* [Trickster](https://github.com/velvetyne/Trickster): an open source font designed by Jean-Baptiste Morizot; released by [Velvetyne Type Foundry](https://velvetyne.fr/fonts/trickster/) (2017).


## Component Hierarchy
![Screen Shot 2022-09-23 at 9 59 33 AM](https://user-images.githubusercontent.com/109049703/191977905-e4800444-3220-4d3d-aeca-c9f12cf1935c.png)


## Future Features and Fixes
<img width="1158" alt="INCANTATIONS_06" src="https://user-images.githubusercontent.com/109049703/191976372-89784d3f-c8ef-4851-a08e-55bae41969df.png">

* We've created custom playlist cover art, which will be posted to each new playlist as it is created.
* Add media queries and break points for a more responsive site design.
* Create a component that shows users all other public Incantations playlists after they've created their own.
* Allow users to stream their playlist in our app instead of having to redirect to Spotify.
