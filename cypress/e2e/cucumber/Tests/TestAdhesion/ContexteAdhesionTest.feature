Feature: Gestion et contexte des adhésion

  Scenario: Accéder au menu Gestion/Adhésions
    Given L'utilisateur est connecté
    When L'utilisateur accède au menu Gestion Adhésions
    Then la page "Création d'une famille" s'affiche avec l'onglet "Informations générales"
    When L'utilisateur sélectionne un Organisme
    And Saisit la date d'adhésion
    And Sélectionne une agence
    And Sélectionne un conseiller
    And Sélectionne une région
    And Sélectionne une origine si paramétrage présent
    And Clique sur le bouton "Suivant"
    Then La page Création d'une famille, onglet Ajout des ayants droits est affichée
    And Le pavé Liste des ayants droits est vierge
    And Le pavé Ajout d'un ayant droit est ouvert par défaut avec la qualité [RESP] non modifiable
    When L'utilisateur sélectionne la Civilité
    And Renseigne les champs obligatoires
    And Clique sur le bouton "Valider"
    Then Affichage du message "[Famille] Ajout effectué avec succès"
    And Le responsable est affiché dans le pavé Liste des ayants droits
    When L'utilisateur Renseigne de nouveau les champs obligatoires
    And Clique sur le bouton "Valider"
    Then Vérification de l'affichage du message "[Ayant droit] Ajout effectué avec succès"
    And Deux lignes apparaissent avec les bonnes valeurs dans la liste des ayants droits
    When L'utilisateur sélectionne un ayant droit dans la liste
    And Clique sur le bouton Modifier
    And Modifie des valeurs
    And Clique sur Mettre à jour
    Then Vérification que la mise à jour est effective dans le détail de l'ayant droit concerné
    And La mise à jour est effective dans la liste des ayants droits en fonction des modifications effectuées
    When L'utilisateur Clique sur le bouton "Suivant"
    Then Affichage de la page Création d'une famille, onglet Affectation produit et option avec un pavé Liste des produits vide
    And Dans l'onglet Produit, vérification des champs automatiquement alimentés Date adhésion Échéance d'entrée
    When L'utilisateur ajout un produit et valide le formulaire
    Then Affichage d'un message : "Ajout effectué avec succès" et vérification de produit
    When L'utilisateur clique sur Option
    Then Affichage du pavé Liste des options vierge et vérification des champs
    When L'utilisateur sélectionne et valide des options
    Then Confirmation de l'ajout, vérification de l'option dans la liste
    When L'utilisateur clique sur le bouton consulter, modifier, supprimer sans sélectionner de ligne
    When L'utilisateur clique sur le bouton Risques couverts avec selection d'une ligne
    When L'utilisateur clique sur l'onglet "Règlement et périodicité des cotisations"
    Then Vérification que les champs sont alimentés automatiquement 
    When L'utilisateur Ajout et valide une référence bancaire
    Then Si la référence bancaire existe déjà , Affichage du message Référence bancaire déjà existante


