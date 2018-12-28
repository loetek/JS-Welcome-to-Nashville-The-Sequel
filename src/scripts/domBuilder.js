const domBuilder = {

    parkResultsBuilder() {
        let searchResults = document.createElement("article");
        let parkName = document.createElement("h3");
        let parkAddress = document.createElement("p");
        
        searchResults.appendChild(parkName);
        searchResults.appendChild(parkAddress);

         return searchResults;
    }    

}

export default domBuilder;


  // <h1 class = "main__Header"> Welcome to Nashville Ya'll </h1>
        // <form class = "parks__Search--Dropdown">
        // <select class = "park__Search">
        // <option value = "ada_accessible"> ADA Accessible </option>
        // <option value = "baseball_fields"> Baseball Fields </option>
        // <option value = "basketball_courts"> Basketball Courts </option>
        // <option value = "boat_launch"> Boat Launch </option>
        // <option value = "community_center"> Community Center </option>
        // <option value = "disc_golf"> Disc Golf </option>
        // <option value = "dog_park"> Dog Park </option>
        // <option value = "fishing_by_permit"> Fishing </option>
        // <option value = "football_multi_purpose_fields"> Football Fields </option>
        // <option value =  "hiking_trails"> Hiking Trails </option>
        // <option value = "horse_trails"> Horse Trails </option>
        // <option value = "lake"> Lake </option>
        // <option value = "playground"> Playground </option>
        // <option value = "restrooms_available"> Restrooms Available </option>
        // <option value = "skate_park"> Skate Park </option>
        // <option value = "soccer_fields"> Soccer Fields </option>
        // <option value = "swimming_pool"> Swimming Pool </option>
        // <option value = "tennis_courts"> Tennis Courts </option>
        // <option value = "walk_jog_paths"> Walking/Jogging Paths </options>
        // </select>
        //  `