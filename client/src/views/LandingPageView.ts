import { Route } from "../data/types";

/**
 * Renders the logged-out Landing page: top bar with “Spottr”, Login and Sign Up, the “Get ready to work in...” text, the busyness graph with its “Filter by” dropdown, and the Check In button.
 *
 * Resides on: client only.
 *
 * Communicates with: AuthController, AnalyticsController, BusynessGraphView.
 */
export class LandingPageView {

	/**
	 * Draws the Landing page.
	 *
	 * @returns nothing
	 * @pre the user is logged out
	 * @post the top bar, text, graph, “Filter by” dropdown and Check In button are shown (LP-2 to LP-4, LP-7 to LP-10)
	 */
	render(): void {
		// TODO
	}

	/**
	 * Receives a session change from AuthController.
	 *
	 * @param loggedIn whether the user is now logged in
	 * @returns the route to go to
	 * @pre none
	 * @post a logged-in user is sent to Home (LP-13); otherwise stays on the Landing page (LP-1)
	 */
	onSessionChanged(loggedIn: boolean): Route {
		// TODO
		return "landing";
	}
}
