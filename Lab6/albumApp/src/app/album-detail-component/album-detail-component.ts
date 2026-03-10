import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  editTitle = '';
  saveMessage = '';
  private cdr = inject(ChangeDetectorRef);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.editTitle = data.title;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    const updated = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album!.title = this.editTitle;
      this.saveMessage = 'Title saved!';
      setTimeout(() => this.saveMessage = '', 2000);
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}