interface Props {
  text: string;
}

function Author({ text }: Props) {
  return(
    <h2 className="w-full text-center sm:text-left text-textSecondary text-xl block">
      { text }
    </h2>
  );
}

export default Author;