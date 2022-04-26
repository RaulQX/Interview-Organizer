import {
	Box,
	Divider,
	Paper,
	Typography,
	PaginationItem,
	Button,
} from '@mui/material'
import CompanyButton from './CompanyButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'
const CompanyListItem = ({
	status,
	companyList,
	index,
	moveLeft,
	moveRight,
}) => {
	const [currentPage, setCurrentPage] = useState(1)

	const shortCompanyList = companyList.slice(
		(currentPage - 1) * 5,
		5 * currentPage
	)

	return (
		<Box
			sx={{
				display: 'flex',
				flexGrow: 1,
				width: '100%',
				height: '86vh',
			}}
		>
			<Paper
				elevation={24}
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'flex-start',
						flexDirection: 'column',
					}}
				>
					<Typography
						variant="h5"
						bold
						color="#fff"
						textAlign="center"
						margin="0.8rem"
					>
						{status}
					</Typography>
					<Divider sx={{ background: '#fff', margin: '2rem, 0' }} />
					<Box sx={{ mt: 1 }}>
						{shortCompanyList.map((company) => (
							<CompanyButton
								name={company}
								index={index}
								moveLeft={moveLeft}
								moveRight={moveRight}
							/>
						))}
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexgrow: '1',
						justifyContent: 'space-between',
						mb: '1rem',
					}}
				>
					<Button
						disabled={currentPage === 1}
						onClick={() => setCurrentPage(currentPage - 1)}
					>
						<ArrowBackIosNewIcon
							color={currentPage === 1 ? 'primary' : 'secondary'}
						/>
					</Button>
					<Button
						disabled={
							currentPage !==
							Math.ceil(companyList.length / 5) - 1
						}
						onClick={() => setCurrentPage(currentPage + 1)}
					>
						<ArrowForwardIosIcon
							color={
								currentPage !==
								Math.ceil(companyList.length / 5) - 1
									? 'primary'
									: 'secondary'
							}
						/>
					</Button>
				</Box>
			</Paper>
		</Box>
	)
}

export default CompanyListItem
