//  1. Vi ønsker å vise en Katte-GIF fordi det skaper ro i sjelen. Derfor ønsker jeg at dere peker på riktig element, og kaller getCat funksjonen.
//  2. Vi må finne en URL å hente Kattegifs fra, kunne dere lagt inn riktig url? Se om dere finner noe her: https://cataas.com/
//  3. Vi må sørge for at vi sender variabler riktig og peker på riktig navn, kan dere ordne det?
//  4. Om alt er gjort riktig så vil dere legge merke til at det er mangel på tilbakemelding til brukeren at den laster inn en ny GIF, kan dere ordne det? Spinner, tekst som sier "Laster inn ny GIF...". Sky is the limit.
//  5. Knappen er ikke veldig pen, kunne dere gjort den penere?



document.getElementById('').addEventListener('click', () => {
    
})



const getCat = async () => {
    // Henter og venter på svar fra URL.
    const response = await fetch('')

    // Gjør svaret om til en BLOB, som representerer rå binær data. (Bilder b.la)
    const catBlob = await response.blob();

    // Lager en URL ut av blobben slik at vi kan benytte dette på webelementer, som for eksempel <img>
    const imageUrl = URL.createObjectURL()

    //Henter Image ID'en og setter URL'en på src atributten til taggen.
    document.getElementById('').src = ''
    

}


