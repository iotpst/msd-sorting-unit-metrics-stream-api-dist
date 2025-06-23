import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingCenter } from './sorting-center'

export interface CarrierAccelerationEvent {
    
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
     * X-axis acceleration in m/s^2.
     */
    accelerationX: Int

    /**
     * Y-axis acceleration in m/s^2.
     */
    accelerationY: Int
    
    /**
     * Z-axis acceleration in m/s^2.
     */    
    accelerationZ: Int
    
    /**
     * X-axis acceleration minimum in m/s^2.
     */   
    accelerationXMin: Int

    /**
     * Y-axis acceleration minimum in m/s^2.
     */   
    accelerationYMin: Int

    /**
     * Z-axis acceleration minimum in m/s^2.
     */   
    accelerationZMin: Int

    /**
     * X-axis acceleration maximum in m/s^2.
     */   
    accelerationXMax: Int

    /**
     * Y-axis acceleration maximum in m/s^2.
     */   
    accelerationYMax: Int
    
    /**
     * Z-axis acceleration maximum in m/s^2.
     */   
    accelerationZMax: Int

    /**
     * True, if updates have been received from the CCM in the last 60 seconds.
     */
    connected: boolean

}