console.log("dom.js")

let people;
// main render function, generates DOM and mounts at element given
const render=(element,data)=>{
    people=data.people;
    element.innerHTML=data.weeks.map(renderWeek).join("");
}
const renderWeek=(week)=>{
    
    return `
      <section class="week-section week-${week.week}">
       <header class="week-header">
        <h2 class="week-h2">WEEK ${week.week} ${week.theme}</h2>
        </header> 
        ${week.projects.map(renderProject).join("")}
     </section>
    `
}
const renderProject=(project)=>{
    return `
        <article class="project-article">
        <h3 class="project-title"><a href="${project.github}" target="_blank">${project.title}</a></h3>
        <p class="project-description">${project.description}</p>
        <h4 class="project-team">${project.team.map(renderTeamMember).join("")}</h4>
        <div class="project-image-container ${project.img?``:`project-image-empty`}">
        ${project.img?`<img class="project-image" src="${project.img}">`:``}
        </div>
        </article>
    `
}
const renderTeamMember=(tm)=>{
    let html=tm;
    let peopleObj=people.find(el=>el.name===tm);

    if (peopleObj){
        html=`<a href="https://github.com/${peopleObj.handle}" target="_blank">${tm}</a>`
    }
    return `<span class="team-member"> ${html} </span>`
}
const dom={
    render, renderTeamMember, renderProject, renderWeek
}