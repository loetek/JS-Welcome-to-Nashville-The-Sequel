
let parkSelection = "";
const appendDom = {

    listenUpParks(){
        
       document.querySelector("select").addEventListener("change", function() {
            parkSelection = this.value;
            // console.log (parkSelection);
            event.preventDefault();
            
            
        });
return parkSelection;
    }

}

console.log (parkSelection);
// console.log(appendDom.listenUpParks());
export default appendDom;

//prevent default google that shit