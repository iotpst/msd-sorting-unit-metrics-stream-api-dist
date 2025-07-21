import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingUnit } from './sorting-unit'

export enum CcmError {
    GENERAL,
    MASTER_BUS_OUT,
    MASTER_BUS_IN,
    CAN_BUS_MODULE,
    WIRELESS_MODULE,
    POSITION,
    MC_COMMUNICATION_MODULE
}

export enum CcmInfo {
    CONTROLLER_MODULE_IN_SETUP_MODE,
    TIME_SYNCHRONIZATION_REQUIRED,
    WIRELESS_MODULE_IN_SCAN_MODE,
    MISSING_CCS_CONFIGURATION,
    RUNNING
}

export interface CarrierControllerMasterState {
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
     * True, if updates have been received from the CCM within the last 60 seconds.
     */
    connected: boolean

    /**
     * Errors received from CCM.
     */
    errors: CcmError[]

    /**
     * Infos received from CCM.
     */
    infos: CcmInfo[]
}
