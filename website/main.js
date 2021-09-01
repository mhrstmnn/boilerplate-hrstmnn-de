var options = {}
if (isMobile.phone) {
    options.bottom = "15px";
    options.right = "15px";
} else {
    options.bottom = "20px";
    options.right = "20px";
}
window.addEventListener("load", new Darkmode(options).showWidget());

function updateCode() {
    var codeHTML = document.getElementById("codeNoHighlight").innerHTML;
    // codeHTML = codeHTML.replaceAll("<!---->", "");
    // codeHTML = codeHTML.replaceAll("<span>", "").replaceAll("</span>", "");
    // codeHTML = codeHTML.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    document.getElementById("codeToCopy").innerHTML = codeHTML;
    hljs.highlightAll();
}
updateCode();

var app = new Vue({
    el: '#app',
    data: {
        cssData: ["normalizeCss"],
        jsData: [],
        cssAndJsData: [],
        configTitle: "",
        configDescription: "",
        configKeywords: "",
        configAuthor: "Michael Horstmann",
        socialMediaMetadata: {
            display: false,
            ogUrl : "",
            ogImage: "",
            twitterSite: "",
            twitterCreator: "mhrstmnn"
        },
        useContentDeliveryNetwork: false
    },
    methods: {
        htmlDataToString: function () {
            var htmlString = "";
            if (this.cssAndJsData.includes("bootstrapMin")) {
                htmlString += '    <div class="container mt-5 mb-5">\n        <h1>';
                htmlString += this.configTitle;
                htmlString += '</h1>\n    </div>\n';
            } else {
                htmlString += '    <h1>';
                htmlString += this.configTitle;
                htmlString += '</h1>\n';
            }
            return htmlString;
        },
        getUrl: function (name, language, useCDN) {
            switch (name) {
                // CSS (and JS)
                case "bootstrapMin":
                    if (useCDN) {
                        if (language == "css") {
                            return 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha256-z8OR40MowJ8GgK6P89Y+hiJK5+cclzFHzLhFQLL92bg=" crossorigin="anonymous';
                        } else if (language == "js") {
                            return 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha256-c4Ll6eSIg6Eothk8pCWAF8aE923EvtU11pqjBy+NjNM=" crossorigin="anonymous';
                        }
                    } else {
                        if (language == "css") {
                            return "https://static.hrstmnn.de/node_modules/bootstrap/dist/css/bootstrap.min.css";
                        } else if (language == "js") {
                            return "https://static.hrstmnn.de/node_modules/bootstrap/dist/js/bootstrap.min.js";
                        }
                    }
                case "tailwindMinCss":
                    if (useCDN) {
                        return 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.9/dist/tailwind.min.css" integrity="sha256-T4RAzSitmBwfCrqn23ZrSSsQZKc7FyE0sKjIllzjVSQ=" crossorigin="anonymous';
                    } else {
                        return "https://static.hrstmnn.de/tailwind.min.css";
                    }
                case "animateMinCss":
                    if (useCDN) {
                        return 'https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" integrity="sha256-X7rrn44l1+AUO65h1LGALBbOc5C5bOstSYsNlv9MhT8=" crossorigin="anonymous';
                    } else {
                        return "https://static.hrstmnn.de/node_modules/animate.css/animate.min.css";
                    }
                case "highlightMin":
                    if (useCDN) {
                        if (language == "css") {
                            return 'https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11.2.0/styles/default.min.css" integrity="sha256-CGf39SzxAmEe09Ojoh16/2xTRNleX9wBZcEXVnNqwSM=" crossorigin="anonymous';
                        } else if (language == "js") {
                            return 'https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11.2.0/highlight.min.js" integrity="sha256-mfS2sXKEV8eehy39UH7+7BwaoUaIe2TuLO2DXS+c2mI=" crossorigin="anonymous';
                        }
                    } else {
                        if (language == "css") {
                            return "https://static.hrstmnn.de/node_modules/@highlightjs/cdn-assets/styles/default.min.css";
                        } else if (language == "js") {
                            return "https://static.hrstmnn.de/node_modules/@highlightjs/cdn-assets/highlight.min.js";
                        }
                    }
                case "prism":
                    if (useCDN) {
                        if (language == "css") {
                            return 'https://cdn.jsdelivr.net/npm/prismjs@1.24.1/themes/prism.css" integrity="sha256-h/qtq9bUnXbOOwP4EcbLtYM9Mk3iQQcHZAZ+Jz5y0WQ=" crossorigin="anonymous';
                        } else if (language == "js") {
                            return "https://cdn.jsdelivr.net/npm/prismjs@1.24.1/prism.min.js";
                        }
                    } else {
                        if (language == "css") {
                            return "https://static.hrstmnn.de/node_modules/prismjs/themes/prism.css";
                        } else if (language == "js") {
                            return "https://static.hrstmnn.de/node_modules/prismjs/prism.js";
                        }
                    }
                case "slick":
                    if (useCDN) {
                        if (language == "css") {
                            return [
                                'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" integrity="sha256-3h45mwconzsKjTUULjY+EoEkoRhXcOIU4l5YAw2tSOU=" crossorigin="anonymous',
                                'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" integrity="sha256-etrwgFLGpqD4oNAFW08ZH9Bzif5ByXK2lXNHKy7LQGo=" crossorigin="anonymous'
                            ];
                        } else if (language == "js") {
                            return 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" integrity="sha256-DHF4zGyjT7GOMPBwpeehwoey18z8uiz98G4PRu2lV0A=" crossorigin="anonymous';
                        }
                    } else {
                        if (language == "css") {
                            return [
                                "https://static.hrstmnn.de/node_modules/slick-carousel/slick/slick.css",
                                "https://static.hrstmnn.de/node_modules/slick-carousel/slick/slick-theme.css"
                            ];
                        } else if (language == "js") {
                            return "https://static.hrstmnn.de/node_modules/slick-carousel/slick/slick.min.js";
                        }
                    }
                case "normalizeCss":
                    if (useCDN) {
                        return "https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css";
                    } else {
                        return "https://static.hrstmnn.de/node_modules/normalize.css/normalize.css";
                    }
                // JS
                case "vueMinJs":
                    if (useCDN) {
                        return 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js" integrity="sha256-kXTEJcRFN330VirZFl6gj9+UM6gIKW195fYZeR3xDhc=" crossorigin="anonymous';
                    } else {
                        return "https://static.hrstmnn.de/node_modules/vue/dist/vue.min.js";
                    }
                case "jqueryMinJs":
                    if (useCDN) {
                        return 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous';
                    } else {
                        return "https://static.hrstmnn.de/node_modules/jquery/dist/jquery.min.js";
                    }
                case "popperMinJs":
                    if (useCDN) {
                        return "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js";
                    } else {
                        return "https://static.hrstmnn.de/node_modules/@popperjs/core/dist/umd/popper.min.js";
                    }
                case "isMobileMinJs":
                    if (useCDN) {
                        return 'https://cdn.jsdelivr.net/npm/ismobilejs@1.1.1/dist/isMobile.min.js" integrity="sha256-M9uZsv3qfi72WQfG+zH1TBvHgZZon/yNrCZjcJCo644=" crossorigin="anonymous';
                    } else {
                        return "https://static.hrstmnn.de/node_modules/ismobilejs/dist/isMobile.min.js";
                    }
                case "validatorMinJs":
                    if (useCDN) {
                        return 'https://cdn.jsdelivr.net/npm/validator@13.6.0/validator.min.js" integrity="sha256-vG8E6PpIaNsejCbpgObU3tQbVkcBh58aLrOwRbNBLj4=" crossorigin="anonymous';
                    } else {
                        return "https://static.hrstmnn.de/node_modules/validator/validator.min.js";
                    }
                case "darkmodeJsMinJs":
                    if (useCDN) {
                        return 'https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js" integrity="sha256-pHarhWCDelGTiqbhcgyL6HwoYrYiFpDp3n/6wROBGpA=" crossorigin="anonymous';
                    } else {
                        return "https://static.hrstmnn.de/node_modules/darkmode-js/lib/darkmode-js.min.js";
                    }
                default:
                    console.error("URL zur Datei konnte nicht ermittelt werden");
                    return "???";
            }
        },
        getSubString: function (name, language, data) {
            var subString = "";
            var subStringStart = "";
            var subStringEnd = "";
            if (language == "css") {
                subStringStart = '    <link rel="stylesheet" type="text/css" href="';
                subStringEnd = '">\n';
            } else if (language == "js") {
                subStringStart = '    <script src="';
                subStringEnd = '" type="text/javascript"></script>\n';
            }
            if (data.includes(name)) {
                const url = this.getUrl(name, language, this.useContentDeliveryNetwork);
                if (Array.isArray(url)) {
                    for (let index = 0; index < url.length; index++) {
                        console.log(subStringStart + url[index] + subStringEnd);
                        subString += subStringStart + url[index] + subStringEnd;
                    }
                } else {
                    console.log(subStringStart + url + subStringEnd);
                    subString += subStringStart + url + subStringEnd;
                }              
            }
            return subString;
        },
        ogHtmlTagToString: function () {
            if (this.socialMediaMetadata.display) {
                return ' prefix="og: https://ogp.me/ns#"';
            }
        },
        socialMediaMetadataToString: function () {
            if (this.socialMediaMetadata.display) {
                var socialMediaMetadataString = "";
                socialMediaMetadataString += `    <meta property="og:title" content="${ this.configTitle }">\n`;
                socialMediaMetadataString += '    <meta property="og:type" content="website">\n';
                socialMediaMetadataString += `    <meta property="og:url" content="${ this.socialMediaMetadata.ogUrl }">\n`;
                socialMediaMetadataString += `    <meta property="og:image" content="${ this.socialMediaMetadata.ogImage }">\n`;
                socialMediaMetadataString += `    <meta property="og:description" content="${ this.configDescription }">\n`;
                socialMediaMetadataString += '    <meta property="og:locale" content="de_DE">\n';
                socialMediaMetadataString += '    <meta name="twitter:card" content="summary">\n';
                socialMediaMetadataString += `    <meta name="twitter:site" content="@${ this.socialMediaMetadata.twitterSite }">\n`;
                socialMediaMetadataString += `    <meta name="twitter:creator" content="@${ this.socialMediaMetadata.twitterCreator }">\n`;
                return socialMediaMetadataString;
            }
        },
        cssDataToString: function () {
            var cssString = "";
            const allCssData = this.cssData.concat(this.cssAndJsData);
            cssString += this.getSubString("bootstrapMin", "css", allCssData);
            cssString += this.getSubString("tailwindMinCss", "css", allCssData);
            cssString += this.getSubString("animateMinCss", "css", allCssData);
            cssString += this.getSubString("highlightMin", "css", allCssData);
            cssString += this.getSubString("prism", "css", allCssData);
            cssString += this.getSubString("slick", "css", allCssData);
            cssString += this.getSubString("normalizeCss", "css", allCssData);

            const allJsData = this.jsData.concat(this.cssAndJsData);
            if (allJsData.includes("darkmodeJsMinJs")) {
                cssString += "    <style>\n";
                cssString += "        .darkmode--activated {\n            background-color: black;\n        }\n";
                cssString += "    </style>\n";
            }
            return cssString;
        },
        jsDataToString: function () {
            var jsString = "";
            const allJsData = this.jsData.concat(this.cssAndJsData);
            jsString += this.getSubString("vueMinJs", "js", allJsData);
            jsString += this.getSubString("jqueryMinJs", "js", allJsData);
            jsString += this.getSubString("popperMinJs", "js", allJsData);
            jsString += this.getSubString("bootstrapMin", "js", allJsData);
            jsString += this.getSubString("isMobileMinJs", "js", allJsData);
            jsString += this.getSubString("validatorMinJs", "js", allJsData);
            jsString += this.getSubString("darkmodeJsMinJs", "js", allJsData);
            jsString += this.getSubString("highlightMin", "js", allJsData);
            jsString += this.getSubString("prism", "js", allJsData);
            jsString += this.getSubString("slick", "js", allJsData);

            const addScriptTag = allJsData.includes("darkmodeJsMinJs") || allJsData.includes("highlightMin");
            if (addScriptTag) {
                jsString += '    <script>\n';
            }
            if (allJsData.includes("darkmodeJsMinJs")) {
                jsString += '        var darkmodeOptions = {}\n        if (isMobile.phone) {\n';
                jsString += '            darkmodeOptions.bottom = "15px";\n            darkmodeOptions.right = "15px";\n';
                jsString += '        } else {\n';
                jsString += '            darkmodeOptions.bottom = "20px";\n            darkmodeOptions.right = "20px";\n';
                jsString += '        }\n        window.addEventListener("load", new Darkmode(darkmodeOptions).showWidget());\n';
            }
            if (allJsData.includes("highlightMin")) {
                jsString += '        hljs.highlightAll();\n';
            }
            if (addScriptTag) {
                jsString += '    </script>\n';
            }
            return jsString;
        },
        refresh: function() {
            const checkboxes = document.getElementsByClassName("form-check-input");
            for (let index = 0; index < checkboxes.length; index++) {
                const element = checkboxes[index];
                if (element.value == "bootstrapMin" && element.checked == true && !this.jsData.includes("popperMinJs")) {
                    this.addToJsData("popperMinJs");
                } else if (element.value == "darkmodeJsMinJs" && element.checked == true && !this.jsData.includes("isMobileMinJs")) {
                    this.addToJsData("isMobileMinJs");
                }
            }
            setTimeout(() => {
                updateCode();
            }, 0);
        },
        addToCssData: function (url) {
            this.cssData.push(url);
            setTimeout(() => {
                this.refresh();
            }, 0);
        },
        addToJsData: function (url) {
            this.jsData.push(url);
            setTimeout(() => {
                this.refresh();
            }, 0);
        }
    }
});

function copyCode() {
    document.getElementById("linkToCopy").innerText = "kopiert";
    const code = document.getElementById("codeNoHighlight").innerText;
    navigator.clipboard.writeText(code);
    document.getElementById("copyCodeCheckmark").style.display = "inline-block";
    setTimeout(() => {
        document.getElementById("copyCodeCheckmark").style.display = "none";
        document.getElementById("linkToCopy").innerText = "kopieren";
    }, 4000);
}

// selectCode
document.getElementById("codeContainer").onclick = (event) => {
    var range, selection;
    // event.target.style.backgroundColor = "var(--bs-gray-200)";
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(event.target);
    selection.removeAllRanges();
    selection.addRange(range);
};
