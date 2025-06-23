import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { Error } from './error'
import { SortingCenter } from './sorting-center'

export enum State {
    UNKNOWN, 
    INITIALIZATION,
    SYNCHRONIZATION,
    CCS_SETUP,
    FIRMWARE_UPDATE,
    READY
}

export interface CarrierControllerSlaveState {

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
     * The current state of the carrier controller slave.
     */
    state: State

    /**
     * True, if updates have been received from the CCM in the last 60 seconds.
     */
    connected: boolean

    /**
     * Errors received from the CCS. 
     */
    errors: Error[]

}