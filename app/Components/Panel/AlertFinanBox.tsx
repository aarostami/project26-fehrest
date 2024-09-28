import { Avatar, AvatarGroup, Box, Divider, Grid2, LinearProgress, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material"
import { BxChat, BxCheck, BxDotsVerticalRounded } from "./Icons/icons"
import { useState } from "react"
import ava1 from '../../images/2.png'
import ava3 from '../../images/3.png'
import ava4 from '../../images/4.png'
import ava5 from '../../images/5.png'
import ava6 from '../../images/6.png'
import ava7 from '../../images/7.png'

const AlertFinanBox = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	function handleBut(e: any) {
		setAnchorEl(e.currentTarget)
	}

	function handleClose() {
		setAnchorEl(null)
	}

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px',height: '100%' }}>
		<Box component={'div'} sx={{ p: '1.5rem' }}>
			<Grid2 container sx={{ justifyContent: 'space-between' }}>
				<Grid2 container sx={{ columnGap: '1rem' }}>
					{/* <Avatar src="/images/2.png" sx={{ width: '50px', height: '50px' }} /> */}
					<Avatar src={ava1.src} sx={{ width: '50px', height: '50px' }} />
					<Box>
						<Typography fontWeight={600} color="#516377">گزارش مالی برای امیلیا کلارک</Typography>
						<Typography color="#a8b1bb" variant="subtitle2" pt={'0.5rem'}>یک برنامه عالی برای مدیریت پروژه</Typography>
					</Box>
				</Grid2>
				<BxDotsVerticalRounded style={{ fontSize: '1.1rem' }} id='moreBut' aria-controls={open ? 'moreMenu' : undefined} aria-expanded={open ? 'true' : undefined} onClick={handleBut} />
				<Menu id="moreMenu" anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem>انتخاب همه</MenuItem>
					<MenuItem>تازه سازی</MenuItem>
					<MenuItem>اشتراک گذاری</MenuItem>
				</Menu>
			</Grid2>
			<Grid2 container py={'2rem'}>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow sx={{ '& th': { textAlign: 'right', borderBottom: 'none', fontWeight: 'bold' } }}>
								<TableCell>تاریخ شروع</TableCell>
								<TableCell>تاریخ پایان</TableCell>
								<TableCell>اعضا</TableCell>
								<TableCell>بودجه</TableCell>
								<TableCell>هزینه‌ها</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow sx={{ '& td': { textAlign: 'right', borderBottom: 'none', fontWeight: '500' } }}>
								<TableCell><span style={{ color: '#39da8a', backgroundColor: '#dff9ec', padding: '0.3rem', borderRadius: '3px', fontSize: '12px' }}>2 فروردین 1401</span></TableCell>
								<TableCell><span style={{ color: '#ff5b5c', backgroundColor: '#ffe5e5', padding: '0.3rem', borderRadius: '3px', fontSize: '12px' }}>6 اردیبهشت 1401</span></TableCell>
								<TableCell>
									<AvatarGroup max={5} sx={{ justifyContent: 'flex-end', '& .MuiAvatar-root:hover': { transition: '0.5s all', zIndex: '9', transform: 'translateY(-5px)', boxShadow: '0px 2px 3px #aaa' } }}>
										<Tooltip title='تونی استارک' placement="top" arrow>
											{/* <Avatar src="/images/3.png" style={{ marginLeft: 'var(--AvatarGroup-spacing, -8px)' }} /> */}
											<Avatar src={ava3.src} style={{ marginLeft: 'var(--AvatarGroup-spacing, -8px)' }} />
										</Tooltip>
										<Tooltip title='استیو راجرز' placement="top" arrow>
											{/* <Avatar src="/images/4.png" /> */}
											<Avatar src={ava4.src} />
										</Tooltip>
										<Tooltip title='بری الن' placement="top" arrow>
											{/* <Avatar src="/images/5.png" /> */}
											<Avatar src={ava5.src} />
										</Tooltip>
										<Tooltip title='دیوید بکام' placement="top" arrow>
											{/* <Avatar src="/images/6.png" /> */}											
											<Avatar src={ava6.src} />
										</Tooltip>
										<Tooltip title='جسیکا آلبا' placement="top" arrow>
											{/* <Avatar src="/images/7.png" /> */}											
											<Avatar src={ava7.src} />
										</Tooltip>
									</AvatarGroup>
								</TableCell>
								<TableCell>249 میلیارد تومان</TableCell>
								<TableCell>82k تومان</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid2>
			<Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem', pb: '5rem' }}>
				<Typography sx={{ color: '#555' }}>پیشرفت امیلیا کلارک</Typography>
				<LinearProgress variant="determinate" value={80} sx={{ transform: 'rotate(180deg)', backgroundColor: '#e9ecee', '& .MuiLinearProgress-barColorPrimary': { backgroundColor: "#5a8dee", borderRadius: '5px' }, height: '7px', borderRadius: '5px' }} />
				<Typography>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در</Typography>
			</Box>
		</Box>
		<Divider />
		<Grid2 container sx={{ columnGap: '1rem', p: '1.5rem' }}>
			<Grid2 container sx={{alignItems: 'center', columnGap: '0.3rem'}}>
				<BxCheck />
				<Typography>74 وظیفه</Typography>
			</Grid2>
			<Grid2 container sx={{alignItems: 'center', columnGap: '0.3rem'}}>
				<BxChat />
				<Typography>678 دیدگاه</Typography>
			</Grid2>
		</Grid2>
	</Box>
}

export default AlertFinanBox