import { Workout } from "../data/types";

/**
 * WorkoutModel (client half) keeps a copy of the logged-in user's workouts in the browser.
 *
 * Resides on: both. This is the client half. The server half
 * (server/.../model/WorkoutModel.java) is the source of truth. This copy is filled from
 * WorkoutController's `GET /api/workouts` response (request: session token; response: Workout[]).
 *
 * Communicates with: WorkoutController, AttendanceController, CheckInView.
 */
export class WorkoutModel {

	/**
	 * Stores the workouts received from the server.
	 *
	 * @param workouts the logged-in user's workouts
	 * @returns nothing
	 * @pre workouts came from `GET /api/workouts` for the logged-in user
	 * @post getWorkouts returns these workouts (WO-2, CI-2)
	 */
	setWorkouts(workouts: Workout[]): void {
		// TODO
	}

	/**
	 * Gets the logged-in user's workouts, used to fill the Select Workout dropdown.
	 *
	 * @returns the user's workouts; empty if they have none
	 * @pre the user is logged in
	 * @post only the logged-in user's workouts are returned (CI-2 to CI-4, WE-24); no data is changed
	 */
	getWorkouts(): Workout[] {
		// TODO
		return [];
	}

	/**
	 * Gets one of the logged-in user's workouts by ID.
	 *
	 * @param workoutId the workout to fetch
	 * @returns the workout, or null if the user has no workout with this ID
	 * @pre workoutId is not empty
	 * @post no data is changed (WO-6, AC-3)
	 */
	getWorkoutById(workoutId: string): Workout | null {
		// TODO
		return null;
	}
}
