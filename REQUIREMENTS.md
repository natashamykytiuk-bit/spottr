# Requirements

Outline: The following contains 186 requirements, separated by each website page. These requirements outline the expected page layout, behaviour, user interaction and use of our databases that SPOTR is intended to implement at the very minimum.

## 1. Landing Page (logged out)

- **LP-1:** When a user who is not logged in opens the website, the system must display the Landing page.
- **LP-2:** The top bar must display the app name “Spottr”.
- **LP-3:** The top bar must display a “Login” button.
- **LP-4:** The top bar must display a “Sign Up” button.
- **LP-5:** Selecting “Login” must navigate to the Log In page.
- **LP-6:** Selecting “Sign Up” must navigate to the Sign Up page.
- **LP-7:** The landing page must display the text “Get ready to work in...”.
- **LP-8:** The Landing page must display the Rec North busyness graph (section 4).
- **LP-9:** The Landing page must display a “Filter by” dropdown above the graph.
- **LP-10:** The Landing page must display a “Check In” button below the graph.
- **LP-11:** Selecting “Check In” while logged out must navigate to the Sign Up page.
- **LP-12:** Selecting “Filter by” while logged out must navigate to the Sign Up page.
- **LP-13:** When a logged-in user opens the website, the system must navigate to the Home page.
- **LP-14:** When a logged-out user opens the Landing page, the system must display a pop-up titled “These machines are popular today”.
- **LP-15:** The pop-up must list the 2 to 5 most popular machines today, ordered from most to least popular.
- **LP-16:** A machine’s popularity must equal the number of check-ins made today (since midnight, Rec North local time), including completed check-ins, whose selected workout has an exercise tagged with that machine.
- **LP-17:** Only machines with at least one check-in today may be listed.
- **LP-18:** If fewer than 2 machines qualify under LP-17, the system must not display the pop-up.
- **LP-19:** Ties in popularity must be broken alphabetically by machine name.
- **LP-20:** The pop-up must have a close control, and closing it must leave the user on the Landing page.
- **LP-21:** Once closed, the pop-up must not reappear until the Landing page is opened again.

## 2. Sign Up

- **SU-1:** The Sign Up page must display a text field labelled “Email”.
- **SU-2:** The Sign Up page must display a text field labelled “Password”.
- **SU-3:** The Sign Up page must display a button labelled “SIGN UP”.
- **SU-4:** If either field is empty when “SIGN UP” is selected, the system must not create an account.
- **SU-5:** If either field is empty when “SIGN UP” is selected, the system must display “Please fill in all fields”.
- **SU-6:** Email must be validated before submitting: An email is valid only if it contains exactly one “@”, at least one character before the “@”, and after the “@” at least one character, then a “.”, then at least one character.
- **SU-7:** If the email is not valid when “SIGN UP” is selected, the system must not create an account and must display a message telling the user to enter a new email.
- **SU-8:** If the password is shorter than 8 characters when “SIGN UP” is selected, the system must not create an account and must display a message to the user to enter a suitable password.
- **SU-9:** If the email already belongs to an account when “SIGN UP” is selected, the system must not create an account. (The system must check the email database and confirm it does not already exist there). Display “An account with this email already exists”.
- **SU-10:** Emails are compared without regard to upper/lower case.
- **SU-11:** If more than one error applies, the system must display only the first one, checked in this order: empty field, invalid email, short password, email already used.
- **SU-12:** If all checks pass, selecting “SIGN UP” must create an account with the entered email.
- **SU-13:** The system must store a hash of the password, never the password itself.
- **SU-14:** After an account is created, the system must log the user in.
- **SU-15:** After an account is created, the system must navigate to the Home page.
- **SU-16:** The Sign Up page must provide a way to go back to the Landing page.

## 3. Log In

- **LI-1:** The Log In page must display a text field labelled “Email”.
- **LI-2:** The Log In page must display a text field labelled “Password”.
- **LI-3:** The Log In page must display a button labelled “LOG IN”.
- **LI-4:** If either field is empty when “LOG IN” is selected, the system must not attempt to log in and must display “Please fill in all fields”.
- **LI-5:** If the email and password match an existing account, the system must log the user in.
- **LI-6:** After a successful log in, the system must navigate to the Home page.
- **LI-7:** If no account has the entered email, or the password is wrong, the system must not log the user in and display “Incorrect email or password”.
- **LI-8:** The Log In page must provide a way to go back to the Landing page through a side bar.

## 4. Busyness Graph

