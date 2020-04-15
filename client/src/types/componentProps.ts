export default interface IComponentProps {
  className?: string
  style?: object
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void
}
