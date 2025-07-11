abstract class Path {
    abstract path(): String
    url(base?: string): String {
        return (base ? base : MSDSortingUnitMetricsStreamAPIPaths.baseUrl) + this.path();
    }
}

class AppIotpMsdSortingUnitMetricsCarrierAccelerationEvent extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "app.iotp.msd.sorting.unit.metrics.CarrierAcceleration-event"; }
}

class AppIotpMsdSortingUnitMetricsCarrierChainForceEvent extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "app.iotp.msd.sorting.unit.metrics.CarrierChainForce-event"; }
}

class AppIotpMsdSortingUnitMetricsCarrierControllerMasterState extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "app.iotp.msd.sorting.unit.metrics.CarrierControllerMaster-state"; }
}

class AppIotpMsdSortingUnitMetricsCarrierControllerSlaveState extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "app.iotp.msd.sorting.unit.metrics.CarrierControllerSlave-state"; }
}

class AppIotpMsdSortingUnitMetricsPowerAnalyzerEvent extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "app.iotp.msd.sorting.unit.metrics.PowerAnalyzer-event"; }
}

class AppIotpMsdSortingUnitMetricsRunProfileProcessedEvent extends Path {
    constructor(private parent){super();}
    path() { return this.parent.path() + "/" + "app.iotp.msd.sorting.unit.metrics.RunProfileProcessed-event"; }
}

export default class MSDSortingUnitMetricsStreamAPIPaths {
    private constructor(){}
    static readonly baseUrl = "server:8080MQTT";
    static readonly basePath = "";
    private path() { return MSDSortingUnitMetricsStreamAPIPaths.basePath; }
    static readonly appIotpMsdSortingUnitMetricsCarrierAccelerationEvent = new AppIotpMsdSortingUnitMetricsCarrierAccelerationEvent(new MSDSortingUnitMetricsStreamAPIPaths());
    static readonly appIotpMsdSortingUnitMetricsCarrierChainForceEvent = new AppIotpMsdSortingUnitMetricsCarrierChainForceEvent(new MSDSortingUnitMetricsStreamAPIPaths());
    static readonly appIotpMsdSortingUnitMetricsCarrierControllerMasterState = new AppIotpMsdSortingUnitMetricsCarrierControllerMasterState(new MSDSortingUnitMetricsStreamAPIPaths());
    static readonly appIotpMsdSortingUnitMetricsCarrierControllerSlaveState = new AppIotpMsdSortingUnitMetricsCarrierControllerSlaveState(new MSDSortingUnitMetricsStreamAPIPaths());
    static readonly appIotpMsdSortingUnitMetricsPowerAnalyzerEvent = new AppIotpMsdSortingUnitMetricsPowerAnalyzerEvent(new MSDSortingUnitMetricsStreamAPIPaths());
    static readonly appIotpMsdSortingUnitMetricsRunProfileProcessedEvent = new AppIotpMsdSortingUnitMetricsRunProfileProcessedEvent(new MSDSortingUnitMetricsStreamAPIPaths());
}

