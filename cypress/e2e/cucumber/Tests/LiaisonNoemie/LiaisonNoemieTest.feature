Feature: Cas de test 3 liaison Noémie

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


  When J'accéde au menu Gestion Famille
  And Chercher la famille 
  And Sélectionner la ligne du responsable dans le pavé Liste des familles
  When Cliquer sur Modifier famille
  Then Affichage de la page Modification famille
  When Depuis l'onglet Informations générales, cliquer sur l'onglet L.NOEMIE
  And Sélectionner la ligne du responsable dans le pavé Liste des ayants droit
  And Cliquer sur le bouton Création
  And Saisir une date de début et une date de fin
  And Cliquer sur le bouton 'Valider'
  Then Affichage du message 'Période RO créée' 
  And Vérifier pavé Mouvements NOEMIE


  When Accéder au menu Informations générales Mémo
  And Cliquer sur le bouton 'Ajouter'
  And Saisir une note noemie
  And Cliquer sur Valider
  Then Affichage du message 'Ajout effectué avec succès' 
  And Affichage de la note avec une date de création égale à la date du jour dans le pavé Liste des mémos
  And Affichage du mémo après Noemie dans la vision 360°

  When L'utilisateur accède au menu Gestion Famille
  And L'utilisateur recherche la famille
  And L'utilisateur clique sur 'Modifier famille'
  Then La page de modification de la famille s'affiche

  And L'utilisateur clique sur l'onglet Informations générales L.NOEMIE
  And L'utilisateur sélectionne l'ayant droit concerné dans la liste des ayants droit
  Then Le pavé Mouvements NOEMIE s'affiche avec la liste des mouvements correspondant à l'ayant droit

  
  And L' utilisateur positionne le curseur sur le mouvement 408 à modifier
  And L'utilisateur clique sur Modification
  And L'utilisateur saisit une 'date fin'
  And L'utilisateur clique sur 'Valider'
  Then Un message de confirmation de modification s'affiche
  And verification Modif


  And L'utilisateur clique sur l'onglet Ayants droit
  And L'utilisateur sélectionne l'ayant droit concerné par le changement
  And L'utilisateur clique sur le bouton 'Modifier'
  And L'utilisateur saisit le nouveau numéro de sécurité sociale
  And L'utilisateur clique sur 'Mettre à jour'
  Then Un message 'Modification effectuée avec succès' s'affiche
  And Le nouveau numéro de sécurité sociale est affiché dans la liste des ayants droit
  And Le nouveau numéro de sécurité sociale est affiché dans la consultation de l'ayant droit 
  And Le nouveau numéro de sécurité sociale est affiché dans la vision 360°




  And L'utilisateur clique sur l'onglet Informations générales et puis clique L.NOEMIE 
  And L'utilisateur sélectionne l'ayant droit concerné dans la liste des ayants droit
  And L'utilisateur clique sur Création
  And L'utilisateur saisit une date début égale au lendemain de la date de fin saisie précédemment
  And L'utilisateur saisit une date à envoyer égale à J+1 par rapport à la précédente date d'envoi
  And L'utilisateur clique sur Valider
  Then Un message d'ajout s'affiche
  And Une ligne est créée en mouvement C avec les détails spécifiés



  And J'accede au menu Gestion Famille
  And Rechercher famille
  And Sélectionner la ligne du responsable dans le pavé Liste des familles

  When Cliquer sur Modifier famille
  Then Affichage de la page Modification famille

  And L'utilisateur accède à l'onglet Informations générales TP Externe
  And L'utilisateur met à jour les droits et la carte
  Then Les messages de confirmation s'affichent
  And Les colonnes Maj Droit et Maj Carte dans l'historique des mouvements sont alimentées avec la date du jour 



And L'utilisateur clique sur l'onglet Mémo
And L'utilisateur clique sur le bouton 'Ajouter'
And L'utilisateur saisit une note
And L'utilisateur clique sur 'Valider'aprés TPE
Then Un message 'Ajout effectué avec succès' s'affiche
And Affichage de la note Apres TPE avec une date de création égale à la date du jour dans le pavé Liste des mémos
And Affichage du mémo après TPE dans la vision 360°





  

