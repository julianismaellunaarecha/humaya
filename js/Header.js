export default function getHeader(){

    let itemsMenu = [
        {
            link: '',
            texto: 'Seccion1',
        },
        {
            link: '',
            texto: 'Seccion2',
        },
        {
            link: '',
            texto: 'Seccion3',
        },
        {
            link: '',
            texto: 'Seccion4',
        },
    ]


    let brandImg = document.createElement('img');
    brandImg.setAttribute('src','');
    brandImg.setAttribute('alt','');

    let brandSpan = document.createElement('span');
    brandSpan.innerHTML = 'HUMAYA';
    
    let brandA = document.createElement('a');
    brandA.setAttribute('href','');
    brandA.setAttribute('class','navbar-brand');
    brandA.appendChild(brandImg);
    brandA.appendChild(brandSpan);
    
    let brandDiv = document.createElement('div');
    brandDiv.setAttribute('class','d-flex align-items-center');
    brandDiv.appendChild(brandA);

    let menuButtonSpan = document.createElement('span');
    menuButtonSpan.setAttribute('class','navbar-toggler-icon');

    let menuButton = document.createElement('button');
    menuButton.setAttribute('class','navbar-toggler');
    menuButton.setAttribute('type','button');
    menuButton.setAttribute('data-bs-toggle','collapse');
    menuButton.setAttribute('data-bs-target','#navbarSupportedContent');
    menuButton.setAttribute('aria-controls','navbarSupportedContent');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Toggle navigation');
    menuButton.appendChild(menuButtonSpan);

    

    let menuListUl = document.createElement('ul');
    menuListUl.setAttribute('class','nav nav-pills nav-justified');

    for(let itemMenu of itemsMenu){
        let menuItemLi = document.createElement('li');
        menuItemLi.setAttribute('class','nav-item');
        let menuItemA = document.createElement('a');
        menuItemA.setAttribute('class','nav-link');
        menuItemA.setAttribute('href',itemMenu.link);
        menuItemA.innerHTML = itemMenu.texto;

        menuItemLi.appendChild(menuItemA);
        menuListUl.appendChild(menuItemLi);
    }

    let menuListDiv = document.createElement('div');
    menuListDiv.setAttribute('class','collapse navbar-collapse');
    menuListDiv.setAttribute('id','navbarSupportedContent');
    menuListDiv.appendChild(menuListUl);
    
    let navContainerDiv = document.createElement('div');
    navContainerDiv.setAttribute('class','container-fluid');
    navContainerDiv.appendChild(brandDiv);
    navContainerDiv.appendChild(menuButton);
    navContainerDiv.appendChild(menuListDiv);

    let navTag = document.createElement('nav');
    navTag.setAttribute('class','navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark');
    navTag.appendChild(navContainerDiv);

    let headerTag = document.createElement('header');
    headerTag.appendChild(navTag);

    return headerTag;
}