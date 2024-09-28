'use client'
import Container from '@mui/material/Container'
import Grid2 from '@mui/material/Grid2'
import { Typography, backdropClasses } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Icon } from '@iconify-icon/react'	//kar nemikone
import { BxBell, BxGridAlt, BxMoon, EmojioneFlagForIran, BxCalendar, BxCheckShield, BxCog, BxFoodMenu, BxHelpCircle, BxPieChartAlt2, BxPlusCircle, BxUser, BxWindowOpen, EmojioneFlagForFrance, EmojioneFlagForGermany, EmojioneFlagForPortugal, EmojioneFlagForUsOutlyingIslands, BxCreditCard, BxDollar, BxEnvelopeOpen, BxPowerOff, BxSupport } from './Panel/Icons/icons'
import BxSearchAlt from './Panel/Icons/icons'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import Button from '@mui/material/Button'

const Header = () => {
	const StyleBadge = styled(Badge)(({ theme }) => ({
		'& .MuiBadge-badge': {
			border: '2px solid white',
			borderRadius: '50%',
			width: '0.75rem',
			height: '0.75rem',
			backgroundColor: '#39da8a'
		}
	}))

	const [anchorEl_lang, setAnchorEl_lang] = React.useState(null)
	const [anchorEl_Alt, setAnchorEl_Alt] = React.useState(null)
	const openlang = Boolean(anchorEl_lang)
	const openalt = Boolean(anchorEl_Alt)
	const langclickhandle = (e: any) => {
		setAnchorEl_lang(e.currentTarget)
	}
	const langclosehandle = () => {
		setAnchorEl_lang(null)
	}
	const altclickhandle = (e: any) => {
		setAnchorEl_Alt(e.currentTarget)
	}
	const altclosehandle = () => {
		setAnchorEl_Alt(null)
	}

	return <header style={{ width: '100%', backgroundColor: 'white', boxShadow: '0px 0px 20px #ddd' }}>
		<Grid2 container p='1rem 2rem'>
			<Grid2 size={6} container spacing={'0.5rem'} alignItems={'center'}>
				{/* <Icon icon="bx:search-alt" /> */}
				<BxSearchAlt style={{ fontSize: '1.5rem', color: '#677788' }} />
				<Typography color='#a8b1bb' fontWeight={'500'}>جستجو (/+Ctrl)</Typography>
			</Grid2>
			<Grid2 size={6} container justifyContent={'flex-end'} spacing={'0.7rem'} alignItems={'center'}>
				{/* <Button id='lan-button' aria-controls={openlang ? 'lan-menu' : undefined}
					aria-expanded={openlang ? 'true' : undefined}
					onClick={clickhandle}> */}
				{/* ba <EmojioneFlagForIran> kar kard va niyazi be button nist */}
				<EmojioneFlagForIran style={{ fontSize: '1.5rem' }} id='lan-button' aria-controls={openlang ? 'lan-menu' : undefined}
					aria-expanded={openlang ? 'true' : undefined}
					onClick={langclickhandle} />
				{/* </Button> */}
				<Menu id='lan-menu' anchorEl={anchorEl_lang} onClose={langclosehandle} open={openlang} sx={{ '.MuiMenu-paper': { width: '9rem', mt: '0.5rem', borderRadius: '5px' } }}>
					<MenuItem sx={{ gap: '7px' }}>
						<EmojioneFlagForIran style={{ fontSize: '1.5rem' }} />
						<Typography>فارسی</Typography>
					</MenuItem>
					<MenuItem sx={{ gap: '7px' }}>
						<EmojioneFlagForUsOutlyingIslands style={{ fontSize: '1.5rem' }} />
						<Typography>انگلیسی</Typography>
					</MenuItem>
					<MenuItem sx={{ gap: '7px' }}>
						<EmojioneFlagForFrance style={{ fontSize: '1.5rem' }} />
						<Typography>فرانسوی</Typography>
					</MenuItem>
					<MenuItem sx={{ gap: '7px' }}>
						<EmojioneFlagForGermany style={{ fontSize: '1.5rem' }} />
						<Typography>آلمانی</Typography>
					</MenuItem>
					<MenuItem sx={{ gap: '7px' }}>
						<EmojioneFlagForPortugal style={{ fontSize: '1.5rem' }} />
						<Typography>پرتغالی</Typography>
					</MenuItem>
				</Menu>
				<BxMoon style={{ fontSize: '1.5rem', color: '#677788' }} />
				<BxGridAlt style={{ fontSize: '1.5rem', color: '#677788' }} id='GridAlt-button' aria-controls={openalt ? 'lan-menu' : undefined}
					aria-expanded={openalt ? 'true' : undefined}
					onClick={altclickhandle} />
				<Menu id='GridAlt-menu' anchorEl={anchorEl_Alt} onClose={altclosehandle} open={openalt} sx={{ '& .MuiList-root': { py: '0' }, '.MuiMenu-paper': { width: '22rem', height: '30rem', mt: '0.5rem', borderRadius: '5px' } }}>
					<Grid2 container justifyContent={'space-between'} sx={{ p: '1rem' }}>
						<Typography>میانبرها</Typography>
						<BxPlusCircle style={{ fontSize: '1.5rem' }} />
					</Grid2>
					<Grid2 container sx={{ '& .MuiGrid2-root': { border: '1px solid black', borderColor: 'divider', marginLeft: '-1px' }, '& .MuiGrid2-root:nth-of-type(odd)': { borderRight: 'none' }, '& .MuiGrid2-root:nth-of-type(even)': { borderLeft: 'none' } }}>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxCalendar style={{ fontSize: '1.5rem' }} />
								<Typography>تقویم</Typography>
								<Typography>قرارهای ملاقات</Typography>
							</MenuItem>
						</Grid2>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxFoodMenu style={{ fontSize: '1.5rem' }} />
								<Typography>برنامه صورت حساب</Typography>
								<Typography>مدیریت حساب ها</Typography>
							</MenuItem>
						</Grid2>
					</Grid2>
					<Grid2 container sx={{ '& .MuiGrid2-root': { border: '1px solid black', borderColor: 'divider', marginLeft: '-1px' }, '& .MuiGrid2-root:nth-of-type(odd)': { borderRight: 'none' }, '& .MuiGrid2-root:nth-of-type(even)': { borderLeft: 'none' } }}>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxUser style={{ fontSize: '1.5rem' }} />
								<Typography>برنامه کاربر</Typography>
								<Typography>مدیریت کاربران</Typography>
							</MenuItem>
						</Grid2>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxCheckShield style={{ fontSize: '1.5rem' }} />
								<Typography>مدیریت نقش ها</Typography>
								<Typography>مجوزها</Typography>
							</MenuItem>
						</Grid2>
					</Grid2>
					<Grid2 container sx={{ '& .MuiGrid2-root': { border: '1px solid black', borderColor: 'divider', marginLeft: '-1px' }, '& .MuiGrid2-root:nth-of-type(odd)': { borderRight: 'none' }, '& .MuiGrid2-root:nth-of-type(even)': { borderLeft: 'none' } }}>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxPieChartAlt2 style={{ fontSize: '1.5rem' }} />
								<Typography>داشبورد</Typography>
								<Typography>پروفایل کاربر</Typography>
							</MenuItem>
						</Grid2>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxCog style={{ fontSize: '1.5rem' }} />
								<Typography>تنظیمات</Typography>
								<Typography>تنظیمات حساب</Typography>
							</MenuItem>
						</Grid2>
					</Grid2>
					<Grid2 container sx={{ '& .MuiGrid2-root': { border: '1px solid black', borderColor: 'divider', marginLeft: '-1px' }, '& .MuiGrid2-root:nth-of-type(odd)': { borderRight: 'none', borderBottom: 'none' }, '& .MuiGrid2-root:nth-of-type(even)': { borderLeft: 'none', borderBottom: 'none' } }}>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxHelpCircle style={{ fontSize: '1.5rem' }} />
								<Typography>مرکز راهنمایی</Typography>
								<Typography>سوالات متداول و مقالات</Typography>
							</MenuItem>
						</Grid2>
						<Grid2 size={6}>
							<MenuItem sx={{ height: '10rem', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}>
								<BxWindowOpen style={{ fontSize: '1.5rem' }} />
								<Typography>مودال ها</Typography>
								<Typography>پاپ های کاربردی</Typography>
							</MenuItem>
						</Grid2>
					</Grid2>
				</Menu>

				<Badge badgeContent={5} anchorOrigin={{ horizontal: 'left', vertical: 'top' }} sx={{ '& .MuiBadge-badge': { backgroundColor: '#ff5b5c', color: 'white' } }}>
					<BxBell style={{ fontSize: '1.5rem', color: '#677788' }} />
				</Badge>
				{/* <Badge color='success' variant='dot' anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} overlap='circular' sx={{'& .MuiBadge-badge': {border: '2px solid white'}}}> */}
				{/* <Badge color='success' variant='dot' anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} overlap='circular'> */}
				<StyleBadge variant='dot' anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} overlap='circular'>
					<Avatar src='/images/1.png' />
				</StyleBadge>
			</Grid2>
		</Grid2>
	</header>
}

export default Header