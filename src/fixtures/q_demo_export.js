var demoCorpus = {
  "gameplays" : [
    {
      "id" : "qru",
      "type" : [
        {"name" : "radio", "default" : true, "libelle" : "Question Vrai - Faux"},
        {"name" : "img_btn", "libelle" : "Selectionner l'image"}
      ],
      "instruction" : "Sélectionner la bonne réponse"
    },
    {
      "id" : "qrm",
      "type" : [
        {"name" : "checkbox", "default" : true, "libelle" : "Question à choix multiple"},
        {"name" : "img_btn", "libelle" : "Selectionner les images"}
      ],
      "instruction" : "Sélectionner la ou les bonnes réponses"
    },
    {
      "id" : "txt_tr",
        "type" : [
          {"name" : "select", "default": true, "libelle" : "Text à trou"},
          {"name" : "d&d", "libelle" : "Drag and Drop"}
        ],
        "instruction" : "Trouver les mots manquants"
    },
    {
      "id" : "curseur",
      "type" : [
        {"name" : "range", "default": true, "libelle" : "Slider"}
      ],
      "instruction" : "Déplacer le curseur"
    },
    {
      "id" : "ord_lst",
      "type" : [
        {"name" : "d&d", "default": true, "libelle" : "Remettre dans l'ordre"}
      ],
      "instruction" : "Maintenir cliqué l'élément et déplacer"
    },
    {
      "id" : "assoc",
      "type" : [
        {"libelle" : "Association"}
      ],
      "instruction" : "Relier entre eux"
    }
  ],
  "categorie" : [
    "connaissances",
    "compréhension",
    "comportement"
  ],
  "questions" : [
    {
      "id" : 1,
      "gameplay" : "qrm",
      "categorie" : "compréhension",
      "intitules" : "La voiture jaune est bien placée pour :",
      "assets" : {
        "type" : "img",
        "src" : "Question1.jpg"
      },
      "reponses" : [
        {"label" : "prendre la première sortie", "value" : true},
        {"label" : "prendre la troisième sortie", "value" : false},
        {"label" : "aller tout droit", "value" : true},
        {"label" : "aller à Lyon", "value" : true}
      ]
    },
    {
      "id" : 2,
      "gameplay" : "qru",
      "categorie" : "compréhension",
      "intitules" : "La voiture jaune est-elle bien placée pour tourner à gauche ?",
      "assets" : {
        "type" : "img",
        "src" : "Question2.jpg"
      },
      "reponses" : [
        {"label" : "non", "value" : true},
        {"label" : "oui", "value" : false}
      ]
    },
    {
      "id" : 3,
      "gameplay" : "qru",
      "categorie" : "compréhension",
      "intitules" : "On est le 17 du mois, peut-on stationner du côté de la rue où le numéro des maison est impair ?",
      "assets" : {
        "type" : "img",
        "src" : "Question3.png"
      },
      "reponses" : [
        {"label" : "faux", "value" : true},
        {"label" : "vrai", "value" : false}
      ]
    },
    {
      "id" : 4,
      "gameplay" : "curseur",
      "categorie" : "connaissance",
      "intitules" : "Combien de points peut-on perdre sur son permis de conduire pour avoir stationner ou circuler sur la bande d'arrêt d’urgence ?",
      "reponses" : {
        "true" : 3,
        "min": 0,
        "max": 12,
        "step": 1
      }
    },
    {
      "id" : 5,
      "gameplay" : "curseur",
      "categorie" : "connaissance",
      "intitules" : "Combien de points risque t-on de perdre sur son permis lorsque l’on se gare à contresens de la circulation ? ",
      "reponses" : {
        "true" : 0,
        "min": 0,
        "max": 12,
        "step": 1
      }
    },
    {
      "id" : 6,
      "gameplay" : "qrm",
      "categorie" : "compréhension",
      "intitules" : "Que doit faire le conducteur de la voiture jaune ?",
      "assets" : {
        "type" : "img",
        "src" : "Question6.jpg"
      },
      "reponses" : [
        {"label" : "mettre le pied face au frein", "value" : true},
        {"label" : "observer attentivement la voiture bleue", "value" : true},
        {"label" : "maintenir son allure", "value" : false},
        {"label" : "etablir un contact visuel", "value" : true}
      ]
    },
    {
      "id" : 7,
      "gameplay" : "ord_lst",
      "categorie" : "connaissance",
      "intitules" : "Que faut-il faire avant d’engager un dépassement sur voie rapide ?",
      "reponses" : [
        {"label" : "observer dans son rétroviseur intérieur", "value" : 1},
        {"label" : "observer dans son rétroviseur extérieur gauche", "value" : 2},
        {"label" : "observer dans son angle mort gauche", "value" : 3},
        {"label" : "activer son clignotant", "value" : 4},
        {"label" : "passer sur la voie de gauche", "value" : 5},
        {"label" : "maintenir une allure soutenue", "value" : 6},
        {"label" : "voir le véhicule doublé en entier dans son rétroviseur intérieur", "value" : 7},
        {"label" : "se rabattre à droite sans coup de volant", "value" : 8}
      ]
    },
    {
      "id" : 8,
      "gameplay" : "ord_lst",
      "categorie" : "compréhension",
      "intitules" : "Comment le conducteur de la voiture orange doit-il se comporter dans cette situation ?",
      "assets" : {
        "type" : "img",
        "src" : "Question8.jpg"
      },
      "reponses" : [
        {"label" : "observer dans son rétroviseur intérieur", "value" : 1},
        {"label" : "observer dans son rétroviseur extérieur droit", "value" : 2},
        {"label" : "observer son angle mort droit", "value" : 3},
        {"label" : "mettre son clignotant", "value" : 4},
        {"label" : "s'arrêter pour laisser passer le cycliste", "value" : 5},
        {"label" : "tourner une fois le cycliste passé", "value" : 6}
      ]
    },
    {
      "id" : 9,
      "gameplay" : "qrm",
      "type" : "img_btn",
      "categorie" : "connaissance",
      "intitules" : "Quels usagers n’ont pas le droit de circuler sur la voie rapide ?",
      "assets" : {
        "type" : "dossier",
        "src" : "Question9/"
      },
      "reponses" : [
        {"img" : "interdit velo", "src" : "interditVelo@3x.png", "value" : true},
        {"img" : "interdit bus", "src" : "interditBus@3x.png", "value" : false},
        {"img" : "interdit marchandises", "src" : "interditMarchandises@3x.png", "value" : false},
        {"img" : "interdit moto", "src" : "interditMoto@3x.png", "value" : false},
        {"img" : "interdit tracteur", "src" : "interditTracteur@3x.png", "value" : true},
        {"img" : "interdit mobylette", "src" : "interditMobylette@3x.png", "value" : true},
        {"img" : "interdit pieton", "src" : "interditPieton@3x.png", "value" : true},
        {"img" : "interdit 12t", "src" : "interdit12t@3x.png", "value" : false},
        {"img" : "interdit caravane", "src" : "interditCaravane@3x.png", "value" : false}
      ]
    },
    {
      "id" : 10,
      "gameplay" : "qrm",
      "type" : "img_btn",
      "categorie" : "connaissance",
      "intitules" : "Quel panneaux peut on rencontrer dans une zone de stationnement payant ?",
      "assets" : {
        "type" : "dossier",
        "src" : "Question10/"
      },
      "reponses" : [
        {"img" : "arrêt/stationnement interdit", "src" : "ASinterdit@3x.png", "value" : false},
        {"img" : "arrêt/stationnement interdit sauf..", "src" : "ASinterditSauf@3x.png", "value" : true},
        {"img" : "stationnement interdit", "src" : "Sinterdit@3x.png", "value" : false},
        {"img" : "zone stationnement interdit", "src" : "SinterditZone@3x.png", "value" : false},
        {"img" : "fin zone stationnement interdit", "src" : "SinterditZoneFin@3x.png", "value" : false},
        {"img" : "zone stationnement limité par disque", "src" : "SlimitéDisqueZone@3x.png", "value" : false},
        {"img" : "fin zone stationnement limité par disque", "src" : "SlimitéDisqueZoneFin@3x.png", "value" : false},
        {"img" : "zone stationnement payant", "src" : "SpayantZone@3x.png", "value" : true},
        {"img" : "fin zone stationnement payant", "src" : "SpayantZoneFin@3x.png", "value" : true}
      ]
    },
    {
      "id" : 11,
      "gameplay" : "qru",
      "categorie" : "connaissance",
      "name" : "Questions type code",
      "intitules" : [
        "L’éco-conduite a des effets positifs, en terme de sécurité routière : ",
        "en terme de confort pour le conducteur et les passagers : "
      ],
      "assets" : {
        "type" : "img",
        "src" : "Question11.png"
      },
      "reponses" : [
        [{"label" : "oui", "value" : true}, {"label" : "non", "value" : false}],
        [{"label" : "oui", "value" : true}, {"label" : "non", "value" : false}]
      ]
    },
    {
      "id" : 12,
      "gameplay" : "qrm",
      "categorie" : "compréhension",
      "name" : "Question type code",
      "intitules" : "Sur cette route, je peux circuler à",
      "assets" : {
        "type" : "img",
        "src" : "Question12.png"
      },
      "reponses" : [
        {"label" : "90 km/h", "value" : true},
        {"label" : "100 km/h", "value" : true},
        {"label" : "110 km/h", "value" : true},
        {"label" : "130 km/h", "value" : false}
      ]
    },
    {
      "id" : 13,
      "gameplay" : "txt_tr",
      "categorie" : "connaissance",
      "intitules" : "A quoi servent les voies réservées ?",
      "assets" : {
        "type" : "img",
        "src" : "Question13.jpg"
      },
      "reponses" : [
        {"label" : ["Elles servent à délimiter l’espace de chaque ", " de la route;"],
           "options" : ["usager", "partie"],
           "value" : "usager"},
        {"label" : ["et ainsi mieux ", " . "],
          "options" : ["cohabiter", "circuler"],
            "value" : "cohabiter"},
        {"label" : "Il est donc important que chacun ",
          "options" : ["respect", "ignore", "observe"],
          "value" : "respect"}
      ]
    },
    {
      "id" : 14,
      "gameplay" : "txt_tr",
      "categorie" : "connaissance",
      "intitules" : "Quels sont les avantages du covoiturage ? ",
      "reponses" : [
        {"label" : ["Le covoiturage ", " le nombre de véhicules  en circulation"],
           "options" : ["diminue", "augmente"],
           "value" : "diminue"},
        {"label" : ["et par conséquent réduit les rejets de ", ", "],
          "options" : ["CO2", "H2O", "SO2"],
            "value" : "CO2"},
        {"label" : "le risque d’accident et les nuisances ",
          "options" : ["sonores", "visuelles"],
          "value" : "sonores"}
      ]
    },
    {
      "id" : 15,
      "gameplay" : "qrm",
      "categorie" : "compréhension",
      "intitules" : "Quelle erreur commet le conducteur de la voiture jaune ?",
      "assets" : {
        "type" : "video",
        "src" : "Question15.mp4",
        "alt" : "vidéo croisement / obstacle sur la chaussée"
      },
      "reponses" : [
        {"label" : "il oublie de mettre son clignotant", "value" : false},
        {"label" : "il ne respecte pas les règles de priorité", "value" : true},
        {"label" : "il roule trop vite", "value" : false},
        {"label" : "il circule à contresens", "value" : false}
      ]
    },
    {
      "id" : 16,
      "gameplay" : "qrm",
      "categorie" : "compréhension",
      "intitules" : "Cette manoeuvre est:",
      "assets" : {
        "type" : "video",
        "src" : "Question16.mp4",
        "alt" : "Vidéo créneau stationnement à contresens"
      },
      "reponses" : [
        {"label" : "autorisée", "value" : false},
        {"label" : "interdite", "value" : true},
        {"label" : "passible d’une amende de 35€", "value" : true},
        {"label" : "passible d’une amende de 135€", "value" : false}
      ]
    }
  ]
};

export {demoCorpus};
