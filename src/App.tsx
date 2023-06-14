import { useState, ChangeEvent, useRef } from "react";
import Icon from "./components/icon";
import domtoimage from "dom-to-image";
import Footer from "./components/footer";

const defaultImage = "https://i.hizliresim.com/a4dyws6.png";

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(defaultImage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = e.target.value;
    setImage(imageUrl || defaultImage);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDownload = () => {
    if (sectionRef.current) {
      const imageElement = sectionRef.current.querySelector("img");
      if (imageElement) {
        domtoimage.toPng(sectionRef.current).then(function (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "caps.png";
          link.click();
        });
      }
    }
  };

  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen w-full bg-gray-100">
      <div className="max-w-[350px] w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <section ref={sectionRef}>
          <div className="w-[350px] h-[350px]">
            <div className="relative pb-[100%]">
              {image ? (
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={image}
                  alt="Kullanmak İstediğiniz Fotoğrafın Linkini Yerleştiriniz"
                  onLoad={() => console.log("Image loaded")}
                  onError={() => console.log("Image load error")}
                />
              ) : null}
            </div>
          </div>
          <div className="h-14 w-[350px] bg-browser-dark flex items-center p-2 relative">
            <input
              type="text"
              placeholder="Metin giriniz."
              value={text}
              onChange={handleTextChange}
              className="h-10 w-full text-center shrink-0 text-ellipsis bg-browser-ui placeholder:text-white/50 outline-none rounded-lg px-10 text-sm text-white"
            />
            <span className="absolute inset-y-0 left-0.5 flex items-center pl-4">
              <Icon name="Aa" width={18} height={15} />
            </span>
            <span className="absolute inset-y-0 right-0.5 flex items-center pr-4">
              <Icon name="Reload" height={18} width={15} />
            </span>
          </div>
        </section>
        <div className="flex flex-col p-5">
          <input
            type="text"
            placeholder="Resim URL'si giriniz."
            className="h-10 bg-gray-100 placeholder:text-center placeholder-gray-400 outline-none rounded-lg px-4 text-sm text-gray-800 mb-2"
            onChange={handleImageChange}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <label
            htmlFor="image-upload"
            className="h-10 w-full bg-gray-200 flex items-center justify-center rounded-lg cursor-pointer text-sm text-gray-700 mb-2"
            onClick={handleFileSelect}
          >
            Dosya Seçin
          </label>
          <button
            className="h-10 w-full bg-indigo-500 text-white rounded-lg text-sm font-medium"
            onClick={handleDownload}
          >
            İndir
          </button>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 max-w-[340px] text-center">
        Görsel temsilidir. İstediğiniz görseli yükleyerek veya url ile kullanabilirsiniz.
      </span>
      <Footer />
    </main>
  );
}

export default App;
