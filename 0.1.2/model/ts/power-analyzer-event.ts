import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingCenter } from './sorting-center'

export interface PowerAnalyzerEvent {
    
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
     * The unit id of the power analyzer.
     */
    unitId: Int

    /**
     * Power analyzer metrics.
     */
    voltageL1N: number // V, 19000
    voltageL2N: number // V, 19002
    voltageL3N: number // V, 19004
    
    currentIL1: number // A, 19012
    currentIL2: number // A, 19014
    currentIL3: number // A, 19016
    currentSum: number // A, 19018

    realPowerP1L1N: number // W, 19020
    realPowerP2L2N: number // W, 19022
    realPowerP3L3N: number // W, 19024
    realPowerSum: number // W, 19026
    
    apparentPowerS1L1N: number // VA, 19028
    apparentPowerS2L2N: number // VA, 19030
    apparentPowerS3L3N: number // VA, 19032
    apparentPowerSum: number // VA, 19034

    reactivePowerQ1L1N: number // var, 19036
    reactivePowerQ2L2N: number // var, 19038    
    reactivePowerQ3L3N: number // var, 19040
    reactivePowerSum: number // var, 19042
    
    realEnergyL1: number // Wh, 19054
    realEnergyL2: number // Wh, 19056
    realEnergyL3: number // Wh, 19058
    realEnergySum: number // Wh 19060

    apparentEnergyL1: number // VAh, 19078
    apparentEnergyL2: number // VAh, 19080
    apparentEnergyL3: number // VAh, 19082
    apparentEnergySum: number // VAh, 19084

    reactiveEnergyL1: number // varh, 19086
    reactiveEnergyL2: number // varh, 19088
    reactiveEnergyL3: number // varh, 19090
    reactiveEnergySum: number // varh, 19092

}