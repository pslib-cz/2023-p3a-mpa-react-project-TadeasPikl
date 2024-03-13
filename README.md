# Rekreace hry Ztracená města v react-ts
https://www.zatrolene-hry.cz/spolecenska-hra/ztracena-mesta-512/
## Téma

Ztracená města je karetní hra pro dva hráče od Reinera Knizii. Hráči se pomocí vykládání karet vydávají na objevitelské cesty do odlehlých a tajemných koutů země.

V každém kole hráč vykládá jednu kartu expedice nebo sázky. Pokud nechce nebo nemůže vyložit kartu, musí jednu kartu odhodit na odkládací plochu, čímž ale může nahrát protivníkovy. Pak si bere kartu buď z lízacího balíčku nebo z hromádek odhozených karet, které tam bud protivník vyhodil nebo si je zde sám odložil. Hra končí ve chvíli, kdy se lízne poslední karta z lízacího balíčku. Pak se spočítají body za vyložené karty expedice. Vyhrává ten, kdo získal po třech hrách nejvíce bodů.

## Odkazy pro vývoj

Zde budou živé linky na:
- figma návrh stránek aplikace
- odkaz na gh-pages projektu
- odkaz do repozitáře projektu, pokud pracuji v teamu a zde vývoj neprobíhá

### Z čeho čerpat

- interaktivní hra (předělávka "deskovky")
- mohlo by být použitelné jako solitaire
- nebo "AI" protihráč
- inspirovat se můžete na [zatrolených hrách](https://www.zatrolene-hry.cz/katalog-her/?fType=cat&keyword=&theme=-1&category=-1&minlength=-1&maxlength=-1&localization=6%2C+7%2C+8&min_players=1&max_players=1&age=-1)...
- karetní hry méně typické - např. [Kabo](https://www.zatrolene-hry.cz/spolecenska-hra/kabo-8341/)
- učitelem oblíbená [Cartagena](https://www.zatrolene-hry.cz/spolecenska-hra/cartagena-422/) stále čeká na remake

### Techniky

- využití localStorage / sessionStorage
- čtení dat z externího RestAPI (fetch)
- operace DnD
- využití react-routeru
- funkčnost na mobilu (výjimka je předělávka komplexních deskových her)

### Co není obsahem 

- databáze
- bez vlastních backend service
- trapné věci: *klasické karetní hry*, *člověče nezlob se*, ...
