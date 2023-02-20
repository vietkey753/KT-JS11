let submit = document.getElementById("submit")
submit.addEventListener("click",function(){
    useId = document.getElementById("useId").value;
    let listForm = JSON.parse(localStorage.getItem("listForm"))
    let exist = false;
    if(listForm != null){
        for(const form of listForm){
            if(form.useId== useId){
                exist = true;
                break;
            }
        }
    } 
    if(exist){
        editForm();
    }else{
        createForm();
    }
})
function createForm(){
    let listForm = JSON.parse(localStorage.getItem("listForm"));
    if (listForm == null){
        listForm = [];
    }
    let useId = document.getElementById("useId").value
    let useName = document.getElementById("useName").value
    let useEmail = document.getElementById("useEmail").value
    let usePhone = document.getElementById("usePhone").value
    let useAddress = document.getElementById("useAddress").value
    let listFormNew = {useId: useId, useName: useName,useEmail: useEmail, usePhone: usePhone, useAddress: useAddress ,sex}
    listForm.push(listFormNew);
    localStorage.setItem("listForm",JSON.stringify(listForm));
    readForm(listForm)
}
function readForm(){
let listForm = JSON.parse(localStorage.getItem("listForm"))
if(listForm == null){
    listForm = []
}
let formUse = document.getElementById("formUse");
formUse.innerHTML = "";
listForm.forEach((form,index) => {
    formUse.innerHTML +=`<tr>
    <td>${index + 1}</td>
    <td>${form.useId}</td>
    <td>${form.useName}</td>
    <td>${form.useEmail}</td>
    <td>${form.usePhone}</td>
    <td>${form.useAddress}</td>
    <td><button type="button" onClick="editForm(${form.useName})">Edit</button>sửa</td>
    <td><button type="button" onClick="deleteForm('${form.useName}')">Delete</button>xóa</td>
    </tr>`;
});
}
readForm()
function updateForm(){
    let listForm = JSON.parse(localStorage.getItem("listForm"));
    let updateListForm = listForm.filter(form => {
        if (form.useName == useName){
            return form;
        }
    })
    document.getElementById("useId").value = updateListForm[0].useId;
    document.getElementById("useName").value = updateListForm[0].useName;
    document.getElementById("useEmail").value = updateListForm[0].useEmail;
    document.getElementById("usePhone").value = updateListForm[0].usePhone;
    document.getElementById("useAddress").value = updateListForm[0].useAddress;
}
function editForm() {
    let listForm = JSON.parse(localStorage.getItem("listForm"))
    let useId = document.getElementById("useId").value
    let useName = document.getElementById("useName").value
    let useEmail = document.getElementById("useEmail").value
    let usePhone = document.getElementById("usePhone").value
    let useAddress = document.getElementById("useAddress").value
    let updateListForm = listForm.map(form => {
      if (form.useName == useName) {
        form.useId = useId
        form.useEmail = useEmail
        form.usePhone = usePhone
        form.useAddress = useAddress
      } return form;
    })
    localStorage.setItem("listForm", JSON.stringify(updateListForm));
    readForm(listForm);
  }
  function deleteForm() {
    let listForm = JSON.parse(localStorage.getItem("listForm"));
    for (let i = 0; i < listForm.length; i++) {
      if (listForm[i].formId == formId) {
        listForm.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("listForm", JSON.stringify(listForm));
    readForm();
  }
