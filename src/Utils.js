export const AddDelay = (time) =>{
    return new Promise((resolve , _ )=>{
        setTimeout( resolve ,  time ) ; 
    })
}

import * as fs from 'fs' ; 
import { PNG } from 'pngjs';
import Pixelmatch from 'pixelmatch';

export const compareImages = ( imagePath1 , imagePath2 , imagePath3 ) =>{
    const img1 = PNG.sync.read(fs.readFileSync(imagePath1)) ; 
    const img2 = PNG.sync.read(fs.readFileSync(imagePath2)) ; 

    const { width , height } = img1 ; 
    const diff = new PNG({width, height});

    const val = Pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});
    console.log(val);

    fs.writeFileSync( imagePath3 , PNG.sync.write(diff));

    console.log('Percentage Of Mismatch : ' , (val/(width*height))*100 , '%') ; 

    return val ; 
}

