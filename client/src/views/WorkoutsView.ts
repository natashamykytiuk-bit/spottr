import { Workout } from "../data/types";

/**
 * Renders the Workouts page: the “Workouts” heading, one block per workout, and the “+” button.
 *
 * Resides on: client only.
 *
 * Communicates with: WorkoutController.
 */
export class WorkoutsView {

	/**
	 * Receives the user's saved workouts from WorkoutController.
	 *
	 * @param workouts the logged-in user's workouts
	 * @returns nothing
	 * @pre workouts belong to the logged-in user
	 * @post the heading, one block per workout labelled with its title, and the “+” button are shown (WO-1 to WO-4)
	 */
	showWorkouts(workouts: Workout[]): void {
		// TODO
	}
}
