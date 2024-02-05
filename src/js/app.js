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


