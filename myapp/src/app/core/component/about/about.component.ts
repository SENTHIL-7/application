import { Component } from '@angular/core';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { SnackType } from '../../model/snack-bar.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private snackbarService: SnackbarService) { }

  default() {
    let snackBarRef = this.snackbarService.openSnackbar({
      message: "Default",
      snackType: SnackType.Default,
    }
    );
  }
  success() {
    let snackBarRef = this.snackbarService.openSnackbar({
      message: "Success",
      snackType: SnackType.Success
    }
    );
  }
  info() {
    let snackBarRef = this.snackbarService.openSnackbar({
      message: "Info",
      snackType: SnackType.Info
    }
    );
  }
  error() {
    let snackBarRef = this.snackbarService.openSnackbar({
      message: "Error",
      snackType: SnackType.Error
    }
    );
  }
  warning() {
    let snackBarRef = this.snackbarService.openSnackbar({
      message: "Warning",
      snackType: SnackType.Warning
    }
    );
  }
}

