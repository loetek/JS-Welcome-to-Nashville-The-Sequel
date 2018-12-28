Welcome to Nashville: Build an itinerary for a day trip to Music City
In this app users can search for four different things to do/visit in Nashville:

parks -- using the Nashville Metro Gov API
restaurants -- using the Zomato API
meetups -- using the Eventbrite API
concerts -- using the Ticketmaster API
You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

Functions
Persistent data storage
Github
CSS
Building DOM components
Handling user events
Modular code
Itinerary Builder
When the user searches for any of the four categories of things to do, the results should be listed in the DOM. Each result item should have an affordance to add the item to the current itinerary. Use your awesome new skills to select the text of the search result ( ie "John Mellencamp at the Ryman" ) and add it to the itinerary list. See the wireframe below for a visual cue for how this might look.

Professional Requirements
Only one itinerary needs to exist at a time. If a user selects an item to add to the itinerary, and an item already exists for that category in the itinerary, then you will need to update the itinerary with the new data
All teammates must be using Grunt to run ESLint, http-server, and json-server during development
Each teammate is responsible for one API module. If your group has five members, one person is responsible for the module that interacts with the DOM and the data from the API modules. In a four-person team, the team will decide how to handle the development of that module.
The README for your project should include instructions on how another person can download and run the application. PRO TIP: Don't wait until the very end to create the README.
DO NOT FORGET to use a .gitignore file to keep git from tracking your node_modules folder
Styling is strictly secondary, beyond necessary display formatting. Do not add any additional visual enhancements until you have a fully functional app. The goal of every member of the team is to implement functionality with JavaScript
Visual Feature List
To help you along, here is a wireframe of how your app might look

welcome wireframe

Stretch Goal
Persist your itinerary with Json-Server. You only need to have a single itinerary. If the user selects a different park, restaurant, etc, use a PUT to update the itinerary with the new data.

To start you off, here's an example of what the itinerary in your API might look like in your database once it's created by the user.

{
  "itinerary":
      {
        "id": 1,
        "park": "Centennial Park",
        "restaurant": "Prince’s Hot Chicken",
        "meetup": "Meeple Mountain Board Game Night",
        "concert": "John Mellencamp at the Ryman"
      }
}
Stretchier Goals
Add an affordance to finalize an itinerary, and start a new one.
Add ability to view one or all of the itineraries
Instead of displaying all the search fields, search results, and itinerary list at the same time, add a nav bar or other feature(s) for hiding/showing what the user wants to viewß