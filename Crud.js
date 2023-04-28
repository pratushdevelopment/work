let selectRow = null;

function onFormSubmit() {
  let formData = readFormData();
  if (selectRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}
// Getting value from User-----------------------------------------------------
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["city"] = document.getElementById("city").value;
  formData["city1"] = document.getElementById("city1").value;
  formData["city2"] = document.getElementById("city2").value;
  formData["city3"] = document.getElementById("city3").value;
  //   console.log(formData);
  return formData;
}

// Inserting & Showing Record in Another Table-----------------------------------------------
function insertNewRecord(data) {
  let table = document
    .getElementById("empList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
 
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.city;
 
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.city1;
  
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city2;
  
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.city3;



  // cell3 = newRow.insertCell(2);
  // cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(5);
  cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
  cell5 = newRow.insertCell(6);
  cell5.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}

// Reseting Form---------------------------------------------------------------------------
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("city").value = "";
  document.getElementById("city1").value = "";
  document.getElementById("city2").value = "";
  document.getElementById("city3").value = "";
  // document.getElementById("salary").value = "";
  selectRow = null;
}
// Editing Record ----------------------------------------------------------------------------

function onEdit(td) {
  selectRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectRow.cells[0].innerHTML;
  document.getElementById("city").value = selectRow.cells[1].innerHTML;
  document.getElementById("city1").value = selectRow.cells[2].innerHTML;
  document.getElementById("city2").value = selectRow.cells[3].innerHTML;
  document.getElementById("city3").value = selectRow.cells[4].innerHTML;



  // document.getElementById("salary").value = selectRow.cells[2].innerHTML;
}

// Update Record-----------------------------------------------------------------------------
function updateRecord(formData) {
  selectRow.cells[0].innerHTML = formData.name;
  selectRow.cells[1].innerHTML = formData.city;
  selectRow.cells[2].innerHTML = formData.city1;
  selectRow.cells[3].innerHTML = formData.city2;
  selectRow.cells[4].innerHTML = formData.city3;
}

// Dleteing Record--------------------------------------------------------------------------
function onDelete(td) {
  if (confirm("Are you want to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("empList").deleteRow(row.rowIndex);
    resetForm();
  }
}
