var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const containerB = (content, containerType = "code") => {
    const C = containerType === "code"
        ? ["pre", "text-white-50"]
        : ["div", "alert alert-danger"];
    const container = document.createElement(C[0]);
    container.classList.value = C[1];
    container.append(content);
    return container;
};
const shower = (data, { where = ".showingPlace", clear = true } = {}) => {
    const type = data.name ? "alert" : "code";
    const target = document.querySelector(where);
    clear ? target.innerHTML = "" : "";
    where
        ? target.append(containerB(JSON.stringify(data.name ? data.stack : data, null, 4), type))
        : console.log(data);
};
const inFindbyid = function (e) {
    this.form.action += this.parentElement.parentElement.querySelector('[data-binding="_id"]');
};
function broPost(url = '', data, method = "POST") {
    return __awaiter(this, void 0, void 0, function* () {
        // Default options are marked with *
        const response = yield fetch(url, {
            method: method,
            body: data !== null && data !== void 0 ? data : null
        });
        return response.json(); // parses JSON response into native JavaScript objects
    });
}
// Example POST method implementation:
function postData(url = '', data) {
    return __awaiter(this, void 0, void 0, function* () {
        // Default options are marked with *
        const response = yield fetch(url, {
            method: 'POST',
            mode: 'cors',
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            headers: {
                // 'Content-Type': 'text/plain'
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    });
}
export { shower, broPost, postData };
