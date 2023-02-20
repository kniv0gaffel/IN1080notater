---
layout: post
title:  "Superposisjon"
usemathjax : true
categories: Kretsanalyse
date: 2023-02-15 00:09
---

I elektronikk er superposisjon et prinsipp som sier at responsen til en lineær krets på et sett med inngangssignaler kan bestemmes ved å vurdere hvert inngangssignal individuelt og deretter summere resultatene. Spesielt gjelder superposisjonsprinsippet for lineære kretser, som er kretser som tilfredsstiller følgende to egenskaper:

<ul>
  <li>Homogenitet: Hvis inngangen til kretsen multipliseres med en konstant, så multipliseres også utgangen med den samme konstanten.</li>
  <li>Additivitet: Hvis inngangen til kretsen er summen av to eller flere signaler, er utgangen summen av utgangene som ville følge av å bruke hvert inngangssignal individuelt.</li>
</ul> 

Prinsippet om superposisjon er en konsekvens av disse to egenskapene. Det lar oss analysere komplekse kretsløp ved å bryte dem ned i enklere deler og deretter kombinere resultatene. Spesifikt kan vi bruke prinsippet om superposisjon ved å følge disse trinnene:

- Vurder hvert inngangssignal individuelt og anta at alle andre inngangssignaler er null.
- Beregn responsen til kretsen på det inngangssignalet ved å bruke standardteknikker som Kirchhoffs lover, Ohms lov og så videre.
- Gjenta trinn 1 og 2 for hvert inngangssignal.
- Sum resultatene oppnådd i trinn 2 for å oppnå den totale responsen til kretsen på alle inngangssignaler.

Ved å bruke superposisjonsprinsippet kan vi forenkle analysen av komplekse kretsløp og få innsikt i deres oppførsel. Det er imidlertid viktig å merke seg at superposisjonsprinsippet bare gjelder for lineære kretser og ikke kan brukes for ikke-lineære kretser, som ikke tilfredsstiller homogenitets- og additivitetsegenskapene.