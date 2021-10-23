import { ManyText } from "./ManyText"
import { Text } from "./Text"
import { Table } from "./Table"
export const App = () => {

	return (
		<>
			<div className="center col-lg-12">
				<h1 className="text-center">
					ПОРТФОЛИО
				</h1>

			</div>
			<div className="center row col-lg-12">
				<div className="col-lg-3 ">
					<Table value="Нюша" amountBox={5} amountRow={20} />
				</div>
				<div className="col-lg-7">
					<img src="http://earthporm.com/wp-content/uploads/2015/06/pallas-cat-manul-20__880.jpg" alt="cat" />
				</div>
				<div className="col-lg-3">
					<Table value="Нюша" amountBox={5} amountRow={20} />
				</div>
			</div >
			<div className="center col-lg-12 row">
				<Table value="Нюша" amountBox={23} amountRow={1000} />
			</div>
		</>
	)
}