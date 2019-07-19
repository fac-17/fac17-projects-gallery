console.log("dom.js")

// main render function, generates DOM and mounts at element given
const render=(element,data)=>{
    element.innerHTML=JSON.stringify(data);
}

const dom={
    render
}