package ca.gitfit.spottr.data;

import java.time.DayOfWeek;
import java.util.List;

/**
 * Training time suggestions for one filter. Holds no user information (DP-7).
 *
 * @param filterName the selected muscle group or machine (TS-13)
 * @param enoughData false if fewer than 14 days of completed check-ins exist (TS-11); the other fields are then empty or null
 * @param slots predicted busyness of every 1-hour slot in opening hours
 * @param days predicted busyness of every weekday, Monday to Sunday
 * @param bestSlotStartHour start hour of the least busy slot (TS-7)
 * @param bestDay the least busy weekday (TS-10)
 */
public record TrainingSuggestions(
		String filterName,
		boolean enoughData,
		List<SlotBusyness> slots,
		List<DayBusyness> days,
		int bestSlotStartHour,
		DayOfWeek bestDay) {
}
