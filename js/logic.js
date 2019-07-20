console.log("logic.js")

// provide data for the app
const getData = ()=>{
    // sort weeks so they start from latest
    data.weeks=data.weeks.sort( (w1,w2)=>w2.week-w1.week );
    
    // randomize the order of projects in a week
    data.weeks=data.weeks.map(week=>{
        week.projects=shuffleArray(week.projects)
        .map(project=>{
            project.team=shuffleArray(project.team);
            return project;
        }) 
        
        return week;
    })

    return data; 
}


const randomInt=(max)=>{
    return Math.floor(Math.random()*max);
}

const shuffleArray=(array)=>{
    const newArr=[];
    const arr=array.slice();
    while (arr.length){
        newArr.push(arr.splice(randomInt(arr.length),1)[0]);
    }
    return newArr;
}
const logic={
    getData
}