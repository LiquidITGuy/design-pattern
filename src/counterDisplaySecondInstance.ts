import { Compteur } from './singleton/Compteur.class.ts'
export function setupCounterDisplay(element: HTMLDivElement, button: HTMLButtonElement) {
    const updateDisplay = () => {
        const compte = Compteur.getInstance().compte
        element.innerHTML = `le compte est de ${compte}`
    }
    updateDisplay()
    const observer = new MutationObserver(updateDisplay);
    observer.observe(button,  {characterData: false, childList: true, attributes: false})
}
