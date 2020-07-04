


function addGS() {

    const url = "https://script.google.com/macros/s/AKfycbyO1nYaT1eZQyAfzPVll2b8BYAx0RCHDQGRhOsX7HJcqy8lAEm-/exec";

    // fetch needs to send bookingID.
    fetch(url, {

        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({bookingID:"test booking id"})

    });

}


function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbyO1nYaT1eZQyAfzPVll2b8BYAx0RCHDQGRhOsX7HJcqy8lAEm-/exec?bookingID=123456";

    fetch(url)
    .then(d => d.json())
    .then(d => {
    
        //response = [{status : "Cool"}]; this is the object being returned from the server.
    
        document.getElementById("app").textContent = d[0].status;
        
    
    });

}
document.getElementById("btn2").addEventListener("click", addGS);
document.getElementById("btn").addEventListener("click", testGS);
