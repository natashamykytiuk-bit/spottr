package ca.gitfit.spottr.data;

/**
 * One exercise in a workout.
 *
 * @param name exercise name, at most 50 characters
 * @param muscleTag exactly one muscle group from the muscle catalogue (WE-7)
 * @param machineTag a machine from the machine catalogue, or null for bodyweight exercises (WE-8)
 * @param weightLbs current weight, 0 to 500 in steps of 5 (WE-10)
 */
public record Exercise(String name, String muscleTag, String machineTag, int weightLbs) {
}
