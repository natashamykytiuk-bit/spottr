import { Workout } from "../data/types";

/**
 * WorkoutController (client half) checks workout input, converts weights, and loads and saves
 * workouts for WorkoutsView and WorkoutEditorView.
 *
 * Resides on: both. This is the client half. It sends these requests to the server half
 * (server/.../controller/WorkoutController.java), which identifies the user by session token:
 * - `GET /api/workouts`: request empty; response Workout[]
 * - `PUT /api/workouts`: request Workout; response ValidationResult
 *
 * Communicates with: WorkoutEditorView, WorkoutsView, WorkoutModel.
 */
export class WorkoutController {

	/**
	 * Handles a SAVE click from WorkoutEditorView.
	 *
	 * @param workout the workout in the editor
	 * @returns the error to show, or null on success
	 * @pre the user is logged in
	 * @post if validateWorkout finds an error nothing is sent (WE-15 to WE-20); on success the workout
	 *       is stored under the user (WE-21, WE-22), WorkoutModel is refreshed (WE-24) and the app goes
	 *       to the Workouts page (WE-23)
	 */
	async submitWorkout(workout: Workout): Promise<string | null> {
		// TODO
		return null;
	}

	/**
	 * Checks a workout against the workout rules.
	 *
	 * @param workout the workout to check
	 * @returns the first error message that applies, or null if valid
	 * @pre none
	 * @post titles and names are at most 50 characters (WE-14); "Workout needs a title" (WE-16);
	 *       "Add at least one exercise" (WE-18); a message naming the position of an exercise missing
	 *       a name or muscle tag (WE-20)
	 */
	validateWorkout(workout: Workout): string | null {
		// TODO
		return null;
	}

	/**
	 * Converts a weight in pounds to kilograms for WorkoutEditorView.
	 *
	 * @param lbs the weight in pounds
	 * @returns lbs x 0.4536, rounded to one decimal place
	 * @pre lbs is between 0 and 500 in steps of 5 (WE-10)
	 * @post the result is shown next to the weight in lbs (WE-11, WE-12)
	 */
	convertLbsToKg(lbs: number): number {
		// TODO
		return 0;
	}

	/**
	 * Loads the logged-in user's workouts for WorkoutsView.
	 *
	 * @returns the user's workouts
	 * @pre the user is logged in
	 * @post WorkoutModel holds the same workouts; only the user's own workouts are returned (WO-2, WO-3)
	 */
	async loadWorkouts(): Promise<Workout[]> {
		// TODO
		return [];
	}

	/**
	 * Handles "+" or a workout block click from WorkoutsView.
	 *
	 * @param workoutId the clicked workout, or null for "+"
	 * @returns the workout to open in the editor
	 * @pre workoutId is null or one of the user's workouts
	 * @post null gives a new, empty workout (WO-5); otherwise that workout is loaded (WO-6)
	 */
	openEditor(workoutId: string | null): Workout {
		// TODO
		return { workoutId: null, title: "", exercises: [] };
	}
}
