// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { ClusterNodeInfo } from './ClusterNodeInfo';
// eslint-disable-next-line no-duplicate-imports
import type { PlacementInfo } from './PlacementInfo';


/**
 * Read Replica Spec
 * @export
 * @interface ReadReplicaSpec
 */
export interface ReadReplicaSpec  {
  /**
   * 
   * @type {ClusterNodeInfo}
   * @memberof ReadReplicaSpec
   */
  node_info: ClusterNodeInfo;
  /**
   * 
   * @type {PlacementInfo}
   * @memberof ReadReplicaSpec
   */
  placement_info?: PlacementInfo;
  /**
   * 
   * @type {string}
   * @memberof ReadReplicaSpec
   */
  primary_cluster_id: string;
}


