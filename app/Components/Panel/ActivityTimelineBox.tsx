import { Box, Grid2, Menu, MenuItem, Step, StepLabel, Stepper, Typography, StepContent, Stack, AvatarGroup, Tooltip, Avatar, Grid } from "@mui/material";
import { BxCheck, BxDotsVerticalRounded } from "../Icons/icons";
import { useState } from "react";

const ActivityTimelineBox = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	function handleBut(e: any) {
		setAnchorEl(e.currentTarget)
	}

	function handleClose() {
		setAnchorEl(null)
	}

	return <Box sx={{ border: '1px solid #d4d8dd', borderRadius: '4px', p: '1.5rem',height: '100%' }}>
		<Grid2 container sx={{ justifyContent: 'space-between', pb: '1.5rem' }}>
			<Typography fontWeight={600} color="#516377">خط زمانی فعالیت</Typography>
			<BxDotsVerticalRounded style={{ fontSize: '1.1rem' }} id='moreBut' aria-controls={open ? 'moreMenu' : undefined} aria-expanded={open ? 'true' : undefined} onClick={handleBut} />
			<Menu id="moreMenu" anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem>انتخاب همه</MenuItem>
				<MenuItem>تازه سازی</MenuItem>
				<MenuItem>اشتراک گذاری</MenuItem>
			</Menu>
		</Grid2>
		<Stepper orientation="vertical" nonLinear={false} sx={{
			'& .MuiStepConnector-line': {
				maxHeight: '100%', borderLeftStyle: 'none', borderColor: '#bdbdbd', borderRightStyle: 'solid',
				borderRightWidth: '1px',
				marginRight: '19px',
			}
		}}>
			<Step key={1} active sx={{ '& .MuiSvgIcon-root': { color: '#5a8dee' } }}>
				<StepLabel sx={{ '& .MuiStepIcon-text': { display: 'none' }, p: '0' }}>{/*p: '0' baraye vasl shodan hast, mohem */}
					<Grid2 container sx={{ justifyContent: 'space-between' }}>
						<Typography align="right" sx={{/* pr: '8px' */ pr: '1rem', fontWeight: '500' }}>12 صورتحساب پرداخت شد</Typography>
						<Typography>12 دقیقه قبل</Typography>
					</Grid2>
				</StepLabel>
				<StepContent sx={{
					marginLeft: '0',
					borderLeft: 'none',
					marginRight: '19px',
					// paddingRight: '20px',
					paddingRight: '1.8rem',
					paddingLeft: '8px',
					borderRight: '1px solid #bdbdbd',
					pt: '1rem'
				}}>
					<Stack rowGap={1}>
						<Typography>صورتحساب ها به شرکت پرداخت شد</Typography>
						<Typography>invoices.pdf</Typography>
					</Stack>
				</StepContent>
			</Step>
			<Step key={2} active sx={{ '& .MuiSvgIcon-root': { color: '#fdac41' } }}>
				<StepLabel sx={{ '& .MuiStepIcon-text': { display: 'none' }, p: '0' }}>
					<Grid2 container sx={{ justifyContent: 'space-between' }}>
						<Typography align="right" sx={{ pr: '1rem', fontWeight: '500' }}>ملاقات با مشتری</Typography>
						<Typography>45 دقیقه قبل</Typography>
					</Grid2>
				</StepLabel>
				<StepContent sx={{
					marginLeft: '0',
					borderLeft: 'none',
					marginRight: '19px',
					paddingRight: '1.8rem',
					paddingLeft: '8px',
					borderRight: '1px solid #bdbdbd',
					pt: '1rem'
				}}>
					<Stack rowGap={2}>
						<Typography>ملاقات برای پروژه با استیو در 10:15 ق.ظ</Typography>
						<Grid2 container sx={{columnGap: '1rem', alignItems: 'center'}}>
							<Avatar src="/images/1.png" />
							<Box>
								<Typography>بیل گیتس (مشتری)</Typography>
								<Typography sx={{pt: '0.5rem'}}>بنیان‌گذار مایکروسافت</Typography>
							</Box>
						</Grid2>
					</Stack>
				</StepContent>
			</Step>
			<Step key={3} active sx={{ '& .MuiSvgIcon-root': { color: '#00cfdd' } }}>
				<StepLabel sx={{ '& .MuiStepIcon-text': { display: 'none' }, p: '0' }}>
					<Grid2 container sx={{ justifyContent: 'space-between' }}>
						<Typography align="right" sx={{ pr: '1rem', fontWeight: '500' }}>ایجاد یک پروژه جدید برای مشتری</Typography>
						<Typography>2 روز قبل</Typography>
					</Grid2>
				</StepLabel>
				<StepContent sx={{
					marginLeft: '0',
					borderLeft: 'none',
					marginRight: '19px',
					paddingRight: '1.8rem',
					paddingLeft: '8px',
					borderRight: '1px solid #bdbdbd',
					pt: '1rem'
				}}>
					<Stack rowGap={2}>
						<Typography>5 عضو تیم در یک پروژه</Typography>
						<AvatarGroup max={5} sx={{ justifyContent: 'flex-end', '& .MuiAvatar-root:hover': { transition: '0.5s all', zIndex: '9', transform: 'translateY(-5px)', boxShadow: '0px 2px 3px #aaa' } }}>
							<Tooltip title='تونی استارک' placement="top" arrow sx={{ width: '2rem', height: '2rem' }}>
								<Avatar src="/images/3.png" style={{ marginLeft: 'var(--AvatarGroup-spacing, -8px)' }} />
							</Tooltip>
							<Tooltip title='استیو راجرز' placement="top" arrow sx={{ width: '2rem', height: '2rem' }}>
								<Avatar src="/images/4.png" />
							</Tooltip>
							<Tooltip title='بری الن' placement="top" arrow sx={{ width: '2rem', height: '2rem' }}>
								<Avatar src="/images/5.png" />
							</Tooltip>
							<Tooltip title='دیوید بکام' placement="top" arrow sx={{ width: '2rem', height: '2rem' }}>
								<Avatar src="/images/6.png" />
							</Tooltip>
							<Tooltip title='جسیکا آلبا' placement="top" arrow sx={{ width: '2rem', height: '2rem' }}>
								<Avatar src="/images/7.png" />
							</Tooltip>
						</AvatarGroup>
					</Stack>
				</StepContent>
			</Step>
			<Step key={4}>
				<StepLabel icon={<BxCheck style={{backgroundColor: '#fff', color: '#888',border: '3px solid #bbb', width: '25px', height: '25px', borderRadius: '50%'}} />} sx={{ p: '0' }}></StepLabel>
			</Step>
			{/* agar 'key' ha dar <Step> yeksan bashe in error ro mide ke rahat peida nemishe:
			app-index.js:33 Warning: Encountered two children with the same key, `.$1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
   	 		at div
   	 		at eval (webpack-internal:///(app-pages-browser)/./node_modules/@emotion/react/dist/emotion-element-7a1343fa.browser.development.esm.js:70:66)
    		at Stepper (webpack-internal:///(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js:84:98)
    		at div
    		at eval (webpack-internal:///(app-pages-browser)/./node_modules/@emotion/react/dist/emotion-element-7a1343fa.browser.development.esm.js:70:66)
    		at Box (webpack-internal:///(app-pages-browser)/./node_modules/@mui/system/createBox/createBox.js:28:85)
    		at ActivityTimelineBox (webpack-internal:///(app-pages-browser)/./app/Components/Panel/ActivityTimelineBox.tsx:26:84)
			...
			 */}
		</Stepper>
	</Box>
}

export default ActivityTimelineBox