package ca.gitfit.spottr.data;

import java.time.Instant;

/**
 * A user's own check-in state, as sent to their browser.
 *
 * @param checkedIn whether the user is currently checked in
 * @param checkInTime when they checked in, or null if not checked in
 * @param durationMinutes the selected workout length, or 0 if not checked in
 */
public record CheckInStatus(boolean checkedIn, Instant checkInTime, int durationMinutes) {
}
