
const fetchData = {

    getParkData() {
        return fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP",
        {Authorization: {Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"}})
        .then(parkDataContainer => parkDataContainer.json());
     },
      queryParkData(parkSearchUserInput){
          return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP&${parkSearchUserInput}=Yes`,
          {Authorization: {Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"}})
          .then(parkDataContainer => parkDataContainer.json());
      }

}

export default fetchData