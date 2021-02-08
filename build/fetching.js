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
    const type = data.stack ? "alert" : "code";
    const target = document.querySelector(where);
    clear ? target.innerHTML = "" : "";
    where
        ? target.append(containerB(JSON.stringify(data.stack ? data.stack : data, null, 4), type))
        : console.log(data);
};
const broJson = (response) => response.json();
// interface Option {
//   method: string,
//   mode: string,
//   credentials: string,
//   headers : {
//     'content-Type': string
//   },
//   redirect: string,
//   referrerPolicy: string
//   body: any
// }
function broPost(url = '', init) {
    return __awaiter(this, void 0, void 0, function* () {
        // Default options are marked with *
        const response = yield fetch(url, init);
        return response.json(); // parses JSON response into native JavaScript objects
    });
}
export { shower, broPost, broJson };
