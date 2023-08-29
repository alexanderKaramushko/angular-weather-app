import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit, OnChanges {

  @ViewChild('map')
  private map?: ElementRef<HTMLDivElement>;

  private leafletMap: L.Map;

  private markersLayer: L.LayerGroup;

  @Input()
  private latitude;

  @Input()
  private longitude;

  @Input()
  private zoom = 3;

  @Output()
  coordsChanged = new EventEmitter<{ latitude: number; longitude: number }>();

  private initMap(element: HTMLElement) {
    const { latitude, longitude, zoom } = this;

    const leafletMap = L.map(element).setView(
      [latitude, longitude],
      zoom,
    );

    L
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(leafletMap);

    return leafletMap;
  }

  createAndClearMarkerLayer() {
    if (!this.markersLayer) {
      this.markersLayer = new L.LayerGroup().addTo(this.leafletMap);
    }

    this.markersLayer.clearLayers();
  }

  addMarker(latitude: number, longitude: number) {
    const iconUrl = 'assets/icons/map-marker.svg';

    const icon = new L.DivIcon({
      html: `<img width="40px" style="transform: translate(-35%, -80%);" src='${iconUrl}'/><span>Погода здесь</span>`,
    });

    L.marker([latitude, longitude], { icon }).addTo(this.markersLayer);
  }

  ngAfterViewInit(): void {
    if (this.map.nativeElement) {
      this.leafletMap = this.initMap(this.map.nativeElement);

      this.createAndClearMarkerLayer();
      this.addMarker(this.latitude, this.longitude);

      this.leafletMap.on('click', (e) => {
        const { lat, lng } = e.latlng;

        this.coordsChanged.emit({
          latitude: lat,
          longitude: lng,
        });
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { latitude, longitude } = changes;

    if (latitude.previousValue !== latitude.currentValue || longitude.previousValue !== longitude.currentValue) {
      if (this.leafletMap) {

        this.leafletMap.flyTo(new L.LatLng(latitude.currentValue, longitude.currentValue));

        this.createAndClearMarkerLayer();
        this.addMarker(latitude.currentValue, longitude.currentValue);
      }
    }
  }

}
