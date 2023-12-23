import * as htmlparser2 from "htmlparser2";

const SANITIZER_CONFIG = {
    // some tags are dangerous!!!!
    DANGEROUS_TAGS: [
        'script',
        'iframe',
        'style',
        'object',
        'embed',
        'style',
        'svg',
        'math',
        'noscript',
        'noembed',
        'noframes',
    ],

    // attributes are dangerous, so we don't allow them
    ALLOWED_ATTRIBUTES: ["color"]
}

function sanitizeText(text) {
    return text.
        replace(/&/g, "&amp;").
        replace(/</g, "&lt;").
        replace(/>/g, "&gt;");
}

function sanitizeAttribute(attribute) {
    return attribute.
        replace(/&/g, "&amp;").
        replace(/"/g, "&quot;").
        replace(/'/g, "&#x27;");
}

export function sanitizeHtml(html) {
    let result = "";
    const parser = new htmlparser2.Parser({
        onopentag(name, attributes) {
            if (SANITIZER_CONFIG.DANGEROUS_TAGS.includes(name.toLowerCase())) {
                return;
            }

            result += `<${name}`;

            if (SANITIZER_CONFIG.ALLOWED_ATTRIBUTES && attributes) {
                for (const attribute of Object.keys(attributes)) {
                    if (SANITIZER_CONFIG.ALLOWED_ATTRIBUTES.includes(attribute)) {
                        result += ` ${attribute}="${sanitizeAttribute(attributes[attribute])}"`;
                    }
                }
            }

            result += ">";
        },
        ontext(text) {
            result += sanitizeText(text);
        },
        onclosetag(tagname) {
            if (SANITIZER_CONFIG.DANGEROUS_TAGS.includes(tagname.toLowerCase())) {
                return;
            }

            result += `</${tagname}>`;
        },
    });
    parser.write(html);
    parser.end();
    return result;
}