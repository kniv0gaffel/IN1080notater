---
layout: post
title:  "Spenningdeler"
usemathjax : true
categories: Kirchoff
date: 2023-02-05 00:08
---

Kretsen nednfor har fått et eget navn: **`spenningsdeler`**.

<div class="centerimg">
<img class="centerimg" src="{{site.baseurl}}/assets/img/spenningsdeler.svg" height="250px">
</div>

For denne analysen vil vi anta at det ikke går strøm til \\(V_{out}\\). I følge KCL må all strømmen som kommer inn i noden merket `A` også gå ut. Derfor må strømmen gjennom \\(R_1\\), som beveger seg fra \\(V_{in}\\) til node `A`, være lik strømmen gjennom \\(R_2\\), som beveger seg fra node `A` til jord. Ved å bruke Ohms lov kan vi skrive ned et par ligninger for spenningene over \\(R_1\\) og \\(R_2\\). I dette ligningsparet har vi antatt at strømmen som går fra \\(R_1\\) er den samme som strømmen gjennom \\(R_2\\), merket \\(I\\). Legg også merke til at den nedre terminalen til \\(R_2\\) er koblet til jord, som er vårt referansepunkt og derfor på nullpotensial \\(0V\\).

$$V_{in} - V_{out} = IR_1 \tag{1}$$

$$V_{out} - 0 = IR_2 \tag{2}$$

Vi antar at strømmen går fra \\(V_{in}\\) til jord. Denne antagelsen er kanskje ikke nøyaktig - hvis \\(V_{in}\\) er negativ, vil den strømme i den andre retningen. Det viktigste som imidlertid er nødvendig i analysen er at vi gjør en konsistent antagelse gjennom hele analysen. Når vi er ferdige, hvis faktisk den antatte strømretningen var feil, ville de resulterende ligningene for strømmen alle ende opp med negative fortegn. Konsistens i dine antagelser om retningen på strømstrømmen er avgjørende for suksessen når du setter opp ligningene gjennom analysen.
Dette paret av to ligninger med to ukjente \\(I\\) og \\(V_{out}\\) kan løses ved hjelp av flere tilnærminger. Vi kan legge disse ligningene sammen for å få

$$V_{in}=I(R_1+R_2)$$

Omorganiserer:

$$I = \frac{V_{in}}{(R_1+R_2)}$$

Setter inn for \\(I\\):

$$V_{out} = V_{in}\frac{R_2}{(R_1+R_2)}$$

Vi vil referere til dette resultatet som spenningsdelerligningen. Vi ser at utgangsspenningen er proporsjonal med inngangsspenningen, med en konstant skaleringsfaktor, som vi bør forvente for enhver lineær krets. La oss også teste dette forholdet for ekstreme tilfeller. For eksempel, hvis \\(R_2\\) var "uendelig" i verdi, ville det ikke være noen strømflyt og derfor ikke noe spenningsfall over \\(R_1\\), så vi forventer at \\(V_{out}\\) ville være lik \\(V_{in}\\). Til slutt, hvis \\(R_2\\) var en short (dvs. \\(R_2 = 0\Omega\\)), så \\(V_{out}\\) vil være koblet direkte til jord og vi forventer \\(V_{out} = 0V\\).
