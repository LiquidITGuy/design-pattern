import { Builder } from '../octo.interface.ts'
class OctoBusiness implements Builder {
    ajouteBaseOcto(): void {
        // ajoute les infos de base pour un business
    }

    ajouteCompetences(): void {
        // ajoute les compétences d'interet et celles supperieures à 2 en connu
    }

    ajouteTaceDuMois(mois: Date): void {
        // ajoute le tace soustrait de l'objectif biz
    }

    ajouteTribu() {
    }

}
