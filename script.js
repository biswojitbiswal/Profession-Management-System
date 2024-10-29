const employee = [];

let fname = document.querySelector("input[name='name']");
let profession = document.querySelector("input[name='profession']");
let age = document.querySelector("input[name='age']");
let btn = document.getElementById("add-emp");
let employeeList = document.getElementById("employee-list");
let messsage = document.getElementById("message");


let count = 1;

function createEmp() {
    if(!(fname.value )|| !(profession.value) || !(age.value)){
        showMsg("Error : Please Make sure All the field before adding in an employee", "error");
        return;
    }


  const empObj = {
    id: count,
    // also we can generate random id by this Math.floor(1000 + Math.random() * 9000)
    name: fname.value,
    profession: profession.value,
    age: age.value,
  };

  employee.push(empObj);
  renderEmpList();
  showMsg("Success : Added Successfully", "success");
  count++;

  fname.value = "";
  profession.value = "";
  age.value = "";
}

function renderEmpList() {
    employeeList.innerHTML = `
        <li>
            <p>ID</p>
            <p>Name</p>
            <p>Profession</p>
            <p>Age</p>
            <p>Delete</p>
        </li>
    `;

    employee.forEach((emp) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <p>${emp.id}</p>
        <p>${emp.name}</p>
        <p>${emp.profession}</p>
        <p>${emp.age}</p>
        <button onClick="deleteEmp(${emp.id})"><i class="fas fa-trash"></i>
        </button>
    `;

        employeeList.appendChild(li);
    });
  
};

function deleteEmp(id) {
    let index = employee.findIndex(emp => emp.id == id);

    if(index !== -1){
        employee.splice(index, 1);
        renderEmpList();
    }
    
}

function showMsg(msg, type){
    messsage.textContent = msg;
    messsage.className = type;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  createEmp();
});
