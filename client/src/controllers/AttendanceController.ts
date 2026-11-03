import { CheckInStatus } from "../data/types";

/**
 * AttendanceController (client half) checks check-in input, sends check-in and check-out requests,
 * and keeps HomeView's timer and Check In/Check Out button up to date.
 *
 * Resides on: both. This is the client half. It sends these requests to the server half
 * (server/.../controller/AttendanceController.java), which identifies the user by session token:
 * - `POST /api/checkin`: request {workoutId or null, durationMinutes}; response ValidationResult
 * - `POST /api/checkout`: request empty; response CheckInStatus
 * - `GET /api/checkin/status`: request empty; response CheckInStatus
 * Automatic check-out (AC-9) happens on the server, so it works with the page closed.
 *
 * Communicates with: CheckInView, HomeView, AttendanceModel and WorkoutModel (via the server half).
 */
export class AttendanceController {

	/**
	 * Handles a CHECK IN click from CheckInView.
	 *
	 * @param workoutId the selected workout, or null if none (CI-5)
	 * @param durationMinutes the slider value
	 * @returns the error to show, or null on success
	 * @pre the user is logged in
	 * @post if durationMinutes is 0 nothing is sent and "Workout length must be more than 0 minutes"
	 *       is returned (CI-11, CI-12); if the server says the user is already checked in,
	 *       "You are already checked in" is returned (CI-13, CI-14); on success the app goes to Home (CI-15)
	 */
	async requestCheckIn(workoutId: string | null, durationMinutes: number): Promise<string | null> {
		// TODO
		return null;
	}

	/**
	 * Checks the workout length before sending a check-in.
	 *
	 * @param durationMinutes the slider value
	 * @returns the error message, or null if valid
	 * @pre durationMinutes is between 0 and 180 in steps of 5 (CI-6, CI-7)
	 * @post returns "Workout length must be more than 0 minutes" when durationMinutes is 0 (CI-12)
	 */
	validateDuration(durationMinutes: number): string | null {
		// TODO
		return null;
	}

	/**
	 * Handles a Check Out click from HomeView.
	 *
	 * @returns the user's status after checking out
	 * @pre the user is checked in
	 * @post the user is off the attendee list and the check-out time is recorded (AC-7, AC-8)
	 */
	async requestCheckOut(): Promise<CheckInStatus> {
		// TODO
		return { checkedIn: false, checkInTime: null, durationMinutes: 0 };
	}

	/**
	 * Gets the logged-in user's check-in status, so HomeView can show Check In or Check Out.
	 *
	 * @returns the user's current status
	 * @pre the user is logged in
	 * @post the status matches the server, also after a reload or closing the page (AC-6, DP-3)
	 */
	async getCheckInStatus(): Promise<CheckInStatus> {
		// TODO
		return { checkedIn: false, checkInTime: null, durationMinutes: 0 };
	}

	/**
	 * Works out the time since check-in, for HomeView's timer.
	 *
	 * @param status the user's check-in status
	 * @param now the current time
	 * @returns whole seconds since check-in, or 0 if not checked in
	 * @pre status came from getCheckInStatus
	 * @post HomeView calls this every second to show the elapsed time (AC-5)
	 */
	getElapsedSeconds(status: CheckInStatus, now: Date): number {
		// TODO
		return 0;
	}
}
