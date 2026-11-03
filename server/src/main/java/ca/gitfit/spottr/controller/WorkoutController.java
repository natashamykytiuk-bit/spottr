package ca.gitfit.spottr.controller;

import ca.gitfit.spottr.data.ValidationResult;
import ca.gitfit.spottr.data.Workout;

import java.util.List;

/**
 * WorkoutController (server half) validates workouts and asks WorkoutModel to save and fetch them.
 *
 * <p>Resides on: both. This is the server half. The client half
 * (client/src/controllers/WorkoutController.ts) sends it these requests:
 * <ul>
 *     <li>{@code GET /api/workouts}: request empty; response Workout[] for the logged-in user</li>
 *     <li>{@code PUT /api/workouts}: request Workout; response ValidationResult</li>
 * </ul>
 * The user is identified by their session token.
 *
 * <p>Communicates with: WorkoutEditorView, WorkoutsView (via the client half), WorkoutModel.
 */
public class WorkoutController {

	/**
	 * Checks a workout against the workout rules.
	 *
	 * @param workout the workout to check
	 * @return valid, or the first error that applies
	 * @pre workout is not null
	 * @post titles and exercise names over 50 characters are rejected (WE-14); an empty title gives
	 *       "Workout needs a title" (WE-15, WE-16); no exercises gives "Add at least one exercise"
	 *       (WE-17, WE-18); an exercise missing a name or muscle tag gives a message naming its
	 *       position (WE-19, WE-20); no data is changed
	 */
	public ValidationResult validateWorkout(Workout workout) {
		// TODO
		return new ValidationResult(true, null);
	}

	/**
	 * Handles {@code PUT /api/workouts}.
	 *
	 * @param userId the logged-in user
	 * @param workout the new or edited workout
	 * @return valid, or the first error that applies
	 * @pre userId belongs to a logged-in user
	 * @post if validateWorkout fails nothing is saved; otherwise the workout is stored under userId
	 *       (WE-21), replacing any previous version (WE-22), and appears in the user's Select Workout
	 *       dropdown (WE-24)
	 */
	public ValidationResult saveWorkout(String userId, Workout workout) {
		// TODO
		return new ValidationResult(true, null);
	}

	/**
	 * Handles {@code GET /api/workouts}.
	 *
	 * @param userId the logged-in user
	 * @return the user's workouts
	 * @pre userId belongs to a logged-in user
	 * @post only workouts created by userId are returned (WO-2, WO-3, CI-2, CI-3); no data is changed
	 */
	public List<Workout> getWorkouts(String userId) {
		// TODO
		return List.of();
	}
}
