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

var staff = JSON.parse(localStorage.getItem('staffList'));
console.log(staff);
if (staff === null){
    staff=[];
}


document.getElementById('addStaffForm').addEventListener('submit',function(ev){
    ev.preventDefault();
    let newStaffName = document.getElementById('staffName').value;
    let newStaffEmail = document.getElementById('staffEmail').value;
    staff.push({name:newStaffName, email:newStaffEmail});
    console.dir(staff);
    rebuildList();
})


var rebuildList=function(){
    staff.forEach(function (element) {
        var newStaffRow = document.createElement("tr");
        var newStaffName = document.createElement("td");
        newStaffName.innerHTML = element.name;
        var newStaffEmail = document.createElement("td");
        newStaffEmail.innerHTML=element.email;
        newStaffRow.appendChild(newStaffName);
        newStaffRow.appendChild(newStaffEmail);
        document.getElementById('staffTable').appendChild(newStaffRow);
        });
        localStorage.setItem('staffList', JSON.stringify(staff));
        //document.getElementById('staffTable').innerHTML = "";
}

rebuildList();