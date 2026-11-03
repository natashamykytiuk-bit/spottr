package ca.gitfit.spottr.model;

import ca.gitfit.spottr.data.CheckIn;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

/**
 * AttendanceModel manages the Rec North attendee list: active check-ins, check-outs, and the
 * history of completed check-ins used for predictions and suggestions.
 *
 * <p>Resides on: server only.
 *
 * <p>Communicates with: AttendanceController (server half), StatisticsModel (server half).
 */
public class AttendanceModel {

	/**
	 * Records a new active check-in.
	 *
	 * @param userId the user checking in
	 * @param workoutId the selected workout, or null if none (CI-5)
	 * @param durationMinutes the selected workout length
	 * @param checkInTime the check-in timestamp
	 * @return the new active check-in
	 * @pre the user is not already checked in; durationMinutes is between 5 and 180
	 * @post the check-in time, workout length and workout are recorded and the user is on the
	 *       attendee list (AC-1 to AC-4); it survives a page reload or close (DP-3)
	 */
	public CheckIn recordCheckIn(String userId, String workoutId, int durationMinutes, Instant checkInTime) {
		// TODO
		return null;
	}

	/**
	 * Finds a user's active check-in, if any.
	 *
	 * @param userId the user to look up
	 * @return the user's active check-in, or empty if they are not checked in
	 * @pre userId is not null
	 * @post no data is changed (CI-13, AC-6, DP-3)
	 */
	public Optional<CheckIn> findActiveCheckIn(String userId) {
		// TODO
		return Optional.empty();
	}

	/**
	 * Checks a user out and records the check-out time.
	 *
	 * @param userId the user checking out
	 * @param checkOutTime the check-out timestamp
	 * @return the completed check-in
	 * @pre the user is checked in
	 * @post the user is removed from the attendee list and the check-out time is recorded
	 *       (AC-7, AC-8); the completed check-in is added to the history (BG-9, DP-4) and is
	 *       visible to predictions by the next graph update (BG-10)
	 */
	public CheckIn checkOut(String userId, Instant checkOutTime) {
		// TODO
		return null;
	}

	/**
	 * Gets every active check-in with its workout details.
	 *
	 * @return all active check-ins; its size is the current number of people at Rec North
	 * @pre none
	 * @post no data is changed (AC-10, FL-5 to FL-7, BG-7)
	 */
	public List<CheckIn> getActiveCheckIns() {
		// TODO
		return List.of();
	}

	/**
	 * Gets historical check-in times and workout durations, used for past traffic trends.
	 *
	 * @param since the earliest check-in time to include
	 * @return completed check-ins that started at or after since
	 * @pre since is not null
	 * @post only completed check-ins are returned, never active ones (BG-6, BG-11); no data is changed
	 */
	public List<CheckIn> getHistoricalCheckIns(Instant since) {
		// TODO
		return List.of();
	}

	/**
	 * Gets every completed check-in from all users, with check-in and check-out times and the
	 * selected workout's muscle and machine tags.
	 *
	 * @return all completed check-ins
	 * @pre none
	 * @post only completed check-ins are returned, never active ones (TS-5, DP-4); tags are kept
	 *       even if the workout was deleted (WE-33); no data is changed
	 */
	public List<CheckIn> getCompletedCheckIns() {
		// TODO
		return List.of();
	}
}
