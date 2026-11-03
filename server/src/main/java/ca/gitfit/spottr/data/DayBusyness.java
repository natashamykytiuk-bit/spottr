package ca.gitfit.spottr.data;

import java.time.DayOfWeek;

/**
 * Predicted busyness of one weekday (TS-9).
 *
 * @param day the weekday
 * @param busyness predicted busyness on the 1-10 scale
 */
public record DayBusyness(DayOfWeek day, int busyness) {
}
