package ca.gitfit.spottr.data;

/**
 * The outcome of validating user input.
 *
 * @param valid whether the input passed every check
 * @param errorMessage the message to display, or null if valid
 */
public record ValidationResult(boolean valid, String errorMessage) {
}
