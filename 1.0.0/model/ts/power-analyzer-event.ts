import { DateTime } from 'apikana/default-types'
import { Int } from 'apikana/default-types'
import { SortingUnit } from './sorting-unit'

export interface PowerAnalyzerEvent {
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
     * The unit id of the power analyzer.
     */
    unitId: Int

    /**
     * Voltage L1-N in volts.
     */
    voltageL1N: number

    /**
     * Voltage L2-N in volts.
     */
    voltageL2N: number

    /**
     * Voltage L3-N in volts.
     */
    voltageL3N: number

    /**
     * Current I L1 in amperes.
     */
    currentIL1: number

    /**
     * Current I L2 in amperes.
     */
    currentIL2: number

    /**
     * Current I L3 in amperes.
     */
    currentIL3: number

    /**
     * Total current in amperes.
     */
    currentSum: number

    /**
     * Active power P1 L1-N in watts.
     */
    realPowerP1L1N: number

    /**
     * Active power P2 L2-N in watts.
     */
    realPowerP2L2N: number

    /**
     * Active power P3 L3-N in watts.
     */
    realPowerP3L3N: number

    /**
     * Total active power in watts.
     */
    realPowerSum: number

    /**
     * Apparent power S1 L1-N in VA.
     */
    apparentPowerS1L1N: number

    /**
     * Apparent power S2 L2-N in VA.
     */
    apparentPowerS2L2N: number

    /**
     * Apparent power S3 L3-N in VA.
     */
    apparentPowerS3L3N: number

    /**
     * Total apparent power in VA.
     */
    apparentPowerSum: number

    /**
     * Reactive power Q1 L1-N in var.
     */
    reactivePowerQ1L1N: number

    /**
     * Reactive power Q2 L2-N in var.
     */
    reactivePowerQ2L2N: number

    /**
     * Reactive power Q3 L3-N in var.
     */
    reactivePowerQ3L3N: number

    /**
     * Total reactive power in var.
     */
    reactivePowerSum: number

    /**
     * Active energy L1 in Wh.
     */
    realEnergyL1: number

    /**
     * Active energy L2 in Wh.
     */
    realEnergyL2: number

    /**
     * Active energy L3 in Wh.
     */
    realEnergyL3: number

    /**
     * Total active energy in Wh.
     */
    realEnergySum: number

    /**
     * Apparent energy L1 in VAh.
     */
    apparentEnergyL1: number

    /**
     * Apparent energy L2 in VAh.
     */
    apparentEnergyL2: number

    /**
     * Apparent energy L3 in VAh.
     */
    apparentEnergyL3: number

    /**
     * Total apparent energy in VAh.
     */
    apparentEnergySum: number

    /**
     * Reactive energy L1 in varh.
     */
    reactiveEnergyL1: number

    /**
     * Reactive energy L2 in varh.
     */
    reactiveEnergyL2: number

    /**
     * Reactive energy L3 in varh.
     */
    reactiveEnergyL3: number

    /**
     * Total reactive energy in varh.
     */
    reactiveEnergySum: number
}
