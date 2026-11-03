# Architecture

Outline: The following contains descriptions of the 15 distinct components of our website architecture. Components are separated by type (model, controller, or view).

## Code stub locations

The server is written in Java and the client in TypeScript. Components that reside on both the client and the server have a stub on each side. Every stub's doc comment states its responsibility, where it resides, what it communicates with, and what crosses the network.

- **Server stubs (Java):** [`server/src/main/java/ca/gitfit/spottr/`](server/src/main/java/ca/gitfit/spottr/)
	- `model/`: UserModel, WorkoutModel, AttendanceModel, StatisticsModel
	- `controller/`: AuthController, AttendanceController, WorkoutController, AnalyticsController
	- `data/`: shared data types (User, Workout, Exercise, CheckIn, TrainingSuggestions, etc.)
- **Client stubs (TypeScript):** [`client/src/`](client/src/)
	- `models/`: WorkoutModel, StatisticsModel
	- `controllers/`: AuthController, AttendanceController, WorkoutController, AnalyticsController
	- `views/`: LandingPageView, AuthView, HomeView, BusynessGraphView, CheckInView, WorkoutsView, WorkoutEditorView
	- `data/types.ts`: shared data types

| Component | Server stub | Client stub |
| --- | --- | --- |
| UserModel | `model/UserModel.java` | — |
| WorkoutModel | `model/WorkoutModel.java` | `models/WorkoutModel.ts` |
| AttendanceModel | `model/AttendanceModel.java` | — |
| StatisticsModel | `model/StatisticsModel.java` | `models/StatisticsModel.ts` |
| AuthController | `controller/AuthController.java` | `controllers/AuthController.ts` |
| AttendanceController | `controller/AttendanceController.java` | `controllers/AttendanceController.ts` |
| WorkoutController | `controller/WorkoutController.java` | `controllers/WorkoutController.ts` |
| AnalyticsController | `controller/AnalyticsController.java` | `controllers/AnalyticsController.ts` |
| LandingPageView | — | `views/LandingPageView.ts` |
| AuthView | — | `views/AuthView.ts` |
| HomeView | — | `views/HomeView.ts` |
| BusynessGraphView | — | `views/BusynessGraphView.ts` |
| CheckInView | — | `views/CheckInView.ts` |
| WorkoutsView | — | `views/WorkoutsView.ts` |
| WorkoutEditorView | — | `views/WorkoutEditorView.ts` |

## Models

### UserModel

Server-side model which handles signups, login validation, and session tokens.

**Communicates with:** AuthController

- AuthController queries UserModel to check whether an email is already registered.
- AuthController requests UserModel to store a new user account with a hashed password and unique user identifier.
- AuthController passes email and password hash to UserModel to verify authentication credentials and retrieve user profile details.

### WorkoutModel

Server/client-side model which stores workouts, exercises, and muscle tags for user-created workouts.

**Communicates with:** WorkoutController, AttendanceController

- WorkoutController queries WorkoutModel for all workouts associated with a specific user ID.
- WorkoutController sends a new or updated workout object (title, exercises, muscle tags, machine tags, weights) to WorkoutModel.
- AttendanceController queries WorkoutModel to fetch a workout by ID when a user checks in with a selected workout.

### AttendanceModel

Server-side model which manages the gym attendee list. This includes tracking check-ins and check-outs, historical workout duration, and active session timers.

**Communicates with:** AttendanceController, StatisticsModel (Analytics)

- AttendanceController sends check-in details (user ID, workout ID, duration minutes, check-in timestamp) to AttendanceModel to record an active attendee.
- AttendanceController queries AttendanceModel to check if a specific user is currently active or checked in.
- AttendanceController requests AttendanceModel to check out a user and record the check-out timestamp.
- StatisticsModel requests the list of all currently active attendees and their associated workout details from AttendanceModel.
- StatisticsModel requests historical check-in and workout duration data from AttendanceModel to calculate past traffic trends.
- StatisticsModel requests all completed check-ins (check-in/check-out time, and selected workout’s muscle+machine tags) from AttendanceModel to calculate training time suggestions.

### StatisticsModel

Server/client-side model which handles converting raw attendance data into relevant analytics. Calculates a busyness score from 1-10, computes next-hour attendance and future attendance, catalogues busyness by muscle group and machine.

**Communicates with:** AttendanceModel, AnalyticsController

- StatisticsModel pulls active attendee data and historical duration logs from AttendanceModel.
- AnalyticsController asks StatisticsModel for the current busyness score (scale 1–10) filtered by a selected category (All, specific muscle group, or machine).
- AnalyticsController asks StatisticsModel for future predicted busyness intervals based on active user checkout horizons and historical trends.
- AnalyticsController asks StatisticsModel for training time suggestions for a selected muscle group or machine. StatisticsModel returns:
  - The predicted busyness score (1-10) of every 1-hour slot in Rec North’s opening hours.
  - The predicted busyness score (1-10) of every weekday, Monday to Sunday.
  - Which slot and weekday are least busy.
  - The filter name (selected muscle group/machine).
  - If the database holds fewer than 14 days of completed check-ins from all users, StatisticsModel returns “not enough data” instead.
- StatisticsModel calculates training time suggestions only from completed check-ins, never from active ones, and recalculates them at least once every 24 hours.

## Controllers

### AuthController

Resides on both client and server. Coordinates login/signup input validation and authentication requests between views and UserModel.

**Communicates with:** AuthView, UserModel, HomeView, LandingPageView

