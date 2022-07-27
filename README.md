## MANUAL FOR TRACKLIST TEMPLATE:

## COMPONENTS:

1. ARTIST-ENTRY

SUMMARY:
-- The ARTIST-ENTRY component holds the popup form for where the artist will input their track's information and have it be rendered onto the website after pressing submit
-- It will ask the artist to input songname, artist, timestamp/length, image upload, release status ( and if it is released it will provide options for link inputs to various music streaming platforms )

WHAT NEEDS TO BE IMPLEMENTED:
-- Ideally after they submit the info, the info could be stored into a JSON file where it will then be fed into the SONG-ROWS component where the data is rendered on the website through a "for loop"

2. BOTTOM-SHEET (MOBILE ONLY)

---

SUMMARY:
-- The BOTTOM-SHEET component contains the button calls the overlay (POPUP-LINK component) that slides up from the bottom on mobile screens and holds the links (if the artist has inputted the links) to external music streaming platforms

WHAT NEEDS TO BE IMPLEMENTED:
-- N/A
-- The BOTTOM-SHEET component is just a button so it doesn't really need any further work

3. INPUT-FORM

---

SUMMARY:
-- The INPUT-FORM component should hold the form for where the fans can input their contact info so that they can be notified when a song is released

WHAT NEEDS TO BE IMPLMENTED:
-- The contact form that is already created needs to be implemented here.

4. LINKS

---

SUMMARY:
-- The LINKS component holds the links and the text for what will be shown on the BOTTOM-SHEET component (mobile screens only). It will hold the links that the artist inputs for each song so that when they tap on the tab, it will take them to the correct link

WHAT NEEDS TO BE IMPLEMENTED:
-- The links that are inputted by the artist in the ARTIST-ENTRY component should appear here and correlate to each track

5. POPUPLINK

---

SUMMARY:
-- The POPUPLINK holds the links for the popup that will appear on (desktops only) and will show the links and the logos

WHAT NEEDS TO BE IMPlEMENTED:
-- The links that are inputted by the artist in the ARTIST-ENTRY component should appear here and correlate to each track

6. SONG-ROWS

---

SUMMARY:
-- The SONG-ROWS component has a for loop that takes in certain information that is inputted from a Typescript file (in this case mock-song.ts) and is rendered as a track on the webpage

WHAT NEEDS TO BE IMPLEMENTED:
-- N/A

7. TRACKLIST

---

SUMMARY:
-- The tracklist is the entire skeleton of the webpage. It holds the title of the page (which contains the artist and album name), the embed, and other components, and ends with the logo at the bottom.

WHAT NEEDS TO BE INPUTTED:
-- N/A

## OTHER THINGS

---

1. Under the "Listen/Get Notified" header, there are two buttons for songs that are unreleased. If an artist says that a song is unreleased in the ARTIST-ENTRY component and they toggle the "Allow Notifications" on, then it will render two buttons. One that says "Notify Me" and button that has the wrench icon. The "Notify Me" button should have the INPUT-FORM component rendered as an overlay. The wrench icon then acts as the editing mechanism where the artist should be able to drag and drop, delete and edit the layout of what the contact/input form looks like.

2. Icons in the Banner (Plus, Pencil, Image)

---

a. Plus - the plus icon is how the artsit will bring up the ARTIST-ENTRY component where they can fill out the information for each track
b. Pencil - the pencil icon is the editing feature of the tracklist, it should bring up an overlay of every track seperated by borders as its own blocks, and the artist should have the ability to drag and move around the tracks, edit the info tracks and delete the tracks
c. Image - the image icon is where the artist can upload their own image and change the background
<img width="1309" alt="Screen Shot 2022-07-27 at 1 37 59 PM" src="https://user-images.githubusercontent.com/85855067/181313035-1a6ebaed-1408-4445-9922-e62a3747b803.png">


