(function(){
     console.info("Hello JS"); 
})();


// var staff = [
//     {
//     name : "Bob Smith",
//     email : "b.smith@busy.com"
//     }, {
//     email : "j.johnson@busy.com" },
//     {
//     name : "Ethan Hawkson", email : "e.hawkson@busy.com"
//     }, {
//     email : "j.grant@busy.com" }
// ]

var staff = JSON.parse(localStorage.getItem('staffList')); //get staff list from local storage
console.log(staff);
if (staff === null){ //if nothing in localStorage
    staff=[]; //staff is empty
}


document.getElementById('addStaffForm').addEventListener('submit',function(ev){ 
    //if submit event occurs in addStaffForm run function
    ev.preventDefault();//NOT SURE
    //add form value to variables
    let newStaffName = document.getElementById('staffName').value;
    let newStaffEmail = document.getElementById('staffEmail').value;
    staff.push({name:newStaffName, email:newStaffEmail}); //add vars to staff
    console.dir(staff); 
    rebuildList();
})


var rebuildList=function(){ 
    document.getElementById('staffTable').innerHTML = "";//not sure
    staff.forEach(function (element) {//run through every element of staff
        var newStaffRow = document.createElement("tr"); //create new row
        var newStaffName = document.createElement("td"); //create table square
        newStaffName.innerHTML = element.name;//add name to table
        var newStaffEmail = document.createElement("td"); //create table square
        newStaffEmail.innerHTML=element.email;//add email to table
        newStaffRow.appendChild(newStaffName); //adds a node
        newStaffRow.appendChild(newStaffEmail);
        document.getElementById('staffTable').appendChild(newStaffRow);
        });
        localStorage.setItem('staffList', JSON.stringify(staff));//save staff to local storage
        
}

rebuildList();