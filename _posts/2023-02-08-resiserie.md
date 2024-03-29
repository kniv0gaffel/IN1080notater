---
layout: post
title:  "Resistorer i serie og parallell"
usemathjax : true
categories: Kirchoff
date: 2023-02-05 00:08
---

Vi kan bruke disse tre lovene (KVL, KCL og Ohms lov) for å beskrive spenningene og strømmene i enhver krets som består av en vilkårlig kombinasjon av de tre elementene som vi har introdusert så langt: spenningskilder, strømkilder og motstander.

<div class="centerimg">
<img class="centerimg" src="{{site.baseurl}}/assets/img/resiserie.svg" height="150px">
</div>

Denne figuren viser en krets der to motstander er i serie. Per definisjon, når to elementer er i serie, flyter den samme strømmen i begge elementene. Vi kan bruke KVL til å skrive en ligning som relaterer spenning, strøm og motstand i denne kretsen ved ganske enkelt å krysse kretsen og summere spenningsfallet mens vi går:

$$ V-iR_1 - iR_2 = 0 \tag{1}$$

Omorganiserer:

$$V= i(R_1 + R_2) \tag{2}$$

hvorfra vi kan se at motstanden som følger av å ha motstander i serie, ganske enkelt er summen av deres individuelle verdier.
Merk at for å skrive likningen måtte vi anta en retning for strømmen. Antakelsen om retning er helt vilkårlig, selv om det vil være mer intuitivt hvis du velger retningen for å antyde en økning i potensialet som går over spenningskilden. Hvis du hadde antatt den andre retningen, ville tegnet på uttrykket for strøm vært negativt, noe som indikerer at strømmen faktisk gikk i motsatt retning.

To motstander i en kretskonfigurasjon kjent som parallell:

<div class="centerimg">
<img class="centerimg" src="{{site.baseurl}}/assets/img/resiparal.svg" height="200px">
</div>

To kretselementer anses å være parallelle når det samme potensialet vises over begge elementene.
Siden vi prøver å forstå hvordan disse to motstandene kombineres, er det vi ser etter et uttrykk i form av Ohms lov som vil beskrive sammenhengene mellom spenning, strøm og kombinasjonen av de to motstandene:

$$V = I_{total}R_{parallel} \tag{3}$$

Vi kan starte analysen av hvordan disse motstandene kombineres ved å bruke KCL ved node
`A`:

$$I_{total} = i_1 + i_2 \tag{4}$$

Deretter kan vi se på hva som skjer ved hver av motstandene separat, ved å bruke det faktum at den samme spenningen \\(V\\) vises over begge motstandene:

$$i_1 = \frac{V}{R_1}\tag{5}$$

$$i_2 = \frac{V}{R_2}\tag{6}$$

Vi kan da kombinere lign. `4,5,6`:

$$V=\left(\frac{V}{R_1} + \frac{V}{R_2}\right)R_{parallel}\tag{7}$$

Omorganiserer:

$$R_{parallel} = \frac{V}{\left(\frac{V}{R_1} + \frac{V}{R_2}\right)}\tag{8}$$

Forenkler:

$$R_{parallel} = \frac{V}{\left(\frac{V}{R_1} + \frac{V}{R_2}\right)} \cdot \frac{R_1R_2}{R_1R_2}\tag{9}$$

$$R_{parallel} = \frac{R_1R_2}{R_1 + R_2}\tag{10}$$

Vi kan generalisere dette:

$$\frac{1}{R_{parallel}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}\tag{11}$$