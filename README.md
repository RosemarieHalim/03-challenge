#   Challenge 03 - Password Generator

##  User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

---

# Password Generator

## Purpose
As a developer, I want to create a password generator where users can choose the length and intricacy/strength of their password.

## Built With
* HTML
* CSS
* JavaScript

## Website
https://rosemariehalim.github.io/03-challenge/

---

## Challenge 3.0

* planned out code
* linked css and js to HTML file
* created develop branch
* created password length function with while loop statement
* added the functions and boolians for the lowercase, uppercase, numeric, and/or special characters
* created password generation function that provides a warning pop-up when neither boolian is true
* tested and fixed broken code
* merged develop branch into main and pushed to GitHub