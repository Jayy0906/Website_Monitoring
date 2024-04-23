import path from "path";
import { CollaborationTest } from "./Collab.js";
import { sendNewUserMail } from "./Mailer.js";
import { WebsiteDemosPage, WebsiteTest } from "./Website.js";
import { Showroom3dTest } from "./showroom.js";
import { Data } from "./Data.js";

const TestSequence = async () => {
    await WebsiteTest();
    await WebsiteDemosPage() ; 
    await Showroom3dTest() ; 
    await CollaborationTest();

    console.log( Data ) ; 
    sendNewUserMail(
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Expected/WebsiteHomePage.png')}`,
            cid: 'unique1@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Now/WebsiteHomePage.png')}`,
            cid: 'unique2@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Diff/WebsiteHomePage.png')}`,
            cid: 'unique3@nodemailer.com'
        },
        Data.Website
    );

    sendNewUserMail(
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Expected/WebsiteDemosPage.png')}`,
            cid: 'unique1@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Now/WebsiteDemosPage.png')}`,
            cid: 'unique2@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Diff/WebsiteDemosPage.png')}`,
            cid: 'unique3@nodemailer.com'
        },
        Data.DemosPage
    );

    sendNewUserMail(
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Expected/Showroom3dHome.png')}`,
            cid: 'unique1@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Now/Showroom3dHome.png')}`,
            cid: 'unique2@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Diff/Showroom3dHome.png')}`,
            cid: 'unique3@nodemailer.com'
        },
        Data.Showroom
    );

    sendNewUserMail(
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Expected/homepage.png')}`,
            cid: 'unique1@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Now/homepage.png')}`,
            cid: 'unique2@nodemailer.com'
        },
        {
            filename: 'homepage.png',
            path: `${path.join(path.resolve(), 'src/Captures/Diff/homepage.png')}`,
            cid: 'unique3@nodemailer.com'
        },
        Data.Collaboration
    );
}

TestSequence(); 