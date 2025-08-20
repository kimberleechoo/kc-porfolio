
function resetScrollPosition() {
    window.scrollTo(0, 0);
}

window.onload = function() {
    resetScrollPosition();
};

window.addEventListener('load', function() {
    resetScrollPosition();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById("topButton");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
   console.log('button :>> ', );
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Get the modal
function popUpFunc(){
  var modal = document.getElementById('popUpModal');
  const docBody = document.body;
  modal.style.display = "block";
  docBody.style.overflow = "hidden"

  
}

function submitFormButton(form){
const soyForm = document.getElementById('soyForm');
const submitForm = document.getElementById('soySubmitButton')
const submitError = document.getElementById('soyFormErrorMsg')
const submitEmptyError = document.getElementById('soyFormEmptyMsg')
 
    // console.log('u clicked the submit button', form)
    const soyPassword = document.getElementById('soyPassword').value
  
    if(soyPassword.length !== 0){
      submitEmptyError.style.display = "none"
      if(soyPassword === "nopassword!"){
        submitError.style.display = "none"
        window.location.href="https://xd.adobe.com/view/80562497-9997-42fb-acd7-4330a449666a-d505/screen/c5efe0c2-671a-4592-8c53-83517c572e5b?fullscreen"
        return true
        } else {
          submitError.style.display = "block"
          return false
      }
    }else {
      submitEmptyError.style.display = "block"
      submitError.style.display = "none"

    }


}

function closePopUp(){
  const modalPopUp = document.getElementById('popUpModal')
  const docBody = document.body;
  modalPopUp.style.display = "none";
  docBody.style.overflowY = "scroll"
}



