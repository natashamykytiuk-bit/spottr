package ca.gitfit.spottr.data;

import java.time.LocalTime;

/**
 * One point on the busyness graph. Holds no user information (DP-6).
 *
 * @param time time of day
 * @param busyness busyness on the 1-10 scale
 */
public record BusynessPoint(LocalTime time, int busyness) {
}
