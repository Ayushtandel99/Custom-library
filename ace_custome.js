class AceElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type' && oldValue !== newValue) {
            this.render();
        }
    }

    static get observedAttributes() {
        return ['type'];
    }

    render() {
        const type = this.getAttribute('type');
        this.shadow.innerHTML = '';
        let content;

        switch (type) {

            case 'sp1':
                content = document.createElement('div');
                content.innerHTML = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'button':
                content = document.createElement('button');
                content.textContent = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'button':
                content = document.createElement('button');
                content.textContent = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'button':
                content = document.createElement('button');
                content.textContent = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'button':
                content = document.createElement('button');
                content.textContent = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'button':
                content = document.createElement('button');
                content.textContent = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'button':
                content = document.createElement('button');
                content.textContent = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'button':
                content = document.createElement('button');
                content.textContent = this.getAttribute('label') || 'Click Me';
                content.onclick = () => alert('Button clicked!');
                break;

            case 'input':
                content = document.createElement('input');
                content.type = 'text';
                content.placeholder = this.getAttribute('placeholder') || 'Enter text...';
                break;

            case 'heading':
                content = document.createElement('h1');
                content.textContent = this.getAttribute('label') || 'Dynamic Heading';
                break;

            case 'paragraph':
                content = document.createElement('p');
                content.textContent = this.getAttribute('content') || 'Default paragraph content.';
                break;

            case 'image':
                content = document.createElement('img');
                content.src = this.getAttribute('src') || 'https://via.placeholder.com/150';
                content.alt = this.getAttribute('alt') || 'Default image';
                break;

            case 'list':
                content = document.createElement('ul');
                const items = (this.getAttribute('items') || 'Item 1,Item 2,Item 3').split(',');
                items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.trim();
                    content.appendChild(li);
                });
                break;

            default:
                content = document.createElement('span');
                content.textContent = `Unknown type: ${type}`;
                break;
        }

        this.shadow.appendChild(content);
    }
}

customElements.define('ace', AceElement);
