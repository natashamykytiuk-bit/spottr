// Shared data types for the browser. They mirror the server records in
// server/src/main/java/ca/gitfit/spottr/data. Times cross the network as ISO-8601 strings.
// None of these types hold a password, password hash or another user's ID (DP-5, DP-6, DP-7).

export type FilterType = "ALL" | "MUSCLE" | "MACHINE";

export interface Filter {
	type: FilterType;
	/** Muscle group or machine name; "All" when type is ALL. */
	name: string;
}

export interface UserProfile {
	userId: string;
	email: string;
}

export interface Exercise {
	name: string;
	muscleTag: string | null;
	/** Null for bodyweight exercises (WE-8). */
	machineTag: string | null;
	weightLbs: number;
}

export interface Workout {
	/** Null for a new, unsaved workout. */
	workoutId: string | null;
	title: string;
	exercises: Exercise[];
}

export interface CheckInStatus {
	checkedIn: boolean;
	checkInTime: string | null;
	durationMinutes: number;
}

export interface ValidationResult {
	valid: boolean;
	errorMessage: string | null;
}

export interface AuthResponse {
	success: boolean;
	errorMessage: string | null;
	sessionToken: string | null;
	profile: UserProfile | null;
}

export interface BusynessPoint {
	/** Time of day, "HH:mm". */
	time: string;
	busyness: number;
}

export interface BusynessSeries {
	filterName: string;
	recorded: BusynessPoint[];
	predicted: BusynessPoint[];
	currentTime: string;
}

export interface SlotBusyness {
	startHour: number;
	busyness: number;
}

export type Weekday = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

export interface DayBusyness {
	day: Weekday;
	busyness: number;
}

export interface TrainingSuggestions {
	filterName: string;
	enoughData: boolean;
	slots: SlotBusyness[];
	days: DayBusyness[];
	bestSlotStartHour: number;
	bestDay: Weekday | null;
}

/** Plot-ready graph data, made by AnalyticsController for BusynessGraphView. */
export interface GraphData {
	filterName: string;
	labels: string[];
	recordedBars: number[];
	predictedLine: number[];
	currentTimeIndex: number;
}

/** One bar in a suggestion plot. */
export interface PlotBar {
	label: string;
	busyness: number;
	/** True for the least busy bar, which is drawn with a star. */
	starred: boolean;
}

/** The two suggestion plots, made by AnalyticsController. */
export interface SuggestionPlots {
	filterName: string;
	enoughData: boolean;
	/** Busyness by time of day, labels like "2:00 PM – 3:00 PM" (TS-8). */
	timeOfDay: PlotBar[];
	/** Busyness by day of the week, Monday to Sunday. */
	dayOfWeek: PlotBar[];
}

export type Route = "landing" | "login" | "signup" | "home" | "checkin" | "workouts" | "editor" | "account";
