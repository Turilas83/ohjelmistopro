# ohjelmistopro

**************************************

// hae kaikki kyselyt

GET /ohjelmistopro/poll

// hae tietty kysely

GET /ohjelmistopro/poll/id

// tallenna kysely 

POST /ohjelmistopro/poll/

*************************************

// hae kysymykset

GET /ohjelmistopro/question/id

// tallenna kysymys

POST /ohjelmistopro/question/

**************************************

// vastaukset yhteen kysymykseen

// /kyselynro/kysymysnro

GET /ohjelmistopro/answer/4/25

// vastaukset kyselyn kaikkiin kysymyksiin
// /kyselynro/

GET /ohjelmistopro/answer/4/

// tallenna vastaus

POST /ohjelmistopro/answer
