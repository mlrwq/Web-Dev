import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  private cdr = inject(ChangeDetectorRef);

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
  this.albumService.getAlbums().subscribe(data => {
    const deleted = JSON.parse(localStorage.getItem('deletedAlbums') || '[]');
    const edited = JSON.parse(localStorage.getItem('editedAlbums') || '{}');
    this.albums = data
      .filter(a => !deleted.includes(a.id))
      .map(a => edited[a.id] ? { ...a, title: edited[a.id] } : a);
    this.loading = false;
    this.cdr.detectChanges();
  });
}

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}