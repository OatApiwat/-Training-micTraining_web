const express = require("express");
const router = express.Router();
const constant = require("./../constant/constant");
const formidable = require("formidable");
const fs = require("fs");

//import model 
const videoForm = require("./../model/videoForm");

router.post("/VideoUpload", async (req, res) => {

    try {
        const form = new formidable.IncomingForm();
        form.parse(req, async (error, fields, files) => {
            console.log("==== error==== : " + JSON.stringify(error));
            console.log("==== Fields ==== : " + JSON.stringify(fields));
            console.log("**** Files **** : " + JSON.stringify(files));

            const { selectedCourseName, TrainingDate, FinishDate } = fields

            var data = {}
            if (files.FileDetail == undefined) {
                data = {
                    selectedCourseName, TrainingDate, FinishDate

                }
                await videoForm.create(data);
            } else {
                data = {
                    selectedCourseName, TrainingDate, FinishDate,
                    fileType: files.FileDetail.type,
                    FileDetail: await fs.readFileSync(files.FileDetail.path),

                }
                await videoForm.create(data);
                fs.unlinkSync(files.FileDetail.path);
            }
            res.json({
                // result,
                api_result: constant.resultOK,
            });
        })
    } catch (error) {
        console.log("=======error=======");
        res.json({
            api_result: constant.resultNOK,
            error,
        });
    }
})









module.exports = router;