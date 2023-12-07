var aws = require("aws-sdk");
var multer = require("multer");
var multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: "LAvBsv3n970qGGIDDL5TjfKpcoWyDy77iyDQYQeR",
  accessKeyId: "AKIAZIE3H4OV6BKBL4F4",
  region: "us-east-2",
});

var s3 = new aws.S3();

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "photoapp-rivermu-cs310",
    metadata: function (req, file, cb) {
      console.log(req.body);
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

module.exports = { upload };
