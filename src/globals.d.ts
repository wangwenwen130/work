declare interface Window {
  Cesium: typeof SuperMapCesium;
  cimiumInstance: Cimium;
  cimiumConfiguration: CimiumConfigurationInterface;
  JSEncrypt: function;
  useAmap: Amap;
  useAmapFun: useAmapFun;
  AMapUI: AMapUI;
  districtExplorer: districtExplorer;
  loginIpUrl: loginIpUrl;
  backIpUrl: backIpUrl;
  isSplitEnable: isSplitEnable;
  toolsShowHide: function;
  pilotMarkFlag: pilotMarkFlag;
  publicIpUrl: publicIpUrl;
  CryptoJS: CryptoJS;
}
declare let AMap: any;
interface useAmapInterface {}
interface PickEvent {
  listener: (...args: T) => void;
  scope?: any;
}

interface CimiumConfigurationInterface {
  container: string = "";
  loadQueue: Function[] = [];
  registerToLoadQueue: (f: Function) => void;
}

interface CimiumLayer {
  id: string;
  projectid: string;
  foldViewId: string;
  treePath: string; // 0-1-3
  name: string; // 餐饮中心
  dataType: string; // OSGB
  visible: boolean;
  isSplited: boolean;
  transparency: number;
  layer: any;
}

interface CimiumInterface {
  isInitialized: boolean;
  isFlyCircle: boolean;
  viewer: SuperMapCesium.Viewer;
  layers: Array<CimiumLayer>;
  handlerPoint: any;
  handlerLine: any;
  handlerPolygon: any;
  initialize: () => void;
  loadService: (
    srvInfo: ServiceInfo,
    foldViewId: string,
    treePath: string,
    callback: (err: any, layer: CimiumLayer, type: string) => void = (
      err,
      layer,
      type
    ) => {}
  ) => void;
  zoomToLayer: (layerId: string) => void;
  flyToLayer: (layerId: string) => void;
  closeLayer: (layerId: string) => void;
  toggleLayerVisible: (layerId: string, visible: boolean) => void;
  changeLayerTransparency: (layerId: string, transparency: number) => void;
  clearAllLayers: () => void;
}

// interface ServiceInfo {
//   id: string
//   projectid: string
//   name: string
//   serviceurl: string
//   servicedatatypeVo: {
//     name: string
//   }
// }

interface ProjectServiceTree {
  id: string;
  name: string;
  nodetype: string;
  children?: Array<ProjectServiceTree>;
}
interface ServiceInfo {
  id: string;
  projectid: string;
  name: string;
  serviceurl: string;
  servicedatatypeid: string;
  dataurl: string;
  salt: string;
  geometryrender: string;
  textrender: string;
  enable: boolean;
  publishtime: string;
  publishuid: string;
  angle: string;
  isBaseMap: boolean;
  location: string;
  layerproperty: string;
  permission: number;
  ServerIP: string;
  ServerPort: string;
  serverType: string;
  SourceName: string;
  DatasetName: string;
  sm_realspace: SmRealspace;
  sm_data: SmData;
  servicedatatypeVo: ServicedatatypeVo;
  opBy: string;
  opAt: number;
  delFlag: boolean;
}

interface ServicedatatypeVo {
  id: string;
  name: string;
  description: string;
  remark: string;
  opBy: string;
  opAt: number;
  delFlag: boolean;
}

interface SmData {
  url: string;
  ip: string;
  port: string;
  root: string;
  dataSource: string;
  dataSet: string;
  falg: number;
}

interface SmRealspace {
  url: string;
  ip: string;
  port: string;
  root: string;
  dataName: string;
  falg: number;
}
