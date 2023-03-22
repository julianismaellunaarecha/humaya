export default function getMain(){
    let mainTag = document.createElement('main');
    
    let portadaSection = document.createElement('section');
    let calidadSection = document.createElement('section');
    let productosSection = document.createElement('section');
    let quienesSomosSection = document.createElement('section');
    let contactoSection = document.createElement('section');

    let humayaH1 = document.createElement('h1');
    humayaH1.innerHTML = 'HUMAYA';
    let humayaP = document.createElement('p');
    humayaP.innerHTML = 'Nuestros dulces siendo el nectar de los dioses te llevaran al extasis del Valhalla.'
    let humayaA = document.createElement('a');
    humayaA.setAttribute('href','');
    portadaSection.appendChild(humayaH1);
    portadaSection.appendChild(humayaP);
    portadaSection.appendChild(humayaA);

    let calidadH2 = document.createElement('h2');
    calidadH2.innerHTML = 'Calidad';
    let calidadImg = document.createElement('img');
    let calidadP = document.createElement('p');
    calidadSection.appendChild(calidadH2);
    calidadSection.appendChild(calidadImg);
    calidadSection.appendChild(calidadP);

    let productosDiv = document.createElement('div');
    productosSection.appendChild(productosDiv);

    let quienesSomosDiv = document.createElement('div');
    let quienesSomosH2 = document.createElement('h2');
    quienesSomosH2.innerHTML = 'Quienes Somos';
    let quienesSomosP = document.createElement('p');
    quienesSomosP.innerHTML = 'Una gran comunidad de productores.';
    quienesSomosDiv.appendChild(quienesSomosH2);
    quienesSomosDiv.appendChild(quienesSomosP);

    let clientesDiv = document.createElement('div');
    let clientesH2 = document.createElement('h2');
    clientesH2.innerHTML = 'Nuestros Clientes';
    let clientesCarrouselDiv = document.createElement('div');
    clientesCarrouselDiv.setAttribute('id','carrouselClientes');
    clientesDiv.appendChild(clientesH2);
    clientesDiv.appendChild(clientesCarrouselDiv);

    quienesSomosSection.appendChild(quienesSomosDiv);
    quienesSomosSection.appendChild(clientesDiv);

    let contactoH2 = document.createElement('h2');
    contactoH2.innerHTML = 'Contacto';
    let contactoImg = document.createElement('img');
    
    let contactoDiv = document.createElement('div');

    let contactoForm = document.createElement('form');

    let nombreLabel = document.createElement('label');
    nombreLabel.setAttribute('for','nombre');
    nombreLabel.innerHTML = 'Nombre y Apellido';
    let nombreInput = document.createElement('input');
    nombreInput.setAttribute('name','nombre');
    nombreInput.setAttribute('type','text');

    let emailLabel = document.createElement('label');
    emailLabel.setAttribute('for','email');
    emailLabel.innerHTML = 'Email';
    let emailInput = document.createElement('input');
    emailInput.setAttribute('name','email');
    emailInput.setAttribute('type','text');

    let consultaLabel = document.createElement('label');
    consultaLabel.setAttribute('for','consulta');
    consultaLabel.innerHTML = 'Consulta';
    let consultaInput = document.createElement('input');
    consultaInput.setAttribute('name','consulta');
    consultaInput.setAttribute('type','text');

    let newsletterLabel = document.createElement('label');
    newsletterLabel.setAttribute('for','newsletter');
    newsletterLabel.innerHTML = 'Newsletter';
    let newsletterInput = document.createElement('input');
    newsletterInput.setAttribute('name','newsletter');
    newsletterInput.setAttribute('type','checkbox');

    let enviarButton  = document.createElement('button');
    enviarButton.innerHTML = 'Enviar';
    enviarButton.setAttribute('type','submit');
    let borrarButton  = document.createElement('button');
    borrarButton.innerHTML = 'Borrar';
    borrarButton.setAttribute('type','reset');

    contactoForm.appendChild(nombreLabel);
    contactoForm.appendChild(nombreInput);
    contactoForm.appendChild(emailLabel);
    contactoForm.appendChild(emailInput);
    contactoForm.appendChild(consultaLabel);
    contactoForm.appendChild(consultaInput);
    contactoForm.appendChild(newsletterLabel);
    contactoForm.appendChild(newsletterInput);
    contactoForm.appendChild(enviarButton);
    contactoForm.appendChild(borrarButton);

    contactoDiv.appendChild(contactoForm);

    contactoSection.appendChild(contactoH2);
    contactoSection.appendChild(contactoImg);
    contactoSection.appendChild(contactoDiv);

    mainTag.appendChild(portadaSection);
    mainTag.appendChild(calidadSection);
    mainTag.appendChild(productosSection);
    mainTag.appendChild(quienesSomosSection);
    mainTag.appendChild(contactoSection);
    
    return mainTag;
}