import { GraphData, SuggestionPlots } from "../data/types";

/**
 * Renders the 1-10 busyness graph with recorded bars, the predicted line, the current time indicator and the “Filter by” dropdown, plus the training time suggestion plots below it.
 *
 * Resides on: client only.
 *
 * Communicates with: AnalyticsController.
 */
export class BusynessGraphView {

	/**
	 * Receives formatted graph data from AnalyticsController.
	 *
	 * @param data the formatted graph data
	 * @returns nothing
	 * @pre data came from AnalyticsController.formatGraphData
	 * @post time of day is on the x axis and 1-10 on the y axis (BG-1 to BG-3), the current time is marked (BG-4), the predicted line is a different colour from the bars (BG-5), and the filter name is shown (FL-8)
	 */
	renderGraph(data: GraphData): void {
		// TODO
	}

	/**
	 * Receives the two suggestion plots from AnalyticsController.
	 *
	 * @param plots the time-of-day and day-of-week plots
	 * @returns nothing
	 * @pre plots came from AnalyticsController.formatSuggestionPlots
	 * @post each plot is shown with a star on its least busy bar (TS-7, TS-10) and the filter name (TS-13), or “Not enough data yet” when enoughData is false (TS-11)
	 */
	showSuggestionPlots(plots: SuggestionPlots): void {
		// TODO
	}

	/**
	 * Hides the suggestion plots when AnalyticsController says so.
	 *
	 * @returns nothing
	 * @pre none
	 * @post no suggestion plots are shown (HM-17)
	 */
	hideSuggestions(): void {
		// TODO
	}
}
