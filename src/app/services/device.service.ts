import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  constructor() { }

  async getDeviceLanguage() : Promise<string> {
    const info = await Device.getLanguageCode();
    console.log(info);
    return info?.value || 'en';
  }
}
