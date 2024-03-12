Feature: Modification des coordonnées des ayants droit

  Scenario: Modification des coordonnées d'un ayant droit
    Given L'utilisateur est connecté
    #scenario 1
    When L'utilisateur accède au menu Gestion Famille, recherche et clique pour modifier
    Then Affichage de la page Modification famille
    When L'utilisateur clique sur l'onglet Ayants droit,selectionne le responsable et clique sur coordonnées
    Then Affichage de la Liste des coordonnées ayant droit avec au moins une ligne sans date de fin
    When L'utilisateur sélectionne la ligne de coordonnées sans date de fin, Clique sur Modifier,et Clique sur Annuler sans faire de modification
    Then Vérification que le pavé se ferme sans affichage d'un message de confirmation d'annulation
    When L'utilisateur sélectionne de nouveau la ligne,clique sur "Modifier", Saisit un nouveau numéro de téléphone à 10 chiffres commençant par 07, Clique sur "Enregistrer"
    Then Affichage du message "Modification effectuée avec succès" et vérification des champs
    When L'utilisateur sélectionne la ligne où la date de fin est vierge dans la Liste des coordonnées ayant droit,Clique sur "Modifier", Saisit et Valide
    Then Affichage du message "Modification effectuée avec succès" et vérification
   #scenario 2
    When L'utilisateur accède au menu Gestion Famille,Recherche, Sélectionne une ligne,Modifier,Affichage de la page Modification famille
    When L'utilisateur saisit une date dans le pavé Informations générales champs "PND depuis le" et Clique sur "Mettre à jour"
    When L'utilisateur clique sur la vision 360° et Passe le curseur sur l'adresse et verifier
    When L'utilisateur clique sur le pictogramme "maison" à gauche de l'adresse
    Then Redirection vers l'écran Ayants droit, pavé Coordonnées
    When L'utilisateur sélectionne la ligne de coordonnées active,dupliquer,faire des modifications et valider
    Then Affichage du message "Ajout effectué avec succès" et faire des vérifications
    When L'utilisateur accède à l'onglet Informations générales et vérifier PND
    When L'utilisateur clique sur la vision 360° et Passe le curseur sur l'adresse et verifier l'adresse
    #Scenario 3
    When L'utilisateur accède au menu Gestion Famille,Recherche, Sélectionne une ligne,Modifier,Affichage de la page Modification famille
    When L'utilisateur clique sur l'onglet Ayants droit,Sélectionne la ligne du responsable,modifier,Affichage du pavé Mise à jour Ayant droit avec les données relatives au responsab
    When L'utilisateur modifie l'année de naissance et mis à jour
    When L'utilisateur sélectionne un ayant droit, Clique sur le bouton Modifier,Affichage du pavé Mise à jour Ayant droit avec les données relatives à l'ayant droit sélectionné
    When L'utilisateur modifie le nom de famille, Clique sur le bouton Mettre à jour,et Affichage d'un message confirmant la bonne prise en compte de la mise à jour
    When L'utilisateur teste chaque champ en effectuant des modifications,modification des champs et faire la vérification
   #scenario 4
    When L'utilisateur accède au menu Gestion Famille,Recherche la famille,Sélectionne la ligne,modifer etcAffichage de la page Modification famille
    When L'utilisateur accède à l'onglet Ayants droit,Clique sur le bouton "Ajouter",Saisit les champs obligatoires,Clique sur Valider
    Then Affichage du message "Ajout effectué avec succès",Affichage de l'ayant droit rajouté dans le pavé Liste des ayants droit,Consultation de la fiche ayant droit
    When L'utilisateur sélectionne la ligne de l'ayant droit créé,Clique sur le bouton consulter,Vérification
    When L'utilisateur ferme le pavé,Sélectionne de nouveau la ligne de l'ayant droit créé,Clique sur le bouton Modifier
    Then Vérification de l'affichage du pavé Modification ayant droit affichant les données relatives à l'ayant droit créé et permettant la modification de certaines données
    When L'utilisateur sélectionne la ligne du responsable,Clique sur Modifier,Vérification de la présence du pavé Radiation
    When L'utilisateur accède à l'onglet Produits et options, ajout option pour le nouveau ayant droit
    Then Vérification de l'affichage du message "Ajout effectué avec succès" et vérification des options
    When L'utilisateur accède à l'onglet Informations générales L.NOEMIE,Sélectionne l'ayant droit créé dans la Liste des ayants droit,Clique sur le bouton "Création"
    Then Auto-scroll pour affichage du pavé Détails Liaison Noemie,Vérification que la date début = date d'adhésion,Vérification
    When L'utilisateur accède à l'onglet Informations générales TP Externe,Clique sur "Mise à jour droits",Affichage d'un message de confirmation et confirmer
    When L'utilisateur clique sur "Mise à jour carte" dans le menu TP Externe,Affichage d'un message de confirmation et confirmer
    When L'utilisateur clique sur "Historique Mouvements" dans le menu TP Externe,et verification
    When L'utilisateur clique sur le menu Courriers Edition, Sélectionne un courrier et Valider,Ouverture d'un nouvel onglet BDOC pour affichage du courrier sélectionné
    When Accède au menu Mémo,Ajouter, Saisit une note et Valider
    Then Affichage du message "Ajout effectué avec succès", Affichage de la note avec une date de création = à la date du jour dans le pavé Liste des mémos et Affichage du mémo dans la vision 360°
