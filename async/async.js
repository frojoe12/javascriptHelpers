console.log("loaded")

const apiUrl="http://universities.hipolabs.com"

const render = (content = "...") => {
    document.getElementById("root").innerHTML=content;
}
const debug = (content = "...") => {
    document.getElementById("debug").innerHTML=content;
}

render("loading...");
debug("ready")

const getData = async () => {
    try{
    await fetch(apiUrl)
        .then(res=>res.json())
        .then(data=>render(data.example))
    } 
    catch(err){
        console.error(err)
        render("something went wrong...")
    }
    finally {
        debug("finished execution")
    }
}

getData();

console.log("end")
