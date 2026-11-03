package ca.gitfit.spottr.controller;

import ca.gitfit.spottr.data.AuthResponse;
import ca.gitfit.spottr.data.ValidationResult;

/**
 * AuthController (server half) validates sign-up and log-in requests, hashes passwords, and asks
 * UserModel to create accounts and check credentials.
 *
 * <p>Resides on: both. This is the server half. The client half (client/src/controllers/AuthController.ts)
 * sends it these requests:
 * <ul>
 *     <li>{@code POST /api/auth/signup}: request {email, password}; response AuthResponse</li>
 *     <li>{@code POST /api/auth/login}: request {email, password}; response AuthResponse</li>
 *     <li>{@code POST /api/auth/signout}: request {sessionToken}; response empty</li>
 * </ul>
 * The raw password crosses the network only from browser to server (over HTTPS). No password or
 * hash is ever sent back to the browser (SU-13, DP-5).
 *
 * <p>Communicates with: AuthView, UserModel, HomeView, LandingPageView (views via the client half).
 */
public class AuthController {

	/**
	 * Handles {@code POST /api/auth/signup}.
	 *
	 * @param email the entered email
	 * @param password the entered raw password
	 * @return success with a session token and profile, or the first error that applies
	 * @pre email and password are not null
	 * @post if validateSignUp fails, no account is created and its message is returned (SU-4 to SU-11);
	 *       otherwise the password is hashed, an account is created and the user is logged in
	 *       (SU-12 to SU-14); the response holds no password or hash (DP-5)
	 */
	public AuthResponse signUp(String email, String password) {
		// TODO
		return new AuthResponse(false, null, null, null);
	}

	/**
	 * Checks sign-up input in this order: empty field, invalid email, short password, email already used.
	 *
	 * @param email the entered email
	 * @param password the entered raw password
	 * @return valid, or the first error that applies
	 * @pre email and password are not null
	 * @post the error is "Please fill in all fields" (SU-5), an invalid email message (SU-6, SU-7),
	 *       a short password message (SU-8), or "An account with this email already exists"
	 *       (SU-9, SU-10); only the first applicable error is returned (SU-11); no data is changed
	 */
	public ValidationResult validateSignUp(String email, String password) {
		// TODO
		return new ValidationResult(true, null);
	}

	/**
	 * Handles {@code POST /api/auth/login}.
	 *
	 * @param email the entered email
	 * @param password the entered raw password
	 * @return success with a session token and profile, or an error
	 * @pre email and password are not null
	 * @post if either field is empty, "Please fill in all fields" is returned (LI-4); if the email and
	 *       password match an account the user is logged in (LI-5); otherwise "Incorrect email or
	 *       password" is returned (LI-7); the response holds no password or hash (DP-5)
	 */
	public AuthResponse logIn(String email, String password) {
		// TODO
		return new AuthResponse(false, null, null, null);
	}

	/**
	 * Handles {@code POST /api/auth/signout}.
	 *
	 * @param sessionToken the session to end
	 * @pre sessionToken is not null
	 * @post the session is no longer valid (HM-13)
	 */
	public void signOut(String sessionToken) {
		// TODO
	}
}
