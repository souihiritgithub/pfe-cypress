Feature: Modification et gestion des informations d'adhésion 

  Scenario: Accès à la modification d'une famille et gestion des informations 
  Given Je suis sur la page d accueil 
      When Je recherche la famille
      And Je sélectionne la ligne du responsable dans la Liste des familles
      And Je clique sur 'Modifier famille'
      Then Je devrais voir la page 'Modification famille'


      When J accède au menu Informations générales Références bancaires
      And Je clique sur le bouton 'Ajouter'
      And Je sélectionne la puce RIB
      And Je saisis les champs obligatoires 
      And Je clique sur 'Valider'
      Then Je devrais voir le message 'Ajout effectué avec succès'
      And Je devrais voir les nouvelles références bancaires dans le pavé Liste des références bancaires
      
      When Je clique de nouveau sur le bouton Ajouter
       And Je sélectionne la puce IBAN 
       And Je renseigne les champs obligatoires avec une lettre dans l'IBAN
       And Je clique sur Valider
       Then Je devrais voir le message 'Ajout effectué avec succès' 
       And Je vérifie l'ajout d'une nouvelle ligne dans le pavé Liste des références bancaires avec les données saisies 
       When J'accède au menu Informations générales Mémo 
       And Je clique sur le bouton 'Ajouter' 
       And Je saisis une note
       And Je clique sur le bouton 'Valider'
       Then Je devrais voir le message 'Ajout effectué avec succès'
      And La note devrait être affichée dans ,le pavé Liste des mémos avec une date de création à la date du jour, la visio 360° 
      
