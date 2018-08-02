import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';

@Injectable({
	providedIn: 'root'
})
export class CameraService {

	constructor(private camera: Camera) { 
	}

	getPhotos() {
		
	}
}
