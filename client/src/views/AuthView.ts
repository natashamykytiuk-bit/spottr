/**
 * Renders the Sign Up and Log In forms, collects the email and password, and shows error messages.
 *
 * Resides on: client only.
 *
 * Communicates with: AuthController.
 */
export class AuthView {

	/**
	 * Draws the Sign Up or Log In form.
	 *
	 * @param mode which form to draw
	 * @returns nothing
	 * @pre none
	 * @post Email and Password fields and a SIGN UP or LOG IN button are shown (SU-1 to SU-3, LI-1 to LI-3); Enter in Password submits (IN-5); there is a way back to the Landing page (SU-16, LI-8)
	 */
	render(mode: "signup" | "login"): void {
		// TODO
	}

	/**
	 * Shows a validation or log-in error from AuthController.
	 *
	 * @param message the error to show
	 * @returns nothing
	 * @pre message is not empty
	 * @post only this one error is shown (SU-11, LI-4, LI-7)
	 */
	showError(message: string): void {
		// TODO
	}
}
