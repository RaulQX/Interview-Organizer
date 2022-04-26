import { Box, Button, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
const CompanyButton = ({ name, index, moveLeft, moveRight }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				outline: '1px solid #fff',
				margin: '1rem',
				borderRadius: '0.5rem',
			}}
		>
			{index !== 0 && (
				<Button
					variant="outlined"
					color="secondary"
					onClick={() => {
						moveLeft(name, index)
					}}
					sx={{
						maxWidth: '30px',
						maxHeight: '30px',
						minWidth: '30px',
						minHeight: '30px',
						marginLeft: '1rem',
					}}
				>
					<ArrowBackIcon fontSize="small" />
				</Button>
			)}
			<Typography
				variant="h6"
				color="#fff"
				textAlign="center"
				margin={(0, 3)}
			>
				{name}
			</Typography>
			{index !== 3 && (
				<Button
					variant="outlined"
					color="secondary"
					onClick={() => {
						moveRight(name, index)
					}}
					sx={{
						maxWidth: '30px',
						maxHeight: '30px',
						minWidth: '30px',
						minHeight: '30px',
						marginRight: '1rem',
					}}
				>
					<ArrowForwardIcon fontSize="small" />
				</Button>
			)}
		</Box>
	)
}
export default CompanyButton
