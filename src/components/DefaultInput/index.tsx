import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
  placeholder?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  placeholder,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label htmlFor={id}>{labelText ? labelText : "Label"}</label>
      )}
      <input
        className={styles.input}
        type={type}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
