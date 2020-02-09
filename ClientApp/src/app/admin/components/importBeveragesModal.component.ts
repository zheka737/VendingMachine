import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "import-beverages",
    templateUrl: "importBeveragesModal.component.html"
})
export class ImportBeveragesModalComponent {
    selectedFile: File

    constructor(public activeModal: NgbActiveModal) {}

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
      }

    onUploadClick() {
        this.activeModal.close(this.selectedFile);
    }

    onCancelClick() {
        this.activeModal.dismiss();
    }
}