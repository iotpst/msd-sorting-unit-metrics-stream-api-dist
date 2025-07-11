import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingUnit } from './sorting-unit'

export interface CarrierChainForceEvent {
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
     * The group id of the carrier.
     */
    groupId: Int

    /**
     * The carrier id.
     */
    carrierId: Int

    /**
     * The position in mm of the CCM on the sorting unit.
     */
    position: Int

    /**
     * The sensor id of the acceleration sensor.
     */
    sensorId: Int

    /**
     * The current sorter speed in mm/s.
     */
    sorterSpeed: Int

    /**
     * Force in Newton measured at the chain force sensor.
     */
    force: number
}
