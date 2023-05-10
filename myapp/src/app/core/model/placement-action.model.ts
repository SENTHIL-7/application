export interface PlacementAction {
  name: string;
  toolTip: string;
  method: string;
  mode?: string
}
export enum ActionType {
  EDIT, VIEW
}