- Receives sign-up and log-in form submission events from AuthView.
- Sends validation errors (e.g., invalid email syntax, short password, credential mismatch) back to AuthView for rendering.
- Sends credential validation and account creation queries to UserModel.
- Notifies LandingPageView or HomeView of session state changes (successful login, sign up, or sign out) to trigger page navigation.

### AttendanceController

Resides on both client and server. Handles check-in validation, auto-checkout timeouts, and real-time workout duration trackers.

**Communicates with:** CheckInView, HomeView, AttendanceModel, WorkoutModel

- Receives check-in requests (selected workout, target duration) from CheckInView.
- Queries WorkoutModel to validate that the chosen workout exists and belongs to the user.
- Sends check-in and checkout commands to AttendanceModel.
- Sends validation feedback (e.g., duration must be >0, user already checked in) to CheckInView.
- Provides active elapsed workout time and active check-in status to HomeView.
- Automatically sends a checkout trigger to AttendanceModel when an attendee’s duration threshold expires.

### WorkoutController

Client/server side controller. Validates exercise constraints, handles unit conversions, and coordinates saving and accessing workouts.

**Communicates with:** WorkoutEditorView, WorkoutsView, WorkoutModel

- Receives workout creation and edit submissions from WorkoutEditorView.
- Validates workout rules (non-empty title, max 50 characters, at least one exercise, required muscle tag) and sends validation errors to WorkoutEditorView.
- Performs unit conversion (lbs to kgs) and sends the converted values to WorkoutEditorView.
- Sends validated workout payloads to WorkoutModel to save or replace.
- Fetches user workouts from WorkoutModel and passes them to WorkoutsView to populate the workout blocks list.

### AnalyticsController

Resides on both client and server. Receives filter dropdown events, polls or requests aggregated busyness data every 60 seconds, and passes plotted data to the graph view.

**Communicates with:** LandingPageView, BusynessGraphView, StatisticsModel

- Receives filter selection events (All, muscle group, machine) from LandingPageView and BusynessGraphView.
- Polls or queries StatisticsModel every 60 seconds for updated current busyness levels and predictive line points.
- Formats and delivers plotting data (labels, historical bars, predicted curves, current time indicator) to BusynessGraphView.
- Requests the training time suggestions from StatisticsModel based on the “Filter by” selection (muscle group or machine). Formats them into two plots (busyness by time of day and busyness by time of week) and marks the least busy slot and day and sends them to HomeView. When “All” is selected, tells BusynessGraphView to hide the suggestions.

## Views

*Note: All views are strictly client-side*

### LandingPageView

Renders top bar, busyness graph, filter dropdown, and redirects to Sign Up/Log In.

**Communicates with:** AuthController, AnalyticsController, BusynessGraphView

- Notifies AuthController when the user clicks “Login”, “Sign Up”, or attempts protected actions while logged out.
- Embeds BusynessGraphView and forwards dropdown filter selections to AnalyticsController.

### AuthView

Renders Sign-Up and Log-In forms, collects credentials, and shows error messages.

**Communicates with:** AuthController

- Sends user input values (email, password) and form submission events to AuthController.
- Receives and displays validation messages or error alerts from AuthController.

### HomeView

Displays navigation sidebar, dynamic check-in/check-out button, active workout timer, and embeds the busyness graph.

**Communicates with:** AttendanceController, AuthController, BusynessGraphView

- Receives active session timer updates and check-in status from AttendanceController to toggle between “Check In” and “Check Out” states.
- Sends manual “Check Out” button click events to AttendanceController.
- Sends “Sign Out” click events from the sidebar menu to AuthController.
- Embeds BusynessGraphView to display current facility traffic.

### BusynessGraphView

Renders the 1–10 scale line/bar chart, filter selector (All / Muscle / Machine), and current time indicator. Displays future busyness extrapolation.

**Communicates with:** AnalyticsController

- Receives formatted data arrays (time intervals, recorded bars, predicted curves, and current filter name) from AnalyticsController to plot the 1–10 graph.
- Sends user dropdown interactions (switching between All, muscle group, or machine) to AnalyticsController.
- Receives the two suggestion plots and the filter name from AnalyticsController and displays them below the busyness graph, each with a star indicating the least busy bar. Displays “Not enough data yet” when StatisticsModel reports insufficient history, and hides plots when “All” is selected.

### CheckInView

Renders the workout selection dropdown, 0–180 min duration slider, and submission button.

**Communicates with:** AttendanceController, WorkoutModel

- Requests the user’s saved workout list from WorkoutModel to populate the “Select Workout” dropdown.
- Sends selected workout ID, duration slider value, and submission events to AttendanceController.
- Receives and displays check-in error messages (e.g., duration = 0, already checked in) from AttendanceController.

### WorkoutsView

Renders the Workouts page, the user’s workout blocks, and the “+” button.

**Communicates with:** WorkoutController

- WorkoutsView sends “Open Editor”, “Add New Workout”, and workout selection events to WorkoutController.
- WorkoutsView receives the user’s list of saved workouts from WorkoutController to render.

### WorkoutEditorView

Renders the workout creation/editing interface, exercise builder rows, muscle/machine dropdown tags, and weight sliders.

**Communicates with:** WorkoutController

- WorkoutEditorView sends dynamic inputs (title, exercise entries, muscle tags, machine tags, slider weight) to WorkoutController.
- WorkoutEditorView receives validation errors and unit-converted weight values (lbs/kg) from WorkoutController.
