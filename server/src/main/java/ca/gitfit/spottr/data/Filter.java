package ca.gitfit.spottr.data;

/**
 * A "Filter by" selection.
 *
 * @param type the kind of filter
 * @param name the muscle group or machine name; "All" when type is ALL
 */
public record Filter(FilterType type, String name) {
}