- **BG-1:** The busyness graph must plot the gym’s busyness on a scale of 1 - 10.
- **BG-2:** The graph’s horizontal axis must represent time of day.
- **BG-3:** The graph’s vertical axis must represent the (1-10) busyness scale of people checked in at Rec North.
- **BG-4:** The graph must mark the current time with a label or indicator.
- **BG-5:** Predicted busyness lines must be a different colour from recorded bars.
- **BG-6:** The predicted line graphing and the (1-10) scale must be based off of past entries in a collected time database.
- **BG-7:** A predicted bar for future time t must equal the number of currently checked-in users whose check-in time plus workout length is later than t.
- **BG-8:** The graph must update at least once every 60 seconds.
- **BG-9:** When a user’s check-in ends, by check-out or by automatic check-out, the system must add that completed check-in to the historical time database used for predictions (BG-6 and section 12).
- **BG-10:** A completed check-in must be available to the predictions no later than the next graph update (BG-8).
- **BG-11:** A user who is still checked in must not be added to the historical time database until their check-in ends.

## 5. Filter By

- **FL-1:** The “Filter by” dropdown must include an “All” option.
- **FL-2:** The “Filter by” dropdown must list every muscle group in the muscle catalogue.
- **FL-3:** The “Filter by” dropdown must list every machine in the machine catalogue.
- **FL-4:** “All” must be selected by default.
- **FL-5:** When “All” is selected, the graph must count every checked-in user and use an algorithm to map that to a (1-10) busyness scale.
- **FL-6:** When a muscle group is selected, the graph must count only checked-in users whose selected workout has an exercise tagged with that muscle group.
- **FL-7:** When a machine is selected, the graph must count only checked-in users whose selected workout has an exercise tagged with that machine.
- **FL-8:** The graph must display the name of the currently selected filter.

## 6. Home Page and Menu

- **HM-1:** The Home page must only be shown to logged-in users. A logged-out user who tries to open it must be sent to the Landing page.
- **HM-2:** The Home page must display some text such as “Get ready to work in...”.
- **HM-3:** The Home page must display the busyness graph and the “Filter by” dropdown.
- **HM-4:** The Home page must display a “Check In” button below the graph.
- **HM-5:** Selecting “Check In” must navigate to the Check In page.
- **HM-6:** Every page shown to a logged-in user must display a menu icon at the top left.
- **HM-7:** Selecting the menu icon must open the sidebar.
- **HM-8:** The sidebar must contain the options “Home”, “My Workouts”, “Account”, and “Sign Out”.
- **HM-9:** Selecting “Home” must navigate to the Home page.
- **HM-10:** Selecting “My Workouts” must navigate to the personal Workouts page.
- **HM-11:** Selecting “Account” must navigate to the Account page.
- **HM-12:** The Account page must display the logged-in user’s email.
- **HM-13:** Selecting “Sign Out” must log the user out.
- **HM-14:** After signing out, the system must navigate to the Landing page.
- **HM-15:** Selecting anywhere outside the open sidebar must close it, and remain on the home page.
- **HM-16:** When a muscle group is selected in “Filter by”, the Home page must display the “best time of day” and “best day of the week” suggestions for that muscle group (section 12).
- **HM-17:** When “All” or a machine is selected in “Filter by”, the Home page must not display those suggestions.

## 7. Check In

- **CI-1:** The Check In page must display a “Select Workout” dropdown.
- **CI-2:** The “Select Workout” dropdown must list each of the user’s workouts by title.
- **CI-3:** The “Select Workout” dropdown must only list workouts created by the logged-in user.
- **CI-4:** If the user has no workouts, the “Select Workout” dropdown must be empty.
- **CI-5:** Choosing a workout must be optional.
- **CI-6:** The Check In page must display a “Workout Length” slider from 0 to 180 minutes.
- **CI-7:** The slider must move in steps of 5 minutes.
- **CI-8:** The slider must start at 15 minutes.
- **CI-9:** The page must display the selected length in minutes next to the slider.
- **CI-10:** The page must display a “CHECK IN” button.
- **CI-11:** If the workout length is 0 when “CHECK IN” is selected, the system must not check the user in.
- **CI-12:** If the workout length is 0 when “CHECK IN” is selected, the system must display “Workout length must be more than 0 minutes”.
- **CI-13:** If the user is already checked in when “CHECK IN” is selected, the system must not create a second check-in.
- **CI-14:** If the user is already checked in when “CHECK IN” is selected, the system must display “You are already checked in”.
- **CI-15:** After a successful check in, the system must navigate to the Home page.
- **CI-16:** When the selected workout contains an exercise whose machine is busy, the Check In page must display alternative machine suggestions for that exercise (section 13).

