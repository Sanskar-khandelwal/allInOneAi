import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "../../../../../../constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { getUserById } from "../../../../../../lib/actions/user.actions";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const user = await getUserById("1234");
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
