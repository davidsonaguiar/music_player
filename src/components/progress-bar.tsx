import {ComponentProps} from "react";

function ProgressBar(props: ComponentProps<"progress">) {
  return(
    <progress className="w-full h-2" {...props} />
  );
}

export default ProgressBar;