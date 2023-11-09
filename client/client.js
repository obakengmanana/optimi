var structure = "";
var html = "";

// Make an HTTP request to the /json/ route of our express server:
fetch("http://localhost:3000/projects")
// Get the request body and convert to JSON:
.then((res)=> res.json())
// Here we have the request body as a JSON object ready to be used:
.then((data)=>{

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        //structure = '<optgroup label= "<img width=25 height=25 src='+ element["image"]['link'] +' >' + element["name"] + '">';
        structure = '<optgroup label="' + element["name"] + '">';

        for (let i = 0; i < element["groups"].length; i++) {
            const group = element["groups"][i];
            structure += ' <option data-url="' + group["url"] + '" value="' + group["id"] + '">' + group["name"] + '</option>';
        }
        structure += ' </optgroup> ';
        html += structure;
        
    }

    document.getElementById("select").innerHTML = html;
})
.catch(console.error); 





