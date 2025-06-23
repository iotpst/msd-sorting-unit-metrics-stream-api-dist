import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingCenter } from './sorting-center'

export interface CarrierChainForceEvent {
    
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
     * The group id of the carrier.
     */
    group: Int

    /**
     * The carrier id.
     */
    carrier: Int

    /**
     * The position in mm of the CCM on the sorting unit.
     */
    position: Int
    
    /**
     * The sensor id of the acceleration sensor.
     */
    sensorId: Int
    
    /**
     * Force in Newton measured by the chain force sensor.
     */
    force: Int

}