import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const SANITIZER_CONFIG = {
    // some tags are dangerous :(
    DANGEROUS_TAGS: [
        'script',
        'iframe',
        'style',
        'object',
        'embed',
    ],

    // attributes are dangerous, so we don't allow them
    ALLOW_ATTRIBUTES: false
}

export function sanitizeHtml(html) {
    const { document, NodeFilter } = new JSDOM(html).window;
    const nodeIterator = document.createNodeIterator(document, NodeFilter.SHOW_ELEMENT);

    while (nodeIterator.nextNode()) {
        const currentNode = nodeIterator.referenceNode;
        if (SANITIZER_CONFIG.DANGEROUS_TAGS.includes(currentNode.nodeName.toLowerCase())) {
            currentNode.remove();
        } else if (!SANITIZER_CONFIG.ALLOW_ATTRIBUTES && currentNode.attributes) {
            for (const attribute of currentNode.attributes) {
                currentNode.removeAttribute(attribute.name);
            }
        }
    }

    return document.documentElement.outerHTML;
}