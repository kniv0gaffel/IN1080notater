---
layout: post
title:  "Kondensator"
usemathjax : true
categories: [Kondensator og Induktor]
date: 2023-02-10 00:10
---

<div class="centerimg">
<img class="centerimg" src="{{site.baseurl}}/assets/img/kondensator.svg" height="90px">
</div>

En kondensator er en to-terminal enhet som ikke kan lede en uforanderlig, jevn strøm (DC) men ser ut til å lede oscillerende strømmer (AC). En kondensator kan forklares med en vannanalogi. Se for deg en elastisk membran som dekker tverrsnittet av et vannrør.
Den fleksible membranen forhindrer konstant flyt av vann. Imidlertid kan et plutselig trykk som oppstår på den ene siden føre til at membranen forvrenges, og dermed forskyve væske på den andre siden av membranen, og skape en forbigående strøm. Til slutt kommer membranen i likevekt med det påførte trykket og slutter å forvrenge.
På samme måte vil en virkelig kondensator lede strøm helt til den er fullladet (eller utladet hvis strømrettningen er reversert).

 <div class="centerimg">
 <video width="300" autoplay loop muted>
  <source src="{{site.baseurl}}/assets/video/Kondensator1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 
</div>

 <div class="centerimg">
 <video width="300" autoplay loop muted>
  <source src="{{site.baseurl}}/assets/video/Kondensator.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 
</div>

Akkurat som i denne hydrauliske analysen, er kondensatorer elektriske energilagringselementer.
Gitt at kondensatoren er et energilagringselement, burde det ikke komme som en stor overraskelse at dens V-1-karakteristikk er en integrert ligning

$$V(t)=\frac{1}{C}\int_0^t I(\tau)\: \mathrm{d}\tau = \frac{Q(t)}C \tag{1}$$

Fra lign. `1`, kan vi også se at det er en lineær sammenheng (med helning = \\(1/C\\))
mellom spenningen over kondensatoren og ladningen som er lagret på kondensatoren. Dette gjør kondensatoren til et lineært kretselement.

Like nyttig som integralligningen er for å forstå energilagringsnaturen til kondensatoren, hvis vi differensierer lign. `1`, kan resultatene gi innsikt i den dynamiske oppførselen til kondensatoren:

$$I(t)=C\frac{\mathrm{d}V}{\mathrm{d}t} \tag{2}$$

Dette viser oss at den tilsynelatende strømmen gjennom en kondensator er en funksjon av størrelsen på kondensatoren og endringshastigheten til spenningen over kondensatoren.

I nærvær av et stabilt spenning, skal det ikke være noen strøm. Siden ved stabil tilstand er \\(\frac{\mathrm{d}V}{\mathrm{d}t}=0\\), lign. `2` ville forutsi ingen strømflyt under disse forholdene.

En gitt spenningsforskjell vil forårsake en konsistent strøm. Jo kortere tidsperiode som forskyvningen finner sted, desto høyere strømningshastighet (volum/tid) vil produseres
lign. `2` forutsier at jo raskere spenningen endres (høyere \\(\frac{\mathrm{d}V}{\mathrm{d}t}\\)), jo større blir strømmen (lading/tid).
 
Ved å bruke lign. `2`, det generelle uttrykk for kraft som \\(V\cdot I\\) og definisjonen av effekt som \\(\frac{\mathrm{d}E}{\mathrm{d}t}\\), kan vi utvikle et uttrykk for mengden energi (E, joule) som er lagret i en ladet kondensator:

$$E_C=\int P\;\mathrm{d}t=\int VI\;\mathrm{d}t = \int VC\frac{\mathrm{d}V}{\mathrm{d}t}=\int CV\;\mathrm{d}V=\frac{1}{2}CV^2 \tag{3}$$

Inne i kondensatoren er terminalene koblet til et par plater som er atskilt med en tynn isolator (dielektrisk), figur 9.15. Verdien av kapasitansen bestemmes av arealet til disse to platene, avstanden mellom dem, og egenskapene til det dielektriske elementet.
Det er viktig å være klar over det faktum at alle to ledere atskilt av et isolerende gap utgjør en kondensator, selv om det ikke var hensikten. Dette kan forårsake elektrisk støy.

