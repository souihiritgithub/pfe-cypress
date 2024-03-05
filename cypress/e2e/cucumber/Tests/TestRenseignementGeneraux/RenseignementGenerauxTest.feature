Feature: Modification des coordonnées des ayants droit

  Scenario: Modification des coordonnées d'un ayant droit
    Given L'utilisateur est connecté
    When L'utilisateur accède au menu Gestion Famille, recherche et clique pour modifier
    Then Affichage de la page Modification famille
    When L'utilisateur clique sur l'onglet Ayants droit,selectionne le responsable et clique sur coordonnées
    Then Affichage de la Liste des coordonnées ayant droit avec au moins une ligne sans date de fin
   # When L'utilisateur sélectionne la ligne de coordonnées sans date de fin, Clique sur Modifier,et Clique sur Annuler sans faire de modification
   # Then Vérification que le pavé se ferme sans affichage d'un message de confirmation d'annulation
   # When L'utilisateur sélectionne de nouveau la ligne,sur "Modifier", Saisit un nouveau numéro de téléphone à 10 chiffres commençant par 07
   # Then Affichage du message "Modification effectuée avec succès" et vérification des champs
   # When L'utilisateur sélectionne la ligne où la date de fin est vierge dans la Liste des coordonnées ayant droit,Clique sur "Modifier", Saisit et Valide
   # Then Affichage du message "Modification effectuée avec succès" et vérification
