// language.service.ts
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export interface Translation {
  about: string;
  skills: string;
  portfolio: string;
  contact: string;

  iAm: string;
  jobName: string;
  landingPageContact: string;
scrollDown: string;

  aboutMeHeader: string;
  aboutMeText: string;
  bulbText: string;
  puzzleText: string;

  skillsHeader: string;
  skillsText: string;
  skillsContact: string;

  portfolioText: string;
  joinText: string;
  eplText: string;
  pokedexText: string;
  test: string;

  contactHeadline: string;
  contactHeader: string;
  contactP1: string;
  contactP2: string;
  contactPrivacy: string;
  contactPrivacyLink: string;
  contactPrivacy2: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  idleButtonText: string;
  loadingButtonText: string;
  successButtonText: string;
}

export interface Translations {
  [key: string]: Translation;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'en'; // Default language
  private readonly LANGUAGE_KEY = 'language';

  private translations: Translations = {
    en: {
      about: 'About me',
      skills: 'Skills',
      portfolio: 'Portfolio',
      contact: 'Contact',

      iAm: 'I am',
      jobName: 'FRONTEND DEVELOPER',
      landingPageContact: "Let's talk!",
      scrollDown: 'Scroll down',

      aboutMeHeader:  'About me',
      aboutMeText: 'My name is Julian, I am a 23-year-old living in Vienna. Through my practice-oriented training as a frontend developer at the Developer Akademie, I was able to gain experience in the development of various applications and pursue my passion.',
      bulbText: 'As a dedicated software developer, I find a world of creativity and logic in every code. My enthusiasm is fueled by the challenge of developing user-friendly, intuitive interfaces and web applications. Continuously seeking to acquire new skills, I am dedicated to enhancing my proficiency in emerging technologies.',
      puzzleText: 'I have gained fundamental experience in core web technologies, acquired through the development of web applications, both independently and collaboratively within a team.',

      skillsHeader: 'My skills',
      skillsText: 'I have gained experience in building projects with various front end technologies and concepts.',
      skillsContact: 'Get in touch',

      portfolioText: 'This page is a sample of my work! Scroll down to view other projects I have developed.',
      joinText: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      eplText: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find bottles to fight against the mega chicken.',
      pokedexText: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      test: 'Live test',

      contactHeadline: 'Contact',
      contactHeader: 'Got a problem to solve?',
      contactP1: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
      contactP2: 'Need a Frontend developer? <b>Contact me!<b>',
      contactPrivacy: 'I read the ',
      contactPrivacyLink: 'privacy policy',
      contactPrivacy2: ' and agree to the processing of my data as outlined.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      idleButtonText: 'Send message :)',
      loadingButtonText: 'Loading...',
      successButtonText: 'Message sent :)',
    },
    de: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      portfolio: 'Portfolio',
      contact: 'Kontakt',

      iAm: 'Ich bin',
      jobName: 'FRONTEND ENTWICKLER',
      landingPageContact: "Kontaktieren",
      scrollDown: 'Scrolle hinunter',

      aboutMeHeader:  'Über mich',
      aboutMeText: 'Mein Name ist Julian, ich bin 23 Jahre alt und lebe in Wien. Durch meine praxisorientierte Ausbildung zum Frontend-Entwickler an der Developer Akademie konnte ich Erfahrungen in der Entwicklung von verschiedenen Anwendungen sammeln und meiner Leidenschaft nachgehen.',
      bulbText: 'Als engagierter Softwareentwickler finde ich in jedem Code eine Welt voller Kreativität und Logik. Die Herausforderung, benutzerfreundliche, intuitive Oberflächen und Webanwendungen zu entwickeln, begeistert mich. Anwendungen. Ich bin ständig bestrebt, mir neue Fähigkeiten anzueignen, um meine Kenntnisse in aufkommenden Technologien.',
      puzzleText: 'Ich habe grundlegende Erfahrungen in den wichtigsten Webtechnologien gesammelt, die ich bei der Entwicklung von Webanwendungen, sowohl unabhängig als auch in Zusammenarbeit mit einem Team.',

      skillsHeader: 'Meine Fähigkeiten',
      skillsText: 'Ich habe Erfahrung in der Erstellung von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.',
      skillsContact: 'Kontaktieren',

      portfolioText: 'Diese Seite ist ein Beispiel für meine Arbeit! Scrollen Sie nach unten, um andere Projekte zu sehen, die ich entwickelt habe.',
      joinText: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      eplText: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Flaschen zu finden, um gegen das Megahuhn zu kämpfen.',
      pokedexText: 'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.',
      test: 'Live Test',

      contactHeadline: 'Kontakt',
      contactHeader: 'Haben Sie ein Problem zu lösen?',
      contactP1: 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen zu kennen und mit meiner Arbeit zu Ihren Projekten beizutragen. Ihre Projekte mit meiner Arbeit zu unterstützen.',
      contactPrivacyLink: 'Datenschutzerklärung',
      contactP2: 'Brauchen Sie einen Frontend-Entwickler? <b>Kontaktieren Sie mich!>b>',
      contactPrivacy: 'Ich habe die',
      contactPrivacy2: ' gelesen und stimme zu der Verarbeitung meiner Daten wie beschrieben zu.',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'Deine Email',
      messagePlaceholder: 'Deine Nachricht',
      idleButtonText: 'Senden :)',
      loadingButtonText: 'Wird gesendet...',
      successButtonText: 'Nachricht gesendet :)',
    }
  };

  constructor(private localStorageService: LocalStorageService) {
    // Beim Initialisieren den gespeicherten Sprachwert abrufen
    const storedLanguage = this.localStorageService.getItem(this.LANGUAGE_KEY);
    if (storedLanguage) {
      this.currentLanguage = storedLanguage;
    }
  }

  setCurrentLanguage(lang: string) {
    this.currentLanguage = lang;
    // Den Sprachwert im Local Storage speichern
    this.localStorageService.setItem(this.LANGUAGE_KEY, lang);
  }

  getTranslation(key: keyof Translation): string {
    return this.translations[this.currentLanguage][key] || key;
  }
}
