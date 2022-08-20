# WebRegisterApp

## Descrizione 📄
WebRegisterApp è un'applicazione sviluppata per fornire il servizio di un 'mini registro' online per la materia universitaria Web Programming.
L'applicazione fornisce diverse funzionalità:
- Creare degli appelli per gestire gli studenti prenotati e gli esami dello specifico appello
- Visualizzare tutti gli appelli creati e registrati nella base di dati
- Modificare e/o eliminare i singoli appelli 
- Caricare dei file .csv (predefiniti) per caricare l'insieme di studenti prenotati a un determinato appello e gli esiti degli esami
- Aggiungere singoli esami effettuati da uno studente (già registrato nella base di dati) se non si preferisce caricare il file .csv
- Possibilità di aggiungere dei trigger manuali per la gestione automatica degli studenti che hanno uno stato di 'Progettista'
- Visualizzare tutti gli studenti registrati nella base di dati con la possibilità di modifare i singoli o eliminarli
- Tenere traccia del numero di studenti che sono stati promossi o rimandati tramite un piccolo grafico all'interno della homepage
- Tenere traccia del numero di studenti che hanno effettuato esami e del numero di studenti che hanno fatto almeno una prenotazione a un appello tramite un contatore situato nella pagina iniziale dell'applicazione*
- Ricercare studenti, esami o progetti tramite la sezione apposita nella pagina web. 

Tale applicazione si compone di due parti: ✨
- **Frontend** 
- **Backend**

## Frontend 🌍
La parte frontend dell'applicazione è stata realizzata con le seguenti tecnologie e linguaggi:
- **EJS** o (Embedded Javascript) per definire la struttura html dell'applicazione e dare la possibilità di inserire codice Javascript all'interno della pagina stessa.
- **CSS3** per fornire delle regole di stile all'applicazione 
- **Javascript** utilizzato per fornire pagine interattive e creare delle richieste per la comunicazione con il backend

## Backend 🏔
La parte backend dell'applicazione è stata realizza con le seguenti tecnologie e linguaggi:
- **Nodejs** framework basato sul linguaggio Javascript e utilizzato per la creazione della parte backend dell'applicazione
- **Express** framwork utilizzato per la creazione del server effettivo lato backend
- **SQL** utilizzato per la creazione della base di dati 
- **mySQL** per la gestione delle basi di dati

# Struttura del Progetto 🏗
All'interno della cartella di lavoro si trovano diverse sotto-cartelle:
- **Assets** si trovano i file css, js ed eventuali immagini utilizzate all'interno dell'applicazione
- **Server** all'interno si trova tutto il codice backend dell'applicazione e in più, anche le cartelle per il caricamento dei file .csv
    -**Controller** cartella per la gestione del pattern MVC che si occupa di interffacciarsi con le routes e di inoltrare le richieste ai file model
    - **Database** per la gestione della connessione al database e la creazione di trigger da poter attivare
    - **Helper** cartella su cui dovranno essere depositati i file .csv e a cui farà riferimento l'applicazione (un'eventuale modifica riportata all'interno di questa cartella dovrà essere definita anche nel file route.js per il referimento di destinazione dei file .csv) ❗❗
    - **Model** cartella per la gestione del pattern MVC che si occupa di prendere le richieste dal controller e interfacciarsi con il database per soddisfare tale richiesta
    - **Routes** all'interno si trova il file con tutte le route dell'applicazione
    - **Services** all'interno si trovano alcune API create per reinderizzare le richieste del frontend direttamente al controller 
 - **Views** cartella in cui sono depositati tutti i file ejs per la struttura delle pagine dell'applicazione 
 
## Diagramma E-R
Il seguente diagramma è stato realizzato per avere un modello di riferimento su cui è stata realizzata la base di dati dell'applicazione.
![Progetto Web Programming](https://user-images.githubusercontent.com/83754920/185429963-952d28a7-16d9-4398-a8bc-9fde9904667a.jpg)
