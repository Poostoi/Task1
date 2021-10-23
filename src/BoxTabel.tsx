interface IProps {
	value: string;
}
export const BoxTabel = ({ value }: IProps) => {

	return (
		<td className="text">{value}</td>
	)
}