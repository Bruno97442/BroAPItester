/**
 * queryselector(All) both
 * @param {string} CsSelector
 * @param {HTMLElement} nodeBeginning
 * @returns {Node | Array<Node> | null}
 */
const _ = (CsSelector, nodeBeginning = null) => {
    !nodeBeginning ? nodeBeginning = window.document : null;
    const s = nodeBeginning.querySelectorAll(CsSelector);
    return s.length > 1 ? Array.from(s) : s.length === 0 ? null : s[0];
};
/**
 * @param {string} className
 * @param {HTMLElement} HTMLElement
 */
const addClass = (className, HTMLElement) => !HTMLElement.classList.contains(className) ? HTMLElement.classList.add(className) : null;
/**
 * @param {string} className
 * @param {HTMLElement} HTMLElement
 */
const rmClass = (className, HTMLElement) => HTMLElement.classList.contains(className) ? HTMLElement.classList.remove(className) : null;
/**
 * add event listener
 * @param {string} eventName
 * @param {HTMLElement} HTMLElement
 * @param {FunctionStringCallback} callBack
 */
const ael = (eventName, HTMLElement, callBack) => HTMLElement.addEventListener(eventName, callBack);
export { _, addClass, rmClass, ael };
