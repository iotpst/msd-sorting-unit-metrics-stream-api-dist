import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingUnit } from './sorting-unit'
import { CcsError } from './ccs-error'

export enum CcsState {
    UNKNOWN,
    INITIALIZATION,
    SYNCHRONIZATION,
    CCS_SETUP,
    FIRMWARE_UPDATE,
    READY,
    INTERNAL_ERROR,
    COMMUNICATION_ERROR,
    CCS_ERROR
}

export interface CarrierControllerSlaveState {
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
     * The current state of the carrier controller slave.
     */
    state: CcsState

    /**
     * Total runtime of the CCS since last boot in seconds.
     */
    upTime: Int

    /**
     * DC bus voltage in volt.
     */
    dcBusVoltage: number

    /**
     * Temperature in the controller in degrees Celsius.
     */
    temperature: number

    /**
     * True, if updates have been received from the CCM within the last 60 seconds.
     */
    connected: boolean

    /**
     * Errors received from the CCS.
     */
    errors: CcsError[]
}