## 8. Checked-In State

- **AC-1:** When a user checks in, the system must record the check-in time.
- **AC-2:** When a user checks in, the system must record the selected workout length.
- **AC-3:** When a user checks in with a workout selected, the system must record that workout.
- **AC-4:** When a user checks in, the system must add them to the Rec North attendee list.
- **AC-5:** While a user is checked in, the Home page must display the time since check-in, updating every second.
- **AC-6:** While a user is checked in, the Home page must display a “Check Out” button in place of “Check In”.
- **AC-7:** Selecting “Check Out” must remove the user from the attendee list.
- **AC-8:** Selecting “Check Out” must record the check-out time.
- **AC-9:** If the user has not checked out when the time since check-in reaches the workout length, the system must check them out automatically.
- **AC-10:** The current number of people at Rec North must equal the number of users on the attendee list.

## 9. Workouts

### 9.1 Workouts page

- **WO-1:** The Workouts page must display the heading “Workouts”.
- **WO-2:** The Workouts page must display each of the user’s workouts as a block labelled with its title.
- **WO-3:** The Workouts page must only show workouts created by the logged-in user.
- **WO-4:** The Workouts page must display a “+” button.
- **WO-5:** Selecting “+” must open the workout editor with a new, empty workout.
- **WO-6:** Selecting a workout block must open the workout editor with that workout loaded.

### 9.2 Workout editor

- **WE-1:** The editor must display a text field labelled “Title Workout”.
- **WE-2:** The editor must display an “Add exercise” button.
- **WE-3:** Selecting “Add exercise” must add a new exercise entry to the workout.
- **WE-4:** Each exercise entry must have a text field for the exercise name.
- **WE-5:** Each exercise entry must have a “TAG muscle” dropdown listing the muscle catalogue.
- **WE-6:** Each exercise entry must have a “TAG Machine” dropdown listing the machine catalogue.
- **WE-7:** Each exercise must have exactly one muscle tag.
- **WE-8:** Each exercise may have zero or one machine tag, so bodyweight exercises can have none.
- **WE-9:** Each exercise entry must have a “Current Weight” slider.
- **WE-10:** The “Current Weight” slider must range from 0 to 500 lbs in steps of 5 lbs.
- **WE-11:** The editor must display the selected weight in lbs.
- **WE-12:** The editor must display the selected weight in kg, calculated as lbs x 0.4536 and rounded to one decimal place.
- **WE-13:** The editor must display a “SAVE” button.
- **WE-14:** Workout titles and exercise names must not accept more than 50 characters.
- **WE-15:** If the workout title is empty when “SAVE” is selected, the system must not save the workout.
- **WE-16:** If the workout title is empty when “SAVE” is selected, the system must display “Workout needs a title”.
- **WE-17:** If the workout has no exercises when “SAVE” is selected, the system must not save the workout.
- **WE-18:** If the workout has no exercises when “SAVE” is selected, the system must display “Add at least one exercise”.
- **WE-19:** If any exercise is missing a name or muscle tag when “SAVE” is selected, the system must not save the workout.
- **WE-20:** If any exercise is missing a name or muscle tag when “SAVE” is selected, the system must display a message naming the position of that exercise (e.g. “Exercise 2 is missing a muscle tag”).
- **WE-21:** On a successful save, the system must store the workout under the logged-in user’s account.
- **WE-22:** Saving an existing workout must replace its previous version.
- **WE-23:** After a successful save, the system must navigate to the Workouts page.
- **WE-24:** A saved workout must appear in its creator’s “Select Workout” dropdown on the Check In page.
- **WE-25:** When an existing workout is loaded, the editor must display a “DELETE” button.
- **WE-26:** The editor must not display the “DELETE” button for a new, unsaved workout.
- **WE-27:** Selecting “DELETE” must ask the user to confirm before anything is deleted.
- **WE-28:** If the user cancels the confirmation, the system must not delete the workout and must stay in the editor.
- **WE-29:** If the user confirms, the system must permanently delete the workout from the logged-in user’s account.
- **WE-30:** The system must only allow a user to delete workouts they created.
- **WE-31:** After a successful delete, the system must navigate to the Workouts page, and the deleted workout must no longer appear there.
- **WE-32:** A deleted workout must no longer appear in the “Select Workout” dropdown on the Check In page.
- **WE-33:** Deleting a workout must not change or remove existing check-in records, including a current check-in, and those records must keep the workout’s exercise tags so the popular machines and suggestions stay accurate.

