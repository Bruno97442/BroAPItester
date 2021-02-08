// brotoolBox 1.0

/**
 * queryselector(All) both
 * @param {string} CsSelector
 * @param {HTMLElement} nodeBeginning
 * @returns {Node | Array<Node> | null}
 */
const _ = (CsSelector: string, nodeBeginning: HTMLElement | Document = null): any => {
    !nodeBeginning ? nodeBeginning = window.document : null
    const s: NodeList = nodeBeginning.querySelectorAll(CsSelector)
    return s.length > 1 ? Array.from(s) : s.length === 0 ? null : s[0]
}

/**
 * @param {string} className 
 * @param {HTMLElement} HTMLElement 
 */
const addClass = (className: string, HTMLElement: HTMLElement) => !HTMLElement.classList.contains(className) ? HTMLElement.classList.add(className) : null
/**
 * @param {string} className 
 * @param {HTMLElement} HTMLElement 
 */
const rmClass = (className: string, HTMLElement: HTMLElement) => HTMLElement.classList.contains(className) ? HTMLElement.classList.remove(className) : null
/**
 * add event listener
 * @param {string} eventName 
 * @param {HTMLElement} HTMLElement 
 * @param {FunctionStringCallback} callBack 
 */
const ael = (eventName: any, HTMLElement: HTMLElement, callBack: (e:Event) => void) => HTMLElement.addEventListener(eventName, callBack)

export {_, addClass, rmClass, ael}