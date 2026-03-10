import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number = 0;
  loading = true;
  private cdr = inject(ChangeDetectorRef);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
      this.photos = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}