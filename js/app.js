const myIframe = document.getElementById('pad');


function mobileview(){
    const iframeDocument = myIframe.contentDocument;
    const iframeComponent = iframeDocument.getElementById('mobile-card');
    iframeCard.style.cssText += 'width: 210px';
}


function tabletview(){
    const iframeDocument = myIframe.contentDocument;
    const iframeComponent = iframeDocument.getElementById('mobile-card');
    iframeCard.style.cssText += 'width: 300px';
}


function desktopview(){
    const iframeDocument = myIframe.contentDocument;
    const iframeComponent = iframeDocument.getElementById('mobile-card');
    iframeCard.style.cssText += 'width: 350px';
}