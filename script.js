function getResult(event){
    event.preventDefault()
    answer= document.getElementById("data")

    emailRegex=/.+[@].+[\.].+/gm
    urlRegex=/^(https:\/\/).+/gm
    phoneNumber=/^\(?\d{3}\)?[ -.]\d{3}[ -.]\d{4}/gm
    creditCardRegex=/^\d{4}[ -]\d{4}[ -]\d{4}[ -]\d{4}/gm
    timeRegex=/^\d{1,2}\:\d{2}[ ]?P?M?/gm
    htmlRegex=//
    hashTagsRegex=//
    currencyRegex=//

    if (emailRegex.test(answer.value)) {
        console.log("got the emails");
    }
}