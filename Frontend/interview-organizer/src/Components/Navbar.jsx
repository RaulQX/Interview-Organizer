import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Link } from '@mui/material'
import { useState } from 'react'

const account = ['Profile', 'Dashboard', 'Past Interviews', 'Logout']

const Navbar = () => {
	const [anchorElUser, setAnchorElUser] = useState(null)

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position="static" sx={{ backgroundColor: '#25082f' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link href="/" underline="none" color="#fff">
						<Typography variant="h6" noWrap component="div">
							Interview Organizer
						</Typography>
					</Link>
					<Box
						sx={{
							display: 'flex',
							flexGrow: 1,
							justifyContent: 'center',
							ml: 30,
						}}
					>
						<Typography variant="h6">
							Organizing today for a better tomorrow
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexGrow: 0,
							justifyContent: 'flex-end',
						}}
					>
						<Tooltip title="Account">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar alt="Remy Sharp" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{account.map((accountItem) => (
								<Link
									href={`/${accountItem}`}
									key={accountItem}
									underline="hover"
								>
									<MenuItem
										key={accountItem}
										onClick={handleCloseUserMenu}
									>
										<Typography
											textAlign="center"
											color="#fff"
										>
											{accountItem}
										</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Navbar
