console.log("dom.js")

// main render function, generates DOM and mounts at element given
const render=(element,data)=>{
    
    element.innerHTML=data.map(renderWeek).join("");
}
const renderWeek=(week)=>{
    
    return `
       <section class="week-section week-${week.week}">
        <h2 class="week-header">WEEK ${week.week} ${week.theme}</h2>
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
    return `<span class="team-member"> ${tm} </span>`
}
const dom={
    render, renderTeamMember, renderProject, renderWeek
}