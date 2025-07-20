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
        title: 'LIFEREALM Receives a Major Visual Upgrade!',
        date: '7/20/2025',
        content: this.sanitizer.bypassSecurityTrustHtml(`
          <p style="font-size: calc(18 / 1920 * 100vw); line-height: 1.6; font-family: 'Noto Sans', sans-serif; margin: calc(15 / 1920 * 100vw); color: #000000; text-align: left;">
           Big news for LIFEREALM! We have implemented a fantastic new environment asset, completely revamping the game visuals. The world is now richer, more detailed, and ready for you to discover its new beauty.
          </p>
        `)
      },
      {
        title: 'New YouTube Video',
        date: '7/18/2025',
        isVideo: true,
        content: this.sanitizer.bypassSecurityTrustHtml(`
          <iframe
            style="width: 100%; aspect-ratio: 16/9; height: auto; border-radius: 0.5rem; margin-bottom: 1rem; display: block;"
            src="https://www.youtube.com/embed/-rL90lQdSi8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p style="font-size: calc(18 / 1920 * 100vw); line-height: 1.6; font-family: 'Noto Sans', sans-serif; margin: calc(15 / 1920 * 100vw); color: #000000; text-align: left;">
        Welcome to LIFEREALM, my latest game development project. This video offers a first look at the world I'm building, showcasing its foundational terrains, lush environments, and visual potential. My goal is to push the boundaries of game development, dedicating myself to the boundless spirit of creation and enhancing every detail to its absolute max.
          </p>
        `)
      },
      {
        title: 'Introducing LIFEREALM!',
        date: '7/18/2025',
        content: this.sanitizer.bypassSecurityTrustHtml(`
          <img src="assets/LIFEREALM.png" alt="LIFEREALM Logo" style="width: 100%; height: auto; display: block; margin: 0 auto 1rem auto; border-radius: 0.5rem;">
          <p style="font-size: calc(18 / 1920 * 100vw); line-height: 1.6; font-family: 'Noto Sans', sans-serif; margin: calc(15 / 1920 * 100vw); color: #000000; text-align: left;">
            I'm excited to introduce my new project: LIFEREALM! This game is being developed to showcase my potential in creating beautiful and immersive game worlds. My aim is to demonstrate how far I can go in crafting a visually stunning and engaging experience, with vibrant terrains, lush grass, and stunning skies. Stay tuned for more updates on LIFEREALM!
          </p>
        `)
      },
      {
        title: 'Game-1 Discontinuation',
        date: '7/18/2025',
        content: this.sanitizer.bypassSecurityTrustHtml(`
          <p style="font-size: calc(18 / 1920 * 100vw); line-height: 1.6; font-family: 'Noto Sans', sans-serif; margin: calc(15 / 1920 * 100vw); color: #000000; text-align: left;">
            An important announcement regarding my previous project, "Game-1." After careful consideration and a deep dive into my true vision, I've made the strategic decision to discontinue development on Game-1. While it was a valuable learning experience, my passion and creative energy are now fully focused elsewhere.
          </p>
        `)
      },
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
