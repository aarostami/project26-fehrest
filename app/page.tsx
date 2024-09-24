'use client'	//ino nazarim dar estefade <ThemeProvider> error mide
import Image from "next/image";
import styles from "./page.module.css";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
import './style.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem, MenuList, Stack, Toolbar, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import { BxHomeCircle, BxLayout, BxEnvelopeOpen, BxChart, BxChat, BxCalendar, BxFoodMenu, BxGrid, BxUserCheck, BxCheckShield, BxUser, BxSpreadsheet, BxWindowOpen, BxCollection, BxBox, BxCopy, BxCrown, BxCarousel, BxListCheck, BxTable, BxMapAlt, BxSupport, BxFile, BxChevronLeft, BxDockTop, BxDetail } from './Components/Panel/Icons/icon'
import { PanelButton, PanelButtonIcon, PanelButtonList } from "./Components/Panel/PanelButton";

export default function Home() {
	const [open, setOpen] = useState(false)

	const theme = createTheme({
		typography: {
			// fontFamily: 'primary-font, segoe ui, tahoma'
			fontFamily: 'tahoma'
		},
	})

	var p1data = [{
		icon: <BxHomeCircle style={{ fontSize: '1.5rem' }} />,
		text: 'داشبوردها',
		active: true,
		nested: [{
			text: 'تجزیه و تحلیل',
		},
		{
			text: 'تجارت الکترونیک'
		}]
	}, {
		icon: <BxLayout style={{ fontSize: '1.5rem' }} />,
		text: 'طرح ها',
		nested: [{
			text: 'منوی جمع شده',
		},
		{
			text: 'نوار ناوبری محتوا'
		},
		{
			text: 'افقی'
		},
		{
			text: 'بدون منو'
		}]
	}]

	var p2data = [{
		icon: <BxEnvelopeOpen style={{ fontSize: '1.5rem' }} />,
		text: 'ایمیل'
	},
	{
		icon: <BxChat style={{ fontSize: '1.5rem' }} />,
		text: 'گفتگو'
	},
	{
		icon: <BxCalendar style={{ fontSize: '1.5rem' }} />,
		text: 'تقویم'
	},
	{
		icon: <BxGrid style={{ fontSize: '1.5rem' }} />,
		text: 'تخته وظایف'
	},
	{
		icon: <BxFoodMenu style={{ fontSize: '1.5rem' }} />,
		text: 'صورتحساب',
		nested: [{
			text: 'لیست',
		},
		{
			text: 'پیش نمایش'
		}]
	},
	{
		icon: <BxUser style={{ fontSize: '1.5rem' }} />,
		text: 'کاربران',
		nested: [{
			text: 'لیست',
		},
		{
			text: 'نمایش'
		}]
	},
	{
		icon: <BxCheckShield style={{ fontSize: '1.5rem' }} />,
		text: 'نقش ها و مجوزها'
	},
	{
		icon: <BxDockTop style={{ fontSize: '1.5rem' }} />,
		text: 'صفحات',
		nested: [{
			text: 'پروفایل کاربر',
		},
		{
			text: 'تنظیمات حساب'
		}]
	},
	{
		icon: <BxUserCheck style={{ fontSize: '1.5rem' }} />,
		text: 'احراز هویت',
		nested: [{
			text: 'ورود',
		},
		{
			text: 'ثبت نام'
		}]
	},
	{
		icon: <BxSpreadsheet style={{ fontSize: '1.5rem' }} />,
		text: 'نمونه های چند مرحله ای'
	},
	{
		icon: <BxWindowOpen style={{ fontSize: '1.5rem' }} />,
		text: 'نمونه های مدال'
	}]

	var p3data = [
		{
			icon: <BxCollection style={{ fontSize: '1.5rem' }} />,
			text: 'کارت ها',
			nested: [{
				text: 'پایه',
			},
			{
				text: 'پیشرفته'
			}]
		},
		{
			icon: <BxBox style={{ fontSize: '1.5rem' }} />,
			text: 'رابط کاربری',
			nested: [{
				text: 'باز و بسته شونده',
			}]
		},
		{
			icon: <BxCopy style={{ fontSize: '1.5rem' }} />,
			text: 'رابط کاربری توسعه یافته'
		},
		{
			icon: <BxCrown style={{ fontSize: '1.5rem' }} />,
			text: 'آیکون ها'
		}]

	var p4data = [{
		icon: <BxDetail style={{ fontSize: '1.5rem' }} />,
		text: 'المان های فرم'
	},
	{
		icon: <BxDetail style={{ fontSize: '1.5rem' }} />,
		text: 'طرح های فرم'
	},
	{
		icon: <BxCarousel style={{ fontSize: '1.5rem' }} />,
		text: 'فرم مرحله ای',
		nested: [{
			text: 'شماره دار',
		}]
	},
	{
		icon: <BxListCheck style={{ fontSize: '1.5rem' }} />,
		text: 'اعتبارسنجی فرم'
	},
	{
		icon: <BxTable style={{ fontSize: '1.5rem' }} />,
		text: 'جدول ها'
	},
	{
		icon: <BxGrid style={{ fontSize: '1.5rem' }} />,
		text: 'جدول های داده'
	}]

	var p5data = [{
		icon: <BxChart style={{ fontSize: '1.5rem' }} />,
		text: 'نمودارها',
		nested: [{
			text: 'نمودارهای Apex',
		},
		{
			text: 'نمودارهای Chartjs'
		}]
	},
	{
		icon: <BxMapAlt style={{ fontSize: '1.5rem' }} />,
		text: 'نقشه های Leaflet'
	}]

	var p6data = [{
		icon: <BxSupport style={{ fontSize: '1.5rem' }} />,
		text: 'پشتبانی'
	},
	{
		icon: <BxFile style={{ fontSize: '1.5rem' }} />,
		text: 'مستندات'
	}]
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	// onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}

	return (<>
		<ThemeProvider theme={theme}>

			{/* <Box sx={{ display: 'flex' }}>baraye fix kardane oftadane drawer rooye mohtava */}
				{/* <Drawer anchor="right" variant="permanent" open={open} sx={{ width: open == true ? '15rem' : '6rem', '& .MuiDrawer-paper': { width: open == true ? '15rem' : '6rem', p: '0.5rem' } }} onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}> */}
				<Drawer anchor="right" variant="permanent" open={open} sx={{ width: open == true ? '17rem' : '5.5rem',transition: '0.5s all', '& .MuiDrawer-paper': { width: open == true ? '17rem' : '5.5rem', transition: '0.5s all',zIndex: '99' }, '*::-webkit-scrollbar': {width: '8px'}, '*::-webkit-scrollbar-track': {backgroundColor: '#efefef'}, '*::-webkit-scrollbar-thumb': {backgroundColor: '#dadada', borderRadius: '6px'}  }} onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
					<img src="/images/logo.png" style={{ width: '50px', height: '50px', marginRight: '16px' }} />
					{/* <MenuList sx={{ display: open == true ? 'none' : 'block' }}> */}
					{/* <MenuList sx={{ display: open == true ? 'none' : 'block' }}>
					<Stack spacing={1}>
						<PanelButtonIcon data={p1data} />
						<PanelButtonIcon data={p2data} />
						<PanelButtonIcon data={p3data} />
						<PanelButtonIcon data={p4data} />
						<PanelButtonIcon data={p5data} />
						<PanelButtonIcon data={p6data} />
					</Stack>
				</MenuList> */}
					{/* <MenuList sx={{ display: open == true ? 'block' : 'none' }}> */}
					{/* <MenuList sx={{ display: open == true ? 'block' : 'none' }}>
					<PanelButton data={p1data} />
					<Typography color="#a8b1bb">برنامه ها و صفحات</Typography>
					<PanelButton data={p2data} />
					<Typography color="#a8b1bb">اجزاء</Typography>
					<PanelButton data={p3data} />
					<Typography color="#a8b1bb">فرم ها و جدول ها</Typography>
					<PanelButton data={p4data} />
					<Typography color="#a8b1bb">نمودارها و نقشه ها</Typography>
					<PanelButton data={p5data} />
					<Typography color="#a8b1bb">متفرقه</Typography>
					<PanelButton data={p6data} />
				</MenuList> */}
					<List>
						<PanelButtonList data={p1data} panel={open} />
						{open == true ? <Typography color="#a8b1bb" sx={{ pr: '1rem', pt: '0.5rem' }}>برنامه ها و صفحات</Typography> : <Divider variant="middle" sx={{ borderWidth: '2px', mt: '1.75rem' }} />}
						<PanelButtonList data={p2data} panel={open} />
						{open == true ? <Typography color="#a8b1bb" sx={{ pr: '1rem', pt: '0.5rem' }}>اجزاء</Typography> : <Divider variant="middle" sx={{ borderWidth: '2px', mt: '1.75rem' }} />}
						<PanelButtonList data={p3data} panel={open} />
						{open == true ? <Typography color="#a8b1bb" sx={{ pr: '1rem', pt: '0.5rem' }}>فرم ها و جدول ها</Typography> : <Divider variant="middle" sx={{ borderWidth: '2px', mt: '1.75rem' }} />}
						<PanelButtonList data={p4data} panel={open} />
						{open == true ? <Typography color="#a8b1bb" sx={{ pr: '1rem', pt: '0.5rem' }}>نمودارها و نقشه ها</Typography> : <Divider variant="middle" sx={{ borderWidth: '2px', mt: '1.75rem' }} />}
						<PanelButtonList data={p5data} panel={open} />
						{open == true ? <Typography color="#a8b1bb" sx={{ pr: '1rem', pt: '0.5rem' }}>متفرقه</Typography> : <Divider variant="middle" sx={{ borderWidth: '2px', mt: '1.75rem' }} />}
						<PanelButtonList data={p6data} panel={open} />
					</List>
				</Drawer>
				<Box sx={{pr: '5.5rem', '*::-webkit-scrollbar': {width: '8px'}, '*::-webkit-scrollbar-track': {backgroundColor: '#efefef'}, '*::-webkit-scrollbar-thumb': {backgroundColor: '#dadada', borderRadius: '6px'}}}>{/*baraye fix kardane oftadane drawer rooye mohtava */}
					<Header />
					{/* <Suspense fallback={<h2>loading ...</h2>}> */}
					<Main />
					{/* </Suspense> */}
					<Footer />
				</Box>
			{/* </Box> */}
		</ThemeProvider >
	</>
	);
}
