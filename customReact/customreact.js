function customRender(reactElement,container){
    /*
    const domELement =document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    domELement.setAttribute('href',reactElement.props)
    domELement.setAttribute('target',reactElement.target)
    container.appendChild(domELement)
    */
    const domELement =document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domELement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domELement)
   
}
const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'CLick me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer) 