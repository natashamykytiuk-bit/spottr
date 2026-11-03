package ca.gitfit.spottr.model;

import ca.gitfit.spottr.data.BusynessPoint;
import ca.gitfit.spottr.data.Filter;
import ca.gitfit.spottr.data.TrainingSuggestions;

import java.time.Instant;
import java.util.List;

/**
 * StatisticsModel (server half) turns raw attendance data into analytics: the 1-10 busyness
 * score, predicted future busyness, and training time suggestions, by muscle group and machine.
 *
 * <p>Resides on: both. This is the server half, which does all calculations. The client half
 * (client/src/models/StatisticsModel.ts) keeps the latest results the browser received from
 * AnalyticsController's {@code GET /api/busyness} and {@code GET /api/suggestions} responses.
 * Nothing that crosses the network identifies a user (DP-6, DP-7).
 *
 * <p>Communicates with: AttendanceModel, AnalyticsController (server half).
 */
public class StatisticsModel {

	/**
	 * Gets the current busyness for a filter.
	 *
	 * @param filter the "Filter by" selection
	 * @return current busyness on the 1-10 scale
	 * @pre filter is not null; a MUSCLE or MACHINE filter names an item in its catalogue
	 * @post ALL counts every checked-in user (FL-5); MUSCLE counts only users whose workout has an
	 *       exercise tagged with that muscle group (FL-6); MACHINE counts only users whose workout has
	 *       an exercise tagged with that machine (FL-7, AM-2); the count is mapped to 1-10 (BG-1)
	 */
	public int getCurrentBusyness(Filter filter) {
		// TODO
		return 1;
	}

	/**
	 * Gets predicted busyness for the rest of the day, from active users' check-out times and
	 * historical trends.
	 *
	 * @param filter the "Filter by" selection
	 * @param now the current time
	 * @return predicted busyness points after now, each on the 1-10 scale
	 * @pre filter is not null
	 * @post a prediction for time t counts the active users whose check-in time plus workout length
	 *       is later than t (BG-7); the scale and trend come from completed check-ins (BG-6); no
	 *       point identifies a user (DP-6)
	 */
	public List<BusynessPoint> getPredictedBusyness(Filter filter, Instant now) {
		// TODO
		return List.of();
	}

	/**
	 * Gets training time suggestions for a muscle group or machine.
	 *
	 * @param filter the selected muscle group or machine
	 * @return the suggestions, or a result with enoughData false
	 * @pre filter.type() is MUSCLE or MACHINE
	 * @post if fewer than 14 days of completed check-ins exist across all users, enoughData is false
	 *       (TS-11). Otherwise the result has the predicted busyness (1-10) of every 1-hour slot in
	 *       Rec North's opening hours (TS-3, TS-4, TS-6) and of every weekday Monday to Sunday (TS-9),
	 *       the least busy slot with ties going to the earliest slot (TS-7), the least busy day with
	 *       ties going to the earlier day (TS-10), and the filter name (TS-13). Only completed
	 *       check-ins from all users are used, never active ones (TS-5). No user is identified (DP-7).
	 */
	public TrainingSuggestions getTrainingSuggestions(Filter filter) {
		// TODO
		return new TrainingSuggestions(filter.name(), false, List.of(), List.of(), 0, null);
	}

	/**
	 * Recalculates the stored training time suggestions for every filter.
	 *
	 * @pre none
	 * @post suggestions reflect all completed check-ins up to now; this runs at least once every
	 *       24 hours (TS-12)
	 */
	public void recalculateTrainingSuggestions() {
		// TODO
	}
}
