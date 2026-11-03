import { AuthResponse, Route } from "../data/types";

/**
 * AuthController (client half) checks sign-up and log-in input in the browser, sends it to the
 * server, and tells the views when the session changes so they can navigate.
 *
 * Resides on: both. This is the client half. It sends these requests to the server half
 * (server/.../controller/AuthController.java):
 * - `POST /api/auth/signup`: request {email, password}; response AuthResponse
 * - `POST /api/auth/login`: request {email, password}; response AuthResponse
 * - `POST /api/auth/signout`: request {sessionToken}; response empty
 * The password is hashed on the server. No password or hash is ever sent back to the browser (SU-13, DP-5).
 *
 * Communicates with: AuthView, UserModel (via the server half), HomeView, LandingPageView.
 */
export class AuthController {

	/**
	 * Handles a Sign Up form submission from AuthView.
	 *
	 * @param email the entered email
	 * @param password the entered password
	 * @returns the server's response, or a failed response with the first input error
	 * @pre none
	 * @post if validateSignUpInput finds an error, nothing is sent (SU-4 to SU-8); on success the user
	 *       is logged in and the session listeners are told (SU-14), so the app goes to Home (SU-15)
	 */
	async submitSignUp(email: string, password: string): Promise<AuthResponse> {
		// TODO
		return { success: false, errorMessage: null, sessionToken: null, profile: null };
	}

	/**
	 * Checks sign-up input that the browser can check, in this order: empty field, invalid email,
	 * short password.
	 *
	 * @param email the entered email
	 * @param password the entered password
	 * @returns the first error message that applies, or null if the input passes
	 * @pre none
	 * @post "Please fill in all fields" for an empty field (SU-5); an invalid email message (SU-6, SU-7);
	 *       a short password message under 8 characters (SU-8); only the first error (SU-11)
	 */
	validateSignUpInput(email: string, password: string): string | null {
		// TODO
		return null;
	}

	/**
	 * Handles a Log In form submission from AuthView.
	 *
	 * @param email the entered email
	 * @param password the entered password
	 * @returns the server's response, or a failed response if a field is empty
	 * @pre none
	 * @post if a field is empty nothing is sent and "Please fill in all fields" is returned (LI-4);
	 *       on success the user is logged in and the session listeners are told (LI-5), so the app
	 *       goes to Home (LI-6)
	 */
	async submitLogIn(email: string, password: string): Promise<AuthResponse> {
		// TODO
		return { success: false, errorMessage: null, sessionToken: null, profile: null };
	}

	/**
	 * Handles a Sign Out click from HomeView's sidebar.
	 *
	 * @returns nothing
	 * @pre the user is logged in
	 * @post the user is logged out (HM-13) and the session listeners are told, so the app goes to
	 *       the Landing page (HM-14)
	 */
	async signOut(): Promise<void> {
		// TODO
	}

	/**
	 * Handles a click on the Landing page while logged out.
	 *
	 * @param action which control was clicked
	 * @returns the route to go to
	 * @pre the user is logged out
	 * @post "login" goes to Log In (LP-5); "signup", "checkIn" and "filter" go to Sign Up
	 *       (LP-6, LP-11, LP-12)
	 */
	handleLandingAction(action: "login" | "signup" | "checkIn" | "filter"): Route {
		// TODO
		return "landing";
	}

	/**
	 * Registers a view to be told when the user logs in, signs up or signs out.
	 *
	 * @param listener called with true when logged in and false when logged out
	 * @returns nothing
	 * @pre none
	 * @post listener is called on every session change (LP-13, HM-1)
	 */
	onSessionChange(listener: (loggedIn: boolean) => void): void {
		// TODO
	}
}
