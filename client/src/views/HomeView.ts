import { CheckInStatus, Route, SuggestionPlots } from "../data/types";

/**
 * Renders the logged-in Home page: menu icon and sidebar, the busyness graph, the Check In / Check Out button, the workout timer and the training time suggestions.
 *
 * Resides on: client only.
 *
 * Communicates with: AttendanceController, AuthController, BusynessGraphView.
 */
export class HomeView {

	/**
	 * Receives the user's check-in status from AttendanceController.
	 *
	 * @param status the user's current status
	 * @returns nothing
	 * @pre the user is logged in
	 * @post shows Check Out while checked in and Check In otherwise (AC-6, HM-4)
	 */
	updateCheckInStatus(status: CheckInStatus): void {
		// TODO
	}

	/**
	 * Receives the time since check-in from AttendanceController.
	 *
	 * @param elapsedSeconds whole seconds since check-in
	 * @returns nothing
	 * @pre the user is checked in
	 * @post the timer shows the new value; called every second (AC-5)
	 */
	updateElapsedTime(elapsedSeconds: number): void {
		// TODO
	}

	/**
	 * Receives a session change from AuthController.
	 *
	 * @param loggedIn whether the user is now logged in
	 * @returns the route to go to
	 * @pre none
	 * @post a logged-out user is sent to the Landing page (HM-1, HM-14)
	 */
	onSessionChanged(loggedIn: boolean): Route {
		// TODO
		return "home";
	}

	/**
	 * Receives training time suggestion plots from AnalyticsController.
	 *
	 * @param plots the plots to show, or null to hide them
	 * @returns nothing
	 * @pre none
	 * @post plots for a muscle group are shown with its name (HM-16, TS-13); null hides them (HM-17)
	 */
	showSuggestions(plots: SuggestionPlots | null): void {
		// TODO
	}
}
