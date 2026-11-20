type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export default function DefaultInput({
  type,
  labelText,
  id,
}: DefaultInputProps) {
  return (
    <>
      {labelText ? <label htmlFor={id}>{labelText}</label> : null}
      <input type={type} id={id} />
    </>
  );
}
