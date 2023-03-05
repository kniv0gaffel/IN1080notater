---
layout: post
title:  "Grensefrekvens"
usemathjax : true
categories: [RC i Frekvensdomene]
date: 2023-03-01 00:10
author: "Geir Yngve Paulsen"
---
***Geir Yngve Paulsen, geiryp@ifi.uio.no***

# Grensefrekvens og båndbredde

Grensefrekvensen (også kalt knekkfrekvens) og båndbredde omtales gjerne i sammenheng da et signal (for eksempel målt i spenning)
dempes (med filter) eller forsterkes. Visse frekvenser i signalet blir dempet eller forsterket. Ofte har vi
et frekvensområde som dempes/forsterkes omtrent like mye. Dette området kalles filterets/forsterkerens
båndbredde.
Området som er del av båndbredden er for de frekvensene der signalet er størst (forsterkes mest, eller
dempes minst). For å måle dette området kan en sende inn et sinussignal med samme amplitude, men
med forskjellig frekvens. På utgangen av filteret/forsterkeren måler en dempningen/forsterkningen av
sinussignalet. Det virker kanskje rart ut, men om en sender inn et sinus signal, får en ut et sinus signal.
Da en sender inn sinus signal med forskjellig frekvenser, får en ut sinuser med samme frekvenser men
der amplituden og fasen er ulik fra sinusen på inngangen
For et signal målt i spenningen angir fraksjonen \\(A_V = 20\,\mathrm{log}\left(\frac{U_{ut}}{U_{inn}}\right)\\)
for forskjellige frekvenser forsterkningen/dempningen. Der forsterkningen/dempningen er \\(\frac{1}{\sqrt(2)}\\) av maksverdien, avgrenses båndbredden av det
som kalles grensefrekvens. På desibelskalaen er grensefrekvensen der maksverdien av forsterkningen har
minsket med 3 dB. I figuren under som symboliserer et båndbass filter, har båndbredden en undre og øvre
grensefrekvens. I figuren har vi frekvens på x-aksen og forsterkning/dempning (gain) på y-aksen.

<div class="centerimg">
<img class="centerimg" src="{{site.baseurl}}/assets/img/bandwidth.svg" height="300px">
</div>

# RC-Flter

En elektrisk krets kan danne et høypass eller lavpass filter med et motstand \\(R\\) og en kondensator \\(C\\). I
Da en regner med filtre (og komplekse tall), bruker gjerne litt annen notasjon for motstand, konden-
satorer og induktorer. Vi bruker \\(Z_R = R, Z_C = 1\\)
\\(j\omega C\\) , der \\(\omega = 2\pi f\\) og \\(Z_L = j\omega L\\). \\(j\\) er notasjon for den
imaginære delen i komplekse tall. Bruker vi dette sammen med formelen for spenningsdeling, får vi dette
utrykket for lavpass filteret:

$$
U_{ut} = \frac{ZC}{ZR + ZC}U_{inn} = \frac{\frac{1}{j\omega C}}{R + \frac{1}{jwC}} U_{inn} = \frac{1} {1 + j\omega RC} U_{inn} \tag{1}
$$

Dette kan skrives om på formen \\(A_V = \frac{U_{ut}}{U_{inn}}\\)

$$\frac{U_{ut}}{U_{inn}}= \frac{1}{1 + j\omega RC} \tag{2}$$

Tar en lengden av dette, får en uttrykket under.

$$ \left|{\frac{U_{ut}}{U_{inn}}}\right| = \frac{1}{\sqrt{1^2 + (\omega RC)^2}} \tag{3}$$

Grensefrekvensen for lavpass filteret, er da ligningen `3` er lik \\(\frac{1}{\sqrt{2}}\\) . Vi har dermed:

$$
\begin{align*}
\omega RC &= 1\\
2\pi f RC &= 1\\
f &= \frac{1}{2\pi RC} \tag{4}
\end{align*}
$$

Ved å sette inn verdier for \\(R\\) og \\(C\\) kan en finne grensefrekvensen for lavpass-filteret. Fasen (ved grense-
frekvensen) på utsignalet i forhold til innsignalet er 45°, da den reelle og imaginære delen er 1