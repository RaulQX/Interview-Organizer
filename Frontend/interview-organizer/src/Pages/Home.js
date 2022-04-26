import { Container, Grid, Paper } from '@mui/material'
import CompanyListItem from '../Components/CompanyListItem'
import { useState } from 'react'

const dummyCompanyList1 = ['Company 1', 'Company 2', 'Company 3']
const dummyCompanyList2 = ['Company 4', 'Company 5', 'Company 6']
const dummyCompanyList3 = ['Company 7', 'Company 8', 'Company 9']
const dummyCompanyList4 = ['Company 10', 'Company 11', 'Company 12']

const dummyLists = [
	dummyCompanyList1,
	dummyCompanyList2,
	dummyCompanyList3,
	dummyCompanyList4,
]

const statusList = ['Interested In', 'Applied For', 'Interviewed', 'Got Offer']

const Home = () => {
	const [companyLists, setCompanyLists] = useState([
		dummyCompanyList1,
		dummyCompanyList2,
		dummyCompanyList3,
		dummyCompanyList4,
	])

	const moveRight = (companyName, statusIndex) => {
		const newLists = [...companyLists]
		newLists[statusIndex].splice(
			newLists[statusIndex].indexOf(companyName),
			1
		)
		newLists[statusIndex + 1].push(companyName)
		setCompanyLists(newLists)
	}

	const moveLeft = (companyName, statusIndex) => {
		const newLists = [...companyLists]
		newLists[statusIndex].splice(
			newLists[statusIndex].indexOf(companyName),
			1
		)
		newLists[statusIndex - 1].push(companyName)
		setCompanyLists(newLists)
	}

	return (
		<Container maxWidth="100%">
			<Paper
				sx={{
					background: '#2d073d',
					mt: 3,
					width: '100%',
					display: 'flex',
					flexGrow: 1,
					padding: 0,
				}}
				elevation={10}
			>
				<Grid container spacing={2}>
					{statusList.map((status, index) => (
						<Grid item xs={3} key={index}>
							<CompanyListItem
								status={status}
								companyList={companyLists[index]}
								index={index}
								moveLeft={moveLeft}
								moveRight={moveRight}
							/>
						</Grid>
					))}
				</Grid>
			</Paper>
		</Container>
	)
}

export default Home
