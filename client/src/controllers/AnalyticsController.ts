import { BusynessSeries, Filter, GraphData, SuggestionPlots, TrainingSuggestions } from "../data/types";

/**
 * AnalyticsController (client half) handles "Filter by" changes, polls the server for busyness and
 * suggestion data, and formats it for BusynessGraphView and HomeView.
 *
 * Resides on: both. This is the client half. It polls the server half
 * (server/.../controller/AnalyticsController.java) at least every 60 seconds:
 * - `GET /api/busyness?filterType=&filterName=`: response BusynessSeries
 * - `GET /api/suggestions?filterType=&filterName=`: response TrainingSuggestions
 * Neither response identifies a user (DP-6, DP-7).
 *
 * Communicates with: LandingPageView, BusynessGraphView, StatisticsModel.
 */
export class AnalyticsController {

	/**
	 * Handles a "Filter by" change from LandingPageView or BusynessGraphView.
	 *
	 * @param filter the new selection
	 * @returns nothing
	 * @pre filter is "All", a muscle group from the catalogue, or a machine from the catalogue
	 * @post the graph is refreshed for the new filter (FL-5 to FL-8); suggestions are fetched and
	 *       shown for a muscle group (HM-16) and hidden for "All" or a machine (HM-17)
	 */
	selectFilter(filter: Filter): void {
		// TODO
	}

	/**
	 * Starts polling the server for busyness and suggestion data.
	 *
	 * @returns nothing
	 * @pre none
	 * @post the graph is updated at least once every 60 seconds (BG-8) and suggestions are refreshed
	 *       at least once every 24 hours (TS-12)
	 */
	startPolling(): void {
		// TODO
	}

	/**
	 * Formats a busyness series for BusynessGraphView.
	 *
	 * @param series the series from the server
	 * @returns time labels, recorded bars, predicted line, current time index and filter name
	 * @pre series came from `GET /api/busyness`
	 * @post the x axis is time of day (BG-2), values are 1-10 (BG-3), the current time is marked (BG-4)
	 *       and the filter name is included (FL-8)
	 */
	formatGraphData(series: BusynessSeries): GraphData {
		// TODO
		return { filterName: series.filterName, labels: [], recordedBars: [], predictedLine: [], currentTimeIndex: 0 };
	}

	/**
	 * Formats training time suggestions into two plots for BusynessGraphView and HomeView.
	 *
	 * @param suggestions the suggestions from the server
	 * @returns a time-of-day plot and a day-of-week plot, with the least busy bar of each starred
	 * @pre suggestions came from `GET /api/suggestions`
	 * @post when enoughData is false the plots are empty so "Not enough data yet" is shown (TS-11);
	 *       otherwise the least busy slot (TS-7) and day (TS-10) are starred, slot labels are time
	 *       ranges like "2:00 PM – 3:00 PM" (TS-8), and the filter name is included (TS-13)
	 */
	formatSuggestionPlots(suggestions: TrainingSuggestions): SuggestionPlots {
		// TODO
		return { filterName: suggestions.filterName, enoughData: false, timeOfDay: [], dayOfWeek: [] };
	}

	/**
	 * Decides whether training time suggestions are shown for a filter.
	 *
	 * @param filter the current selection
	 * @returns true only for a muscle group
	 * @pre none
	 * @post shown for a muscle group (HM-16); hidden for "All" or a machine (HM-17)
	 */
	shouldShowSuggestions(filter: Filter): boolean {
		// TODO
		return false;
	}
}
