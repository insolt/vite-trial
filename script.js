const container = document.querySelector('#root');

const tree = {
    tag: 'section',
    attributes: {
        class: 'main-section',
    },
    children: [
        {
            tag: 'h1',
            attributes: {
                id: 'main-header',
            },
            children: ['Hello World!'],
        },
        {
            tag: 'strong',
            children: ['Lorem ipsum'],
        },
        {
            tag: 'ul',
            children: [
                {
                    tag: 'li',
                    children: ['M'],
                },
                {
                    tag: 'li',
                    children: ['I'],
                },
                {
                    tag: 'li',
                    children: ['K'],
                },
                {
                    tag: 'li',
                    children: ['E'],
                },
                {
                    tag: 'a',
                    attributes: {
                        href: 'https://www.castle.pl',
                        target: '_blank',
                    },
                    children: ['CASTLE'],
                },
                {
                    tag: 'a',
                    attributes: {
                        href: 'https://www.insolt.pl',
                        target: '_blank',
                    },
                    children: ['INSOLT'],
                },
                {
                    tag: 'a',
                    attributes: {
                        href: 'https://www.interia.pl',
                        target: '_blank',
                    },
                    children: ['poczytaj w Interia'],
                },
                {
                    tag: 'a',
                    attributes: {
                        href: 'https://www.wp.pl',
                        target: '_blank',
                    },
                    children: ['poczytaj w wp'],
                },
            ]
        }
    ]
}

const render = (element, parent) => {
    const newElement = document.createElement(element.tag);

    if (element.attributes) {
        (Object.keys(element.attributes)).forEach(attribute => newElement.setAttribute(attribute, element.attributes[attribute]));
    }

    parent.appendChild(newElement);

    if (element.children) {
        element.children.forEach(child => {
            if (typeof child === 'string') newElement.innerText = child;
            render(child, newElement);
        })
    }
}

render(tree, container);