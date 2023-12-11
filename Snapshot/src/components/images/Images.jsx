import React, {useState, useEffect} from 'react'



const Images = ({ selectType }) => {
  const [files, setFiles] = useState([
    {
      image: "./3FC8754C-F781-45CE-A93B-A000DD6F0F8F.jpeg",
      type: "mountain",
    },
    {
      image: "./4DFAC865-3DF9-4A7C-8A9C-3947962C8698.jpeg",
      type: "flowers",
    },
    {
      image: "./67D44949-9C73-4F32-B95A-E4AB1D5C9519.jpeg",
      type: "anime",
    },
    {
      image: "./99C5416F-923E-4D2B-A8E2-1553327550AE_1_105_c.jpeg",
      type: "mountain",
    },
    {
      image: "./381F9CB3-2997-4A30-A42F-727173073084_4_5005_c.jpeg",
      type: "flowers",
    },
    {
      image: "./514C6FA5-9584-4721-9FD5-F64506CA1E94_4_5005_c.jpeg",
      type: "anime",
    },
    {
      image: "./343452E6-F4DF-4A64-BC57-05F7F969318F.jpeg",
      type: "mountain",
    },
    {
      image: "./A0BBAB34-57C2-40E6-A129-B5460A191189_4_5005_c.jpeg",
      type: "flowers",
    },
    {
      image: "./A2349A4B-638C-46AB-89FE-906520AC3327_4_5005_c.jpeg",
      type: "flowers",
    },
    {
      image: "./B7CF295E-FC5B-4E28-A714-2C17C042DECA.jpeg",
      type: "anime",
    },
    {
      image: "./C055A53D-406C-40A1-BEFE-311D2DF8E3E5_1_102_o.jpeg",
      type: "flowers",
    },
    {
      image: "./DAE59FAA-F0E4-4336-9AD1-FBAD2F8DB60D_4_5005_c.jpeg",
      type: "mountain",
    },
    {
      image: "./DC7E107F-E198-4B44-8C36-03BF7A1EE721.jpeg",
      type: "mountain",
    },
    {
      image: "./E2697EE4-20B1-45DE-B20F-D4DFE35B1807_1_105_c.jpeg",
      type: "anime",
    },
    {
      image: "./F3343867-6CB8-489B-999A-DCFC3377F4BA_4_5005_c.jpeg",
      type: "flowers",
    },
    {
      image: "./F6333989-80BF-4976-A845-628BC7353ECF.jpeg",
      type: "anime",
    },
  ]);

  useEffect(() => {
    const importImages = async () => {
      const filesWithImages = await Promise.all(
        files.map(async (file) => {
          const module = await import(`${file.image}`);
          return { ...file, image: module.default };
        })
      );
      setFiles(filesWithImages);
    };

    importImages();
  }, [files]);

  return (
    <div className="images-container">
      {files
        .filter((file) => selectType === "all" || file.type === selectType)
        .map((file, index) => (
          <div key={index} className="photo-box">
            <div className="image-container">
              <img src={file.image} alt={index} className="photo" />
            </div>
          </div>
        ))}
    </div>
  );
};


export default Images;