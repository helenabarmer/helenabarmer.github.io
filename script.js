const arrayDoing = ["GitHub", "Java", "Coffee", "Meetups", "Testing", "Bugs"]

function getArrayDoing(){
    const result = arrayDoing[Math.floor(Math.random() * arrayDoing.length)];
    return result;}

function displayArray(){
    const result = document.getElementById('displayDoing').innerText= getArrayDoing();
    return result;}

function generateFunction(){
    const result = document.getElementById('generate').addEventListener("click", displayArray);
    return result;
}


    

    

    

    

















