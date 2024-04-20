
// const h2 = React.createElement('h2', { className: 'subheading' }, 'Hello React'); // in body using console.dir(document.body) there is class as className

//console.log(h2)

// creating a React window
const container = React.createElement(
    'div',
    { className: 'containerclass', id: 'containerid' },
    [
        // for image -- image, style/key, src
        React.createElement('img', { key: 1, style: { width: '200px' }, src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }),

        React.createElement('h1', { key: 2 }, 'React'),
        React.createElement('p', { key: 3 }, 'The library for web and native user interfaces'),
        React.createElement('div', { key: 4 }, [
            React.createElement('button', { key: 5 }, 'Learn React'),
            React.createElement('button', { key: 6 }, 'API Reference')
        ]
        ),
        React.createElement('section', { key: 7 }, [
            React.createElement('form', { key: 8 }, [
                React.createElement('div', { key: 11, id: 'divUsername', className: 'form-fiedl' }, [
                    React.createElement('label', { key: 1, htmlFor: 'username' }, 'Username : '),
                    React.createElement('input', { key: 9, id: 'username' })
                ]),
                React.createElement('div', { key: 12, id: 'divPassword', className: 'form-fiedl' }, [
                    React.createElement('label', { key: 1, htmlFor: 'password' }, 'Password : '),
                    React.createElement('input', { key: 9, id: 'password' })
                ])
            ])
        ])
    ]
)

// Render the 'h2' element
const domNodeId = document.querySelector('#root');
const root = ReactDOM.createRoot(domNodeId);
root.render(container);
