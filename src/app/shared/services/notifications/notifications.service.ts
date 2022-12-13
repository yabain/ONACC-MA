import { Injectable } from '@angular/core';

declare let $: any;

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    refresh = 1;
    showNotification(from, align, colortype, icon, text, time?: number)
    {
        if (!time) {
            time = 3000;
        }
        $.notify({
            icon: icon,
            message: text
        }, {
            type: colortype,
            timer: time,
            placement: {
                from: from,
                align: align
            }
        });
    }

    showNotificationWithRefresh(from, align, colortype, icon, text, time?: number) {
        if (!time) {
            time = 3000;
        }
        this.showNotification(from, align, colortype, icon, text, time);
       if(time && time > 0)
       {
        setTimeout(() => this.refreshFonct(), time);
       }

    }
    refreshFonct() {
        if (this.refresh == 1) {
            window.location.reload();
            this.refresh = 0;
        }
    }
}
