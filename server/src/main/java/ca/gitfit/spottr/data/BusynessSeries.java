package ca.gitfit.spottr.data;

import java.time.LocalTime;
import java.util.List;

/**
 * The data behind the busyness graph. Holds no user information (DP-6).
 *
 * @param filterName the name of the selected filter (FL-8)
 * @param recorded recorded busyness bars
 * @param predicted predicted busyness points
 * @param currentTime the current time, for the indicator (BG-4)
 */
public record BusynessSeries(String filterName, List<BusynessPoint> recorded, List<BusynessPoint> predicted, LocalTime currentTime) {
}
