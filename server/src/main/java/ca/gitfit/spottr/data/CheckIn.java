package ca.gitfit.spottr.data;

import java.time.Instant;
import java.util.List;

/**
 * One check-in at Rec North, active or completed (DP-4).
 *
 * @param checkInId unique check-in identifier
 * @param userId the user who checked in; never sent to the browser (DP-6, DP-7)
 * @param workoutId the selected workout, or null if none was chosen (CI-5)
 * @param exercises copy of the workout's exercise tags at check-in time, kept even if the workout is deleted (WE-33)
 * @param checkInTime when the user checked in (AC-1)
 * @param durationMinutes the selected workout length (AC-2)
 * @param checkOutTime when the user checked out, or null while still checked in
 */
public record CheckIn(
		String checkInId,
		String userId,
		String workoutId,
		List<Exercise> exercises,
		Instant checkInTime,
		int durationMinutes,
		Instant checkOutTime) {
}
