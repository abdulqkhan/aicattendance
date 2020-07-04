

function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbyO1nYaT1eZQyAfzPVll2b8BYAx0RCHDQGRhOsX7HJcqy8lAEm-/exec";

    fetch(url)
    .then(d => d.json())
    .then(d => {
    
        //response = [{status : "Cool"}]; this is the object being returned from the server.
    
        document.getElementById("app").textContent = d[0].status;
        
    
    });

}

document.getElementById("btn").addEventListener("click", testGS);
