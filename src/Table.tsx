import { RowTabel } from "./Row"

interface IProps {
	value: string;
	amountRow: number;
	amountBox: number;
}

export const Table = ({ value, amountBox, amountRow }: IProps) => {
	let elements = Array.from(Array(amountRow).keys()).map(() =>
		<RowTabel valueRow={value} amount={amountBox} />
	)
	return (
		<table>
			{elements}
		</table>
	)

}