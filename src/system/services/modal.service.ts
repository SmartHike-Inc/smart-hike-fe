import { Injectable, Injector, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Modal Service
 */
@Injectable()
export class ModalService {
    /**
     * Constructor
     * @param NgbModal _ngbModal
     * Constructor of the class
     */
    constructor(private _ngbModal: NgbModal) {}

    /**
     * openModal
     *
     * open modal
     * @param Type<any> | any} component
     * @param options<any>
     * @param ariaLabelledBy?: string; backdrop?: boolean | "static"; beforeDismiss?: () => (boolean | Promise<boolean>)
     * ; centered?: boolean; container?: string; injector?: Injector; keyboard?: boolean; size?: "sm" | "lg" | any;
     * windowClass?: string; backdropClass?: string options
     * @returns NgbModalRef
     */
    openModal(
        component: Type<any> | any,
        options: {
            ariaLabelledBy?: string;
            backdrop?: boolean | 'static';
            beforeDismiss?: () => boolean | Promise<boolean>;
            centered?: boolean;
            container?: string;
            injector?: Injector;
            keyboard?: boolean;
            size?: 'sm' | 'lg' | 'xl' | any;
            windowClass?: string;
            backdropClass?: string;
        } = { size: 'lg' }
    ) {
        const modalRef = this._ngbModal.open(component, {
            windowClass: 'sh-modal scrollbar scrollbar-style2 center',
            backdropClass: 'sh-modal-backdrop',
            ...options
        });
        if (modalRef.componentInstance) {
            modalRef.componentInstance.isModal = true;
        }
        return modalRef;
    }

    /**
     * dismissAllModal
     *
     * dismiss all open modal
     */
    dismissAllModal() {
        this._ngbModal.dismissAll();
    }
}
