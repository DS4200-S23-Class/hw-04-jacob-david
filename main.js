let lastPoint = null

function pointClick(pointID){

    // Add border to circle
    let point = document.getElementById(pointID);
    point.classList.toggle('border');

    // set global var to keep track of last point clicked
    lastPoint = pointID

    // Insert last point text to screen
    let recentText = "Most Recent Point: " + lastPoint;
    document.getElementById('selected-point').innerHTML = recentText;
}


function plotPoint(){
    // Grab the user input values
    let xVal = document.getElementById("x-val").value;
    let yVal = document.getElementById("y-val").value;

    // creating variables for plotting using relative dimensions for scalability
    let plotX = (xVal * 10) + "%";
    let plotY = (100 - (yVal * 10)) + "%";

    //
    let newId = "(" + xVal + "," + yVal + ")";

    // creating a new circle using our coordinates and our new concatenated id
    let newPoint = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    newPoint.setAttributeNS(null,"id", newId);
    newPoint.setAttributeNS(null,"r", "10");
    newPoint.setAttributeNS(null,"cx", plotX);
    newPoint.setAttributeNS(null,"cy", plotY);
    document.getElementById('frame').appendChild(newPoint);

    newPoint.addEventListener("click", () => {pointClick(newPoint.id)})
}

// checking for the submission of the button
document.getElementById('subButton')
        .addEventListener('click', plotPoint);


let points = document.getElementsByTagName('circle');
for (let i = 0; i < points.length; i++){
    points[i].addEventListener("click", () => {pointClick(points[i].id)});
}






