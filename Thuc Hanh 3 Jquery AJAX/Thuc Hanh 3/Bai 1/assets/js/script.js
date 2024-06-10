let changeBtn = document.querySelector('button');
changeBtn.addEventListener('click', changeContent);
function changeContent(){
    const myContent = document.body.children[0].children[1];
    myContent.innerHTML = "Voluptatem libero cursus risus, voluptas facilis fusce fames, hymenaeos ipsam tellus amet ipsa nostrud pede, fusce? Nihil laoreet, voluptatibus optio cillum. Dapibus sit parturient, euismod diamlorem corrupti fugiat? Hendrerit, quis."; 
}
