interface Props {
  text: string;
}

function Title({ text }: Props) {
  return(
    <h1 className="w-full text-center sm:text-left text-text text-2xl font-bold block">
      { text }
    </h1>
  );
}

export default Title;