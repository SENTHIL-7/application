export enum SnackType {
  Success, Info, Warning, Error, Default
}

export interface SnackBar {
  message: string;
  snackType: SnackType;
  duration?: number;
  panelClass?: string;
}
