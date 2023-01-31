---
layout: post
title:  "Resistorer i serie og parallell"
usemathjax : true
categories: Kirchoff
date: 2023-02-08 00:08
---

Vi kan bruke disse tre lovene (KVL, KCL og Ohms lov) for å beskrive spenningene og strømmene i enhver krets som består av en vilkårlig kombinasjon av de tre elementene som vi har introdusert så langt: spenningskilder, strømkilder og motstander. Tenk for eksempel på kretsen vist i figur 9.10.

Denne figuren viser en krets der to motstander er i serie. Per definisjon, når to elementer er i serie, flyter den samme strømmen i begge elementene. Vi kan bruke KVL til å skrive en ligning som relaterer spenning, strøm og motstand i denne kretsen ved ganske enkelt å krysse kretsen og summere spenningsfallet mens vi går:

$$ V-iR_1 - iR_2 = 0$$

we can rearange this to give us:

$$V= i(R_1 + R_2)$$

hvorfra vi kan se at motstanden som følger av å ha motstander i serie, ganske enkelt er summen av deres individuelle verdier.
Merk at for å skrive Eq. (9.5), måtte vi anta en retning for strømmen. Antakelsen om retning er helt vilkårlig, selv om det vil være mer intuitivt hvis du velger retningen for å antyde en økning i potensialet som går over spenningskilden. Hvis du hadde antatt den andre retningen, ville tegnet på uttrykket for strøm vært negativt, noe som indikerer at strømmen faktisk gikk i motsatt retning.
Figur 9.11 viser to motstander i en kretskonfigurasjon kjent som parallell.

bilde bilde

To kretselementer anses å være parallelle når det samme potensialet vises over begge elementene.
Siden vi prøver å forstå hvordan disse to motstandene kombineres, er det vi ser etter et uttrykk i form av Ohms lov som vil beskrive sammenhengene mellom spenning, strøm og kombinasjonen av de to motstandene:

$$V = I_{total}R_{parallel}$$

Vi kan starte analysen av hvordan disse motstandene kombineres ved å bruke KCL ved Node
A for å skrive Eq. (9,8):

$$I_{total} = i_1 + i_2$$

Deretter kan vi se på hva som skjer ved hver av motstandene separat, ved å bruke det faktum at den samme spenningen (V) vises over begge motstandene:

$$i_1 = \frac{V}{R_1}$$

$$i_2 = \frac{V}{R_2}$$

Vi kan da kombinere Egs. (9.8), (9.9) og (9.10) og sett inn i lign. (9.7) for å få:

$$V=\left(\frac{V}{R_1} + \frac{V}{R_2}\right)R_{parallel}$$

rearange:

$$R_{parallel} = \frac{V}{\left(\frac{V}{R_1} + \frac{V}{R_2}\right)}$$

which we can simplify:

$$R_{parallel} = \frac{V}{\left(\frac{V}{R_1} + \frac{V}{R_2}\right)} \cdot \frac{R_1R_2}{R_1R_2}$$

$$R_{parallel} = \frac{R_1R_2}{R_1 + R_2}$$

we can generelize this:

$$\frac{1}{R_{parallel}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}$$