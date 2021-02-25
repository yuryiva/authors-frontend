import React from "react";
import PreOrderForm from "../preOrderForm/PreOrderForm";
import GetInTouchForm from "../getInTouchForm/GetInTouchForm";
import TellStoryForm from "../tellStoryForm/TellStoryForm";

export default function ShortStories() {
  return (
    <div>
      <h3>This is the Short stories page</h3>
      <hr />

      <TellStoryForm />

      <hr />
      <GetInTouchForm />
      <hr />

      <PreOrderForm />
    </div>
  );
}
