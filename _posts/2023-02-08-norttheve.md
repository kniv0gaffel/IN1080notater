---
layout: post
title:  "Norton og Thevenin"
usemathjax : true
categories: Kretsanalyse
date: 2023-02-15 00:10
---

For kompliserte nettverk. det er ofte nyttig å kunne forenkle deler av kretsanalysen. 

# Thévenins teorem

Ethvert lineært to-terminalers nettverk bestående av strømkilder, spenningskilder og resistorer kan erstattes av en ekvivalent krets med én 
spenningskilde i serie med én resistor  

+ Identifiser (del)kretsen som skal erstattes av en Thévenin-ekvivalent
– Beregn \\(V_{th}\\) og \\(R_{th}\\)
- \\(V_{th}\\): Spenningen \\(V_{AB}\\) mellom A og B etter at resten av kretsen er fjernet
- \\(R_{th}\\): Resistansen mellom A og B når spenningskildene kortsluttes og strømkildene åpnes

1. Nuller ut kilden(e): Kortslutter V1
2. Beregner Rth mellom node a og b: R1||R2=(R1*R2)/(R1+R2)=(3Ω*6Ω)/(3Ω+6Ω)=2Ω
3. Setter tilbake V1 og finner Vab: Vab=Vth=V1*(R2/(R1+R2)=9v*(6Ω)/(3Ω+6Ω)=6v


# Nortons teorem

Samme metode som for Thévenins teorem  
– Likhet: Kildene kortsluttes (spenningskilder) eller åpnes (strømkilder)  
– Forskjell: Terminalene A og B kortsluttes for å finne strømmen gjennom dem (istedenfor å beregne spenningen over dem)

#### Sammenhengen mellom Norton- og Thévenin-ekvivalenter:

<!-- Rth = Rno
Vth = InoRno
Vth
Rth
= Ino -->