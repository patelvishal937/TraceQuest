import aws from "aws-sdk"
import multer from "multer"
import multerS3 from "multer-s3"

// import OfferModel from "../models/offerModel.js";

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

export const upload =
  multer({
    storage: multerS3({
      s3,
      bucket: "trakky-new",
    contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `image-${Date.now()}.jpeg`);
      },
    }),
  })
;


 
export default {upload};