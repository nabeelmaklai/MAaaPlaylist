# awsome-playlist-app-5000

## About the site

> The app will allow users to create a personalized playlist. The app’s user need to be authenticated using Google Oauth to have access to the app and the created playlists. Without any authentication, users of the site will only have access to the song search function.

## Development Outline

> The site will be developed using the Express JS framework. A dedicated API will be used to fetch songs and the details of these songs to be added to the user's playist. The site will be developed and designed using the the conceptualized ERD below. The ERD will have three entities (Playlist, Song, and User) connected with two relationships (Playlist - Song and User - Playlist).

![Alt text](Blank-diagram.png)


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



## How the app will work

> The code was written in vanilla JavaScript(JS). Once a conceptual design sketched on a word processing document was approved, the game's code was planned by breaking it down to a series of small game functions, which when combined, would render the game playable. Planning for the code and keeping tabs of th eto-do list of code was done through a Trello board [linked](https://trello.com/b/d5CAAMGT/memory-game) here.
> The board was built using 6 divs tags in html. Event listeners were then utilized which were attached to each div using a for loop. The functionality was rendered playable using arrays. The step by step explanation of how the code works is:

- As soon as the page is loaded, 2 arrays empty arrays are initialized and a function that generates a random number between 1 and 6 is then pushed into the pattern array

- Another function that adds the an event listener to each square of the game adds and then removes the class using a setTimeOut function creating the blink or flash seen

- Another function, which is the main game function then allows the player to attempt to match the pattern generated, each click stores the index number that is associated with teh clicked squre in an array.

- Once the player attempts to match the array, and the length of the generated and the player array is similar, the array is parsed into a string and compared. If both the arrays are equal elements in the same index, the player array is cleared, another random number generated and the score incremented by 10. If the arrays are not the same the code displays an alert with the score and the game is then restarted.



## :computer: Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![Express badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=express&logoColor=F7DF1E)

