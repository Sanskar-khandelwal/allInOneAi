"use client";
import React from "react";
import { useToast } from "../ui/use-toast";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import Image, { getImageProps } from "next/image";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { dataUrl } from "@/lib/utils";
import { getImageSize } from "@/lib/utils";

type MediaUploaderProps = {
 onValueChange: (value: string) => void;
 setImage: React.Dispatch<any>;
 publicId: string;
 image: any;
 type: string;
};

const MediaUploader = ({
 onValueChange,
 setImage,
 image,
 publicId,
 type,
}: MediaUploaderProps) => {
 const { toast } = useToast();
 const onUploadSuccessHandler = (result: any) => {
  setImage((prevState: any) => ({
   ...prevState,
   publicId: result?.info?.public_id,
   width: result?.info?.widht,
   height: result?.info?.height,
   secureUrl: result?.info?.secureUrl,
  }));
  onValueChange(result?.info?.public_id);
  toast({
   title: "Image Uploaded sucessfully 🚀",
   description: "1 Credit deducted from your account 💸",
   duration: 5000,
   className: "success-toast",
  });
 };
 const onUploadErrorHandler = (result: any) => {
  toast({
   title: "Something went wrong try again later",
   description: "Please try again",
   duration: 5000,
   className: "error-toast",
  });
 };
 return (
  <CldUploadWidget
   uploadPreset="allinoneai"
   options={{ multiple: false, resourceType: "image" }}
   onSuccess={onUploadSuccessHandler}
   onError={onUploadErrorHandler}
  >
   {({ open }) => (
    <div className="flex flex-col gap-4 ">
     <h3 className="h3-bold text-dark-600"></h3>
     {publicId ? (
      <>
       <div className="cursor-pointer overflow-hidden rounded-10px">
        <CldImage
         width={getImageSize(type, image, "width")}
         height={getImageSize(type, image, "height")}
         src={publicId}
         alt="image"
         sizes={"(max-width: 767px) 100vw 50vw"}
         className={"media-uploader_cldImage"}
         placeholder={dataUrl as PlaceholderValue}
        />
       </div>
      </>
     ) : (
      <>
       <div className="media-uploader_cta" onClick={() => open()}>
        <div className="media-uploader_cta-image">
         <Image
          src="/assets/icons/add.svg"
          alt="Add Image"
          width={24}
          height={24}
         />
        </div>
        <p className="p-14-medium">Click here to upload image</p>
       </div>
      </>
     )}
    </div>
   )}
  </CldUploadWidget>
 );
};

export default MediaUploader;
