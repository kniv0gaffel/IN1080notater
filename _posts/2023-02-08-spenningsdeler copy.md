---
layout: post
title:  "Spenningdeler"
usemathjax : true
categories: Kirchoff
date: 2023-02-08 00:08
---

Kretsen vist i figur 9.12, selv om den er veldig enkel, vises faktisk så ofte i kretser at den har fått et eget navn: det er en spenningsdeler.

bilde bilde

For denne analysen vil vi anta at det ikke går strøm til Vout. I følge KCL må all strømmen som kommer inn i noden merket A også gå ut. Derfor må strømmen gjennom Ry, som beveger seg fra Vin til Node A, være lik strømmen gjennom R2, som beveger seg fra Node A til jord. Ved å bruke Ohms lov kan vi skrive ned et par ligninger for spenningene over R, og R2. I dette ligningsparet har vi allerede antatt at strømmen som går fra R, er den samme som strømmen gjennom R2, bare merket som 1. Legg også merke til at den nedre terminalen til R2 er koblet til jord, som er vårt referansepunkt og derfor på nullpotensial.

$$V_{in} - V_{out} = IR_1$$

$$V_{out} - 0 = IR_2$$

Når vi skrev disse ligningene, har vi antatt at strømmen flyter fra Vin til bakken. Denne antagelsen er kanskje ikke nøyaktig - hvis Vin er negativ, vil den strømme i den andre retningen. Det viktigste som imidlertid er nødvendig i analysen er at vi gjør en konsistent antagelse gjennom hele analysen. Når vi er ferdige, hvis faktisk den antatte strømretningen var feil, ville de resulterende ligningene for strømmen alle ende opp med negative fortegn. Konsistens i dine antagelser om retningen på strømstrømmen er avgjørende for suksessen når du setter opp ligningene gjennom analysen.
Dette paret av to ligninger med to ukjente (I og Vout) kan løses ved hjelp av flere tilnærminger. Vi kan legge disse ligningene sammen for å få

$$V_{in}=I(R_1+R_2)$$

rearange:

$$I = \frac{V_{in}}{(R_1+R_2)}$$

substitute:

$$V_{out} = V_{in}\frac{R_2}{(R_1+R_2)}$$

Vi vil referere til dette resultatet som spenningsdelerligningen og gå tilbake til det mange ganger gjennom dette kapittelet og også i andre kapitler. Før vi går videre, er det imidlertid verdt å se på strukturen til denne ligningen for å bekrefte at resultatet gir mening (dette er alltid en god praksis når du gjør analyser!). Vi ser at utgangsspenningen er proporsjonal med inngangsspenningen, med en konstant skaleringsfaktor, som vi bør forvente for enhver lineær krets. Alt dette er betryggende. La oss også teste dette forholdet for ekstreme tilfeller. For eksempel, hvis R2 var "uendelig" i verdi, ville det ikke være noen strømflyt og derfor ikke noe spenningsfall over R1, så vi forventer at Vout ville være lik Vin. Ekv. (9.19) gir riktig resultat. Til slutt, hvis R2 var en short (dvs. R2 = 0 Ω), så Vout vil være koblet direktetil grunn og vi forventer Vout = 0 V. Ekv. (9.19) gir oss også dette resultatet. Dette kan virke kjedelig, men det er en god vane å komme inn på på slutten av beregningene som en metode for å bekrefte at du ikke har gjort noen algebrafeil. Feil skjer selvfølgelig, og det er god praksis å være på vakt.
Nå som vi kan kombinere motstander i parallell og serie, kan vi gå videre til å bruke disse resultatene for å forenkle kretsanalyse.