## 10. Input and Accessibility

- **IN-1:** Every text field must accept typing from a physical keyboard.
- **IN-2:** Every text field must accept typing from a phone’s on-screen keyboard.
- **IN-3:** Every button, dropdown, and slider must work with a mouse.
- **IN-4:** Every button, dropdown, and slider must work with touch.
- **IN-5:** Pressing Enter in the Password field on the Log In or Sign Up page must submit the form.
- **IN-6:** No page may need horizontal scrolling on screens 360 px wide or wider.

## 11. Data and Privacy

- **DP-1:** Accounts must still exist after the server restarts.
- **DP-2:** Workouts must still exist after the server restarts.
- **DP-3:** A user who is checked in must still be checked in after reloading or closing the page.
- **DP-4:** Completed check-ins (check-in time, check-out time, workout length, workout) must be stored.
- **DP-5:** Passwords must never be sent from the server to the browser.
- **DP-6:** The graph and any busyness data sent to the browser must not identify which users are checked in.
- **DP-7:** The Landing page pop-up, the timing suggestions, and the alternative machine suggestions must not identify which users are checked in or which users made any check-in.

## 12. Training Time Suggestions

- **TS-1:** For a selected muscle group, the system must suggest a best time of day to train.
- **TS-2:** For a selected muscle group, the system must suggest a best day of the week to train.
- **TS-3:** Time of day must be divided into 1-hour slots covering Rec North’s opening hours.
- **TS-4:** The busyness of a slot on a past day must equal the number of check-ins whose check-in to check-out period overlaps that slot and whose workout has an exercise tagged with that muscle group, mapped to the 1-10 scale using the same mapping as FL-5.
- **TS-5:** Suggestions must be calculated only from completed check-ins stored under DP-4. Users currently checked in must not be counted.
- **TS-6:** The predicted busyness of a slot must equal its average busyness across all past days with data.
- **TS-7:** The best time of day must be the slot with the lowest predicted busyness. Ties must go to the earliest slot.
- **TS-8:** The best time must be displayed as a time range (e.g. “2:00 PM – 3:00 PM”).
- **TS-9:** The busyness of a weekday must equal the average of its slot busyness across Rec North’s opening hours, averaged across all past occurrences of that weekday.
- **TS-10:** The best day must be the weekday with the lowest busyness. Ties must go to the earlier day, with the week ordered Monday to Sunday.
- **TS-11:** If fewer than 14 days of completed check-in history exist, the system must display “Not enough data yet” instead of a suggestion.
- **TS-12:** Suggestions must be recalculated at least once every 24 hours.
- **TS-13:** The suggestion display must name the muscle group it applies to.

## 13. Alternative Machine Suggestions

- **AM-1:** Each machine in the machine catalogue must be mapped to one or more muscle groups from the muscle catalogue, and this mapping must be stored in the database.
- **AM-2:** A machine’s current busyness must be counted the same way as FL-7 and mapped to the 1-10 scale.
- **AM-3:** A machine must be considered “busy” when its current busyness is 7 or higher.
- **AM-4:** On the Check In page, for each exercise in the selected workout that has a busy machine tag, the system must display alternative machine suggestions, labelled with the exercise name.
- **AM-5:** Candidate alternatives must be machines, other than the busy one, associated (AM-1) with that exercise’s muscle tag.
- **AM-6:** A candidate must only be suggested if it is not busy under AM-3.
- **AM-7:** The system must suggest up to 3 candidates, ordered from least to most busy. Ties must be broken alphabetically by machine name.
- **AM-8:** Each suggestion must display the machine name and its current busyness (1-10).
- **AM-9:** If no candidate qualifies, the system must display “No less busy alternatives right now”.
- **AM-10:** If no workout is selected, or an exercise has no machine tag (WE-8), the system must not display suggestions for it.
- **AM-11:** Suggestions must be informational only. They must not change the saved workout and must not prevent check in.
- **AM-12:** Suggestions must update at least once every 60 seconds while the Check In page is open.
- **AM-13:** The alternative machine suggestions must use the stored machine-to-muscle mapping from AM-1 to find machines that train the same muscle group.
- **AM-14:** The machine-to-muscle mapping must still exist after the server restarts.
