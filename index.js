function showPage(event, page){

    document.querySelectorAll("section").forEach(section =>{
        section.style.display ="none"
    })
    document.getElementById(page).style.display="block"
}