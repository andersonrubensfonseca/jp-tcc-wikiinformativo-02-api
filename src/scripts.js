function pesquisa(event,text){
    event.preventDefault();
    let tags = document.getElementsByTagName('h3');
    for (let index = 0; index < tags.length; index++) {
        const tag = tags[index];
        if(tag.innerHTML.toLowerCase().includes(text.toLowerCase())){
            tag.classList.add('elemento-ancorado')
            tag.scrollIntoView({ behavior: 'smooth' })
        }        
    }
    return false
}