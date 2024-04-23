import puppeteer from "puppeteer";
import { AddDelay, compareImages } from "./Utils.js";
import path from "path";

export const Showroom3dTest = async () => {
    // const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.setViewport({ width: 1550, height: 700 });
        await page.goto('https://viscommerce.com/showroom3d_desktop/', { timeout: 25000 });
        console.log('Showroom3D Webapp Loaded !');

        await page.waitForSelector('.home_card_container');
        await page.click('#home_card_close_Desktop');

        await AddDelay(10 * 1000);
        
        await page.click('#load_Furniture_Desktop') ; 
        
        await AddDelay(10 * 1000);
        
        await page.click('#load_Lighting_Desktop') ; 
        
        await AddDelay(10 * 1000);
        
        await page.click('#load_Accessories_Desktop') ; 

        await AddDelay(30 * 1000);
        
        await page.screenshot({ path: path.join(path.resolve(), 'src/Captures/Now/Showroom3dHome.png'), fullPage: true, timeout: 30000 });
        console.log('Screenshort-Catured!');

        compareImages(`${path.join(path.resolve(), 'src/Captures/Expected/Showroom3dHome.png')}`, `${path.join(path.resolve(), 'src/Captures/Now/Showroom3dHome.png')}`, `${path.join(path.resolve(), 'src/Captures/Diff/Showroom3dHome.png')}`);

        console.log('Compared');
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await browser.close();
    }
}