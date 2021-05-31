import {Component, OnInit} from '@angular/core';
import {Album} from "../../interfacce/album.interface";
import {AlbumsService} from "../../services/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
this.albumsService.getAlbums().subscribe(value => this.albums = value);
  }

}
