const update=()=> {
 let select = document.getElementById("state");
 
  let option = select.options[select.selectedIndex];
  console.log()
  if (option.value=="Jordan") { 
    $("#city option").remove()     
  $("#city").append(
    `<option value="Amman">Amman</option>
    <option value="Zarqa">Zarqa</option>
    <option value="Madaba">Madaba</option>`
  );
  }else if (option.value=="Saudi Arabia") {
    $("#city option").remove()
    $("#city").append(
        `<option value="Riyadh">Riyadh</option>
        <option value="Jeddah">Jeddah</option>
        <option value="Medina">Medina</option>`
      );
  } 
  else if (option.value=="Turkey") {
    $("#city option").remove()
    $("#city").append(
        `<option value="Istanbul">Istanbul</option>
        <option value="Antalya">Antalya</option>
        <option value="Ankara">Ankara</option>`
      );
  } 
}

// update();
 const save=()=>{
    let select = document.getElementById("state");
let selctCity=document.getElementById("city");
const user={
    "firstnme" :$("#firstnme").val(),
    "lastname":$("#lastname").val(),
    "address":$("#address").val(),
    "Gender":$("input[name='Gender']:checked").val(),
    "state":select.options[select.selectedIndex].value,
    "city":selctCity.options[selctCity.selectedIndex].value,
    "Pincode":$("#address").val(),
    "course":$("#course").val(),
    "email":$("#email").val(),
}
window.localStorage.setItem("user", JSON.stringify(user));
$("#register").hide();
$("#login").show()
 }

 const hide=()=>{
    $("#address").hide();
 }
 $("#hide").click(function(){
    $("#address").hide();
  });
  $("#login").hide()


  function myFunction() {
    alert("Welcome");}