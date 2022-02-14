const Rollnum = document.querySelector('#rollnum');const Fullname = document.querySelector('#fullname');const DoB = document.querySelector('#dob');const IdCard = document.querySelector('#idcard');const Gender = document.querySelector('#gender');const Email = document.querySelector('#email');const CompanyEmail = document.querySelector('#companyemail');const DateIssue = document.querySelector('#dateissue');const PlaceIssue = document.querySelector('#placeissue');const MobilePhone = document.querySelector('#mobilephone');const Avatar = document.querySelector('#avatar');const Contract = document.querySelector('#contract');const Address = document.querySelector('#address');const Depid = document.querySelector('#depid');const Roleid = document.querySelector('#roleid');const form = document.querySelector('#createStaffForm');const required = value => value === '' ? false : true;const between = (length, min, max) => length < min || length > max ? false : true;const EmailValid = (email) => {    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;    return regex.test(email);};const NameValid = (name) => {    const regex = /^(([a-zA-Z]+[ ]{1}|[a-zA-Z]+|[])+)$/;    return regex.test(name);};const NoSpecialCharacter = (name) =>{    const regex = /^(([a-zA-Z0-9]+[ ]|[a-zA-Z0-9]+|[])+)$/;    return regex.test(name);};const NumberValid = (number) =>{    const regex = /^[0-9]+$/;    return regex.test(number);}const PhoneValid = (phone) => {    const regex = /^(0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]+$/;    return regex.test(phone);};const DateValid = (date) => {    const currentDate = new Date();    const inputDate = new Date(date.value);    if (inputDate.getFullYear() == currentDate.getFullYear()) {        if (inputDate.getMonth() == currentDate.getMonth()) {            if (inputDate.getDate() < currentDate.getDate()) {                return true;            } else {                return false;            }        } else if (inputDate.getMonth() < currentDate.getMonth()) {            return true;        } else {            return false;        }    } else if (inputDate.getFullYear() < currentDate.getFullYear()) {        return true;    } else {        return false;    }};const OldValid = (date) => {    const currentDate = new Date();    const inputDate = new Date(date.value);    if ((currentDate.getFullYear() - inputDate.getFullYear()) < 18) {        return false;    } else {        return true;    }};const showError = (input, message) => {    const formField = input.parentElement;    input.classList.remove('is-valid');    input.classList.add('is-invalid');    input.focus();    formField.classList.remove('success');    formField.classList.add('error');    // show message error with wrong input    const error = formField.querySelector('small');    error.classList.add('text-danger');    error.textContent = message;};const showSuccess = (input) => {    const formField = input.parentElement;    input.classList.remove('is-invalid');    input.classList.add('is-valid');    formField.classList.remove('error');    formField.classList.add('success');    // hide message error    const error = formField.querySelector('small');    error.textContent = ''; // assign null value to hide error message};const showNormal = (input) => {    const formField = input.parentElement;    input.classList.remove('is-invalid');    input.classList.remove('is-valid');    formField.classList.remove('error');    formField.classList.remove('success');    // hide message error    const error = formField.querySelector('small');    error.textContent = ''; // assign null value to hide error message};// Validate Roll numberconst checkRollnumber = (roll_number) => {    let valid = false;    const min = 2,        max = 50;    const rollnum = roll_number.value;    if (!required(rollnum)) {        showError(roll_number, 'Roll Number cannot be blank !');    } else if (!between(rollnum.length, min, max)) {        showError(roll_number, 'Roll Number must be between ' + min + ' and ' + max + ' characters');    }else if(!NoSpecialCharacter(rollnum)){        showError(roll_number, 'Roll Number cannot include special character');    }    else {        showSuccess(roll_number);        valid = true;    }    return valid;}// Validate Last nameconst checkFullname = (full_name) => {    let valid = false;    const min = 2,        max = 50;    const fullname = full_name.value;    if (!required(fullname)) {        showError(full_name, 'Full Name cannot be blank !');    } else if (!between(fullname.length, min, max)) {        showError(full_name, 'Full Name must be between ' + min + ' and ' + max + ' characters');    } else if (!NameValid(fullname)) {        showError(full_name, 'Full Name must not have number or special character');    } else {        showSuccess(full_name);        valid = true;    }    return valid;}// Validate Day of birthconst checkDoB = (staff_dob) => {    let valid = false;    const dob = staff_dob.value;    if (!required(dob)) {        showError(staff_dob, 'Day Of Birth cannot be blank !');    } else if (!DateValid(staff_dob)) {        showError(staff_dob, 'Day Of Birth cannot greater than today');    } else if(!OldValid(staff_dob)){        showError(staff_dob, 'Must have equal 18 year old');    } else {        showSuccess(staff_dob);        valid = true;    }    return valid;};// Validate IdCardconst checkIdCard = (id_card) => {    let valid = false;    const idcard = id_card.value;    if (!required(idcard)) {        showError(id_card, 'IDCard cannot be blank !');    }else if(!NumberValid(idcard)){        showError(id_card, "IDCard must be number");    }else {        showSuccess(id_card);        valid = true;    }    return valid;};// Validate genderconst checkGender = (staff_gender) => {    let valid = false;    const gender = staff_gender.value;    if (!required(gender)) {        showError(staff_gender, 'Gender cannot be blank !');    } else {        showSuccess(staff_gender);        valid = true;    }    return valid;};// Validate Emailconst checkEmail = (staff_email) => {    let valid = false;    const email = staff_email.value.trim();    if (!required(email)) {        showError(staff_email, 'Email cannot be blank !');    } else if (!EmailValid(email)) {        showError(staff_email, 'Email is invalid !');    } else {        showSuccess(staff_email);        valid = true;    }    return valid;};// Validate College Emailconst checkCompanyEmail = (company_email) => {    let valid = false;    const companyemail = company_email.value.trim();    if (!required(companyemail)) {        showError(company_email, 'College email cannot be blank !');    } else if (!EmailValid(companyemail)) {        showError(company_email, 'College email is invalid !');    } else {        showSuccess(company_email);        valid = true;    }    return valid;};// Validate DateIssueconst checkDateIssue = (date_issue) => {    let valid = false;    const dateissue = date_issue.value;    if (!required(dateissue)) {        showError(date_issue, 'Date issue cannot be blank !');    } else if (!DateValid(date_issue)) {        showError(date_issue, 'Date issue cannot greater than today !');    } else {        showSuccess(date_issue);        valid = true;    }    return valid;};// Validate PlaceIssueconst checkPlaceIssue = (place_issue) => {    let valid = false;    const placeissue = place_issue.value;    if (!required(placeissue)) {        showError(place_issue, 'Place of issue cannot be blank !');    }else if(!NoSpecialCharacter(placeissue)){        showError(place_issue, 'Place of issue cannot include special character');    }    else {        showSuccess(place_issue);        valid = true;    }    return valid;};// Validate Mobile Phoneconst checkMobilePhone = (staff_phone) => {    let valid = false;    const mobilephone = staff_phone.value;    min = 10;    max = 10;    if (!required(mobilephone)) {        showError(staff_phone, 'Mobile Phone cannot be blank !');    } else if (!PhoneValid(mobilephone)) {        showError(staff_phone, 'Mobile Phone is invalid !');    } else if (!between(mobilephone.length, min, max)) {        showError(staff_phone, 'Mobile Phone must be 10 number !');    } else {        showSuccess(staff_phone);        valid = true;    }    return valid;};//validate Avatarconst checkAvatar = (staff_avatar) => {    let valid = false;    const avatar = staff_avatar.value;    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;    if (!allowedExtensions.exec(avatar) && !required(avatar)) {        valid = true;    } else if (!allowedExtensions.exec(avatar)) {        staff_avatar.value = '';        showError(staff_avatar, 'Avatar must be a .jpg, .png or .jpeg ');    } else if (staff_avatar.files[0].size > (1024 * 1000)) {        showError(staff_avatar, 'Avatar too large. Size cannot greater 1MB !');    } else {        showSuccess(staff_avatar);        valid = true;    }    return valid;};const checkContract = (staff_contract) => {    let valid = false;    const min = 5,        max = 50;    const contract = staff_contract.value;    if (!required(contract)) {        showError(staff_contract, 'Contract cannot be blank !');    } else if (!between(contract.length, min, max)) {        showError(staff_contract, 'Contract must be between ' + min + ' and ' + max + ' characters');    }else if(!NoSpecialCharacter(contract)){        showError(staff_contract, 'Contract cannot include special character');    }    else {        showSuccess(staff_contract);        valid = true;    }    return valid;};const checkAddress = (staff_address) => {    let valid = false;    min = 10;    max = 200;    const address = staff_address.value;    if (!between(address.length, min, max)) {        showError(staff_address, 'Address can only contain ' + min + ' to ' + +max + ' character');    } else if (required(address) && between(address.length, min, max)) {        showSuccess(staff_address);        valid = true;    } else if (!required(address)) {        showNormal(staff_address);        valid = true;    }    return valid;};// Validate depidconst checkDepid = (depid) => {    let valid = false;    const id = depid.value;    if (!required(id)) {        showError(depid, 'DepartmentID cannot be blank !');    } else {        showSuccess(depid);        valid = true;    }    return valid;};// Validate depidconst checkRoleid = (roleid) => {    let valid = false;    const id = roleid.value;    if (!required(id)) {        showError(roleid, 'RoleID cannot be blank !');    } else {        showSuccess(roleid);        valid = true;    }    return valid;};//validate Avatar for edit formconst checkEditAvatar = (staff_avatar) => {    let valid = false;    const avatar = staff_avatar.value;    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;    if (!required(avatar)) {        valid = true;    } else if (!allowedExtensions.exec(avatar)) {        staff_avatar.value = '';        showError(staff_avatar, 'Avatar must be a .jpg, .png or .jpeg ');    } else if (staff_avatar.files[0].size > (1024 * 1000)) {        showError(staff_avatar, 'Avatar too large. Size cannot greater 1MB !');    } else {        showSuccess(staff_avatar);        valid = true;    }    return valid;};//Trigger validation checkform.addEventListener('input', function (e) {    switch (e.target.id) {        case 'rollnum':            checkRollnumber(Rollnum);            break;        case 'fullname':            checkFullname(Fullname);            break;        case 'email':            checkEmail(Email);            break;        case 'companyemail':            checkCompanyEmail(CompanyEmail);            break;        case 'dob':            checkDoB(DoB);            break;        case 'gender':            checkGender(Gender);            break;        case 'address':            checkAddress(Address);            break;        case 'mobilephone':            checkMobilePhone(MobilePhone);            break;        case 'avatar':            checkAvatar(Avatar);            break;        case 'idcard':            checkIdCard(IdCard);            break;        case 'dateissue':            checkDateIssue(DateIssue);            break;        case 'placeissue':            checkPlaceIssue(PlaceIssue);            break;        case 'contract':            checkContract(Contract);            break;        case 'depid':            checkDepid(Depid);            break;        case 'roleid':            checkRoleid(Roleid);            break;    }});// Prevent the form submitform.addEventListener('submit', function (e) {    e.preventDefault();    // validate form    let isFullnameValid = checkFullname(Fullname),        isRollnumValid = checkRollnumber(Rollnum),        isEmailValid = checkEmail(Email),        isCompanyEmailValid = checkCompanyEmail(CompanyEmail),        isDoBValid = checkDoB(DoB),        isGenderValid = checkGender(Gender),        isAddressValid = checkAddress(Address),        isMobilePhoneValid = checkMobilePhone(MobilePhone),        isAvatarValid = checkAvatar(Avatar),        isICardValid = checkIdCard(IdCard),        isDateIssueValid = checkDateIssue(DateIssue),        isPlaceIssueValid = checkPlaceIssue(PlaceIssue),        isContractValid = checkContract(Contract),        isDepidValid = checkDepid(Depid),        isRoleValid = checkRoleid(Roleid)    let isFormValid = isRollnumValid && isFullnameValid && isEmailValid && isCompanyEmailValid && isDoBValid && isGenderValid && isMobilePhoneValid && isAddressValid && isAvatarValid && isICardValid && isDateIssueValid && isPlaceIssueValid && isContractValid && isDepidValid && isRoleValid;    // submit to the server if the form is valid    if (isFormValid) {        var formdata = new FormData(this);        $.ajax({            url: "/api/admin/staff/postCreate",            type: 'POST',            enctype: 'multipart/form-data',            dataType: 'json',            data: formdata,            cache: false,            contentType: false,            processData: false,            success: function (result) {                if (result.title === 'error') {                    Swal.fire({                        postition: 'top-end',                        icon: result.title,                        title: result.message,                        showConfirmButton: true                    });                } else {                    Swal.fire({                        postition: 'top-end',                        icon: result.title,                        title: result.message,                        showConfirmButton: false,                        timer: 1000                    });                    setTimeout("location.reload(true);", 1000);                }            }        });    }});function findStaff(elem) {    var id = elem.querySelector('input').value;    console.log(id);    $.ajax({        type: 'GET',        url: '/api/admin/staff/findStaffById/' + id,        success: function (result) {            console.log(result);            $('#editStaffForm #staffid').val(result.staffid);            $('#editStaffForm #currentrollnum').val(result.rollnum);        }    });}const editRollnum = document.querySelector('#editrollnum');const editForm = document.querySelector('#editStaffForm');editForm.addEventListener('submit', function (e) {    e.preventDefault();    // validate form    let isRollnumValid = checkRollnumber(editRollnum);    let isFormValid = isRollnumValid;    // submit to the server if the form is valid    if (isFormValid) {        var _staffid = $('#editStaffForm #staffid').val();        var rollnumber = $('#editStaffForm #editrollnum').val();        var data = {staffid: _staffid, rollnum: rollnumber};        console.log(data);        $.ajax({            url: "/api/admin/staff/updateStaffRollnum",            type: 'POST',            enctype: 'multipart/form-data',            data: JSON.stringify(data),            cache: false,            contentType: 'application/json',            processData: false,            success: function (result) {                Swal.fire({                    position: 'center',                    icon: 'success',                    title: 'Your work has been saved',                    showConfirmButton: false,                    timer: 1000                });                setTimeout("location.reload(true);", 1000);            }        });    }})editForm.addEventListener('input', function (e) {    switch (e.target.id) {        case 'editfullname':            checkRollnumber(editRollnum);            break;    }});function deleteStaff(elem) {    var id = elem.querySelector('input').value;    Swal.fire({        title: 'Do you want to delete ?',        showDenyButton: true,        confirmButtonText: `Yes`,        denyButtonText: `No`,    }).then((result) => {        /* Read more about isConfirmed, isDenied below */        if (result.isConfirmed) {            $.ajax({                type: 'POST',                url: '/api/admin/staff/deletestaff/' + id,                success: function () {                    Swal.fire({                        position: 'center',                        icon: 'success',                        title: 'Deleted Successfully!',                        showConfirmButton: false,                        timer: 1000                    });                    setTimeout("location.reload(true);", 1000);                }            });        } else if (result.isDenied) {            Swal.fire('Changes are not saved', '', 'info');        }    });}