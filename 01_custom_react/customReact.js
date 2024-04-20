// custom Render function
function CustomReactAppRender(propReactElement, container) {

    // <---------------------unoptimized code --------------------->

    // // 1st line to create a element in the html using React properties type
    // let whattocreate = document.createElement(propReactElement.type);
    // // what to add in the created html element using text from react properties
    // whattocreate.innerHTML = propReactElement.text;

    // // setting the attribute for anchor href using react prop
    // whattocreate.setAttribute('href', propReactElement.props.href);
    // // setting the attribute for anchor target using react prop
    // whattocreate.setAttribute('target', propReactElement.props.target);

    // <---------------------unoptimized code --------------------->


    // <-------------------- Optimized code ----------------------->

    // 1st line to create a element in the html using React properties type
    let whattocreate = document.createElement(propReactElement.type);

    // what to add in the created html element using text from react properties
    whattocreate.innerHTML = propReactElement.text;

    for (let prop in propReactElement.props) {
        if (prop === 'text') continue
        whattocreate.setAttribute(prop, propReactElement.props[prop]);
    }


    // styling the html using style in js
    whattocreate.style.textDecoration = "None";

    // Add a mouseover event listener
    whattocreate.addEventListener('mouseover', () => {
        // Change the button's background color
        whattocreate.style.color = 'red';
    });

    // Add a mouseout event listener
    whattocreate.addEventListener('mouseout', () => {
        // Change the button's background color back to its original color
        whattocreate.style.backgroundColor = '';
    });

    container.appendChild(whattocreate);
}

propReactElement = {
    type: 'a',
    props: {
        href: 'https://react.dev/',
        target: '_blank'
    },
    text: 'click to open react documentation'
}


// creating a main area to make the changes in html by hitting with a querySelector i.e. getElementsByTagName
//let mainBody = document.getElementsByClassName("root");
let mainBody = document.getElementById("root");

// rendering the custom react app
CustomReactAppRender(propReactElement, mainBody) // CustomReactAppRender is the function which takers the properties of react App which means what to hit, and mainBody as the area where to hit