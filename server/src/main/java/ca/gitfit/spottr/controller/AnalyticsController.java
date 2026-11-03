package ca.gitfit.spottr.controller;

import ca.gitfit.spottr.data.BusynessSeries;
import ca.gitfit.spottr.data.Filter;
import ca.gitfit.spottr.data.TrainingSuggestions;

/**
 * AnalyticsController (server half) answers the browser's requests for busyness and training time
 * suggestion data by asking StatisticsModel.
 *
 * <p>Resides on: both. This is the server half. The client half
 * (client/src/controllers/AnalyticsController.ts) polls it at least every 60 seconds:
 * <ul>
 *     <li>{@code GET /api/busyness?filterType=&filterName=}: response BusynessSeries</li>
 *     <li>{@code GET /api/suggestions?filterType=&filterName=}: response TrainingSuggestions</li>
 * </ul>
 * These endpoints do not need a logged-in user, because the Landing page shows the graph. Responses
 * hold only counts mapped to 1-10, never user IDs, emails or individual check-ins (DP-6, DP-7).
 *
 * <p>Communicates with: LandingPageView, BusynessGraphView (via the client half), StatisticsModel.
 */
public class AnalyticsController {

	/**
	 * Handles {@code GET /api/busyness}.
	 *
	 * @param filter the "Filter by" selection
	 * @return recorded and predicted busyness, the filter name and the current time
	 * @pre filter is not null
	 * @post busyness is on the 1-10 scale (BG-1) and counted for the filter (FL-5 to FL-7); the filter
	 *       name is included (FL-8); completed check-ins are included by the next update (BG-10);
	 *       no user is identified (DP-6)
	 */
	public BusynessSeries getBusynessSeries(Filter filter) {
		// TODO
		return new BusynessSeries(filter.name(), java.util.List.of(), java.util.List.of(), null);
	}

	/**
	 * Handles {@code GET /api/suggestions}.
	 *
	 * @param filter the selected muscle group or machine
	 * @return the training time suggestions from StatisticsModel
	 * @pre filter.type() is MUSCLE or MACHINE
	 * @post the result is StatisticsModel's suggestions for this filter (TS-1 to TS-13), including
	 *       enoughData false when there are under 14 days of history (TS-11); no user is identified (DP-7)
	 */
	public TrainingSuggestions getTrainingSuggestions(Filter filter) {
		// TODO
		return new TrainingSuggestions(filter.name(), false, java.util.List.of(), java.util.List.of(), 0, null);
	}
}
