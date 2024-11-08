# Boiler-Room-v45

Boiler Room Vecka 45: Bygg en To-Do App med Interaktivt Webbgränssnitt
Tema
Den här och nästa vecka kommer ni att tillämpa era kunskaper om arrayer, objekt, funktioner, DOM-manipulation och händelsehantering genom att bygga en interaktiv To-Do applikation i JavaScript.

Projektbeskrivning
Uppgift:
Bakgrund från Vecka 44
Använd er befintliga To-Do applikation som ni utvecklade under vecka 44 som grund.
Se över er tidigare kod och identifiera vilka delar som kan återanvändas och vilka som behöver anpassas för webbgränssnittet.

Vecka 45:
Utöka er To-Do applikation genom att skapa ett interaktivt webbgränssnitt med HTML, CSS och JavaScript.
Använd DOM-manipulation för att:
Visa listan av uppgifter dynamiskt på webbsidan.
Lägga till nya uppgifter via ett formulär.
Uppdatera uppgifternas status (klar/ej klar) genom händelsehantering.
Ta bort uppgifter genom att interagera med webbsidans element.
Använd händelsehantering med addEventListener för att reagera på användarens interaktioner, såsom klick på knappar och inmatning i formulär.
Använd selectors som getElementById och querySelector för att hämta och manipulera element.

Krav för Projektet
Grundläggande Funktionalitet
Interaktivt Webbgränssnitt:
Skapa en HTML-sida som utgör gränssnittet för er To-Do applikation.
Använd CSS för grundläggande styling av applikationen.
DOM-manipulation:
Använd JavaScript för att dynamiskt manipulera DOM:
Visa listan av uppgifter på webbsidan genom att skapa och uppdatera HTML-element.
Uppdatera uppgifternas status (klar/ej klar) genom att ändra stil eller klasser på elementen.
Händelsehantering:
Använd addEventListener för att lyssna på händelser som:
Klick på knappar för att lägga till, markera eller ta bort uppgifter.
Formulärinmatning för att fånga upp nya uppgifter från användaren.
Skapa och Ta Bort Element:
Använd metoder som createElement, appendChild och removeChild för att dynamiskt skapa och ta bort uppgiftselement på sidan.
Användarinteraktion:
Ge användaren möjlighet att:
Skriva in nya uppgifter via ett inmatningsfält.
Markera uppgifter som klara genom att klicka på dem eller på en specifik knapp.
Ta bort uppgifter genom att klicka på en "Ta bort"-knapp vid varje uppgift.
Validering och Felhantering:
Kontrollera att användaren inte kan lägga till tomma uppgifter.
Visa tydliga felmeddelanden vid behov.
Utökad Funktionalitet (Frivilligt men Uppmuntras)
Spara Uppgifterna Mellan Sessioner:
Använd localStorage för att spara uppgifterna så att de finns kvar när sidan laddas om (fungerar i webbläsaren).
Sortera Uppgifterna:
Lägg till funktionalitet för att sortera uppgifterna baserat på om de är klara eller inte, eller efter skapelsedatum.
Filter: 
Ge användaren möjlighet för att visa endast klara eller oklara uppgifter.
Redigera Uppgifter:
Ge användaren möjlighet att ändra beskrivningen av en uppgift.
Sökfunktion:
Implementera en funktion som låter användaren söka efter uppgifter baserat på sökord.
Kategorier och Taggar:
Användare kan organisera uppgifter i olika kategorier eller projekt.
Lägg till möjligheten att tagga uppgifter med nyckelord.

