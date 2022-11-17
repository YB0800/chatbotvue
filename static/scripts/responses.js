function getBotResponse(input) {


    // Simple responses
    if (input == "bonjour") {
        return "Bonjour, souhaitez-vous un renseignement sur l'un de nos produits ?";
    } else if (input == "au revoir") {
        return "A bientôt, bonne journée!";
    } else {
        return "Essayez de demander autre chose!";
    }
}