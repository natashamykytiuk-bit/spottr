import { Workout } from "../data/types";

/**
 * Renders the workout editor: the title field, exercise rows with name, muscle tag, machine tag and weight slider, and the SAVE button.
 *
 * Resides on: client only.
 *
 * Communicates with: WorkoutController.
 */
export class WorkoutEditorView {

	/**
	 * Shows a workout in the editor.
	 *
	 * @param workout the workout to edit; a null workoutId means a new workout
	 * @returns nothing
	 * @pre workout came from WorkoutController.openEditor
	 * @post the title field, Add exercise button, exercise rows and SAVE button are shown (WE-1 to WE-6, WE-9, WE-13)
	 */
	loadWorkout(workout: Workout): void {
		// TODO
	}

	/**
	 * Shows a validation error from WorkoutController.
	 *
	 * @param message the error to show
	 * @returns nothing
	 * @pre message is not empty
	 * @post the message is shown and the editor stays open (WE-16, WE-18, WE-20)
	 */
	showValidationError(message: string): void {
		// TODO
	}

	/**
	 * Shows an exercise's weight in lbs and kg from WorkoutController.
	 *
	 * @param exerciseIndex the exercise's position, starting at 0
	 * @param lbs the weight in pounds
	 * @param kg the weight in kilograms
	 * @returns nothing
	 * @pre exerciseIndex is a valid exercise position
	 * @post both values are shown next to the slider (WE-11, WE-12)
	 */
	showConvertedWeight(exerciseIndex: number, lbs: number, kg: number): void {
		// TODO
	}
}
