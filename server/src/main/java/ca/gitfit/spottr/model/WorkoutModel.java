package ca.gitfit.spottr.model;

import ca.gitfit.spottr.data.Workout;

import java.util.List;
import java.util.Optional;

/**
 * WorkoutModel (server half) stores user-created workouts, with their exercises, muscle tags,
 * machine tags and weights.
 *
 * <p>Resides on: both. This is the server half and the source of truth. The client half
 * (client/src/models/WorkoutModel.ts) keeps a copy of the logged-in user's workouts, filled from
 * WorkoutController's {@code GET /api/workouts} response (request: session token; response: Workout[]).
 *
 * <p>Communicates with: WorkoutController, AttendanceController.
 */
public class WorkoutModel {

	/**
	 * Gets all workouts created by a user.
	 *
	 * @param userId the creator's userId
	 * @return the user's workouts; empty if they have none
	 * @pre userId belongs to an existing account
	 * @post only workouts created by userId are returned (WO-3, CI-3); no data is changed
	 */
	public List<Workout> getWorkoutsForUser(String userId) {
		// TODO
		return List.of();
	}

	/**
	 * Saves a new workout or replaces an existing one.
	 *
	 * @param userId the creator's userId
	 * @param workout the workout to save; a null workoutId means a new workout
	 * @return the saved workout, with its workoutId set
	 * @pre workout has passed WorkoutController validation (WE-14 to WE-20);
	 *      if workout.workoutId() is not null, that workout belongs to userId
	 * @post the workout is stored under userId (WE-21); an existing workout's previous version is
	 *       replaced (WE-22); it still exists after a server restart (DP-2)
	 */
	public Workout saveWorkout(String userId, Workout workout) {
		// TODO
		return workout;
	}

	/**
	 * Gets one workout by its ID, used when a user checks in with a selected workout.
	 *
	 * @param workoutId the workout to fetch
	 * @return the workout, or empty if it does not exist
	 * @pre workoutId is not null
	 * @post no data is changed (AC-3)
	 */
	public Optional<Workout> getWorkoutById(String workoutId) {
		// TODO
		return Optional.empty();
	}
}
