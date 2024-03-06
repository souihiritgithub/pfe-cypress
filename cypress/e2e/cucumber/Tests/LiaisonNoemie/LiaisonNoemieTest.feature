Feature: Consulter un retour Noemie 

Scenario: Consulter un retour Noemie 

  Given Je suis sur la page d accueil
  And J'accede au menu Gestion Famille
  And Rechercher la famille
  And Sélectionner la ligne du responsable dans le pavé Liste des familles


  When Cliquer sur Modifier famille
  Then Affichage de la page Modification famille
  When Cliquer sur l'onglet L.NOEMIE
  And Sélectionner un ayant droit sur la Liste des ayants droit
  Then Vérifier la bonne alimentation des colonnes avec les données

  When J'accéde au menu Informations générales Mémo
  And Cliquer sur le bouton 'Ajouter'
  And Saisir une note
  And Cliquer sur Valider
  Then Affichage du message 'Ajout effectué avec succès'
  And Affichage de la note avec une date de création = à la date du jour dans le pavé Liste des mémos
  And Affichage du mémo dans la vision 360°

  

