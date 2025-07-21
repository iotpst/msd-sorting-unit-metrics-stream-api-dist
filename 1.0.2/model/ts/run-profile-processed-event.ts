import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingUnit } from './sorting-unit'
import { CcsError } from './ccs-error'

enum State {
    PROCESSED,
    WRONG_MODE,
    FORMAT_ERROR,
    CANCELLED_BY_MC,
    DENIED_BY_CCS,
    UNKNOWN_PROFILE_ID,
    TIMING_TO_LATE,
    TIMEOUT,
    CCS_ERROR,
    CCS_BUSY,
    GENERAL_ERROR
}

export interface RunProfileProcessedEvent {
    /**
     * Hostname of the sending device (RevPi), e.g. "ivtp20".
     * @pattern [0-9,a-f]
     */
    deviceId: string

    /**
     * The sorting unit key, e.g. "P_VET_01" for RPZ Vetroz.
     */
    sortingUnitKey: SortingUnit

    /**
     * Message timestamp. ISO 8601 Format, e.g. 2025-06-20T17:00:00+02:00.
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
    groupId: Int

    /**
     * The carrier id.
     */
    carrierId: Int

    /**
     * The id of the processed RunProfile.
     */
    profileId: Int

    /**
     * Resulting state of the RunProfile execution.
     */
    state: State[]

    /**
     * Errors resulting from the RunProfile execution (state = CSS_ERROR),
     * e.g. over / under voltage, over temperature, stalled motor, etc. conditions.
     */
    errors: CcsError[]
}
