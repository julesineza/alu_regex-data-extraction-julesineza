const submitButton = document.getElementById("submitButton")
function getResult(event){
    console.log("function is active")

    event.preventDefault()
    const answer= document.getElementById("data") //fetching the data from the user 
    const resultDiv = document.getElementById("result") //fetching the result div from the index.html page
    resultDiv.innerHTML = ""; // for clearing up the old result

    let results=[]

    const regexDict = {
        emailRegex : /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, //works well
        urlRegex : /https?:\/\/[^\s]+/g, //works
        phoneNumber : /\(?\d{3}\)?[ -.]\d{3}[ -.]\d{4}/g, // works well 
        creditCardRegex :/\d{4}[ -]\d{4}[ -]\d{4}[ -]\d{4}/g, //works well
        timeRegex :/\d{1,2}\:\d{2}[ ]?P?M?/g, //works well
        htmlRegex :/<[^>]+>/, //works
        hashTagsRegex :/#[A-Za-z0-9_]+/, //works
        currencyRegex : /\$\d{1,3}(,\d{3})*(\.\d{2})?/ //works


    } //regex definition dictonary 

    for (regex in regexDict){
       const matches =answer.value.match(regexDict[regex])
       if (matches) {
        const item = document.createElement("div");
        item.className = "result-item";

        const title = document.createElement("div");
        title.className = "result-title";
        title.textContent = regex;

        const text = document.createElement("div");
        text.className = "result-text";
        text.textContent = matches.join(", ");

        item.appendChild(title);
        item.appendChild(text);
        resultDiv.appendChild(item);
       }
       if (!resultDiv.hasChildNodes()) {
            const none = document.createElement("div");
            none.className = "result-item";
            none.textContent = "No matches found.";
            resultDiv.appendChild(none);
        }
    }
    

}

submitButton.addEventListener("click",getResult)