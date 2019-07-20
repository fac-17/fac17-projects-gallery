console.log("logic.js")

// provide data for the app
const getData = ()=>{
    data.weeks=data.weeks.sort( (w1,w2)=>w2.week-w1.week );
    return data; 
}

const logic={
    getData
}