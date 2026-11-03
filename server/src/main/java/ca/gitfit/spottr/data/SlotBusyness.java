package ca.gitfit.spottr.data;

/**
 * Predicted busyness of one 1-hour slot (TS-3, TS-6).
 *
 * @param startHour the hour the slot starts, 0 to 23
 * @param busyness predicted busyness on the 1-10 scale
 */
public record SlotBusyness(int startHour, int busyness) {
}
