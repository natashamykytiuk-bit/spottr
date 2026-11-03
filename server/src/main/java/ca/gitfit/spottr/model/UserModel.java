package ca.gitfit.spottr.model;

import ca.gitfit.spottr.data.UserProfile;

import java.util.Optional;

/**
 * UserModel stores user accounts and handles sign-ups, log-in validation and session tokens.
 *
 * <p>Resides on: server only.
 *
 * <p>Communicates with: AuthController (server half).
 */
public class UserModel {

	/**
	 * Checks whether an email is already registered.
	 *
	 * @param email the email to look up
	 * @return true if an account already uses this email
	 * @pre email is not null
	 * @post emails are compared without regard to case (SU-9, SU-10); no data is changed
	 */
	public boolean isEmailRegistered(String email) {
		// TODO
		return false;
	}

	/**
	 * Stores a new user account.
	 *
	 * @param email the new account's email
	 * @param passwordHash the hash of the password; the raw password is never passed in
	 * @return the new account's profile, with a new unique userId
	 * @pre email is valid (SU-6) and isEmailRegistered(email) is false
	 * @post a new account exists with this email and only the password hash is stored (SU-12, SU-13);
	 *       the account still exists after a server restart (DP-1)
	 */
	public UserProfile createUser(String email, String passwordHash) {
		// TODO
		return new UserProfile("", email);
	}

	/**
	 * Verifies log-in credentials and returns the user's profile.
	 *
	 * @param email the entered email
	 * @param passwordHash the hash of the entered password
	 * @return the matching user's profile, or empty if no account has this email or the hash does not match
	 * @pre email and passwordHash are not null
	 * @post no data is changed; the returned profile holds no password or hash (LI-5, LI-7, DP-5)
	 */
	public Optional<UserProfile> verifyCredentials(String email, String passwordHash) {
		// TODO
		return Optional.empty();
	}
}
