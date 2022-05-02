import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
	Link,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box } from '@mui/material'

const SignUp = () => {
	return (
		<Container component="main" maxWidth={'xs'}>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					bgcolor: '#2d073d',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography
					component="h1"
					variant="h5"
					color={'#fff'}
					mb="1rem"
				>
					{' '}
					Sign Up!
				</Typography>
				<Grid container spacing={2} padding="1rem" mb="2rem">
					<Grid item xs={12}>
						<TextField
							name="username"
							required
							fullWidth
							id="userName"
							label="Username"
							sx={{
								background: '#692992',
								borderRadius: '5px',
								input: { color: '#fff' },
								label: { color: '#fff' },
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="email"
							name="email"
							label="Email Address"
							sx={{
								background: '#692992',
								borderRadius: '5px',
								input: { color: '#fff' },
								label: { color: '#fff' },
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							sx={{
								background: '#692992',
								borderRadius: '5px',
								input: { color: '#fff' },
								label: { color: '#fff' },
							}}
						/>
					</Grid>
				</Grid>
				<Grid container justifyContent={'flex-end'} mb="2rem">
					<Grid item xs={4}>
						<Button
							type="submit"
							variant="contained"
							sx={{ mb: 2 }}
						>
							Sign Up
						</Button>
					</Grid>
					<Grid item xs={9}>
						<Link href="login" variant="body2">
							Already have an account? Sign in
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default SignUp
