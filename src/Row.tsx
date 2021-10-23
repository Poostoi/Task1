import { BoxTabel } from "./BoxTabel"

interface IProps {
	valueRow: string;
	amount: number;
}

export const RowTabel = ({ valueRow, amount }: IProps) => {
	let elements = Array.from(Array(amount).keys()).map(() =>
		<BoxTabel value={valueRow} />
	)
	return (
		<tr>
			{elements}
		</tr>
	)
}