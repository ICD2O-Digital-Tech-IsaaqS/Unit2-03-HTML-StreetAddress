// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq simon
// Created on: Mar 2025
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's street number and street name and displays it back to user

  // get street number from text field
  let streetnumber = document.getElementById("street-number").value
	// get street name from text field and cast it to integer
  let streetname = document.getElementById("street-name").value

  // display street number and street name back to user
  document.getElementById('user-info').innerHTML = "Your street number is " + streetnumber + " and your street name " + streetname + " . "
}
