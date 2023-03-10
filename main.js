const selectBox = boxNumber => document.getElementsByClassName(boxNumber)[0];

// criando manipulações no project preview
function eachProjectPreview(projectNumber, projectDescriptionNumber) {
    const githubLink = selectBox(projectNumber).getElementsByClassName('githubLink')[0];
    const deployLink = selectBox(projectNumber).getElementsByClassName('deployLink')[0];
    const boxContent = selectBox(projectNumber).getElementsByClassName('boxContent')[0];
    const inicialText = document.getElementById('inicialText');
    const eachProjectDescription = document.getElementsByClassName(projectDescriptionNumber)[0];

    //mouseover
    selectBox(projectNumber).addEventListener('mouseover', function() {
        boxContent.classList.add('hoverEffect');
        githubLink.style.display = 'block';
        deployLink.style.display = 'block';
        inicialText.style.display = 'none';
        eachProjectDescription.style.display = 'flex';
    })

    //mouseout
    selectBox(projectNumber).addEventListener('mouseout', function() {
        boxContent.classList.remove('hoverEffect');
        githubLink.style.display = 'none';
        deployLink.style.display = 'none';
        inicialText.style.display = 'block';
        eachProjectDescription.style.display = 'none';
    })
}

// adicionar aviso 'Em Breve' no box
function addBand(projectNumber) {
    const boxContent = selectBox(projectNumber).getElementsByClassName('boxContent')[0];
    boxContent.innerHTML = '<div><span class="boxText">EM BREVE</span></div>'
    boxContent.firstChild.classList.add('band');
}

// Carosel function
(function carosel() {
    const arrowNext = document.getElementsByClassName('arrow-next')[0].children[0];
    const arrowPrev = document.getElementsByClassName('arrow-prev')[0].children[0];
    const carosel_itens = document.getElementsByClassName('carosel_itens');
    
    arrowNext.addEventListener('click', function() {
        arrowPrev.style.opacity = '100';
        arrowNext.style.opacity = '0';
        carosel_itens[0].classList.remove('carosel_itens--visible');
        carosel_itens[1].classList.add('carosel_itens--visible');
    })

    arrowPrev.addEventListener('click', function() {
        arrowPrev.style.opacity = '0';
        arrowNext.style.opacity = '100';
        carosel_itens[0].classList.add('carosel_itens--visible');
        carosel_itens[1].classList.remove('carosel_itens--visible');
    })
})()



eachProjectPreview('project_1', 'project_1_description');
eachProjectPreview('project_2', 'project_2_description');
eachProjectPreview('project_3', 'project_3_description');
eachProjectPreview('project_4', 'project_4_description');
eachProjectPreview('project_5', 'project_5_description');
eachProjectPreview('project_6', 'project_6_description');
eachProjectPreview('project_7', 'project_7_description');
// eachProjectPreview('project_8', 'project_8_description');

// addBand('project_1');
// addBand('project_2');
// addBand('project_3');
// addBand('project_4');
// addBand('project_5');
// addBand('project_6');
// addBand('project_7');
addBand('project_8');
