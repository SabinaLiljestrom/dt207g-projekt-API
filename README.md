#Moment 5 webbtjänst i kursen DT207g

##Sammanfattning
Detta är en webbtjänst för autentisering och hantering av meny. På webbtjänsten finns en fördefinerad admin användarnamn och hashat lösenord. Användaren kan logga in och få tillgång till skyddade resurser. JWT-token används för säkerhatering av användarsessioner. Webbtjänsten är utvecklad med Node.js, express använder Mongoose för att ansluta till en MongoDB databas. Webbtjänsten innehåller CRUD-operationer för menyhantering och stöd för CORS för att möjliggöra åtkomst för olika domäner.

##Installation av databas
Klona ner projektet, installera paket med npm install, skapa env-fil och fyll i miljövariabler enligt .env.sample. Starta sedan servern med npm start.

##Användning CURD
Nedan finns beskrivet hur man använder webbtjänsten på olika vis:
| Metod         | Ändpunkt                 | Beskrivning      |
| ------------- |:------------------------:| ----------------:|
| GET          | /api/menu     |    Hämtar alla menyobjekt. Kräver ingen autentisering. |
| GET          | /api/menu:id     |    Hämtar specifikt menyobjekt baserat på angivet id kräver ingen autentisering. |
| POST          | /api/menu     |    Skapar nytt menyobjekt. Kräver att ett objekt skickas med i JSON-format. |
| PUT          | /api/menu:id     |    Uppdaterar specifikt menyobjekt baserat på angivet id. Kräver att ett objekt skickas med i JSON-format. |
| DELETE          | /api/menu:id     |    Raderar specifikt menyobjekt baserat på id. Kräver inte autentisering. |
| GET           | /api/protected          | Åtkomst till en skyddad resurs. Kräver JWT-token i Authorization-headern.|
| POST           | /api/login      |   	Loggar in användare och returnerar en JWT-token. Kräver att objekt skickas med i JSON-format.|


För inloggning ska ett objekt skickas som JSON med följande struktur:
{
  "username": "användarnamn",
  "password": "lösenord"
}

För hantering av menyobjekt ska objekt skickas med som har följande struktur
{
  "name": "Namn på maträtten",
  "description": "En kort beskrivning av maträtten",
  "price": 99.99
}

##Middleware och säkerhetsfunktioner
I webbtjänsten används JWT-autentisering för att skydda vissa rutter. Lösenordet är hashat med hjläp av bcrypt för att säkerhetsställa att det är skyddat. Inmatning som görs valideras och saneras för att undvika att skadlig data matas in. Utöver det används cors för att möjliggöra kommunikation från alla ursprung som stödjer metoderna GET, PUT, POST och DELETE.


###Utvecklad av
Sabina Liljeström
