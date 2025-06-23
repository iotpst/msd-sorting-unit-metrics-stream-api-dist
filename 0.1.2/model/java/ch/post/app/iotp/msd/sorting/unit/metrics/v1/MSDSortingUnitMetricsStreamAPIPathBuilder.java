package ch.post.app.iotp.msd.sorting.unit.metrics.v1;

public final class MSDSortingUnitMetricsStreamAPIPathBuilder {
    public static final String BASE_URL = "server:8080MQTT";
    public static final String BASE_PATH = "";
    public static abstract class Path {
        protected abstract String path();
    }
    public static abstract class Endpoint extends Path {
        public abstract String path();
        public final String url() {
            return BASE_URL + path();
        }
        public final String url(String base) {
            return base + path();
        }
        public final String relativeTo(String other) {
            if (!path().startsWith(other)) { throw new IllegalArgumentException(other + " is not a prefix of " + path()); }
            return path().substring(other.length());
        }
        public final String relativeTo(Path other) {
            return relativeTo(other.path());
        }
    }
    public static final AppIotpMsdSortingUnitMetricsCarrierAccelerationEvent appIotpMsdSortingUnitMetricsCarrierAccelerationEvent = new AppIotpMsdSortingUnitMetricsCarrierAccelerationEvent();
    public static final class AppIotpMsdSortingUnitMetricsCarrierAccelerationEvent extends Endpoint {
        private AppIotpMsdSortingUnitMetricsCarrierAccelerationEvent(){}
        public final String path() { return "/" + "/app.iotp.msd.sorting.unit.metrics.CarrierAcceleration-event"; }
    }
    public static final AppIotpMsdSortingUnitMetricsCarrierChainForceEvent appIotpMsdSortingUnitMetricsCarrierChainForceEvent = new AppIotpMsdSortingUnitMetricsCarrierChainForceEvent();
    public static final class AppIotpMsdSortingUnitMetricsCarrierChainForceEvent extends Endpoint {
        private AppIotpMsdSortingUnitMetricsCarrierChainForceEvent(){}
        public final String path() { return "/" + "/app.iotp.msd.sorting.unit.metrics.CarrierChainForce-event"; }
    }
    public static final AppIotpMsdSortingUnitMetricsCarrierControllerMasterState appIotpMsdSortingUnitMetricsCarrierControllerMasterState = new AppIotpMsdSortingUnitMetricsCarrierControllerMasterState();
    public static final class AppIotpMsdSortingUnitMetricsCarrierControllerMasterState extends Endpoint {
        private AppIotpMsdSortingUnitMetricsCarrierControllerMasterState(){}
        public final String path() { return "/" + "/app.iotp.msd.sorting.unit.metrics.CarrierControllerMaster-state"; }
    }
    public static final AppIotpMsdSortingUnitMetricsCarrierControllerSlaveState appIotpMsdSortingUnitMetricsCarrierControllerSlaveState = new AppIotpMsdSortingUnitMetricsCarrierControllerSlaveState();
    public static final class AppIotpMsdSortingUnitMetricsCarrierControllerSlaveState extends Endpoint {
        private AppIotpMsdSortingUnitMetricsCarrierControllerSlaveState(){}
        public final String path() { return "/" + "/app.iotp.msd.sorting.unit.metrics.CarrierControllerSlave-state"; }
    }
    public static final AppIotpMsdSortingUnitMetricsPowerAnalyzerEvent appIotpMsdSortingUnitMetricsPowerAnalyzerEvent = new AppIotpMsdSortingUnitMetricsPowerAnalyzerEvent();
    public static final class AppIotpMsdSortingUnitMetricsPowerAnalyzerEvent extends Endpoint {
        private AppIotpMsdSortingUnitMetricsPowerAnalyzerEvent(){}
        public final String path() { return "/" + "/app.iotp.msd.sorting.unit.metrics.PowerAnalyzer-event"; }
    }
    public static final AppIotpMsdSortingUnitMetricsRunProfileProcessedEvent appIotpMsdSortingUnitMetricsRunProfileProcessedEvent = new AppIotpMsdSortingUnitMetricsRunProfileProcessedEvent();
    public static final class AppIotpMsdSortingUnitMetricsRunProfileProcessedEvent extends Endpoint {
        private AppIotpMsdSortingUnitMetricsRunProfileProcessedEvent(){}
        public final String path() { return "/" + "/app.iotp.msd.sorting.unit.metrics.RunProfileProcessed-event"; }
    }
}