Anvisningar för Grupparbetet
Planering:
Strukturera Koden:
Diskutera inom gruppen hur ni vill strukturera er kod med funktioner och moduler.
Bestäm vilka funktioner ni behöver och hur de ska interagera.
Fördelning av Arbetsuppgifter:
Dela upp uppgifterna baserat på gruppmedlemmarnas styrkor och intressen.
Till exempel kan en person fokusera på användargränssnittet medan en annan arbetar med datahantering.
Samarbete:
Versionshantering:
Använd Git och GitHub för att samarbeta effektivt.
Skapa en ny gren för detta projekt.
Kommunikation:
Ha regelbundna avstämningar för att säkerställa att alla är på samma spår.
Använd kommunikationsverktyg som Slack eller Discord.
Dokumentation:
Kommentera Koden:
Använd kommentarer för att förklara funktioner och komplex logik, särskilt i den nya delen med DOM-manipulation och händelsehantering.
Användarinstruktioner:
Skriv en kort guide om hur applikationen används.
Beskriv eventuella speciella funktioner eller begränsningar.


KOM IHÅG!: ”Ledarrollen“ Stina har tagit upp, fråga henne vars den informationen finns och vart ni ska fylla i vem som har den rollen

Presentation
Datum och Tid:
Presentationerna sker på måndag vecka 46 under lektionstid.
OBS! ALLA i gruppen ska vara aktiva delaktiga i presentationen!
Innehåll:
Demonstration av Applikationen:
Visa hur To-Do applikationen fungerar.
Gå igenom de funktioner ni har implementerat, inklusive den nya interaktiviteten.
Förklaring av Koden:
Beskriv hur ni har använt DOM-manipulation och händelsehantering.
Diskutera hur ni har integrerat den befintliga koden med den nya webbfrontenden.
Utmaningar och Lärdomar:
Diskutera eventuella problem ni stötte på under utvecklingen och hur ni löste dem.
Dela med er av vad ni har lärt er under projektets gång, särskilt kring DOM-manipulation och händelsehantering.
Reflektera över hur samarbetet inom gruppen fungerade och vilka förbättringar som kan göras i framtida projekt.
Presentationslängd:
Varje grupp har max 15 minuter och minst 7 minuter för sin presentation.

Inlämning
Källkoden ska lämnas in före måndagens lektion vecka 46.
Skicka er kod till kursansvarig och ladda upp den på en gemensam plattform som GitHub.

Tips och Riktlinjer
Testa Koden:
Testning:
Testa varje funktion noggrant, både i konsolen och i webbläsaren.
Se till att händelsehanterare fungerar korrekt och att DOM uppdateras som förväntat
Felsökning:
Använd webbläsarens utvecklarverktyg för att felsöka JavaScript-koden och DOM-manipulationen.
Var uppmärksam på eventuella felmeddelanden i konsolen.
Användarvänlighet:
Tydliga Meddelanden:
Ge användaren klara instruktioner och feedback direkt på webbsidan.
Hantera fel på ett användarvänligt sätt.
Validering:
Kontrollera att användarens inmatning är giltig innan du utför operationer.
Kodstruktur och Kvalitet:
Funktioner:
Bryt ner koden i mindre funktioner för att göra den mer hanterbar.
Återanvänd funktioner från den konsolbaserade applikationen där det är möjligt.
Namngivelser:
Använd beskrivande och konsekventa namn för variabler och funktioner.
Undvik förkortningar som kan vara förvirrande.
Kommentarer:
Kommentera koden där det behövs för att förklara komplex logik eller beslut.
Kreativitet:
Extra Funktioner:
Känn er fria att lägga till extra funktioner som ni tror skulle förbättra applikationen.
Tänk på användarupplevelsen och hur ni kan göra programmet mer intuitivt.


Lycka till med ert projekt! Om ni har några frågor eller behöver hjälp, tveka inte att kontakta mig.

Genom att fortsätta bygga på er To-Do applikation kommer ni att få praktisk erfarenhet av att använda arrayer, objekt, funktioner, DOM-manipulation och händelsehantering tillsammans. Detta kommer att hjälpa er att förstå hur dessa koncept samverkar för att skapa interaktiva och dynamiska webbapplikationer.


