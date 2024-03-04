Feature: Automatisation des tests pour le cas d'adhésion (Cas2) dans un projet Cypress 

 Scenario: Accéder à la création d'une famille après saisie des informations d'adhésion 

    Given Je suis sur la page d accueil 
    When J'accede au menu Gestion Adhesions
    And Je saisis une date d'adhésion en cours de mois
    Then Je devrais voir la page de création d'une famille avec l'onglet 'Ajout des ayants droits'
    And Je vérifie que le pavé 'Liste des ayants droits' est vide 
    And Je vérifie que le pavé 'Ajout d un ayant droit' affiche la qualité [RESP] non modifiable
    

     When Je sélectionne la Civilité 
     And Je renseigne les champs obligatoires
     And Je clique sur le bouton 'Valider'
     And Le responsable devrait apparaître dans la pavé 'Liste des ayants droits'
     When Je renseigne de nouveau les champs obligatoires 
     And Je clique sur Valider
     Then Je devrais voir le message '[Ayant droit] Ajout effectué avec succès' 
     And Deux lignes avec les bonnes valeurs devraient apparaître dans la liste des ayants droit



     When Je rempli champs obligatoires pour ajouter produit
     Then Je devrais voir le message 'Ajout effectué avec succès'
     And Je devrais voir le produit créé dans le pavé Liste des produits



     When Je clique sur l'onglet 'Option'
     Then Le pavé Liste des options devrait être affiché vide
     And Vérifier que les champs dans le pavé Ajout option doivent être automatiquement remplis
     When Je coche la case permettant de tout sélectionner dans: Choix de l'ayant droit Sélectionner une Option ou une Combinaison
     And Je vérifie que les risques sont alimentés en cliquant sur le bouton 'Risques couverts'
     


     When Je clique sur l'onglet 'Règlement et périodicité des cotisations'
     Then Je vérifie que les champs sont automatiquement alimentés dans le pavé 'ajout règlement et périodicité de cotisation'



      When Je clique sur 'Suivant'
      Then Dans le Compte cotisant vérifier l'affichge
      When je supprime la famille


      





     
    



     












   

  