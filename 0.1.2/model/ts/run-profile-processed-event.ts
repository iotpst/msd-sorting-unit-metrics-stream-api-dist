import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { Error } from './error'
import { SortingCenter } from './sorting-center'

export enum State {
    PROCESSED,
    WRONG_MODE,
    FORMAT_ERROR,
    CANCELLED_BY_MC,
    DENIED_BY_CCS,
    UNKNOWN_PROFILE_ID,
    TIMING_TO_LATE,
    TIMEOUT,
    CCS_ERROR,
    CCS_IS_BUSY,
    GENERAL_ERROR
}

export interface RunProfileProcessedEvent {
    
    /**
     * MAC address of the sending device, e.g. 2EC8957302CA
     * @pattern [0-9,A-F]{12}
     */
    deviceId: string

    /**
     * The sorting center id, e.g. "HRK" for BPZ Härkingen
     * TODO Use sortingLocationKey instead -> clarify with jeanrichardm
     */
    sortingCenter: SortingCenter

    /**
     * The sorter number (unique for the sorting center).
     * TODO Use sortingUnitKey & sorterKey instead -> clarify with jeanrichardm
     * @minimum 1
     * @maximum 9
     */
    sorterNumber: Int

    /**
     * Message timestamp. ISO 8601 Format, e.g. 2025-06-20T17:00:00+02:00
     */
    timestamp: DateTime

    /**
     * The serial number of the carrier.
     * @pattern [0-9,A-Z,a-z]{10} 
     */
    serialNumber: string

    /**
     * The group id of the carrier.
     */
    group: Int

    /**
     * The carrier id.
     */
    carrier: Int

    /**
     * The id of the processed RunProfile.
     */
    profileId: Int

    /**
     * Resulting state of the RunProfile execution.
     */
    state: State

    /**
     * Errors resulting from the RunProfile execution (state = CSS_ERROR), 
     * e.g. over / under voltage, over temperature, stalled motor, etc. conditions.
     */
    errors: Error[]

}