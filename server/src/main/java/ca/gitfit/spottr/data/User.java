package ca.gitfit.spottr.data;

/**
 * A stored account. Server-only: never sent to the browser (DP-5).
 *
 * @param userId unique user identifier
 * @param email the account email
 * @param passwordHash hash of the password, never the password itself (SU-13)
 */
public record User(String userId, String email, String passwordHash) {
}
