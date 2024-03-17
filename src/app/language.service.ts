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

  privacyHeadline: string;
  privacyPreamble: string;
  privacyAdress: string;
  privacyP1: string;
  privacyP2: string;
  privacyP3: string;
  privacyP4: string;
  privacyP5: string;
  privacyP6: string;
  privacyP7: string;
  privacyP8: string;
  privacyP9: string;
  privacyP10: string;
  privacyP11: string;
  privacyP12: string;
  privacyP13: string;
  privacyP14: string;
  privacyP15: string;
  privacyP16: string;
  privacyP17: string;
  privacyP18: string;
  privacyP19: string;
  privacyP20: string;
  privacyP21: string;
  privacyP22: string;
  privacyP23: string;
  privacyP24: string;
  privacyP25: string;
  privacyP26: string;
  privacyP27: string;
  privacyP28: string;
  privacyP29: string;
  privacyP30: string;
  privacyP31: string;
  privacyP32: string;
  privacyP33: string;
  privacyP34: string;
  privacyP35: string;
  privacyP36: string;
  privacyP37: string;
  privacyP38: string;
  privacyP39: string;
  privacyP40: string;
  privacyP41: string;
  privacyP42: string;
  privacyP43: string;
  privacyP44: string;
  privacyP45: string;
  privacyP46: string;
  privacyP47: string;
  privacyP48: string;
  privacyP49: string;
  privacyP50: string;
  privacyP51: string;
  privacyP52: string;
  privacyP53: string;
  privacyP54: string;
  privacyP55: string;
  privacyP56: string;
  privacyP57: string;
  privacyP58: string;
  privacyP59: string;
  privacyP60: string;
  privacyP61: string;
  privacyP62: string;
  privacyP63: string;

  imprint1: string;
  imprint2: string;
  imprint3: string;
  imprint4: string;
  imprint5: string;
  imprint6: string;
  imprint7: string;
  imprint8: string;
  imprint9: string;
  imprint10: string;
  imprint11: string;
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

      privacyHeadline: 'Privacy Policy',
      privacyPreamble: 'Preamble',
      privacyAdress: '1110 Vienna, Austria',
      privacyP1: 'With the following data protection declaration, we would like to inform you about the types of your personal data (hereinafter also referred to shortly as "data") that we process, for what purposes, and to what extent. The data protection declaration applies to all processing of personal data carried out by us, both in the provision of our services and especially on our websites, in mobile applications, and within external online presences, such as our social media profiles (hereinafter collectively referred to as the "online offering").',
      privacyP2: 'The terms used are not gender-specific.',
      privacyP3: 'Date: March 17, 2024',
      privacyP4: 'Contact person',
      privacyP5: 'Overview of Processing',
      privacyP6: 'The following overview summarizes the types of processed data and the purposes of their processing, referring to the affected individuals.',
      privacyP7: 'Types of Processed Data',
      privacyP8: 'Contact details.',
      privacyP9: 'Content data.',
      privacyP10: 'Usage data.',
      privacyP11: 'Meta, communication, and procedural data.',
      privacyP12: 'Categories of Affected Individuals',
      privacyP13: 'Communication partners.',
      privacyP14: 'Users.',
      privacyP15: 'Purposes of Processing',
      privacyP16: '<li>Contact inquiries and communication.</li> <li>Security measures.</li> <li>Management and response to inquiries.</li> <li>Feedback.</li> <li>Provision of our online offering and user-friendliness.</li> <li>Information technology infrastructure.</li>',
      privacyP17: 'Relevant Legal Bases',
      privacyP18: '<strong>Relevant legal bases according to the GDPR:</strong> Below, you will find an overview of the legal bases of the GDPR on which we process personal data. Please note that, in addition to the provisions of the GDPR, national data protection regulations may apply in your or our country of residence or business. If more specific legal bases are relevant in individual cases, we will inform you of these in the data protection declaration.',
      privacyP19: '<li><strong>Consent (Art. 6(1)(a) GDPR)</strong> - The data subject has given consent to the processing of their personal data for one or more specific purposes.</li><li><strong>Contractual performance and pre-contractual inquiries (Art. 6(1)(b) GDPR)</strong> - Processing is necessary for the performance of a contract to which the data subject is a party or for the implementation of pre-contractual measures requested by the data subject.</li><li><strong>Legitimate interests (Art. 6(1)(f) GDPR)</strong> - Processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject requiring the protection of personal data.</li>',
      privacyP20: '<strong>National data protection regulations in Austria:</strong> In addition to the GDPR, there are national data protection regulations in Austria. This includes, in particular, the Federal Act for the Protection of Individuals with regard to the Processing of Personal Data (Data Protection Act - DSG). The Data Protection Act contains specific regulations, especially regarding the right to information, the right to correction or deletion, the processing of special categories of personal data, processing for other purposes, and transmission, as well as automated decision-making in individual cases.',
      privacyP21: 'Security Measures',
      privacyP22: 'In accordance with legal requirements, we implement appropriate technical and organizational measures, taking into account the state of the art, implementation costs, the nature, scope, circumstances, and purposes of processing, as well as the varying likelihood and severity of the risk to the rights and freedoms of natural persons. These measures include securing the confidentiality, integrity, and availability of data by controlling physical and electronic access to the data, as well as the access, input, transmission, availability, and separation of data. We have also established procedures to ensure the exercise of data subject rights, the deletion of data, and responses to data threats. Additionally, we consider data protection during the development or selection of hardware, software, and procedures, following the principle of data protection by design and by default.',
      privacyP23: 'TLS/SSL encryption (https): To protect user data transmitted through our online services, we use TLS/SSL encryption. Secure Sockets Layer (SSL) is the standard technology for securing internet connections by encrypting data transmitted between a website or app and a browser (or between two servers). Transport Layer Security (TLS) is an updated and more secure version of SSL. Hyper Text Transfer Protocol Secure (HTTPS) is displayed in the URL when a website is secured by an SSL/TLS certificate.',
      privacyP24: 'Transmission of Personal Data',
      privacyP25: 'As part of our processing of personal data, it may happen that the data is transmitted or disclosed to other entities, companies, legally independent organizational units, or individuals. Recipients of this data may include service providers or providers of services and content integrated into a website, especially those with IT tasks. In such cases, we comply with legal requirements and conclude appropriate contracts or agreements that serve to protect your data with the recipients of your data.',
      privacyP26: 'International Data Transfers',
      privacyP27: 'Data processing in third countries: If we process data in a third country (i.e., outside the European Union (EU) or the European Economic Area (EEA)) or if processing takes place in connection with the use of services from third parties or the disclosure or transmission of data to other persons, entities, or companies, this only occurs in compliance with legal requirements. If the level of data protection in the third country has been recognized by an adequacy decision (Art. 45 GDPR), this decision serves as the basis for the data transfer. Otherwise, data transfers only take place if the level of data protection is otherwise ensured, particularly through standard contractual clauses (Art. 46(2)(c) GDPR), explicit consent, or in the case of contractual or legally required transmission (Art. 49(1) GDPR). In addition, we will inform you of the basis for the transfer to third countries with each provider from the third country, with adequacy decisions taking precedence as the basis. Information on third-country transfers and existing adequacy decisions can be found in the information provided by the EU Commission:',
      privacyP28: 'EU-US Trans-Atlantic Data Privacy Framework: Within the framework of the "Data Privacy Framework" (DPF), the EU Commission has also recognized the level of data protection as safe for certain companies from the USA under the adequacy decision of July 10, 2023. The list of certified companies and further information on the DPF can be found on the website of the US Department of Commerce at',
      privacyP29: '(in English). We will inform you in the context of the data protection notices which service providers certified under the Data Privacy Framework we use.',
      privacyP30: 'Deletion of Data',
      privacyP31: 'We delete the data we process in accordance with legal requirements as soon as the consents granted for processing are revoked or other permissions are no longer valid (e.g., when the purpose of processing this data has ceased to exist or it is not required for the purpose). If the data is not deleted because it is necessary for other and legally permissible purposes, its processing is limited to these purposes. This applies, for example, to data that must be retained for commercial or tax reasons or whose storage is necessary for asserting, exercising, or defending legal claims or protecting the rights of another natural or legal person. Our data protection notices may also contain further information on the storage and deletion of data that primarily applies to the respective processing.',
      privacyP32: 'Rights of Data Subjects',
      privacyP33: 'Rights of data subjects under the GDPR: You, as data subjects, have various rights under the GDPR, particularly arising from Art. 15 to 21 GDPR:',
      privacyP34: '<li><strong>Right to object:</strong> You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you which is based on Art. 6(1)(e) or (f) GDPR, including profiling based on those provisions. If the personal data concerning you is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for the purpose of such marketing; this also applies to profiling insofar as it is related to such direct marketing.</li><li><strong>Right to withdraw consent:</strong> You have the right to withdraw your consent at any time.</li> <li><strong>Right to information:</strong> You have the right to request confirmation as to whether personal data concerning you is being processed and, if so, to obtain information about this data and further details according to legal requirements.</li><li><strong>Right to rectification:</strong> You have the right to request the completion of personal data concerning you or the correction of inaccurate data concerning you according to legal requirements.</li><li><strong>Right to erasure and restriction of processing:</strong> You have the right, in accordance with legal requirements, to request the immediate erasure of personal data concerning you or, alternatively, the restriction of processing of the data.</li><li><strong>Right to data portability:</strong> You have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format or to request the transmission of this data to another controller according to legal requirements.</li><li><strong>Complaint to supervisory authority:</strong> Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority, particularly in the Member State of your habitual residence, place of work, or the place of the alleged infringement, if you believe that the processing of personal data concerning you violates the provisions of the GDPR.</li>',
      privacyP35: 'Use of Cookies',
      privacyP36: 'Cookies are small text files or other storage markers that store information on devices and retrieve information from devices. For example, to store login status in a user account, shopping cart content in an e-shop, viewed content, or used functions of an online offering. Cookies can also be used for various purposes, such as functionality, security, and comfort of online offerings, as well as creating analyses of visitor flows.',
      privacyP37: '<strong>Consent Information:</strong> We use cookies in accordance with legal requirements. Therefore, we obtain prior consent from users, unless legally not required. Consent is not necessary, in particular, when storing and retrieving information, including cookies, is absolutely necessary to provide users with an explicitly requested telemedia service (i.e., our online offering). Typically, essential cookies include cookies with functions related to the display and functionality of the online offering, load balancing, security, storage of user preferences, and choices or similar purposes related to providing the main and ancillary functions of the online offering requested by users. Revocable consent is clearly communicated to users and includes information about the specific use of cookies.',
      privacyP38: '<strong>Data Protection Legal Bases:</strong> The legal basis for processing user personal data using cookies depends on whether we ask users for consent. If users consent, the legal basis for processing their data is the declared consent. Otherwise, data processed using cookies is based on our legitimate interests (e.g., in the economic operation of our online offering and improving its usability) or, if the use of cookies is necessary to fulfill our contractual obligations, on the basis of the contract. We provide information about the purposes for which we process cookies during this data protection declaration or as part of our consent and processing processes.',
      privacyP39: '<strong>Storage Duration:</strong> Regarding the storage duration, the following types of cookies are distinguished:',
      privacyP40: '<li><strong>Temporary Cookies (also: Session or Session Cookies):</strong> Temporary cookies are deleted at the latest after a user leaves an online offering and closes their device (e.g., browser or mobile application).</li><li><strong>Permanent Cookies:</strong> Permanent cookies remain stored even after the device is closed. For example, login status can be saved, or preferred content can be displayed directly when the user revisits a website. Additionally, data collected using cookies can be used for audience measurement. If we do not provide explicit information about the type and duration of cookies (e.g., as part of obtaining consent), users should assume that cookies are permanent and may have a storage duration of up to two years.</li>',
      privacyP41: 'General Information on Revocation and Objection (Opt-Out):',
      privacyP42: 'Users can revoke their consent at any time and object to processing in accordance with legal requirements. Users can restrict the use of cookies in their browser settings (which may also limit the functionality of our online offering). An objection to the use of cookies for online marketing purposes can also be declared on the websites',
      privacyP43: 'and',
      privacyP44: '<strong>Legal Bases:</strong> Legitimate Interests (Art. 6(1)(f) GDPR), Consent (Art. 6(1)(a)GDPR).',
      privacyP45: '<br><strong>Additional Information on Processing Processes, Procedures, and Services:</strong>',
      privacyP46: '<li><strong>Processing of Cookie Data Based on Consent:</strong> We use a consent management solution to obtain, log, manage, and revoke user consent for the use of cookies or procedures and providers mentioned in the consent management solution. This process is used to obtain, log, manage, and revoke consents, particularly regarding the use of cookies and similar technologies used to store, retrieve, and process information on users devices. Within this process, user consents for the use of cookies and related information processing, including specific processing and providers mentioned in the consent management process, are obtained. Users also have the option to manage and revoke their consents. Consent declarations are stored to avoid repeated queries and to provide evidence of consent in accordance with legal requirements. Storage is done server-side and/or in a cookie (so-called opt-in cookie) or using similar technologies to associate consent with a specific user or their device. If there are no specific indications about the providers of consent management services, the following general information applies: The storage duration of consent is up to two years. A pseudonymous user identifier is created, which is stored together with the time of consent, details about the scope of consent (e.g., relevant categories of cookies and/or service providers), and information about the browser, system, and device used. <br> <span class=""><strong>Legal Bases:</strong> Consent (Art. 6(1)(a) GDPR).</span></li>',
      privacyP47: 'Provision of the Online Offering and Web Hosting',
      privacyP48: 'We process user data to provide them with our online services. For this purpose, we process the user IP address, which is necessary to transmit the contents and functions of our online services to the users browser or device.',
      privacyP49: '<li><strong>Processed Data Types:</strong> Usage Data (e.g., visited websites, interest in content, access times); Meta, communication, and process data (e.g., IP addresses, time information, identification numbers, consent status).</li><li><strong>Concerned Individuals:</strong> Users (e.g., website visitors, users of online services).</li><li><strong>Purposes of Processing:</strong> Provision of our online offering and user-friendliness; Information technology infrastructure (operation and provision of information systems and technical devices (computers, servers, etc.)); Security measures.</li><li class=""><strong>Legal Bases:</strong> Legitimate Interests (Art. 6(1)(f) GDPR).</li>',
      privacyP50: 'Additional Information on Processing Processes, Procedures, and Services:',
      privacyP51: '<li><strong>Provision of Online Offering on Rented Storage Space:</strong> For providing our online offering, we use storage space, computing capacity, and software that we rent or otherwise obtain from a corresponding server provider (also called "web hoster"); <span class=""><strong>Legal Bases:</strong> Legitimate Interests (Art. 6(1)(f) GDPR).</span></li><li><strong>Collection of Access Data and Log Files:</strong> Access to our online offering is logged in the form of so-called "server log files." Server log files may include the address and name of the accessed websites and files, date and time of access, transferred data volumes, message about successful access, browser type and version, the users operating system, referrer URL (the previously visited page), and usually IP addresses and the requesting provider. Server log files can be used, on the one hand, for security purposes, e.g., to avoid overloading servers (especially in the case of abusive attacks, so-called DDoS attacks), and on the other hand, to ensure the load and stability of the servers; <span class=""><strong>Legal Bases:</strong> Legitimate Interests (Art. 6(1)(f) GDPR).</span><strong>Data Deletion:</strong> Log file information is stored for a maximum of 30 days and then deleted or anonymized. Data required for evidence purposes is excluded from deletion until the final clarification of the respective incident.</li>',
      privacyP52: 'Contact and Inquiry Management',
      privacyP53: 'When contacting us (e.g., by post, contact form, email, telephone, or via social media) and within existing user and business relationships, the information provided by the inquiring individuals is processed as far as necessary to answer contact inquiries and any requested measures.',
      privacyP54: '<li><strong>Processed Data Types:</strong> Contact data (e.g., email, phone numbers); Content data (e.g., entries in online forms); Usage data (e.g., visited websites, interest in content, access times); Meta, communication, and process data (e.g., IP addresses, time information, identification numbers, consent status).</li><li><strong>Concerned Individuals:</strong> Communication partners.</li><li><strong>Purposes of Processing:</strong> Contact inquiries and communication; Management and response to inquiries; Feedback (e.g., collecting feedback via online form); Provision of our online offering and user-friendliness.</li><li class=""><strong>Legal Bases:</strong> Legitimate Interests (Art. 6(1)(f) GDPR), Contract Performance and Pre-contractual Inquiries (Art. 6(1)(b) GDPR).</li>',
      privacyP55: 'Additional Information on Processing Processes, Procedures, and Services:',
      privacyP56: '<li><strong>Contact Form:</strong> When users contact us via our contact form, email, or other communication channels, we process the data communicated to us in this context to handle the reported issue; <span class=""><strong>Legal Bases:</strong> Contract Performance and Pre-contractual Inquiries (Art. 6(1)(b) GDPR), Legitimate Interests (Art. 6(1)(f) GDPR).</span></li>',
      privacyP57: 'Change and Update of the Privacy Policy',
      privacyP58: 'We ask you to regularly inform yourself about the content of our privacy policy. We adjust the privacy policy as soon as changes in the data processing carried out by us make this necessary. We will inform you as soon as the changes require your cooperation (e.g., consent) or individual notification.',
      privacyP59: 'If we provide addresses and contact information of companies and organizations in this privacy policy, please note that the addresses may change over time, and we ask you to verify the information before contacting.',
      privacyP60: 'Definition of Terms',
      privacyP61: 'In this section, you will find an overview of the terms used in this privacy policy. Where the terms are legally defined, their legal definitions apply. The following explanations are primarily intended to aid understanding.',
      privacyP62: '<li><strong>Personal Data:</strong> "Personal data" refers to any information relating to an identified or identifiable natural person (hereinafter "data subject"); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier (e.g., cookie), or one or more specific characteristics expressing the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person. </li><li><strong>Controller:</strong> The term "controller" refers to the natural or legal person, public authority, agency, or other body that, alone or jointly with others, determines the purposes and means of the processing of personal data. </li><li><strong>Processing:</strong> "Processing" is any operation or set of operations performed on personal data, whether or not by automated means. The term covers virtually any handling of data, be it collecting, evaluating, storing, transmitting, or deleting. </li>',
      privacyP63: 'Created with the free Data Protection Generator.de by Dr. Thomas Schwenke',

      imprint1: 'Imprint',
      imprint2: '<b>Information and Disclosure according to &sect;5 (1) ECG, &sect; 25 MedienG, &sect; 63 GewO, and &sect; 14 UGB</b>',
      imprint3: 'Website Operator:',
      imprint4: '<b>Address:</b> Hugogasse, 1110 Vienna',
      imprint5: 'Contact Information: ',
      imprint6: '<b>Applicable Legal Regulations:</b> www.ris.bka.gv.at ',
      imprint7: 'Online Dispute Resolution:',
      imprint8: 'Consumers based in Austria or in any other contracting state of the ODR Regulation have the opportunity to resolve issues regarding the paid purchase of goods or services through online dispute resolution (according to OS, AStG). The European Commission provides a platform for this purpose:',
      imprint9: '<b>Copyright:</b> The content of this website is subject, as far as legally possible, to various protective rights (e.g., copyright). Any use/distribution of provided material that is prohibited by copyright requires the written consent of the website operator.',
      imprint10: '<b>Disclaimer:</b> Despite careful content control, the operator of this website assumes no liability for the content of external links. The operators of the linked pages are solely responsible for their content. If you become aware of outgoing links that refer to a website with illegal activity/information, please inform us promptly to remove them in accordance with &sect; 17 para. 2 ECG.<br>The copyrights of third parties are carefully observed by the operator of this website. If you nevertheless become aware of a copyright infringement, please provide appropriate notice. Upon becoming aware of such legal violations, we will promptly remove the affected content.',
      imprint11: 'in cooperation with ',


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
      bulbText: 'Als engagierter Softwareentwickler finde ich in jedem Code eine Welt voller Kreativität und Logik. Die Herausforderung, benutzerfreundliche, intuitive Oberflächen und Webanwendungen zu entwickeln, begeistert mich. Ich bin ständig bestrebt, mir neue Fähigkeiten anzueignen, um meine Kenntnisse in aufkommenden und bestehenden Technologien zu erweitern.',
      puzzleText: 'Ich habe grundlegende Erfahrungen in den wichtigsten Webtechnologien gesammelt, die ich bei der Entwicklung von Webanwendungen, sowohl unabhängig als auch in Zusammenarbeit mit einem Team.',

      skillsHeader: 'Meine Fähigkeiten',
      skillsText: 'Ich habe Erfahrung in der Entwicklung von Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.',
      skillsContact: 'Kontaktieren',

      portfolioText: 'Diese Seite, entwickelt mit Angular, ist ein Beispiel für meine Arbeit. Scrolle nach unten, um andere Projekte zu sehen, die ich entwickelt habe.',
      joinText: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstelle und organisiere Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      eplText: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Flaschen zu finden, um gegen das Megahuhn zu kämpfen.',
      pokedexText: 'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.',
      test: 'Live Test',

      contactHeadline: 'Kontakt',
      contactHeader: 'Hast du ein Problem zu lösen?',
      contactP1: 'Kontaktiere mich übder diese Formular. Ich freue mich von dir zu hören und dich mit meiner Arbeit zu deinen Projekten zu unterstützen.',
      contactPrivacyLink: 'Datenschutzerklärung',
      contactP2: 'Auf der Suche nach einem Frontend-Entwickler? <b>Kontaktiere mich!>b>',
      contactPrivacy: 'Ich habe die',
      contactPrivacy2: ' gelesen und stimme zu der Verarbeitung meiner Daten, wie beschrieben, zu.',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'Deine Email',
      messagePlaceholder: 'Deine Nachricht',
      idleButtonText: 'Senden :)',
      loadingButtonText: 'Wird gesendet...',
      successButtonText: 'Nachricht gesendet :)',

      privacyHeadline: 'Datenschutzerklärung',
      privacyPreamble: 'Vorwort',
      privacyAdress: '1110 Wien, Österreich',
      privacyP1: 'Mit der nachfolgenden Datenschutzerklärung möchten wir Sie über die Arten Ihrer personenbezogenen Daten informieren (nachfolgend auch kurz „Daten“), die wir verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Bereitstellung unserer Dienste und insbesondere auf unseren Websites, in mobilen Anwendungen und innerhalb externer Online-Präsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als „Onlineangebot“).',
      privacyP2: 'Die verwendeten Begriffe sind nicht geschlechtsspezifisch.',
      privacyP3: 'Datum: 17. März 2024',
      privacyP4: 'Ansprechperson',
      privacyP5: 'Überblick über die Verarbeitung',
      privacyP6: 'Die folgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung, bezogen auf die betroffenen Personen, zusammen.',
      privacyP7: 'Arten der verarbeiteten Daten',
      privacyP8: 'Kontaktdetails.',
      privacyP9: 'Inhaltsdaten.',
      privacyP10: 'Nutzungsdaten.',
      privacyP11: 'Meta-, Kommunikations- und Verfahrensdaten.',
      privacyP12: 'Kategorien betroffener Personen',
      privacyP13: 'Kommunikationspartner',
      privacyP14: 'Nutzer',
      privacyP15: 'Zwecke der Verarbeitung',
      privacyP16: '<li>Kontaktanfragen und Kommunikation.</li> <li>Sicherheitsmaßnahmen.</li><li>Management und Beantwortung von Anfragen.</li><li>Feedback.</li><li>Bereitstellung unseres Online-Angebots und Benutzerfreundlichkeit.</li><li>Infrastruktur der Informationstechnologie.</li>',
      privacyP17: 'Relevante Rechtsgrundlagen',
      privacyP18: '<strong>Relevante Rechtsgrundlagen gemäß DSGVO:</strong> Nachfolgend finden Sie eine Übersicht über die Rechtsgrundlagen der DSGVO, auf deren Grundlage wir personenbezogene Daten verarbeiten. Bitte beachten Sie, dass zusätzlich zu den Bestimmungen der DSGVO in Ihrem oder unserem Wohn- oder Geschäftsland nationale Datenschutzbestimmungen gelten können. Sofern im Einzelfall speziellere Rechtsgrundlagen einschlägig sind, informieren wir Sie hierüber in der Datenschutzerklärung.',
      privacyP19: '<li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</strong> – Die betroffene Person hat der Verarbeitung ihrer personenbezogenen Daten für einen oder mehrere bestimmte Zwecke zugestimmt.</li><li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 lit. b DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, oder für die erforderlich Durchführung vorvertraglicher Maßnahmen, die von der betroffenen Person gewünscht werden.</li><li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern diese Interessen nicht überwiegen durch die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern.</li>',
      privacyP20: '<strong>Nationale Datenschutzbestimmungen in Österreich:</strong> Zusätzlich zur DSGVO gibt es in Österreich nationale Datenschutzbestimmungen. Hierzu zählt insbesondere das Bundesgesetz zum Schutz des Menschen bei der Verarbeitung personenbezogener Daten (Datenschutzgesetz – DSG). Das Datenschutzgesetz enthält besondere Regelungen insbesondere zum Recht auf Auskunft, zum Recht auf Berichtigung oder Löschung, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie zur automatisierten Entscheidungsfindung im Einzelfall.',
      privacyP21: 'Sicherheitsmaßnahmen',
      privacyP22: 'Im Rahmen der gesetzlichen Vorgaben setzen wir geeignete technische und organisatorische Maßnahmen um und berücksichtigen dabei den Stand der Technik, die Implementierungskosten, die Art, den Umfang, die Umstände und Zwecke der Verarbeitung sowie die unterschiedliche Eintrittswahrscheinlichkeit und Schwere der Gefährdung die Rechte und Freiheiten natürlicher Personen. Zu diesen Maßnahmen gehört die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch die Kontrolle des physischen und elektronischen Zugriffs auf die Daten sowie des Zugriffs, der Eingabe, der Übermittlung, der Verfügbarkeit und der Trennung von Daten. Darüber hinaus haben wir Verfahren eingerichtet, um die Wahrnehmung der Betroffenenrechte, die Löschung von Daten und die Reaktion auf Datenbedrohungen sicherzustellen. Darüber hinaus berücksichtigen wir den Datenschutz bei der Entwicklung bzw. Auswahl von Hardware, Software und Verfahren und folgen dabei dem Grundsatz des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.',
      privacyP23: 'TLS/SSL-Verschlüsselung (https): Zum Schutz der über unsere Online-Dienste übertragenen Nutzerdaten nutzen wir eine TLS/SSL-Verschlüsselung. Secure Sockets Layer (SSL) ist die Standardtechnologie zur Sicherung von Internetverbindungen durch Verschlüsselung von Daten, die zwischen einer Website oder App und einem Browser (oder zwischen zwei Servern) übertragen werden. Transport Layer Security (TLS) ist eine aktualisierte und sicherere Version von SSL. Hyper Text Transfer Protocol Secure (HTTPS) wird in der URL angezeigt, wenn eine Website durch ein SSL/TLS-Zertifikat gesichert ist.',
      privacyP24: 'Übermittlung personenbezogener Daten',
      privacyP25: 'Im Rahmen unserer Verarbeitung personenbezogener Daten kann es vorkommen, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Einzelpersonen übermittelt oder offengelegt werden. Empfänger dieser Daten können Dienstleister oder Anbieter von in eine Website eingebundenen Diensten und Inhalten sein, insbesondere solche mit IT-Aufgaben. In diesen Fällen beachten wir die gesetzlichen Vorgaben und schließen mit den Empfängern Ihrer Daten entsprechende Verträge bzw. Vereinbarungen ab, die dem Schutz Ihrer Daten dienen.',
      privacyP26: 'Internationale Datenübertragungen',
      privacyP27: 'Datenverarbeitung in Drittländern: Sofern wir Daten in einem Drittland (d. h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Zusammenhang mit der Inanspruchnahme von Diensten Dritter bzw Eine Weitergabe oder Übermittlung von Daten an andere Personen, Organisationen oder Unternehmen erfolgt nur im Rahmen der gesetzlichen Bestimmungen. Sofern das Datenschutzniveau im Drittland durch einen Angemessenheitsbeschluss (Art. 45 DSGVO) anerkannt wurde, dient dieser Beschluss als Grundlage für die Datenübermittlung. Im Übrigen erfolgen Datenübermittlungen nur, soweit das Datenschutzniveau anderweitig, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO), einer ausdrücklichen Einwilligung oder im Falle einer vertraglich oder gesetzlich vorgeschriebenen Übermittlung (Art . 49 Abs. 1 DSGVO). Darüber hinaus informieren wir Sie über die Grundlage der Übermittlung in Drittländer bei jedem Anbieter aus dem Drittland, wobei Angemessenheitsbeschlüsse als Grundlage vorrangig sind. Informationen zu Drittstaatenübermittlungen und bestehenden Angemessenheitsbeschlüssen finden Sie in den Informationen der EU-Kommission:',
      privacyP28: 'EU-US Trans-Atlantic Data Privacy Framework: Im Rahmen des „Data Privacy Framework“ (DPF) hat die EU-Kommission mit dem Angemessenheitsbeschluss vom 10. Juli auch das Datenschutzniveau für bestimmte Unternehmen aus den USA als sicher anerkannt , 2023. Die Liste der zertifizierten Unternehmen und weitere Informationen zum DPF finden Sie auf der Website des US-Handelsministeriums unter',
      privacyP29: '(auf Englisch). Wir informieren Sie im Rahmen der Datenschutzhinweise darüber, welche nach dem Data Privacy Framework zertifizierten Dienstleister von uns eingesetzt werden.',
      privacyP30: 'Löschung von Daten',
      privacyP31: 'Wir löschen die von uns verarbeiteten Daten nach Maßgabe der gesetzlichen Vorgaben, sobald die zur Verarbeitung erteilten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten weggefallen ist oder sie für den Zweck nicht mehr erforderlich sind). ). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. Dies gilt beispielsweise für Daten, deren Aufbewahrung aus handels- oder steuerrechtlichen Gründen erforderlich ist oder deren Aufbewahrung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist. Darüber hinaus können unsere Datenschutzhinweise weitere Informationen zur Speicherung und Löschung von Daten enthalten, die vorrangig für die jeweilige Verarbeitung gelten.',
      privacyP32: 'Rechte der betroffenen Personen',
      privacyP33: 'Betroffenenrechte nach der DSGVO: Als betroffene Person stehen Ihnen nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO:',
      privacyP34: '<li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO erfolgt, Widerspruch einzulegen. Art. 6 Abs. 1 lit. e oder f DSGVO, einschließlich eines auf diese Bestimmungen gestützten Profilings. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</li><li><strong>Recht auf Widerruf der Einwilligung:</strong> Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen.</li><li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob personenbezogene Daten, die Sie betreffen, verarbeitet werden und ggf. auf Auskunft über diese Daten und weitere Einzelheiten gemäß den gesetzlichen Vorgaben. </li><li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht, entsprechend den gesetzlichen Vorgaben die Vervollständigung der Sie betreffenden personenbezogenen Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li><li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben das Recht, nach Maßgabe der gesetzlichen Vorgaben die unverzügliche Löschung der Sie betreffenden personenbezogenen Daten oder alternativ die Einschränkung der Verarbeitung der Daten zu verlangen .</li><li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder dies anzufordern Übermittlung dieser Daten an einen anderen Verantwortlichen entsprechend den gesetzlichen Vorgaben.</li><li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs haben Sie das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.</li>',
      privacyP35: 'Verwendung von Cookies',
      privacyP36: 'Cookies sind kleine Textdateien oder andere Speichermarkierungen, die Informationen auf Geräten speichern und Informationen von Geräten abrufen. Beispielsweise zur Speicherung des Login-Status in einem Benutzerkonto, des Warenkorbinhalts in einem E-Shop, angesehener Inhalte oder genutzter Funktionen eines Online-Angebots. Darüber hinaus können Cookies zu unterschiedlichen Zwecken eingesetzt werden, etwa zur Funktionalität, Sicherheit und zum Komfort von Online-Angeboten sowie zur Erstellung von Besucherstromanalysen.',
      privacyP37: '<strong>Einwilligungsinformationen:</strong> Wir verwenden Cookies im Rahmen der gesetzlichen Bestimmungen. Daher holen wir die vorherige Einwilligung der Nutzer ein, sofern dies nicht gesetzlich nicht erforderlich ist. Eine Einwilligung ist insbesondere dann nicht erforderlich, wenn die Speicherung und der Abruf von Informationen, einschließlich Cookies, zur Bereitstellung eines ausdrücklich gewünschten Telemediendienstes (d. h. unseres Online-Angebots) durch den Nutzer zwingend erforderlich ist. Typischerweise handelt es sich bei den notwendigen Cookies um Cookies mit Funktionen im Zusammenhang mit der Darstellung und Funktionalität des Online-Angebots, dem Lastausgleich, der Sicherheit, der Speicherung von Benutzerpräferenzen und Auswahlmöglichkeiten oder ähnlichen Zwecken im Zusammenhang mit der Bereitstellung der von Benutzern gewünschten Haupt- und Nebenfunktionen des Online-Angebots. Eine widerrufliche Einwilligung wird den Nutzern klar und deutlich mitgeteilt und beinhaltet Informationen über den konkreten Einsatz von Cookies.',
      privacyP38: '<strong>Rechtsgrundlagen zum Datenschutz:</strong> Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten der Nutzer mithilfe von Cookies hängt davon ab, ob wir die Nutzer um ihre Einwilligung bitten. Sofern der Nutzer einwilligt, ist die Rechtsgrundlage für die Verarbeitung seiner Daten die erklärte Einwilligung. Im Übrigen erfolgt die Datenverarbeitung mithilfe von Cookies auf Grundlage unserer berechtigten Interessen (z. B. am wirtschaftlichen Betrieb unseres Onlineangebotes und der Verbesserung der Benutzerfreundlichkeit) oder, sofern der Einsatz von Cookies zur Erfüllung unserer vertraglichen Pflichten erforderlich ist, auf Grundlage des Vertrages. Über die Zwecke, zu denen wir Cookies verarbeiten, informieren wir Sie im Rahmen dieser Datenschutzerklärung bzw. im Rahmen unserer Einwilligungs- und Verarbeitungsprozesse.',
      privacyP39: '<p><strong>Speicherdauer:</strong> Hinsichtlich der Speicherdauer werden folgende Arten von Cookies unterschieden:',
      privacyP40: '<li><strong>Temporäre Cookies (auch: Session- oder Session-Cookies):</strong> Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Onlineangebot verlässt und sein Gerät (z. B. Browser oder mobile Anwendung) schließt.</li><li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Geräts gespeichert. So können beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Darüber hinaus können mithilfe von Cookies erhobene Daten zur Reichweitenmessung genutzt werden. Sofern wir keine expliziten Angaben zur Art und Dauer von Cookies machen (z. B. im Rahmen der Einholung von Einwilligungen), sollten Nutzer davon ausgehen, dass Cookies dauerhaft sind und eine Speicherdauer von bis zu zwei Jahren haben können.</li>',
      privacyP41: 'Allgemeine Widerrufs- und Widerspruchshinweise (Opt-Out):',
      privacyP42: 'Nutzer können ihre Einwilligung jederzeit widerrufen und der Verarbeitung im Rahmen der gesetzlichen Vorgaben widersprechen. Nutzer können in ihren Browsereinstellungen die Verwendung von Cookies einschränken (wodurch auch die Funktionalität unseres Onlineangebotes eingeschränkt werden kann). Auch ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann auf den Webseiten erklärt werden',
      privacyP43: 'und',
      privacyP44: '<strong>Rechtsgrundlagen:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
      privacyP45: '<br><strong>Zusätzliche Informationen zu Verarbeitungsprozessen, Verfahren und Dienstleistungen:</strong>',
      privacyP46: '<li><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:</strong> Wir verwenden eine Einwilligungsverwaltungslösung, um die Einwilligung des Nutzers für die Verwendung von Cookies oder in der Einwilligungsverwaltungslösung genannten Verfahren und Anbieter einzuholen, zu protokollieren, zu verwalten und zu widerrufen . Dieses Verfahren dient der Einholung, Protokollierung, Verwaltung und dem Widerruf von Einwilligungen, insbesondere für die Verwendung von Cookies und ähnlichen Technologien zur Speicherung, zum Abruf und zur Verarbeitung von Informationen auf den Geräten der Nutzer. Im Rahmen dieses Prozesses werden die Einwilligungen der Nutzer für die Verwendung von Cookies und die damit verbundene Informationsverarbeitung eingeholt, einschließlich spezifischer Verarbeitungen und Anbieter, die im Einwilligungsverwaltungsprozess genannt werden. Nutzer haben außerdem die Möglichkeit, ihre Einwilligungen zu verwalten und zu widerrufen. Die Speicherung von Einwilligungserklärungen erfolgt zur Vermeidung wiederholter Rückfragen und zum Nachweis der Einwilligung entsprechend den gesetzlichen Anforderungen. Die Speicherung erfolgt serverseitig und/oder in einem Cookie (sog. Opt-In-Cookie) oder mittels ähnlicher Technologien, um die Einwilligung einem bestimmten Nutzer oder seinem Gerät zuzuordnen. Liegen keine konkreten Angaben zu den Anbietern von Einwilligungsmanagement-Diensten vor, gilt Folgendes allgemein: Die Speicherdauer der Einwilligung beträgt bis zu zwei Jahre. Es wird eine pseudonyme Nutzerkennung erstellt, die zusammen mit dem Zeitpunkt der Einwilligung, Angaben zum Umfang der Einwilligung (z. B. relevante Kategorien von Cookies und/oder Dienstleistern) sowie Informationen zum verwendeten Browser, System und Gerät gespeichert wird. <br> <span class=""><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</span></li>',
      privacyP47: 'Bereitstellung des Online-Angebots und Webhosting',
      privacyP48: 'Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste bereitzustellen. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die erforderlich ist, um die Inhalte und Funktionen unseres Onlineangebotes an den Browser bzw. das Gerät des Nutzers zu übermitteln.',
      privacyP49: '<li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Prozessdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).</li><li><strong>Betroffene Personen:</strong> Nutzer (z. B. Website-Besucher, Nutzer von Online-Diensten).</li><li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Online-Angebots und Benutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)); Sicherheitsmaßnahmen.</li><li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO).</li>',
      privacyP50: 'Zusätzliche Informationen zu Verarbeitungsprozessen, Verfahren und Leistungen:',
      privacyP51: '<li><strong>Bereitstellung des Online-Angebots auf angemietetem Speicherplatz:</strong> Für die Bereitstellung unseres Online-Angebots nutzen wir Speicherplatz, Rechenkapazität und Software, die wir bei einem entsprechenden Serveranbieter (auch „ Webhoster"); <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO).</span></li><li><strong>Erhebung von Zugriffsdaten und Protokolldateien:</strong> Der Zugriff auf unser Online-Angebot wird in Form sogenannter „Server-Logfiles“ protokolliert. Zu den Serverlogfiles können Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer-URL (die zuvor besuchte Seite), und in der Regel IP-Adressen und der anfragende Provider. Server-Logfiles können einerseits zu Sicherheitszwecken genutzt werden, um z.B. eine Überlastung von Servern zu vermeiden (insbesondere bei missbräuchlichen Angriffen, sogenannten DDoS-Angriffen), andererseits um die Auslastung und Stabilität sicherzustellen der Server; <span class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO).</span><strong>Datenlöschung:</strong> Protokolldateiinformationen werden maximal 30 Tage lang gespeichert und anschließend gelöscht oder anonymisiert. Daten, die zu Beweiszwecken benötigt werden, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</li>',
      privacyP52: 'Kontakt- und Anfragemanagement',
      privacyP53: 'Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder über soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die von den anfragenden Personen gemachten Angaben verarbeitet, soweit dies zur Beantwortung von Kontaktanfragen und etwaigen angefragten Maßnahmen erforderlich ist .',
      privacyP54: '<li><strong>Verarbeitete Datentypen:</strong> Kontaktdaten (z. B. E-Mail, Telefonnummern); Inhaltsdaten (z. B. Eingaben in Online-Formularen); Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Prozessdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).</li><li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li><li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback per Online-Formular); Bereitstellung unseres Online-Angebots und Benutzerfreundlichkeit.</li><li class=""><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO), Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 lit. b DSGVO). ).</li>',
      privacyP55: 'Zusätzliche Informationen zu Verarbeitungsprozessen, Verfahren und Leistungen:',
      privacyP56: '<li><strong>Kontaktformular:</strong> Wenn Nutzer uns über unser Kontaktformular, E-Mail oder andere Kommunikationskanäle kontaktieren, verarbeiten wir die uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des gemeldeten Anliegens; <span class=""><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 lit. b DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO). ).</span></li>',
      privacyP57: 'Änderung und Aktualisierung der Datenschutzrichtlinie',
      privacyP58: 'Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald die Änderungen Ihre Mitwirkung (z. B. Einwilligung) oder eine individuelle Benachrichtigung erfordern.',
      privacyP59: 'Wenn wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, beachten Sie bitte, dass sich die Adressen im Laufe der Zeit ändern können und wir Sie bitten, die Informationen vor einer Kontaktaufnahme zu überprüfen.',
      privacyP60: 'Begriffsdefinitionen',
      privacyP61: 'In diesem Abschnitt finden Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die Begriffe gesetzlich definiert sind, gelten deren rechtliche Definitionen. Die folgenden Erläuterungen dienen in erster Linie dem Verständnis.',
      privacyP62: '<li><strong>Personenbezogene Daten:</strong> „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; Eine identifizierbare natürliche Person ist eine natürliche Person, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z. B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann die physische, physiologische, genetische, psychische, wirtschaftliche, kulturelle oder soziale Identität dieser natürlichen Person. </li><li><strong>Verantwortlicher:</strong> Der Begriff „Verantwortlicher“ bezeichnet die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von Daten entscheidet persönliche Daten. </li><li><strong>Verarbeitung:</strong> „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff umfasst nahezu jeden Umgang mit Daten, sei es das Erheben, Auswerten, Speichern, Übermitteln oder Löschen. </li>',
      privacyP63: 'Erstellt mit dem kostenlosen Datenschutz-Generator.de von Dr. Thomas Schwenke',

      imprint1: 'Impressum',
      imprint2: '<b>Informationen und Offenlegung gemäß § 5 (1) ECG, &sect; § 25 MedienG, &sect; 63 GewO und &sect; 14 UGB</b>',
      imprint3: 'Websitebetreiber:',
      imprint4: '<b>Addresse:</b> Hugogasse, 1110 Wien',
      imprint5: 'Kontakt: ',
      imprint6: '<b>Anwendbare gesetzliche Bestimmungen:</b> www.ris.bka.gv.at',
      imprint7: 'Online-Streitbeilegung:',
      imprint8: 'Verbraucher mit Sitz in Österreich oder in einem anderen Vertragsstaat der ODR-VO haben die Möglichkeit, Fragen im Zusammenhang mit dem entgeltlichen Kauf von Waren oder Dienstleistungen im Wege der Online-Streitbeilegung (gemäß OS, AStG) zu klären. Die Europäische Kommission stellt hierfür eine Plattform bereit:',
      imprint9: '<b>Urheberrecht:</b> Der Inhalt dieser Website unterliegt, soweit gesetzlich möglich, verschiedenen Schutzrechten (z. B. Urheberrecht). Jede urheberrechtlich unzulässige Nutzung/Verbreitung des zur Verfügung gestellten Materials bedarf der schriftlichen Zustimmung des Websitenbetreibers.',
      imprint10: '<b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Betreiber dieser Website keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Ihnen ausgehende Links bekannt werden, die auf eine Website mit rechtswidrigen Aktivitäten/Informationen verweisen, informieren Sie uns bitte umgehend, damit wir diese gemäß Abschnitt 3.1 entfernen können. 17 Abs. 2 ECG.<br>Die Urheberrechte Dritter werden vom Betreiber dieser Website sorgfältig beachtet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir die entsprechenden Inhalte umgehend entfernen.',
      imprint11: 'in Kooperation mit ',

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

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  getTranslation(key: keyof Translation): string {
    return this.translations[this.currentLanguage][key] || key;
  }
}
