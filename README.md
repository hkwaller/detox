# React Native testing

Vi skal prøve oss på e2e-testing med hjelp av [Detox](https://github.com/wix/Detox/). Detox er et rammeverk for hjelper oss å teste våre apper i simulator for å faststille at vi ikke ødelagt våre apper under utvikling.

Starte ved å klone dette repoet.

Da er vi klare å sette igang.


## Installere detox

Første oppgave blir å faktisk installere Detox. Følg guiden for [iOS](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md) eller [Android](https://github.com/wix/Detox/blob/master/docs/Introduction.Android.md). **Disclaimer**: Jeg har kun testet på iOS. 

Du kan selv velge hvis du vil kjøre med Jest eller Mocha som test runner. Jeg har kjørt med Mocha men det er valgfritt. Hvordan man gør det er beskrevet i getting started guiden.


##

### Oppgave #1 | 3 tester

- Naviger til første skjermen
- Test at vi ser header teksten
- Trykk på knappen for å endre 
- Test at headeren fått ny tekst
- Trykk lenge på knappen for å endre teksten enda en gang
- Test at headeren fått ny tekst igjen


### Oppgave #2 | 3 tester

- Naviger til andre skjermen
- Test teksten i headeren
- Scroll til nederst i scrollviewet
- Test att vi ser brukeren Nicholas
- Test at hans epost er: **Sherwood@rosamond.me**


### Oppgave #3 | 4 tester

- Naviger til tredje skjerm
- Test at headeren er der
- Skriv tekst i inputfeltet
- Test at teksten ble skrevet
- Skriv ny tekst. Enten ved å erstatte teksten du har eller å starte på nytt
- Test din nye tekst
- Prøv å tømme tekstfeltet med en hjelpfunksjon
- Test at vi ikke har tekst lenger

### Oppgave #4 | 3 tester

- Naviger til tredje skjerm
- Test at headeren er der
- Trykk på knappen en gang
- Test verdien i Textkomponenten
- Trykk på knappen 8 ganger til uten å ha å rader med tap()'s
- Test at verdien på Textkomponenten er 9

### Oppgave 🕺🏻 | X tester

- Ferdig! Bare kjør på med egne tester 🎉
