 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA37f88Fs0LNlnLL1iuV-3oJNBhHdXpnm8",
  authDomain: "museum-web-app.firebaseapp.com",
  databaseURL: "https://museum-web-app.firebaseio.com",
  projectId: "museum-web-app",
  storageBucket: "museum-web-app.appspot.com",
  messagingSenderId: "195016800018",
  appId: "1:195016800018:web:f87b4c5e5d2b30d905e5cb",
  measurementId: "G-LKLRMQTK8G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;


  /*---------Connect login page to firebase ---------*/ 

  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != "" && password != "")
      {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error)
        {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode);
          console.log(errorMessage);

          window.alert("Message : " + errorMessage);

        });

      }
      else
      {
        window.alert("Please Enter your email and password.");
      }

  });

  /*---------Connect login page to firebase End ---------*/ 


  /*---------Connect register page to firebase ---------*/ 

  $("#btn-signup").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();
      var cPassword = $("#confirmPassword").val();

      if(email != "" && password != "" && cPassword != "")
      {
          if(password == cPassword)
          {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error)
            {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(errorCode);
              console.log(errorMessage);

              window.alert("Message : " + errorMessage);

            });


          }
          else
          {
            window.alert("Password do not match with Confirm Password.");
          }

      }
      else
      {
        window.alert("Form is incomplete.");
      }

  });

  /*---------Connect register page to firebase Ends---------*/ 




/*--------------Add account settings to firebase ------------- */

  $("#btn-update").click(function()
  {
      var Phone = $("#phone").val();
      var FirstName = $("#fname").val();
      var LastName = $("#lname").val();
      var Designation = $("#designation").val();
      var Bio = $("#bio").val();
      var Gender = $("#gender").val();
      var Address = $("#address").val();
      var City = $("#city").val();
      var PostalCode = $("#postalCode").val();
      var Country = $("#country").val();
      var Agreement = $("#agreement").val(); 

      var rootRef = firebase.database().ref().child("Users");
      var userID = firebase.auth().currentUser.uid;
      var usersRef = rootRef.child(userID);


      if(FirstName != "" && LastName != "" && Designation != "" && Bio != "" && Gender != "" && Phone != "" && Address != "" && City != "" && PostalCode != "" && Country != "" )
      {
          var userData = 
          {
            "Phone": phone,
            "FirstName": FirstName,
            "LastName": LastName,
            "Designation": Designation,
            "Bio": Bio,
            "Gender": Gender,
            "Address" : Address,
            "City" : City,
            "PostalCode" : PostalCode,
            "Country": Country,
            "Agreement" : Agreement,

          };

          usersRef.set(userData, function(error)
          {
            if (error)
            {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(errorCode);
              console.log(errorMessage);

              window.alert("Message : " + errorMessage);
            }
            else
            {
              window.alert("");
            }
          });
      }
      else
      {
        window.location.href = "collections.html";
      }

  });


  /*---------Connect reset password to firebase ---------*/ 

  $("#btn-resetPassword").click(function()
  {
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email != "")
    {
      auth.sendPasswordResetEmail(email).then(function()
      {
        window.alert("Email has been sent to you, Please check and verify."); 
      })
      .catch(function(error)
      {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        window.alert("Message : " + errorMessage); 
      });

    }
    else
    {
      window.alert("Please write your email first.")
    }   
  });

  /*---------Connect reset password to firebase End ---------*/ 



  /*---------Connect logout to firebase ---------*/ 

  $("#btn-logout").click(function()
  {
    firebase.auth().signOut();
      
  });

  /*---------Connect loguot to firebase End ---------*/ 






 
