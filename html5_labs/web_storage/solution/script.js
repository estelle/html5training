function saveLocal(){
    //Get key and value
    var localKey = $('#localKey').val();
    var localValue = $('#localValue').val();
    
    // TODO 1: The two previous lines above get the key and the value
    // the user has entered
    // Using the localStorage API, save this key/value pair (one line)
    localStorage.setItem(localKey,localValue);
    
    //Empty Key and Value inputs
    $('#localKey').val('');
    $('#localValue').val('');
    
    storageCount();
    displayLocal();
}

function storageCount(){
    $('#localCount').html(localStorage.length + " objects in localStorage");
}

function deleteItem(key){
    // TODO 2: Using its key, remove a key/value pair from the local storage (one line)
    localStorage.removeItem(key);
    
    storageCount();
    displayLocal();
}

function clearAll(){
    // TODO 3: Delete all the key/value pairs from the localStorage (one line)
    localStorage.clear();
    
    storageCount();
    displayLocal();
}

function displayLocal(){
    //Get the ul listLocal
    var $outputList=$('#listLocal');

    //Clear the list
    $outputList.empty();

    //Get the number of elements to display
    var numLocal=localStorage.length-1;
    if (numLocal == -1)
        return;

    //For each element in the localStorage add a new li
    for(i=0;i<=numLocal;i++) {
        
        // TODO 4: Get the key of a key/value pair using its index (one line)
        var key=localStorage.key(i);
        
        // TODO 5: Get the value of a key/value pair using the key you have just got (one line)
        var value=localStorage.getItem(key);

        //Create the list item
        var $item=$('<li></li>').html(key + " " + value + " <button onclick='deleteItem(\""+ key +"\")'>Delete</button>");

        $outputList.append($item);
    }
}

function initialize(){
    storageCount();
    displayLocal();
}

$(document).ready(initialize);