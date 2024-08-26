import inquirer from 'inquirer';
import fs from 'node:fs';
import qr from "qr-image";
 


inquirer
  .prompt([
    {"message":"enter url for qr to be generated:",
        "name":"url"
    }
  ])
  .then((answers) => {
    const URL=answers.url;
    fs.writeFile("url.txt",URL,err=>{
        if(err){
            throw err;
        }
        console.log("file saved");

    })
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      // Something else went wrong
    }
  });