Grunntanken bak en kondensator er at ladning kan bygge seg opp på platene til kondensatoren, og svingninger i strøm og spenning på den ene siden kan overføres til den andre siden ved å låne fra den lagrede ladningen. Dette fungerer bare i en begrenset tid, da det bare kan være en endelig ladning lagret, men hvis tidsskalaene til svingningene er godt tilpasset mengden ladning som er lagret, resulterer nyttige nivåer av spenning og strøm.
Vi kan tenke på strømsvingninger som går gjennom kondensatoren akkurat som statiske strømmer går gjennom motstander. Når det gjelder kondensatorer, er nøkkelen som gjør at dette kan skje at strømmen som forlater kondensatorens venstre elektrode ikke trenger å involvere de samme elektronene som strømmen som kommer inn på høyre side av kondensatoren. Fra utsiden ser det ut som strøm "passer gjennom" når det kommer strøm inn på den ene siden og forlater den andre, og vi vil analysere oppførselen til disse systemene som om det er akkurat det som skjer.
En annen måte å se på Lign. `1` er å merke seg at når spenningen over kondensatoren endres, må det være en viss ladning som legges til eller trekkes fra kondensatorplatene. Siden endringer i mengden ladning over tid utgjør en strøm, krever endringer i spenning over kondensatoren tilstedeværelse av en strøm. Når det er en oscillerende spenning påført platene til kondensatoren, er det også en oscillasjon i strømmen.

# Kondensatorer i serie og parallell

Vi kan analysere kretser med flere kondensatorer på omtrent samme måte som vi gjorde for motstander: ved å bruke KCL og KVL. Figuren under viser en krets der vi har flere kondensatorer parallelt.

<!-- bilde bilde bilde -->

Siden den samme spenningen vises over alle elementene parallelt, kan vi skrive

$$
I_{total}=I_1 + I_2 + I_3=C_1\frac{\mathrm{d}V}{\mathrm{d}t}+C_2\frac{\mathrm{d}V}{\mathrm{d}t}+C_3\frac{\mathrm{d}V}{\mathrm{d}t}=(C_1+C_2+C3)\frac{\mathrm{d}V}{\mathrm{d}t}
\tag{4}
$$

hvorfra vi ser at den totale kapasitansen til et antall kondensatorer parallelt ganske enkelt er summen av de individuelle kapasitansene.
Hvis vi tar den gruppen av kondensatorer og setter dem i serie, kan vi bruke
KVL og det faktum at strømmen gjennom enheter i serie må være lik i alle enheter for å skrive

$$
V_{total}=V_1 + V_2 + V_3=\frac{1}{C_1}\int I\;\mathrm{d}t+\frac{1}{C_2}\int I\;\mathrm{d}t+\frac{1}{C_3}\int I\;\mathrm{d}t=
(\frac{1}{C_1}+\frac{1}{C_2}+\frac{1}{C3})\int I\;\mathrm{d}t
\tag{5}
$$

Fra dette kan vi se at kondensatorer i serie legger til på omtrent samme måte som motstandene

$$\frac{1}{C_{total}}=\frac{1}{C_1}+\frac{1}{C_2}+\frac{1}{C_3}+\cdots +\frac{1}{C_n}\tag{6}$$

Når vi beskriver oppførselen til kretselementer i nærvær av forskjellige typer tidsvarierende signaler, vil det være nyttig å kunne anvende superposisjonsprinsippet og Fourier-teoremet. Superposisjonsprinsippet sier at en krets med flere kilder kan analyseres ved å behandle hver av kildene uavhengig og deretter summere resultatene fra hver av kildene. Superposisjonsprinsippet gjelder for alle kretser som består av lineære kretselementer. Fourier-teoremet (Jean Baptiste Joseph Fourier, 1768-1830) sier at enhver periodisk bølgeform av frekvensen \\(f\\) kan representeres av en (muligens uendelig) sum (dvs. superposisjonen) av sinus- og cosinusledd av frekvenser: \\(f, 2f, 3f , ..., nf\\) På grunn av Fouriers teorem kan vi fokusere våre anstrengelser for å forstå kretsatferd ved å studere responsene til disse kretsene på sinusoider, sikre på at vi med den forståelsen og Fouriers teorem kan beskrive enhver krets respons på en hvilken som helst periodisk bølgeform.
Hvis strømmen og spenningen begge er sinusformede oscillasjoner, vil de ha formen:

$$I=I_{o}\mathrm{exp}(j\omega t)\tag{7}$$

$$V=V_{o}\mathrm{exp}(j\omega t)\tag{8}$$

disse eksponentielle funksjonene tar et imaginert tall som  argument \\( j=\sqrt{-1}\\), \\(j\\) er valgt isteden for \\(i\\) for å unngå forvirring med symbolet for strøm i disse ligningene. Disse funksjonene er en praktisk måte å representere sinusformede spenninger med en vinkelfrekvens \\(\omega = 2\pi f\\). Hvis vi tar disse to funksjonene og kombinerer dem med forholdet mellom strøm og spenning lign. `2` for en kondensator, får vi

$$I_{o}\mathrm{exp}(j\omega t) = Cj\omega V_o\mathrm{e}^{j\omega t}\tag{9}$$

$$I_{o} = Cj\omega V_o\tag{10}$$

Å løse for \\(V_o\\) gir et uttrykk for amplituden til spenningssvingningen som en funksjon av amplituden til strømsvingningen og frekvensen og kapasitansverdien.

$$V_o = I_o\frac{1}{j\omega C} \tag{11}$$


