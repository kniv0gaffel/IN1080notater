---
layout: post
title:  "Node- og Mesh-analyse"
usemathjax : true
categories: Kretsanalyse
date: 2023-02-15 00:08
---

Nodeanalyse og mesh-analyse er to vanlige teknikker som brukes i kretsanalyse for å bestemme spenningene og strømmene i en krets.

Nodeanalyse er en metode som brukes til å bestemme spenningene ved hver node i en krets i forhold til et referansepunkt, vanligvis bakken. En node er et punkt i en krets der to eller flere komponenter er koblet sammen. Nodeanalyse innebærer å anvende Kirchhoffs gjeldende lov

(KCL) ved hver node i kretsen og ved å bruke Ohms lov for å uttrykke strømmene i form av nodespenningene.

På den annen side er mesh-analyse en metode som brukes til å bestemme strømmene i hver maske eller sløyfe i en krets. Et nett er en lukket bane i en krets som ikke inneholder noen andre lukkede baner. Mesh-analyse innebærer å bruke Kirchhoffs spenningslov (KVL) på hvert nett i kretsen og bruke Ohms lov for å uttrykke spenningene i form av nettstrømmene.

For å bruke nodeanalyse må du følge disse trinnene:

- Identifiser alle noder i kretsen.
- Velg én node som referansenode og tilordne den en spenning på null.
- Påfør KCL på hver av de andre nodene i kretsen for å få en ligning for strømmene som strømmer inn og ut av noden når det gjelder nodespenningene.
- Bruk Ohms lov for å uttrykke strømmene i form av nodespenningene.
- Løs det resulterende ligningssystemet for å bestemme spenningene ved hver node.

For å bruke mesh-analyse må du følge disse trinnene:

- Identifiser alle masker i kretsen.
- Tilordne en strømvariabel til hver mesh og tilordne en retning til hver strøm.
- Påfør KVL på hver maske for å få en ligning for spenningene rundt nettet i form av maskestrømmene.
- Bruk Ohms lov til å uttrykke spenningene i form av nettstrømmene.
- Løs det resulterende ligningssystemet for å bestemme strømmene i hver maske.

Nodeanalyse og mesh-analyse er begge kraftige teknikker for å analysere kretser, og hvilken metode du bruker vil avhenge av den spesifikke kretsen du analyserer og dine personlige preferanser.