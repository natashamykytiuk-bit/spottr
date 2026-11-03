import { Workout } from "../data/types";

/**
 * Renders the Check In page: the “Select Workout” dropdown, the 0-180 minute “Workout Length” slider and the CHECK IN button.
 *
 * Resides on: client only.
 *
 * Communicates with: AttendanceController, WorkoutModel.
 */
export class CheckInView {

	/**
	 * Fills the Select Workout dropdown with workouts from WorkoutModel.
	 *
	 * @param workouts the logged-in user's workouts
	 * @returns nothing
	 * @pre workouts belong to the logged-in user
	 * @post each workout is listed by title (CI-2, CI-3); the list is empty if there are none (CI-4); choosing one is optional (CI-5); the slider runs 0-180 in steps of 5, starts at 15 and shows its value (CI-6 to CI-9)
	 */
	showWorkoutOptions(workouts: Workout[]): void {
		// TODO
	}

	/**
	 * Shows a check-in error from AttendanceController.
	 *
	 * @param message the error to show
	 * @returns nothing
	 * @pre message is not empty
	 * @post the message is shown on the Check In page (CI-12, CI-14)
	 */
	showError(message: string): void {
		// TODO
	}
}
