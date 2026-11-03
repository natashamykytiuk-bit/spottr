package ca.gitfit.spottr.controller;

import ca.gitfit.spottr.data.CheckInStatus;
import ca.gitfit.spottr.data.ValidationResult;

import java.time.Instant;

/**
 * AttendanceController (server half) validates check-ins, sends check-in and check-out commands
 * to AttendanceModel, and checks users out automatically when their workout length runs out.
 *
 * <p>Resides on: both. This is the server half. The client half
 * (client/src/controllers/AttendanceController.ts) sends it these requests:
 * <ul>
 *     <li>{@code POST /api/checkin}: request {workoutId or null, durationMinutes}; response ValidationResult</li>
 *     <li>{@code POST /api/checkout}: request empty; response CheckInStatus</li>
 *     <li>{@code GET /api/checkin/status}: request empty; response CheckInStatus</li>
 * </ul>
 * The user is identified by their session token. Responses only describe the requesting user's own
 * check-in, never anyone else's (DP-6).
 *
 * <p>Communicates with: CheckInView, HomeView (via the client half), AttendanceModel, WorkoutModel.
 */
public class AttendanceController {

	/**
	 * Handles {@code POST /api/checkin}.
	 *
	 * @param userId the logged-in user
	 * @param workoutId the selected workout, or null if none (CI-5)
	 * @param durationMinutes the selected workout length
	 * @return valid, or the error to show on the Check In page
	 * @pre userId belongs to a logged-in user
	 * @post if durationMinutes is 0, no check-in is made and "Workout length must be more than 0
	 *       minutes" is returned (CI-11, CI-12); if the user is already checked in, no second check-in
	 *       is made and "You are already checked in" is returned (CI-13, CI-14); if workoutId is not
	 *       null it must belong to userId (CI-3); otherwise the check-in is recorded (AC-1 to AC-4)
	 */
	public ValidationResult checkIn(String userId, String workoutId, int durationMinutes) {
		// TODO
		return new ValidationResult(true, null);
	}

	/**
	 * Checks that a workout exists and belongs to the user.
	 *
	 * @param userId the logged-in user
	 * @param workoutId the workout to check
	 * @return true if the workout exists and was created by userId
	 * @pre userId and workoutId are not null
	 * @post no data is changed (CI-3)
	 */
	public boolean isOwnedWorkout(String userId, String workoutId) {
		// TODO
		return false;
	}

	/**
	 * Handles {@code POST /api/checkout}.
	 *
	 * @param userId the logged-in user
	 * @return the user's status after checking out
	 * @pre the user is checked in
	 * @post the user is removed from the attendee list and the check-out time is recorded (AC-7, AC-8)
	 */
	public CheckInStatus checkOut(String userId) {
		// TODO
		return new CheckInStatus(false, null, 0);
	}

	/**
	 * Handles {@code GET /api/checkin/status}.
	 *
	 * @param userId the logged-in user
	 * @return whether the user is checked in, and when and for how long
	 * @pre userId belongs to a logged-in user
	 * @post no data is changed; the status is the same after a page reload or close (AC-5, AC-6, DP-3)
	 */
	public CheckInStatus getStatus(String userId) {
		// TODO
		return new CheckInStatus(false, null, 0);
	}

	/**
	 * Checks out every user whose time since check-in has reached their workout length.
	 *
	 * @param now the current time
	 * @pre now is not null
	 * @post every active check-in with checkInTime + durationMinutes at or before now is checked out
	 *       (AC-9) and added to the history (BG-9)
	 */
	public void autoCheckOutExpired(Instant now) {
		// TODO
	}
}
