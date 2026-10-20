# knipspics.no

Nettsiden til Knips, servert av GitHub Pages. Statiske filer, ingen byggsteg.

- `index.html` – forsiden.
- `404.html` – QR-lenkene `/e/<kode>` havner her (GitHub Pages har ingen omskriving), og siden leser koden fra adressen.
  Andre ukjente adresser får «Fant ikke siden».
- `.well-known/apple-app-site-association` – lar iPhonen åpne Knips-appen direkte for `/e/*`.
  `.nojekyll` må ligge i rota, ellers serveres ikke mapper som begynner med punktum.
- `personvern/` og `support/` – personvernerklæringen og hjelp (støttelenken i App Store Connect).
- `site.js` – `APP_URL` er lenken nedlastingsknappen går til (TestFlight under testing, så App Store).
- `fonts/` – appens egne fonter, kuttet ned til latinske tegn, med OFL-lisensene.

Kilden til appen ligger i et eget, privat repo.
