/*
*✔️Nanci class HikeCollection
	✔️hikelist[]
	toba showHikeList()
  const myHikes = new Hikes('hikes');
  window.addEventlistener('load',()=>{myHikes.showHikeList();
  )};
  ✔️Naomi renderHikeList()
  renderOneHike()
  
  ✔️*Nanci something to display details when a hike is clicked
  	event listener when it's generated

MODULE
	*✔️Nanci createElement()
	*✔️good as is   imgBasePath()
	back button from details to main list

*/

//create an array of hikes
const hikeList = [{
        name: "Bechler Falls",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description: "Beautiful short hike along the Bechler river to Bechler Falls",
        directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
        name: "Teton Canyon",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description: "Beautiful short (or long) hike through Teton Canyon.",
        directions: "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
        name: "Denanda Falls",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "7 miles",
        difficulty: "Moderate",
        description: "Beautiful hike through Bechler meadows river to Denanda Falls",
        directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
];


class HikeCollection {
    constructor() {}

    showHikeList() {
        const hikeListElement = document.getElementById("hikes");
        hikeListElement.innerHTML = "";
        this.renderHikeList(hikeList, hikeListElement);
    }
    renderHikeList(hikes, parent) {
        hikes.forEach(hike => {
            renderOneHike(hike);
        });
    }

    detail(event) {
        let target = event.target;
        let name = target.innerHTML;
        let thisHike = hikeList.findIndex((obj => obj.name == name));


        //add event listener to backbutton to get rid of this div
        const container = document.getElementById("hikes");
        let text = `${hikeList[thisHike].description}. ${hikeList[thisHike].directions}`;
        let div = container.appendChild(createElement("div", text, "details"));
        div.appendChild(createElement("button", "Go Back", "back-button")).setAttribute("onclick", "hikes.backButton()");
    }

    backButton() {
        let div = document.getElementsByClassName("details");
        let container = document.getElementById("hikes");
        container.removeChild(div[0]);
    }
}


function createElement(tag, text, className, src, alt) {
    const genElement = document.createElement(tag);
    genElement.textContent = text;
    if (className) {
        genElement.classList.add(className);
    }
    if (src) {
        genElement.setAttribute("src", src);
    }
    if (alt) {
        genElement.setAttribute("alt", alt);
    }
    return genElement;
}
let hikes = new HikeCollection;

function renderOneHike(hike) {
    const container = document.getElementById("hikes");
    let li = container.appendChild(createElement("li"));

    li.appendChild(createElement("h2", `${hike.name}`)).addEventListener("click", hikes.detail);
    li.appendChild(createElement("div", "", "image")).appendChild(createElement("img", "", "", `${imgBasePath}${hike.imgSrc}`, `Image of ${hike.name}`));

    let divParent = li.appendChild(createElement("div"));
    divParent;
    let div = divParent.appendChild(createElement("div"))
    div.appendChild(createElement("h3", "Distance"));
    div.appendChild(createElement("p", `${hike.distance}`));

    let div2 = divParent.appendChild(createElement("div"));

    div2.appendChild(createElement("h3", "Difficulty"));
    div2.appendChild(createElement("p", `${hike.difficulty}`));
}

/*const item = document.createElement("li");

  item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;

  return item;*/


//Move to module
const imgBasePath = "https://byui-cit.github.io/cit261/examples/";

hikes.showHikeList();
