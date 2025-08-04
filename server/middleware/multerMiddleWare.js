import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Hadle __dirname Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads"));
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = `HP${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /Jpeg|jpg|png|webp/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(
    new Error(
      "Error: file upload only supports the following filetypes - jpeg, jpg, png, webp"
    )
  );
};

const upload = multer({ storage, fileFilter });

export const uploadFile = upload.single("file");
