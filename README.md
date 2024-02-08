# awsome-playlist-app-5000

## About the site

> The app will allow users to create a personalized playlist. The app’s user need to be authenticated using Google Oauth to have access to the app and the created playlists. Without any authentication, users of the site will only have access to the song search function.

## Development Outline

> The site will be developed using the Express JS framework. A dedicated API will be used to fetch songs and the details of these songs to be added to the user's playist. The site will be developed and designed using the the conceptualized ERD below. The ERD will have three entities (Playlist, Song, and User) connected with two relationships (Playlist - Song and User - Playlist).

![Alt text](images/Blank-diagram.png)


**Users**
* The users will be able to create accounts on the platform, which will require providing a name, email, and possibly linking their Google account (googleId)

**Playlists**
* The site users can create multiple playlists to organize their favorite songs
* Users Each playlist has a name and a description to give context to its content.
* Users can add songs to their playlists. The songs attribute in the Playlist entity stores references (ObjectIds) to the songs included in the playlist.

**Songs**
* Each song has a name, genre, artist(s), release year, and cover art.
* Genres and artists are stored as arrays of strings, allowing a song to be associated with multiple genres and artists if necessary.
* The cover attribute stores a URL or file path pointing to the cover art for the song.

> The wireframe of the conceptualized site are detailed below. The landing page will be a search bar with a navigation bar on the top which will have the Google Oauth login link and a link to display all the playlists. The specific pages of the site is detailed below.

**The landing page without user authentication**

> ![Alt text](images/wireframe/1-Home-Page-not-logged-in.png)

The landing page after the user logs in will have a search bar that users can use to browse the available songs.

**The landing page with user authentication**

> ![Alt text](images/wireframe/2-Home-Page-logged-in.png)

The landing page after the user logs in will have a search bar that users can use to browse the available songs.

**The search results**
> ![Alt text](images/wireframe/3-Search-Results.png)
The search results will be displayed as horizontally across the page. Users will be able to see the songs’s name as well as its cover 



**Song details**
> ![Alt text](images/wireframe/4-Song-Details.png)

When users select a certain song, a new page will open. The page will display additional details of the song. The users will then have the opportunity and the option to add the song to a playlist 

**All playlists**
> ![Alt text](images/wireframe/5-Playlists.png)

The users will be able to display all their playlists. The playlists will contain the name of the playlist as well as the option to display the details of the playlist 

**Playlist details**

> ![Alt text](images/wireframe/6-Playlist-Details.png)

The playlist details will show only the selected playlist and give the user an opportunity to edit and delete the playlist

**Edit playlist details**
> ![Alt text](images/wireframe/7-Edit-Playlist-Details.png)

When the user selects a playlist to edit its details, the playlist details page will give the user the option to update the playlist name and the description. 

## collaborators

The building of the site will be a team effort. The other two team members are:
[Mariam](https://github.com/MariamBaloch)
[Abdul Rehman](https://github.com/MariamBaloch)

The collaboration was organized using a [Trello](https://trello.com/b/nfH5tSJv/playlist-app) board linked









## :computer: Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![Express badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=express&logoColor=F7DF1E)

