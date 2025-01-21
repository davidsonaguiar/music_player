import {ComponentProps} from "react"

function Button(props: ComponentProps<"button">) {
  const { children, ...rest } = props
  return(
    <button className="aspect-square p-2 hover:bg-gray-50/10 rounded text-white" {...rest}>
      {children}
    </button>
  );
}

export default Button;