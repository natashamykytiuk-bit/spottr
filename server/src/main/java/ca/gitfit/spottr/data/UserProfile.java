package ca.gitfit.spottr.data;

/**
 * The parts of a user that are safe to send to the browser (no password or hash, DP-5).
 *
 * @param userId unique user identifier
 * @param email the account email
 */
public record UserProfile(String userId, String email) {
}
