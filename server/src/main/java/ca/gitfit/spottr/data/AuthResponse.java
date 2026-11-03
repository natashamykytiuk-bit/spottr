package ca.gitfit.spottr.data;

/**
 * The result of a sign-up or log-in request, as sent to the browser.
 *
 * @param success whether the user is now logged in
 * @param errorMessage the message to display, or null on success
 * @param sessionToken the new session token, or null on failure
 * @param profile the logged-in user's profile, or null on failure
 */
public record AuthResponse(boolean success, String errorMessage, String sessionToken, UserProfile profile) {
}
