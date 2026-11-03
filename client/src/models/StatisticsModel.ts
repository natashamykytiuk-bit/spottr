import { BusynessSeries, TrainingSuggestions } from "../data/types";

/**
 * StatisticsModel (client half) keeps the latest busyness and training time suggestion data the
 * browser received.
 *
 * Resides on: both. This is the client half. The server half
 * (server/.../model/StatisticsModel.java) does all calculations. This copy is filled from
 * AnalyticsController's `GET /api/busyness` (response: BusynessSeries) and `GET /api/suggestions`
 * (response: TrainingSuggestions). Neither response identifies a user (DP-6, DP-7).
 *
 * Communicates with: AnalyticsController.
 */
export class StatisticsModel {

	/**
	 * Stores the latest busyness series.
	 *
	 * @param series the series received from the server
	 * @returns nothing
	 * @pre series came from `GET /api/busyness`
	 * @post getLatestSeries returns series (BG-8)
	 */
	setLatestSeries(series: BusynessSeries): void {
		// TODO
	}

	/**
	 * Gets the latest busyness series.
	 *
	 * @returns the latest series, or null if none has been received
	 * @pre none
	 * @post no data is changed
	 */
	getLatestSeries(): BusynessSeries | null {
		// TODO
		return null;
	}

	/**
	 * Stores the latest training time suggestions.
	 *
	 * @param suggestions the suggestions received from the server
	 * @returns nothing
	 * @pre suggestions came from `GET /api/suggestions`
	 * @post getLatestSuggestions returns suggestions (TS-12)
	 */
	setLatestSuggestions(suggestions: TrainingSuggestions): void {
		// TODO
	}

	/**
	 * Gets the latest training time suggestions.
	 *
	 * @returns the latest suggestions, or null if none have been received
	 * @pre none
	 * @post no data is changed
	 */
	getLatestSuggestions(): TrainingSuggestions | null {
		// TODO
		return null;
	}
}
