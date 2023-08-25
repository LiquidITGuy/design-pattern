import { Compteur } from './singleton/Compteur.class.ts'
export function setupCounter(element: HTMLButtonElement) {
  const setCounter = (valeur: number | void) => {
    // Ici, on récupère l'instance à chaque fois pour vérifier qu'il s'agit bien d'une instance unique
    const compteur = Compteur.getInstance()
    if(valeur || valeur === 0){
      compteur.setValeur(valeur)
    }
    else {
      compteur.add()
    }
    const compte = compteur.compte
    element.innerHTML = `count is ${compte}`
  }

  element.addEventListener('click', () => setCounter())
    setCounter(0)
}
