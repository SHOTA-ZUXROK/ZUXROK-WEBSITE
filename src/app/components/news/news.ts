import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class NewsComponent implements OnInit {

  newsItems: { title: string; date: string; content: string | SafeHtml; isVideo?: boolean; }[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.newsItems = [
      {
        title: 'New YouTube Video',
        date: '7/14/2025',
        isVideo: true,
        content: this.sanitizer.bypassSecurityTrustHtml(`
          <iframe
            style="width: 100%; aspect-ratio: 16/9; height: auto; border-radius: 0.5rem; margin-bottom: 1rem; display: block;"
            src="https://www.youtube.com/embed/dNr5Tpe-EXk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p style="font-size: calc(18 / 1920 * 100vw); line-height: 1.6; font-family: 'Noto Sans', sans-serif; margin: calc(15 / 1920 * 100vw); color: #000000; text-align: left;">
        In this video, I'm thrilled to take you on a full tour of my brand new official website! This site is my digital home and portfolio, where I'll be sharing all my work as an aspiring Game and Web Developer.
          </p>
        `)
      },
      {
        title: 'Website Visual Update',
        date: '7/10/2025',
        content: this.sanitizer.bypassSecurityTrustHtml(`
          <p style="font-size: calc(18 / 1920 * 100vw); line-height: 1.6; font-family: 'Noto Sans', sans-serif; margin: calc(15 / 1920 * 100vw); color: #000000; text-align: left;">
            The visual appearance of the website has been modified with new designs and improved responsiveness.
          </p>
        `)
      }
    ];
  }
}
