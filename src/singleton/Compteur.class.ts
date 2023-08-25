

export class Compteur {
    private static instance: Compteur;
    public compte: number;
    private constructor() {
        this.compte = 0;
    }
    static getInstance() {
        if(!Compteur.instance) {
            Compteur.instance = new Compteur()
            console.log(Compteur.instance.compte)
        }
        return Compteur.instance
    }
    add(){
        Compteur.getInstance().compte++;
    }
    setValeur(valeur: number){
        Compteur.getInstance().compte = valeur;
    }
}
