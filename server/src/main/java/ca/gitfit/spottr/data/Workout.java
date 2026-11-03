package ca.gitfit.spottr.data;

import java.util.List;

/**
 * A user-created workout.
 *
 * @param workoutId unique workout identifier, or null if not saved yet
 * @param ownerId the userId of the creator
 * @param title workout title, at most 50 characters
 * @param exercises the exercises in order
 */
public record Workout(String workoutId, String ownerId, String title, List<Exercise> exercises) {
}
