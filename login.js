const update=()=> {
 let select = document.getElementById("state");
  let option = select.options[select.selectedIndex];
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
