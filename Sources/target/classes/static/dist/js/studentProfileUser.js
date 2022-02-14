const editFullname = document.querySelector('#editfullname');
const editEmail = document.querySelector('#editemail');
const editCollegeEmail = document.querySelector('#editcollegeemail');
const editDoB = document.querySelector('#editdob');
const editGender = document.querySelector('#editgender');
const editAddress = document.querySelector('#editaddress');
const editMobilePhone = document.querySelector('#editmobilephone');
const editAvatar = document.querySelector('#editavatar');

const editIdCard = document.querySelector('#editidcard');
const editDateIssue = document.querySelector('#editdateissue');
const editPlaceIssue = document.querySelector('#editplaceissue');
const editMajor = document.querySelector('#editmajor');
const editPass = document.querySelector('#StudentPass');
const RePass = document.querySelector('#ReStudentPass');

const editForm = document.querySelector('#editStudentForm');

const required = value => value === '' ? false : true;
const between = (length, min, max) => length < min || length > max ? false : true;
const EmailValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return regex.test(email);
};
const idcardvalid = (idcard) => {
    const regex = /^[0-9]+$/;
    return regex.test(idcard);
};
const PlaceValid = (place) => {
    const regex = /^(([a-zA-Z]{1,}[a-zA-Z0-9-&,]{0,}([ ]|[a-zA-Z0-9-&,]{0,}|[])[a-zA-Z0-9-&,]{0,})+)$/;
    return regex.test(place);
};
const NameValid = (name) => {
    const regex = /^(([a-zA-Z]+[ ]{1}|[a-zA-Z]+|[])+)$/;
    return regex.test(name);
};
const PhoneValid = (phone) => {
    const regex = /^(0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]+$/;
    return regex.test(phone);
};
var DateDiff = {

    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

function checkAgeValidDOB(date1){
    const startDate = new Date(date1.value);
    const currentDate = new Date();
    if(DateDiff.inDays(startDate, currentDate) >= 6570){
        return true;
    }else if(DateDiff.inMonths(startDate, currentDate) >= 216){
        return true;
    }else if(DateDiff.inYears(startDate, currentDate) >= 18){
        return true;
    }else{
        return false;
    }
}
const DateValid = (date) => {
    const currentDate = new Date();
    const inputDate = new Date(date.value);
    if (inputDate.getFullYear() == currentDate.getFullYear()) {
        if (inputDate.getMonth() == currentDate.getMonth()) {
            if (inputDate.getDate() < currentDate.getDate()) {
                return true;
            } else {
                return false;
            }
        } else if (inputDate.getMonth() < currentDate.getMonth()) {
            return true;
        } else {
            return false;
        }
    } else if (inputDate.getFullYear() < currentDate.getFullYear()) {
        return true;
    } else {
        return false;
    }
};

const showError = (input, message) => {
    const formField = input.parentElement;

    input.classList.remove('is-valid');
    input.classList.add('is-invalid');

    input.focus();

    formField.classList.remove('success');
    formField.classList.add('error');

    // show message error with wrong input
    const error = formField.querySelector('small');
    error.classList.add('text-danger');
    error.textContent = message;
};

const showSuccess = (input) => {

    const formField = input.parentElement;

    input.classList.remove('is-invalid');
    input.classList.add('is-valid');

    formField.classList.remove('error');
    formField.classList.add('success');

    // hide message error
    const error = formField.querySelector('small');
    error.textContent = ''; // assign null value to hide error message
};

const showNormal = (input) => {

    const formField = input.parentElement;

    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');

    formField.classList.remove('error');
    formField.classList.remove('success');

    // hide message error
    const error = formField.querySelector('small');
    error.textContent = ''; // assign null value to hide error message
};

// Validate Last name
const checkFullname = (full_name) => {
    let valid = false;
    const min = 2,
        max = 50;
    const fullname = full_name.value;

    if (!required(fullname)) {
        showError(full_name, 'Full Name cannot be blank !');
    } else if (!between(fullname.length, min, max)) {
        showError(full_name, 'Full Name must be between ' + min + ' and ' + max + ' characters');
    } else if (!NameValid(fullname)) {
        showError(full_name, 'Full Name must not have number or special character');
    } else {
        showSuccess(full_name);
        valid = true;
    }
    return valid;
}


// Validate Email
const checkEmail = (student_email) => {
    let valid = false;
    const email = student_email.value.trim();

    if (!required(email)) {
        showError(student_email, 'Email cannot be blank !');
    } else if (!EmailValid(email)) {
        showError(student_email, 'Email is invalid !');
    } else {
        showSuccess(student_email);
        valid = true;
    }
    return valid;
};
// Validate College Email
const checkCollegeEmail = (college_email) => {
    let valid = false;
    const collegeemail = college_email.value.trim();

    if (!required(collegeemail)) {
        showError(college_email, 'College email cannot be blank !');
    } else if (!EmailValid(collegeemail)) {
        showError(college_email, 'College email is invalid !');
    } else {
        showSuccess(college_email);
        valid = true;
    }
    return valid;
};
// Validate Day of birth
const checkDoB = (student_dob) => {
    let valid = false;
    const dob = student_dob.value;

    if (!required(dob)) {
        showError(student_dob, 'Day Of Birth cannot be blank !');
    } else if (!DateValid(student_dob)) {
        showError(student_dob, 'Day Of Birth cannot greater than today !');
    } else if (!checkAgeValidDOB(student_dob)) {
        showError(student_dob, 'Student must be 18 year old or older !');
    } else {
        showSuccess(student_dob);
        valid = true;
    }
    return valid;
};
// Validate gender
const checkGender = (student_gender) => {
    let valid = false;
    const gender = student_gender.value;

    if (!required(gender)) {
        showError(student_gender, 'gender cannot be blank !');
    } else {
        showSuccess(student_gender);
        valid = true;
    }
    return valid;
};
// Validate Address
const checkAddress = (student_address) => {
    let valid = false;
    min = 0;
    max = 200;
    const address = student_address.value;

    if (!between(address.length, min, max)) {
        showError(student_address, 'Address can only contain ' + max + ' character');
    } else if (required(address) && between(address.length, min, max)) {
        showSuccess(student_address);
        valid = true;
    } else if (!required(address)) {
        showNormal(student_address);
        valid = true;
    }
    return valid;
};
// Validate Home Phone
const checkHomePhone = (student_homephone) => {
    let valid = false;
    const homephone = student_homephone.value;
    min = 10;
    max = 10;
    if (!required(homephone)) {
        showError(student_homephone, 'Home Phone cannot be blank !');
    } else if (!PhoneValid(homephone)) {
        showError(student_homephone, 'Home Phone is invalid !');
    } else if (!between(homephone.length, min, max)) {
        showError(student_homephone, 'Home Phone must be 10 number !');
    } else {
        showSuccess(student_homephone);
        valid = true;
    }
    return valid;
};
// Validate Mobile Phone
const checkMobilePhone = (student_mobilephone) => {
    let valid = false;
    const mobilephone = student_mobilephone.value;
    min = 10;
    max = 10;
    if (!required(mobilephone)) {
        showError(student_mobilephone, 'Mobile Phone cannot be blank !');
    } else if (!PhoneValid(mobilephone)) {
        showError(student_mobilephone, 'Mobile Phone is invalid !');
    } else if (!between(mobilephone.length, min, max)) {
        showError(student_mobilephone, 'Mobile Phone must be 10 number !');
    } else {
        showSuccess(student_mobilephone);
        valid = true;
    }
    return valid;
};


//validate Avatar
const checkAvatar = (student_avatar) => {
    let valid = false;
    const avatar = student_avatar.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    if (!allowedExtensions.exec(avatar) && !required(avatar)) {
        valid = true;
    } else if (!allowedExtensions.exec(avatar)) {
        student_avatar.value = '';
        showError(student_avatar, 'Avatar must be a .jpg, .png or .jpeg ');
    } else if (student_avatar.files[0].size > (1024 * 1000)) {
        showError(student_avatar, 'Avatar too large. Size cannot greater 1MB !');
    } else {
        showSuccess(student_avatar);
        valid = true;
    }
    return valid;
};

// Validate IdCard
const checkIdCard = (id_card) => {
    let valid = false;
    const idcard = id_card.value;

    if (!required(idcard)) {
        showError(id_card, 'Idcard cannot be blank !');
    }else if (!idcardvalid(idcard)) {
        showError(id_card, 'Id card number can only contain number !');
    }else if (!between(idcard.length,9,9)) {
        showError(id_card, 'Id card number must have 9 character !');
    }else {
        showSuccess(id_card);
        valid = true;
    }
    return valid;
};
// Validate DateIssue
// Validate DateIssue
const checkDateIssue = (date_issue) => {
    let valid = false;
    const dateissue = date_issue.value;

    if (!required(dateissue)) {
        showError(date_issue, 'Date issue cannot be blank !');
    } else if (!DateValid(date_issue)) {
        showError(date_issue, 'Date issue cannot greater than today !');
    } else {
        showSuccess(date_issue);
        valid = true;
    }
    return valid;
};
// Validate PlaceIssue
const checkPlaceIssue = (place_issue) => {
    let valid = false;
    const placeissue = place_issue.value;

    if (!required(placeissue)) {
        showError(place_issue, 'Place issue cannot be blank !');
    }else if (!PlaceValid(placeissue)) {
        showError(place_issue, 'Place issue can not have special character !');
    } else {
        showSuccess(place_issue);
        valid = true;
    }
    return valid;
};
// Validate Major
const checkMajor = (student_major) => {
    let valid = false;
    const major = student_major.value;
    min = 0;
    max = 100;
    if (!required(major)) {
        showError(student_major, 'Major cannot be blank !');
    } else if (!between(major.length, min, max)) {
        showError(student_major, 'Major only containt ' + max + ' character');
    } else{
        showSuccess(student_major);
        valid = true;
    }
    return valid;
};
// Validate Pass
const checkPass = (student_pass,re_student_pass) => {
    let valid = false;
    const pass = student_pass.value;
    const repass = re_student_pass.value;
    if (!required(pass)) {
        showNormal(student_pass);
        showNormal(re_student_pass);
        valid = true;
    } else if (repass!=pass) {
        showError(re_student_pass,"Please enter the same password");
        showNormal(student_pass);
        valid = false;
    } else if (repass==pass) {
        showSuccess(student_pass);
        showSuccess(re_student_pass);
        valid = true;
    } else if (required(pass)) {
        showSuccess(student_pass);
        showSuccess(re_student_pass);
        valid = true;
    }
    return valid;
};
//validate Avatar for edit form
const checkEditAvatar = (student_avatar) => {
    let valid = false;
    const min = 3,
        max = 100;
    const avatar = student_avatar.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!required(avatar)) {
        valid = true;
    } else if (!allowedExtensions.exec(avatar)) {
        student_avatar.value = '';
        showError(student_avatar, 'Avatar must be a .jpg, .png or .jpeg ');
    } else if (student_avatar.files[0].size > (1024 * 1000)) {
        showError(student_avatar, 'Avatar too large. Size cannot greater 1MB !');
    } else {
        showSuccess(student_avatar);
        valid = true;
    }
    return valid;
};
editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // validate form
    let isFullnameValid = checkFullname(editFullname),
        isEmailValid = checkEmail(editEmail),
        isCollegeEmailValid = checkCollegeEmail(editCollegeEmail),
        isDoBValid = checkDoB(editDoB),
        isGenderValid = checkGender(editGender),
        isAddressValid = checkAddress(editAddress),
        isMobilePhoneValid = checkMobilePhone(editMobilePhone),
        isAvatarValid = checkAvatar(editAvatar),
        isICardValid = checkIdCard(editIdCard),
        isDateIssueValid = checkDateIssue(editDateIssue),
        isPlaceIssueValid = checkPlaceIssue(editPlaceIssue),
        isMajorValid = checkMajor(editMajor);
    isResetPassValid = checkPass(editPass,RePass);

    let isFormValid =isFullnameValid && isEmailValid && isCollegeEmailValid && isDoBValid && isGenderValid  && isMobilePhoneValid && isAddressValid && isAvatarValid && isICardValid && isDateIssueValid && isPlaceIssueValid  && isMajorValid&& isResetPassValid;

    // submit to the server if the form is valid
    if (isFormValid) {

        var formdata = new FormData(this);

        $.ajax({
            url: "/api/user/students/postEdit",
            type: 'PUT',
            enctype: 'multipart/form-data',
            dataType: 'json',
            data: formdata,
            cache: false,
            contentType: false,
            processData: false,
            success: function (result) {
                if (result.title === 'error') {
                    Swal.fire({
                        postition: 'top-end',
                        icon: result.title,
                        title: result.message,
                        showConfirmButton: true
                    });
                }
                else{
                    Swal.fire({
                        postition: 'top-end',
                        icon: result.title,
                        title: result.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout("location.reload(true);", 1500);
                }
            },
            error: function () {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error',
                    showConfirmButton: false,
                    timer: 1000
                });
                // setTimeout("location.reload(true);", 1000);
            }
        });

    }
});
editForm.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'editfullname':
            checkFullname(editFullname);
            break;
        case 'editemail':
            checkEmail(editEmail);
            break;
        case 'editcollegeemail':
            checkCollegeEmail(editCollegeEmail);
            break;
        case 'editdob':
            checkDoB(editDoB);
            break;
        case 'editgender':
            checkGender(editGender);
            break;
        case 'editaddress':
            checkAddress(editAddress);
            break;
        case 'edithomephone':
            checkHomePhone(editHomePhone);
            break;
        case 'editmobilephone':
            checkMobilePhone(editMobilePhone);
            break;
        case 'editavatar':
            checkAvatar(editAvatar);
            break;
        case 'editidcard':
            checkIdCard(editIdCard);
            break;
        case 'editdateissue':
            checkDateIssue(editDateIssue);
            break;
        case 'editplaceissue':
            checkPlaceIssue(editPlaceIssue);
            break;
        case 'editmajor':
            checkMajor(editMajor);
            break;
        case 'ReStudentPass':
            checkPass(editPass,RePass);
            break;
    }
});