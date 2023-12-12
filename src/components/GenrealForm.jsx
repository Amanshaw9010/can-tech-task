import React from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import FromDropdown from "./FromDropdown";
import FromTitle from "./FromTitle";

const GenrealForm = () => {
  let dropDown1 = [
    { name: "Less Than 1 Year" },
    { name: "0 Year" },
    { name: "Currently a Collage Student" },
  ];

  return (
    <>
      <div className="mb-8">
        <FromTitle
          title="Basic Information"
          subTitle=" We value your privacy. We'll never share your information with anyone
        else."
        />
      </div>

      <div className="h-3/4  w-full">
        <form action="#" className="flex flex-col gap-4">
          <div className="flex items-start flex-col gap-2">
            <Label id="Name" name="Your Name" />

            <Input labelId="Name" placeHolder="Name" />
          </div>
          <div className="flex items-start flex-col gap-2">
            <Label id="Mobile" name="Mobile Number" />

            <Input labelId="Mobile" placeHolder="Enter Your Number" />
          </div>
          <div className="flex items-start flex-col gap-2">
            {" "}
            <Label id="email" name="Email Address" />
            <Input labelId="email" placeHolder="Enter Your Email" />
          </div>
          <div className="flex items-start flex-col gap-2">
            {" "}
            <Label id="work" name="Work Experience" />
            <FromDropdown data={dropDown1} />
          </div>
          <div className="flex items-start flex-col gap-2">
            {" "}
            <Label id="Intersted" name="I'm Interested" />
            <FromDropdown data={dropDown1} />
          </div>

          <div className="mt-4">
            <Button text="Next" icon="next"/>
          </div>
        </form>
      </div>
    </>
  );
};

export default GenrealForm;
