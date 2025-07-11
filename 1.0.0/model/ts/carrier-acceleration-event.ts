import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingUnit } from './sorting-unit'

export interface CarrierAccelerationEvent {
    /**
     * Hostname of the sending device (RevPi), e.g. "ivtp20".
     * @pattern [0-9,a-f]
     */
    deviceId: string

    /**
     * The sorting unit key, e.g. "P_VET_01" for RPZ Vetroz
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
     * X-axis acceleration in m/s^2.
     */
    accelerationX: number

    /**
     * Y-axis acceleration in m/s^2.
     */
    accelerationY: number

    /**
     * Z-axis acceleration in m/s^2.
     */
    accelerationZ: number

    /**
     * X-axis acceleration minimum in m/s^2.
     */
    accelerationXMin: number

    /**
     * Y-axis acceleration minimum in m/s^2.
     */
    accelerationYMin: number

    /**
     * Z-axis acceleration minimum in m/s^2.
     */
    accelerationZMin: number

    /**
     * X-axis acceleration maximum in m/s^2.
     */
    accelerationXMax: number

    /**
     * Y-axis acceleration maximum in m/s^2.
     */
    accelerationYMax: number

    /**
     * Z-axis acceleration maximum in m/s^2.
     */
    accelerationZMax: number

    /**
     * The current sorter speed in mm/s.
     */
    sorterSpeed: Int

    /**
     * True, if updates have been received from the CCM within the last 60 seconds.
     */
    connected: boolean
}
